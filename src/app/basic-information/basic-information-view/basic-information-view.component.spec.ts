import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInformationViewComponent } from './basic-information-view.component';

describe('BasicInformationViewComponent', () => {
  let component: BasicInformationViewComponent;
  let fixture: ComponentFixture<BasicInformationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicInformationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInformationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
