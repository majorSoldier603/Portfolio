import {Component, Input} from '@angular/core';
import {ScrollService} from "..//../services/ScrollService/scroll.service";
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-on-scroll-arrow',
  standalone: true,
  imports: [NgClass],
  templateUrl: './on-scroll-arrow.component.html',
  styleUrls: ['./on-scroll-arrow.component.scss']
})
export class OnScrollArrowComponent {
  items: any;
  componentId: any;
  itemId: any;
  @Input() arrowId = 3;
  isHovered: boolean = false;

  constructor(private scrollService: ScrollService) {
  }

  toggleHover(value: boolean): void {
    this.isHovered = value;
  }

  scrollTo(event: MouseEvent, offset: number) {
    let elementId = (event.target as HTMLElement).id;

    if (elementId == "arrow0") {
      elementId = 'app-my-skills'
    }
    if (elementId == "arrow1") {
      elementId = 'app-project-list'
    }
    if (elementId == "arrow2") {
      elementId = 'app-contact'
      offset = 20
    }

    this.scrollService.scrollToElement(elementId, offset);
  }
}
