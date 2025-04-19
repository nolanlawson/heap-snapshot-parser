import type * as Common from '../../core/common/common.js';
import * as UI from '../../ui/legacy/legacy.js';
class ConsolePanel extends UI.Panel.Panel {
    private readonly view;
    constructor();
    static instance(opts?: {
        forceNew: boolean | null;
    }): ConsolePanel;
    static updateContextFlavor(): void;
    wasShown(): void;
    willHide(): void;
    searchableView(): UI.SearchableView.SearchableView | null;
}
class WrapperView extends UI.Widget.VBox {
    private readonly view;
    private constructor();
    static instance(): WrapperView;
    wasShown(): void;
    willHide(): void;
    showViewInWrapper(): void;
}
class ConsoleRevealer implements Common.Revealer.Revealer<Common.Console.Console> {
    reveal(_object: Common.Console.Console): Promise<void>;
}
