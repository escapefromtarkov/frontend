import { provideRouter, RouterConfig } from '@angular/router';
import { Error404 } from '../errors/404'
import { streamsRoutes } from '../streams/streams.routes'

const routes: RouterConfig = [
    ...streamsRoutes,
    {
        path: '',
        redirectTo: '/streams',
        pathMatch: 'full'
    },
    { path: '**', component: Error404 }
];

export const appRouterProviders = [
    provideRouter(routes)
];
