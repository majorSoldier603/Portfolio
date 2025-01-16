import { Component, Input } from '@angular/core';
import { ScrollService } from "../scroll.service";

@Component({
  selector: 'app-on-scroll-arrow',
  templateUrl: './on-scroll-arrow.component.html',
  styleUrls: ['./on-scroll-arrow.component.scss']
})
export class OnScrollArrowComponent {
	items: any;
	componentId: any;
	itemId: any;

	constructor(private scrollService: ScrollService) {}
	
	@Input() arrowId = 3;

	isHovered: boolean = false;

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