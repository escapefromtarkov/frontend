import { Component } from '@angular/core'
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, AsyncRoute } from '@angular/router-deprecated'
import I18NPipe from '../../pipes/i18n'

@Component({
    selector: 'info',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    pipes: [I18NPipe],
    styles: [require('../../components.common/sub-nav/sub-nav.styl')],
    template: `<nav>
      <a [routerLink]="['./About']" class="nav-link">{{'about.title' | i18n}}</a>
    </nav>
    <router-outlet></router-outlet>`,
})

@RouteConfig([
    new AsyncRoute({ path: '/about', loader: () => require('es6-promise!./about')('About'), name: 'About', useAsDefault: true }),
])

export class Info {
}
