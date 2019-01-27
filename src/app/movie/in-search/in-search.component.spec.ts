import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InSearchComponent } from './in-search.component';

describe('InSearchComponent', () => {
  let component: InSearchComponent;
  let fixture: ComponentFixture<InSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
