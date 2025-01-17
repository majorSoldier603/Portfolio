import { Component, HostListener, OnInit } from '@angular/core';
import { SocialiconsComponent } from '../socialicons/socialicons.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialiconsComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', '../../../shared/css/animatedVarText/animatedVarText.component.scss'],
})
export class FooterComponent implements OnInit {

	ngOnInit() {
        this.checkViewportWidth();
    }

	textemail: string = '© Maximilian Stark 2024';

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
	  this.checkViewportWidth();
	}
  
	checkViewportWidth() {
	  this.textemail = window.innerWidth < 900 ? 'me@maximilianstark.dev' : '© Maximilian Stark 2024';
	}
}
