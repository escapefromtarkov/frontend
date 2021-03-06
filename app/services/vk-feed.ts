import { appProvider } from './app'
import { Injectable, Component, ComponentResolver, ComponentFactory, ComponentRef } from '@angular/core'

@Component({
    selector: 'vk-feed-widget',
    template: `<div id="vk_feed_{{ID}}"></div>`
})

class VkFeedWidget {
    public ID :number|string;
}

declare var VK :any;

@Injectable()
export class VkFeedService {
    private widgets = {};

    constructor(private componentResolver :ComponentResolver) { }

    private makeWidget (params :{ id :number|string, options ?:any}, key: string) {
        return this
            .componentResolver
            .resolveComponent(VkFeedWidget)
            .then((factory :ComponentFactory<any>) => appProvider.app.instance.viewRef.createComponent(factory))
            .then((componentRef :ComponentRef<VkFeedWidget>) => {
                componentRef.instance['ID'] = params.id;
                return componentRef;
            })
            .then((componentRef :ComponentRef<VkFeedWidget>) => {
                let createWidget = () => {
                    VK.Widgets.Group(`vk_feed_${params.id}`, params.options, params.id);
                    return this.widgets[key] = componentRef;
                };

                let fails = 10;

                return new Promise((resolve, reject) => {
                    let wait, create;
                    wait = () => {
                        if (!--fails) {
                            return reject();
                        }
                        setTimeout(() => {
                            create();
                        }, 1000);
                    };
                    create = () => {
                        if (typeof VK === 'undefined') {
                            return wait();
                        }
                        return resolve(createWidget());
                    };
                    create();
                });
            });
    }

    widget(params) {
        let key = JSON.stringify(params.id);
        let widget;
        if (widget = this.widgets[key]) {
            return new Promise(resolve => resolve(widget));
        }

        return this.makeWidget(params, key);
    }
}
