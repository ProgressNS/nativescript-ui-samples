
import * as viewModel from './observable-array-model';

export function onPageLoaded(args) {
    const page = args.object;

    page.bindingContext = new viewModel.ViewModel();
}
