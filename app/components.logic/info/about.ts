import { Component } from '@angular/core'
import TitleService from '../../services/title'
import { i18n } from '../../services/i18n'
import { I18NPipe } from '../../pipes/i18n'
import { DateTimePipe } from '../../pipes/datetime'
import { TelegramChannel } from '../../components.common/telegram-channel/telegram-channel'
import { VkGroup } from '../../components.common/vk-group/vk-group'
import { Thanks } from './thanks'

@Component({
    selector: 'about',
    pipes: [I18NPipe, DateTimePipe],
    directives: [TelegramChannel, VkGroup, Thanks],
    template: require('./about.html'),
    styles: [require('./about.styl')]
})

export class About {
    constructor(private _title :TitleService) {
        this._title.setTitle(i18n.get('about.docTitle'));
        this._title.setDescription(i18n.get('about.docDescription'));
    }
}
