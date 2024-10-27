import { Component, HostListener, OnInit } from '@angular/core';
import { animatedVarTextComponent } from "../animatedVarText/animatedVarText.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
	constructor(private animatedVarTextComponent: animatedVarTextComponent) { }
	
	ngOnInit() {
        this.checkViewportWidth();

		this.animatedVarTextComponent.declareTextVar('Contact me')
    }

	textemail: string = '© Maximilian Stark 2024';

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
	  this.checkViewportWidth();
	}
  
	checkViewportWidth() {
	  this.textemail = window.innerWidth < 900 ? 'me@maximilian-stark.dev' : '© Maximilian Stark 2024';
	}
}
