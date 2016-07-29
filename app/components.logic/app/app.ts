import { Component, ViewEncapsulation, Inject, ViewContainerRef } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Footer } from '../../components.common/footer/footer'
import I18NPipe from '../../pipes/i18n'

@Component({
    selector: 'tarkov-pro',
    directives: [
        ROUTER_DIRECTIVES,
        Footer
    ],
    pipes: [I18NPipe],
    styles: [require('./app.styl')],
    encapsulation: ViewEncapsulation.None,
    template: require('./app.html')
})

export class App {
    constructor (@Inject('CONFIG') private config, public viewRef: ViewContainerRef) {}
}
