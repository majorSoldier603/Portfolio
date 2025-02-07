import {AfterViewInit, Component, Input} from '@angular/core';
import {ScrollService} from "..//../services/ScrollService/scroll.service";
import {NgClass} from '@angular/common';
import {OnscrollService} from "../../services/onscrollService/onscroll.service";

@Component({
  selector: 'app-on-scroll-arrow',
  standalone: true,
  imports: [NgClass],
  templateUrl: './on-scroll-arrow.component.html',
  styleUrls: ['./on-scroll-arrow.component.scss']
})
export class OnScrollArrowComponent implements AfterViewInit {
  items: any;
  componentId: any;
  itemId: any;
  @Input() arrowId = 3;

  constructor(private scrollService: ScrollService, private onscrollService: OnscrollService) {
  }
  ngAfterViewInit(): void {
    this.onscrollService.initializeScrollEffect('.hover-effect', 500);
  }

  scrollTo(event: MouseEvent, offset: number) {
    let elementId = (event.target as HTMLElement).id;
  
    const offsets: Record<string, { id: string; defaultOffset: number; smallScreenOffset: number }> = {
      "arrow0": { id: "app-my-skills", defaultOffset: 120, smallScreenOffset: 120 },
      "arrow1": { id: "app-project-list", defaultOffset: 100, smallScreenOffset: 100 },
      "arrow2": { id: "app-contact", defaultOffset: -120, smallScreenOffset: 10 }
    };
  
    const element = offsets[elementId] || { id: elementId, defaultOffset: 0, smallScreenOffset: 0 };
    const newOffset = window.innerWidth < 900 ? element.smallScreenOffset : element.defaultOffset;
  
    this.scrollService.scrollToElement(element.id, newOffset);
  }
}