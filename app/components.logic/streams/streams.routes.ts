import { RouterConfig } from '@angular/router'
import { Streams } from './streams'
import { Youtube } from './youtube'
import { Twitch } from './twitch'

export const streamsRoutes: RouterConfig = [
    {
        path: 'streams',
        component: Streams,
        children: [
            { path: 'youtube', component: Youtube },
            { path: 'twitch', component: Twitch }
        ]
    },
    {
        path: '',
        redirectTo: 'streams/youtube',
        pathMatch: 'full'
    }
];


