import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
//import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StronaGlownaComponent } from './strona-glowna/strona-glowna.component';
import { GeneratorComponent } from './generator/generator.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { MatDividerModule, MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule, MatButtonModule, MatCardModule, MatInputModule, MatTableModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatStepperModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FlexLayoutModule, StyleUtils, StylesheetMap, LayoutStyleBuilder, MediaMarshaller, LayoutAlignStyleBuilder, LayoutGapStyleBuilder, FlexStyleBuilder } from '@angular/flex-layout';
import { ɵMatchMedia, BreakPointRegistry, PrintHook } from '@angular/flex-layout/core';
import { KierowcyComponent } from './kierowcy/kierowcy.component';
import { LogistycyComponent } from './logistycy/logistycy.component';
import { ProfilComponent } from './profil/profil.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { GeneratorContainerComponent } from './generator-container/generator-container.component';
import { KierowcyGeneratorComponent } from './kierowcy-generator/kierowcy-generator.component';
import { MojeTrasyComponent } from './moje-trasy/moje-trasy.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './shared/user.service';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    //NavMenuComponent,
    StronaGlownaComponent,
    GeneratorComponent,
    HeaderComponent,
    SidebarComponent,
    KierowcyComponent,
    LogistycyComponent,
    ProfilComponent,
    GeneratorContainerComponent,
    KierowcyGeneratorComponent,
    MojeTrasyComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatStepperModule,
    HttpClientModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    NgxMatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      { path: '', component: StronaGlownaComponent },
      { path: 'generator', component: GeneratorContainerComponent },
      { path: 'kierowcy', component: KierowcyComponent },
      { path: 'logistycy', component: LogistycyComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'mojeTrasy', component: MojeTrasyComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,//AIzaSyDPbBeyVPKFlbQ5ubei7A6Q1o_Q02KQUYs
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    FlexLayoutModule,
    AgmDirectionModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPGqbW8VP99sTovydmWmMNtpRjb6a977g'
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPbBeyVPKFlbQ5ubei7A6Q1o_Q02KQUYs',
      libraries: ["places"]
    })
  ],
  providers: [
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
    BreakPointRegistry,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
