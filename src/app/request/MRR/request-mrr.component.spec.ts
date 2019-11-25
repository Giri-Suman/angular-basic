import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMrrComponent } from './request-mrr.component';

describe('RequestMrrComponent', () => {
  let component: RequestMrrComponent;
  let fixture: ComponentFixture<RequestMrrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMrrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
