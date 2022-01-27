import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyusergitComponent } from './myusergit.component';

describe('MyusergitComponent', () => {
  let component: MyusergitComponent;
  let fixture: ComponentFixture<MyusergitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyusergitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyusergitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
