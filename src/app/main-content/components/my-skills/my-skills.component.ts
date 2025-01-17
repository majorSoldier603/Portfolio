import { Component } from '@angular/core';
import { ScrollService } from "../../../shared/services/ScrollService/scroll.service";

@Component({
	selector: 'app-my-skills',
	standalone: true,
	imports: [],
	templateUrl: './my-skills.component.html',
	styleUrls: ['./my-skills.component.scss', '../../../shared/css/animatedVarText/animatedVarText.component.scss']
})
export class MySkillsComponent {
	arrowAnimation: boolean = false;

	constructor(private scrollService: ScrollService) {}

	scrollTo(elementId: string, offset: number) {
	  this.scrollService.scrollToElement(elementId, offset);
	}
}
