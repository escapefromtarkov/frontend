import { Component } from '@angular/core'

@Component({
    selector: '[telegram-channel]',
    template: `Telegram/@tarkov_pro`,
    styles: [require('./telegram-channel.styl')],
    host: {
        href: 'https://telegram.me/tarkov_pro',
        target: '_blank',
        rel: 'nofollow'
    }
})

export class TelegramChannel {}
export default TelegramChannel
