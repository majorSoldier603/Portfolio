import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReferenceBoxComponent} from './reference-box.component';

describe('ReferenceBoxComponent', () => {
  let component: ReferenceBoxComponent;
  let fixture: ComponentFixture<ReferenceBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceBoxComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReferenceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
