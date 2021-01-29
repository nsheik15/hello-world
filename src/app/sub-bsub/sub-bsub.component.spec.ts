import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBsubComponent } from './sub-bsub.component';

describe('SubBsubComponent', () => {
  let component: SubBsubComponent;
  let fixture: ComponentFixture<SubBsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubBsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubBsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
