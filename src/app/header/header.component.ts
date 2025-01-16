import { Component } from '@angular/core';
import { ScrollService } from "../scroll.service";
@Component({
	selector: 'app-header',
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
