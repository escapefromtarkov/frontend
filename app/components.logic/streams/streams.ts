import { Component } from '@angular/core'
import { StreamsFormats, StreamsFormatsService } from './streams__formats'
import { ROUTER_DIRECTIVES } from '@angular/router'
import { Home } from '../home/home'
import { Countdown } from '../../components.common/countdown/countdown'
import { I18NPipe } from '../../pipes/i18n'

@Component({
    selector: 'streams',
    directives: [StreamsFormats, Home, ROUTER_DIRECTIVES, Countdown],
    providers: [StreamsFormatsService],
    styles: [require('../../components.common/sub-nav/sub-nav.styl'), require('./streams.styl')],
    pipes: [I18NPipe],
    template: require('./streams.html')
})

export class Streams {}


