import { enableProdMode, APP_ID, ComponentRef } from '@angular/core';
import { Title as TitleProvider, enableDebugTools } from '@angular/platform-browser'
import { bootstrap } from '@angular/platform-browser-dynamic'
import { HTTP_PROVIDERS } from '@angular/http'
import { APP_BASE_HREF } from '@angular/common'
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { App } from './components.logic/app/app'
import { appRouterProviders } from './components.logic/app/app.routes'
import { TrackService } from './services/track'
import { DirectService } from './services/direct'
import { TitleService } from './services/title'
import { VkFeedService } from './services/vk-feed'
import { I18N, i18n } from './services/i18n'
import { appProvider } from './services/app'

import CONFIG from './config'
import { ngOnLoad } from './async'

if (CONFIG.production) {
    enableProdMode();
}

export var app: ComponentRef<App>;

bootstrap(App,
    [
        { provide: APP_ID, useValue: 'tarkov-pro' },
        { provide: 'window', useValue: window },
        { provide: I18N, useValue: i18n },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: 'CONFIG', useValue: CONFIG },
        HTTP_PROVIDERS,
        disableDeprecatedForms(),
        provideForms(),
        TitleProvider,
        TrackService,
        DirectService,
        TitleService,
        VkFeedService,
        appRouterProviders
    ])
    .then((appRef :ComponentRef<any>) => {
        appProvider.app = appRef;

        if (!CONFIG.production) {
            CONFIG.enableDebugTools && enableDebugTools(appRef);
        }

        setTimeout(() => ngOnLoad(window, document), 100);
    })
    .catch(err => console.error(err));

// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
// Also see custom_typings.d.ts as you also need to do `typings install x` where `x` is your module
