import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-arrow-scroll-left',
	templateUrl: './arrow-scroll-left.component.html',
	styleUrls: ['./arrow-scroll-left.component.scss']
})
export class ArrowScrollLeftComponent implements OnInit {
	constructor() { }

	ngOnInit() {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				}
			})
		});

		const hiddenElements = document.querySelectorAll('.hidden');
		hiddenElements.forEach((el) => observer.observe(el));
	}
}