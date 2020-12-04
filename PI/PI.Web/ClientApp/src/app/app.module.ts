import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StronaGlownaComponent } from './strona-glowna/strona-glowna.component';
import { GeneratorComponent } from './generator/generator.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { MatDividerModule, MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule, MatButtonModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule, StyleUtils, StylesheetMap, LayoutStyleBuilder, MediaMarshaller, LayoutAlignStyleBuilder, LayoutGapStyleBuilder, FlexStyleBuilder } from '@angular/flex-layout';
import { ɵMatchMedia, BreakPointRegistry, PrintHook } from '@angular/flex-layout/core';
import { KierowcyComponent } from './kierowcy/kierowcy.component';
import { LogistycyComponent } from './logistycy/logistycy.component';


@NgModule({
  declarations: [
    AppComponent,
    //NavMenuComponent,
    StronaGlownaComponent,
    GeneratorComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    KierowcyComponent,
    LogistycyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: StronaGlownaComponent },
      { path: 'generator', component: GeneratorComponent },
      { path: 'kierowcy', component: KierowcyComponent }, { path: 'logistycy', component: LogistycyComponent },
    ]),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    PrintHook,
    StyleUtils,
    StyleSheet,
    StylesheetMap,
    LayoutAlignStyleBuilder,
    LayoutStyleBuilder,
    LayoutGapStyleBuilder,
    FlexStyleBuilder,
    MediaMarshaller,
    ɵMatchMedia,
    BreakPointRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
