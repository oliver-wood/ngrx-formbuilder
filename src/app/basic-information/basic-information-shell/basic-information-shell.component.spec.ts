import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInformationShellComponent } from './basic-information-shell.component';

describe('BasicInformationShellComponent', () => {
  let component: BasicInformationShellComponent;
  let fixture: ComponentFixture<BasicInformationShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicInformationShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInformationShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
