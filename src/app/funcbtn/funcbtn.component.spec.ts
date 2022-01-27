import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncbtnComponent } from './funcbtn.component';

describe('FuncbtnComponent', () => {
  let component: FuncbtnComponent;
  let fixture: ComponentFixture<FuncbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
