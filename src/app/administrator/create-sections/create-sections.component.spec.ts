import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSectionsComponent } from './create-sections.component';

describe('CreateSectionsComponent', () => {
  let component: CreateSectionsComponent;
  let fixture: ComponentFixture<CreateSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
