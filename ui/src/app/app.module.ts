import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {LogoComponent} from './layout/logo/logo.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServersInfoComponent} from './content-elements/servers-info/servers-info.component';
import {ServersSearchComponent} from './content-elements/servers-search/servers-search.component';
import {ServersTableComponent} from './content-elements/servers-table/servers-table.component';
import {HttpErrorInterceptor} from '../shared/interceptors/http-error.interceptor';
import {ServersActionsTooltipComponent} from './content-elements/servers-actions-tooltip/servers-actions-tooltip.component';
import {OutsideClickDirective} from '../shared/directives/clickOutside.directive';
import {SearchPipe} from '../shared/pipes/search.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    ServersInfoComponent,
    ServersSearchComponent,
    ServersTableComponent,
    ServersActionsTooltipComponent,
    OutsideClickDirective,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
