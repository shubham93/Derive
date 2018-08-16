import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelocomeMessageComponent } from './welocome-message.component';

describe('WelocomeMessageComponent', () => {
  let component: WelocomeMessageComponent;
  let fixture: ComponentFixture<WelocomeMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelocomeMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelocomeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
