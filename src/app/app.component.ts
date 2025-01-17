import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, HostListener } from '@angular/core';
import { OnScrollArrowComponent } from './shared/components/on-scroll-arrow/on-scroll-arrow.component';
import { VariableBinding } from '@angular/compiler';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
