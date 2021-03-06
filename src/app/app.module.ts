import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AppRoutes} from './app.routing';
import {SidebarModule} from './sidebar/sidebar.module';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';
import {FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import {NguiMapModule} from '@ngui/map';

import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user.component';
import {TableComponent} from './table/table.component';
import {TypographyComponent} from './typography/typography.component';
import {IconsComponent} from './icons/icons.component';
import {MapsComponent} from './maps/maps.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {UpgradeComponent} from './upgrade/upgrade.component';

// Statemanagement
import { StoreModule } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import {reducers} from '../app/statemanagement/reducers';

import { LookupComponent } from './dictionary/lookup/lookup.component';

@NgModule({
  declarations: [
    AppComponent,
    LookupComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,

    UpgradeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    StoreModule.forRoot(reducers),
    SidebarModule,
    NavbarModule,
    FooterModule,
    NguiMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
