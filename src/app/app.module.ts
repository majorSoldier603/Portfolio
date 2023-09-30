import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ArrowScrollComponent } from './arrow-scroll/arrow-scroll.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { ArrowPointerComponent } from './arrow-pointer/arrow-pointer.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HeroComponent,
  		AboutMeComponent,
	 MySkillsComponent,
	 ArrowScrollComponent,
	 ProjectListComponent,
	 ProjectPreviewComponent,
  ContactComponent,
  ArrowPointerComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
