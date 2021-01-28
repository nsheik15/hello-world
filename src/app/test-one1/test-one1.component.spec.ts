import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOne1Component } from './test-one1.component';

describe('TestOne1Component', () => {
  let component: TestOne1Component;
  let fixture: ComponentFixture<TestOne1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOne1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOne1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
