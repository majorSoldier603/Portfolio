import { Component, OnInit } from '@angular/core';
import { ScrollService } from "../scroll.service";

@Component({
	selector: 'app-about-me',
	templateUrl: './about-me.component.html',
	styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
	constructor(private scrollService: ScrollService) {}
	
	ngOnInit(): void {
		this.fadeInOut(true)
	}
	fadeInOut(isFadeOut:boolean) {
		const element = document.querySelector('.fade-in-out');
		if (element) {
			if (isFadeOut) {
				element.classList.add('fade-out');
			} else {
				element.classList.remove('fade-out');
			}
		}
	}

	bgColor: string = 'FFFCF3';
	textColor: string = 'black';

	changeBntColor(isBlack:boolean) {
		if (isBlack) {
			this.bgColor = 'black';
			this.textColor = 'white';

		} else {
			this.bgColor = '#FFFCF3';
			this.textColor = 'black';
		}
	}

	scrollTo(elementId: string, offset: number) {
	  this.scrollService.scrollToElement(elementId, offset);
	}
}