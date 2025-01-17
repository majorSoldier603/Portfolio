import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-reference-box',
	standalone: true,
	imports: [],
	templateUrl: './reference-box.component.html',
	styleUrl: './reference-box.component.scss'
})
export class ReferenceBoxComponent {
	@Input() Reference:any = {
		name: '',
		title: '',
		comment: ''
	};
	
	@Input() ReferenceId = 0;
}
