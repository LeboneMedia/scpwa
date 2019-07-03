import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetasPage } from './setas.page';

describe('SetasPage', () => {
  let component: SetasPage;
  let fixture: ComponentFixture<SetasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
