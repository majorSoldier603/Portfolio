import { Component } from '@angular/core';
import { ScrollService } from "../scroll.service";

@Component({
	selector: 'app-my-skills',
	templateUrl: './my-skills.component.html',
	styleUrls: ['./my-skills.component.scss', '../animatedVarText/animatedVarText.component.scss']
})
export class MySkillsComponent {
	arrowAnimation: boolean = false;

	constructor(private scrollService: ScrollService) {}

	scrollTo(elementId: string, offset: number) {
	  this.scrollService.scrollToElement(elementId, offset);
	}
}
