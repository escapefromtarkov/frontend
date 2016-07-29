import { Component } from '@angular/core'
import { StreamsFormats, StreamsFormatsService } from './streams__formats'
import { ROUTER_DIRECTIVES } from '@angular/router'
import { Home } from '../home/home'

@Component({
    selector: 'streams',
    directives: [StreamsFormats, Home, ROUTER_DIRECTIVES],
    providers: [StreamsFormatsService],
    styles: [require('../../components.common/sub-nav/sub-nav.styl')],
    template: require('./streams.html')
})

export class Streams {}


