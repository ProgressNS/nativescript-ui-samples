
import * as viewModel from '../pts-view-model';

export function onPageLoaded(args) {
    const page = args.object;

    page.bindingContext = new viewModel.ViewModel();
}
