import { Component } from '@angular/core';
import { ScrollService } from "../../services/ScrollService/scroll.service";
import { SocialiconsComponent } from '../socialicons/socialicons.component';
import { FormsModule } from '@angular/forms';
@Component({
	selector: 'app-header',
	standalone: true,
	imports: [FormsModule,SocialiconsComponent],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	isChecked:boolean = false

	constructor(private scrollService: ScrollService) {}
	
	onCheckboxChange() {
		if (this.isChecked) {
			document.getElementById('mainbody')?.classList.add('stop-scrolling');
		} else if (!this.isChecked) {
			setTimeout(() => {
				document.getElementById('mainbody')?.classList.remove('stop-scrolling');
			}, 100);
		}
	}

	scrollTo(elementId: string, offset: number) {
		this.isChecked = false
		document.getElementById('mainbody')?.classList.remove('stop-scrolling');
		
		this.scrollService.scrollToElement(elementId, offset);
	}
}
