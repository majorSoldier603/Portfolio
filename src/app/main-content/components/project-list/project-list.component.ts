import {Component} from '@angular/core';
import {ProjectPreviewComponent} from '../../../shared/components/project-preview/project-preview.component';
import {NgForOf} from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectPreviewComponent, NgForOf, TranslateModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {

  portfolio = {
    headtext: 'portfolio.headtext',
  };

  project: any = {
    title: '',
    img: '',
    Link: '',
    techstack: '',
    gitHubLink: '',
    tldr: '',
    bntname: ''
  }

  projects = [{
    title: 'Join',
    img: 'join.png',
    Link: 'https://maximilianstark.dev/Join/index.html',
    techstack: 'JavaScript | HTML | CSS',
    gitHubLink: 'https://github.com/majorSoldier603/Join',
    tldr: 'portfolio.jointext',
    bntname: 'Github'
  }, {
    title: 'El Pollo Loco',
    img: 'el pollo loco.png',
    Link: 'https://maximilianstark.dev/El-Pollo-Loco/index.html',
    techstack: 'JavaScript | HTML | CSS',
    gitHubLink: 'https://github.com/majorSoldier603/El-Pollo-Loco',
    tldr:  'portfolio.elpollotext',
    bntname: 'Github'
  }, {
    title: 'Da Bubble',
    img: 'dabubble.png',
    Link: 'https://maximilianstark.dev/da-bubble/index.html',
    techstack: 'Angular | TypeScript | Firebase',
    gitHubLink: 'https://github.com/majorSoldier603/da-bubble',
    tldr:  'portfolio.elpollotext',
    bntname: 'Github'
  }
  ]
}
