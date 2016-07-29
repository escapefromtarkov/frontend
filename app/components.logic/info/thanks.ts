import { Component } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { DateTimePipe } from '../../pipes/datetime'

@Component({
    selector: 'thanks',
    pipes: [I18NPipe, DateTimePipe],
    directives: [],
    template: require('./thanks.html'),
    styles: [require('./thanks.styl')]
})

export class Thanks {
    constructor() {}
}
