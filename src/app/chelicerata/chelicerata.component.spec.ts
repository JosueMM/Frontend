import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChelicerataComponent } from './chelicerata.component';

describe('ChelicerataComponent', () => {
  let component: ChelicerataComponent;
  let fixture: ComponentFixture<ChelicerataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChelicerataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChelicerataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
