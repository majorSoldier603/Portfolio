import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowScrollComponent } from './arrow-scroll.component';

describe('ArrowScrollComponent', () => {
	let component: ArrowScrollComponent;
	let fixture: ComponentFixture<ArrowScrollComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ArrowScrollComponent]
		});
		fixture = TestBed.createComponent(ArrowScrollComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
