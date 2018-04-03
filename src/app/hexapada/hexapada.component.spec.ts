import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexapadaComponent } from './hexapada.component';

describe('HexapadaComponent', () => {
  let component: HexapadaComponent;
  let fixture: ComponentFixture<HexapadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexapadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexapadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
