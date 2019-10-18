import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdvertsComponent } from './create-adverts.component';

describe('CreateAdvertsComponent', () => {
  let component: CreateAdvertsComponent;
  let fixture: ComponentFixture<CreateAdvertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdvertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
