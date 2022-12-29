import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavardComponent } from './navard.component';

describe('NavardComponent', () => {
  let component: NavardComponent;
  let fixture: ComponentFixture<NavardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
