import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecrudComponent } from './profilecrud.component';

describe('ProfilecrudComponent', () => {
  let component: ProfilecrudComponent;
  let fixture: ComponentFixture<ProfilecrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilecrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilecrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
