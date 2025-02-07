import {AfterViewInit, Component, Input} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { OnscrollService } from "../../services/onscrollService/onscroll.service";
@Component({
  selector: 'app-project-preview',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss']
})
export class ProjectPreviewComponent implements AfterViewInit {
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

  private lastClickTime = 0;
  private clickThreshold = 500;

  constructor(private onscrollService: OnscrollService) {}

  ngAfterViewInit(): void {
    this.onscrollService.initializeScrollEffect('.hover-effectLOL', 500);
  }

  openLink(url: string) {
    const currentTime = new Date().getTime();

    if (currentTime - this.lastClickTime < this.clickThreshold) {
      window.open(url, '_blank');
    }

    this.lastClickTime = currentTime;
  }
}
