import { Component, AfterViewInit, ViewChildren, QueryList, Input, ViewContainerRef } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { Widget, WidgetStyle } from '../widget/widget'

@Component({
    selector: 'twitter',
    template: ``,
    inputs: ['id', 'user', 'width', 'height', 'color', 'theme'],
    pipes: [I18NPipe],
    styles: [WidgetStyle],
    host: {
        '[style.width]': 'width + "px"',
        '[style.height]': 'height + "px"',
    }
})

export class Twitter extends Widget implements AfterViewInit {
    private target :any;

    @Input() user :string;
    @Input() color :string;
    @Input() theme :string;

    constructor(private view :ViewContainerRef) {
        super();
    }

    tries = 5;
    loader :any;

    tryToLoadScript() {
        if (window['twttr']) {
            return this.load();
        }

        if (--this.tries) {
            this.loader = setTimeout(() => {
                this.tryToLoadScript();
            }, 500);
        }
    }

    load() {
        this.target = this.view.element.nativeElement;

        window['twttr'].widgets
            .createTimeline({
                    sourceType: 'profile',
                    screenName: this.user
                },
                this.target,
                {
                    width: this.width,
                    height: this.height,
                    theme: this.theme,
                    linkColor: this.color
                });
    }

    ngOnDestroy() {
        clearTimeout(this.loader);
    }

    ngAfterViewInit() {
        this.tryToLoadScript();
    }
}
export default Twitter
