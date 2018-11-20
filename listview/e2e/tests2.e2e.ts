import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";
import { expect } from "chai";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { navigateBackToHome, scrollToElement, navigateBackToView } from "./helper";

const isSauceRun = isSauceLab;
const isAndroid: boolean = runType.includes("android");

describe("ListView2", () => {
    let driver: AppiumDriver;

    before(async () => {
        driver = await createDriver();
        driver.defaultWaitTime = 15000;
    });

    after(async () => {
        if (isSauceRun) {
            driver.sessionId().then(function (sessionId) {
                console.log("Report https://saucelabs.com/beta/tests/" + sessionId);
            });
        }
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logScreenshot(this.currentTest.title);
        }
    });

    const itemReorderText = "Item Reorder";
    describe(itemReorderText, () => {
        it("Navigate to item reorder example", async () => {
            await navigateBackToHome(driver);
            await scrollToElement(driver, itemReorderText);
            const itemReorder = await driver.findElementByText(itemReorderText, SearchOptions.exact);
            await itemReorder.click();
            const listItem = await driver.findElementByText("Gwen Peters", SearchOptions.exact);
            expect(listItem).to.exist;
        });

        it("Reorder items and verify listview", async () => {
            let listView;
            let value;
            const listItem = await driver.findElementByText("Gwen Peters", SearchOptions.exact);
            expect(listItem).to.exist;
            // await listItem.drag(Direction.down, 600, 0);
            if (isAndroid) {
                const wd = driver.wd();
                const action = new wd.TouchAction(driver.driver);
                action.longPress({ x: 200, y: 200 })
                    .wait(2000)
                    .moveTo({ x: 200, y: 400 })
                    .release();
                await action.perform();
                listView = await driver.findElementsByClassName("android.widget.TextView");
                value = await listView[1].text();
                expect(value).to.equal("George Cook");
            }
            else {
                await driver.driver.execute('mobile: dragFromToForDuration', {
                    duration: 2.0,
                    fromX: 100,
                    fromY: 105,
                    toX: 100,
                    toY: 242
                });
                listView = await driver.findElementsByClassName("XCUIElementTypeStaticText");
                value = await listView[1].getAttribute("value");
                let element = await driver.findElementByText("George Cook");
                expect(element).to.exist;
                // TODO: Add assertion for listview items
            }

        });
    });

    const itemReorderWithHandleText = "Item Reorder with handle";
    describe(itemReorderWithHandleText, () => {
        it("Navigate to reorder with Handle example", async () => {
            await navigateBackToHome(driver);
            await scrollToElement(driver, itemReorderWithHandleText);
            const itemReorder = await driver.findElementByText(itemReorderWithHandleText, SearchOptions.exact);
            await itemReorder.click();
            const listItem = await driver.findElementByText("Gwen Peters", SearchOptions.exact);
            expect(listItem).to.exist;
        });

        it("Reorder items and verify listview", async () => {
            let listView;
            if (isAndroid) {
                const iconsList = await driver.findElementsByClassName("android.widget.ImageView");
                const rectangle = await iconsList[0].getRectangle();
                const centerX = rectangle.x + rectangle.width / 2;
                const centerY = rectangle.y + rectangle.height / 2;
                const wd = driver.wd();
                const action = new wd.TouchAction(driver.driver);
                action.press({ x: centerX, y: centerY })
                    .wait(100)
                    .moveTo({ x: centerX, y: centerY + 200 })
                    .release();
                await action.perform();
                listView = await driver.findElementsByClassName("android.widget.TextView");
                const value = await listView[2].text();
                expect(value).to.equal("George Cook");
            }
            else {
                await driver.driver.execute('mobile: dragFromToForDuration', {
                    duration: 2.0,
                    fromX: 337,
                    fromY: 140,
                    toX: 337,
                    toY: 340
                });
                listView = await driver.findElementsByClassName("XCUIElementTypeStaticText");
                // value = await listView[2].text();
                let element = await driver.findElementByText("George Cook");
                expect(element).to.exist;

            }
        });
    });

    const selectionText = "Selection";
    describe(selectionText, () => {
        describe("Single selection", () => {
            it("Navigate to Single selection example", async () => {
                await navigateBackToHome(driver);
                await scrollToElement(driver, selectionText);
                const selection = await driver.findElementByText(selectionText, SearchOptions.exact);
                await selection.click();
                await driver.wait(1000);
                const singleSelection = await driver.findElementByText("Single Selection", SearchOptions.exact);
                await singleSelection.click();
                const item = await driver.findElementByText("Gwen Peters", SearchOptions.exact);
                expect(item).to.exist;
            });
            it("Select an item and verify its style", async () => {
                let item = await driver.findElementByText("Gwen Peters", SearchOptions.exact);
                await item.click();
                let selectedItem = await driver.findElementByTextIfExists("Selected items: Gwen Peters", SearchOptions.exact);
                expect(selectedItem).to.exist;
                item = await driver.findElementByText("George Cook", SearchOptions.exact);
                await item.click();
                selectedItem = await driver.findElementByTextIfExists("Selected items: George Cook", SearchOptions.exact);
                expect(selectedItem).to.exist;
            });
        });

        const multipleSelectionText = "Multiple Selection";
        describe(multipleSelectionText, () => {
            it("Navigate to Multiple selection example", async () => {
                await navigateBackToView(driver, selectionText);
                const multipleSelection = await driver.findElementByText(multipleSelectionText, SearchOptions.exact);
                await multipleSelection.click();
                const item = await driver.findElementByText("Gwen Peters", SearchOptions.exact);
                expect(item).to.exist;
            });
            it("Select an item and verify it is marked as selected", async () => {
                const item = await driver.findElementByText("Gwen Peters", SearchOptions.exact);
                await item.click();
                const locator = isAndroid ? "android.view.ViewGroup" : "XCUIElementTypeCell";
                const items = await driver.findElementsByClassName(locator);
                const selected = isAndroid ? items[3] : items[0];
                expect(selected).to.exist;
                const selection = await driver.compareElement(selected, "selectedItem");
                expect(selection).to.equal(true);
            });
        });

        const programmaticSeletionText = "Programmatic Selection";
        describe(programmaticSeletionText, () => {
            it("Navigate to Programmatic selection example", async () => {
                await navigateBackToView(driver, selectionText);
                const progSelection = await driver.findElementByText(programmaticSeletionText, SearchOptions.exact);
                await progSelection.click();
                const label = await driver.findElementByText("Select item at:", SearchOptions.exact);
                expect(label).to.exist;
            });
            it("Select an item and verify its style", async () => {
                const selectAll = await driver.findElementByText("Select all", SearchOptions.exact);
                await selectAll.click();
                const locator = isAndroid ? "android.view.ViewGroup" : "XCUIElementTypeCell";
                const items = await driver.findElementsByClassName(locator);
                const selected = isAndroid ? items[8] : items[0];
                expect(selected).to.exist;
                const selection = await driver.compareElement(selected, "programmaticSelectedItem");
                expect(selection).to.equal(true);
            });
        });

        const selectionStatesText = "Selection states";
        describe(selectionStatesText, () => {
            it("Navigate to selection states example", async () => {
                await navigateBackToView(driver, selectionText);
                const listItem = await scrollToElement(driver, selectionStatesText);
                expect(listItem).to.exist;
                await listItem.click();

                const item0 = await driver.findElementByText("Item 0", SearchOptions.exact);
                expect(item0).to.exist;
            });

            it("Select item and verify it is marked as selected", async () => {
                const item0 = await driver.findElementByText("Item 0", SearchOptions.exact);
                await item0.click();
                const locator = isAndroid ? "android.view.ViewGroup" : "XCUIElementTypeCell";
                const items = await driver.findElementsByClassName(locator);
                const selected = isAndroid ? items[4] : items[0];
                expect(selected).to.exist;
                const selection = await driver.compareElement(selected, "selectedState");
                expect(selection).to.equal(true);
            });
        });

    });
});