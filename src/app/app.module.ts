import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './main-content/components/contact/contact.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ImpressumComponent } from "./imprint/components/impressum/impressum.component";
import { FooterComponent } from './shared/components/footer/footer.component';
import { MainContentComponent } from "./main-content/main-content.component";

@NgModule({ declarations: [
        AppComponent,
        ImpressumComponent
    ],
    bootstrap: [AppComponent], imports: [
    BrowserModule,
    ContactComponent,
    AppRoutingModule,
    MainContentComponent,
    FormsModule,
    FooterComponent,
    ContactComponent,
    HeaderComponent,
    MainContentComponent
], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
