import { Component } from '@angular/core'

@Component({
    selector: '[vk-group]',
    template: `Vkontakte/tarkov_pro`,
    styles: [require('./vk-group.styl')],
    host: {
        href: 'https://vk.com/tarkov_pro',
        target: '_blank',
        rel: 'nofollow'
    }
})

export class VkGroup {}
export default VkGroup
