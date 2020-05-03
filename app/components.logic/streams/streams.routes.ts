import { RouterConfig } from '@angular/router'
import { Streams } from './streams'
import { Twitch } from './twitch'
/*import { Youtube } from './youtube'*/

export const streamsRoutes: RouterConfig = [
    {
        path: 'streams',
        component: Streams,
        children: [
            /*{ path: 'youtube', component: Youtube },*/
            { path: 'twitch', component: Twitch }
        ]
    },
    {
        path: '',
        redirectTo: 'streams/twitch',
        pathMatch: 'full'
    }
];


