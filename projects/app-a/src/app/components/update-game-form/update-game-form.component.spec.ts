import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGameFormComponent } from './update-game-form.component';

describe('UpdateGameFormComponent', () => {
  let component: UpdateGameFormComponent;
  let fixture: ComponentFixture<UpdateGameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGameFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateGameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
