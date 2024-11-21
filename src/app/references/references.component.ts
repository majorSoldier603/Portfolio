import { Component } from '@angular/core';
import { ReferenceBoxComponent } from '../reference-box/reference-box.component';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
	Reference:any = {
		name: '',
		title: '',
		comment: ''
	}

	References = [
		{
			name: 'V. Schuster ',
			title: 'Team Partner',
			comment: 'Michael really kept the team together with his great organization and clear communication. We wouldn`t have got this far without his commitment.'
		}, 
		{
			name: 'E.Eichinger',
			title: 'Team Partner',
			comment: 'Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.'	
		}, 
		{
			name: 'I.Nuber',
			title: 'Frontend Engineer',
			comment: 'It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.'
		}
	]
}
