import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWrapperModalComponent } from './chat-wrapper-modal.component';

describe('ChatWrapperModalComponent', () => {
  let component: ChatWrapperModalComponent;
  let fixture: ComponentFixture<ChatWrapperModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWrapperModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWrapperModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
