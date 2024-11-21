import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SocialiconsComponent } from './socialicons/socialicons.component';
import { OnScrollArrowComponent } from './on-scroll-arrow/on-scroll-arrow.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReferencesComponent } from "./references/references.component";
import { ReferenceBoxComponent } from './reference-box/reference-box.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        HeroComponent,
        AboutMeComponent,
        MySkillsComponent,
        ProjectListComponent,
        ProjectPreviewComponent,
        FooterComponent,
        SocialiconsComponent,
        OnScrollArrowComponent,
        ReferencesComponent,
        ReferenceBoxComponent
    ],
    bootstrap: [AppComponent], imports: [
    BrowserModule,
    ContactComponent,
    AppRoutingModule,
    FormsModule, 
    ContactComponent,
], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
