import {Component} from '@angular/core';
import {ProjectPreviewComponent} from '../../../shared/components/project-preview/project-preview.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectPreviewComponent, NgForOf],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {

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
    tldr: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    bntname: 'Github'
  }, {
    title: 'El Pollo Loco',
    img: 'el pollo loco.png',
    Link: 'https://maximilianstark.dev/El-Pollo-Loco/index.html',
    techstack: 'JavaScript | HTML | CSS',
    gitHubLink: 'https://github.com/majorSoldier603/El-Pollo-Loco',
    tldr: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
    bntname: 'Github'
  }
  ]
}
