import { Component } from '@angular/core';

@Component({
	selector: 'app-my-skills',
	templateUrl: './my-skills.component.html',
	styleUrls: ['./my-skills.component.scss', '../animatedVarText/animatedVarText.component.scss']
})
export class MySkillsComponent {
	arrowAnimation: boolean = false;
}
