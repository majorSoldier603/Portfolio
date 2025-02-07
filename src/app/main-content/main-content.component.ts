import {Component, ElementRef, HostBinding, HostListener, QueryList, ViewChildren} from '@angular/core';
import {HeroComponent} from "../main-content/components/hero/hero.component";
import {AboutMeComponent} from './components/about-me/about-me.component';
import {OnScrollArrowComponent} from '../shared/components/on-scroll-arrow/on-scroll-arrow.component';
import {MySkillsComponent} from './components/my-skills/my-skills.component';
import {ProjectListComponent} from './components/project-list/project-list.component';
import {ReferencesComponent} from './components/references/references.component';
import {ContactComponent} from './components/contact/contact.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeroComponent,
    AboutMeComponent,
    OnScrollArrowComponent,
    MySkillsComponent,
    ProjectListComponent,
    ReferencesComponent,
    ContactComponent,
    CommonModule,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  @HostBinding('id') id = 'app-main-content';
  title = 'Portfolio';

  buttonText: string = 'Send message';
  textemail: string = '© Maximilian Stark 2024';
  @ViewChildren('scrollArrow', {read: ElementRef}) scrollArrows: QueryList<ElementRef>;
  items = Array(1).fill(0);

  constructor() {
    this.scrollArrows = new QueryList<ElementRef>();
  }

  ngAfterViewInit() {
    this.scrollArrows.forEach((scrollArrow, index) => {
      scrollArrow.nativeElement.children[0].id = 'arrow' + index;
    });
  }

  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    this.checkViewportWidth();
  }

  checkViewportWidth() {
    this.buttonText = window.innerWidth < 900 ? 'Say hello ;)' : 'Send message';
    this.textemail = window.innerWidth < 900 ? 'me@maximilianstark.dev' : '© Maximilian Stark 2024';
  }

  
}
