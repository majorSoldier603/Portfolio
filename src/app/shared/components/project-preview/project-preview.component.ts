import {Component, Input, OnInit} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-preview',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss']
})
export class ProjectPreviewComponent implements OnInit {
  @Input() project: any = {

    title: '',
    img: '',
    Link: '',
    techstack: '',
    gitHubLink: '',
    tldr: '',
    bntname: ''
  };

  @Input() projectId = 0;
  side: string | undefined;

  constructor() {
  }

  ngOnInit() {
  }

  hoverIn(elementID: number) {
    this.wichsideishoverd(elementID);
    let elementRef = document.getElementById(elementID.toString());
    if (elementRef) {
      elementRef.className = this.side + '-hover' + ' ' + this.side;
    }
  }
  hoverOut(elementID: number) {
    this.wichsideishoverd(elementID);
    let elementRef = document.getElementById(elementID.toString());
    if (elementRef && this.side) {
      elementRef.className = this.side
    }
  }

  wichsideishoverd(elementID: number) {
    this.side = elementID % 2 === 0 ? 'right' : 'left';
  }
}
