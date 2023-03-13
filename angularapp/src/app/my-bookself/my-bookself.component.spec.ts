import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookselfComponent } from './my-bookself.component';

describe('MyBookselfComponent', () => {
  let component: MyBookselfComponent;
  let fixture: ComponentFixture<MyBookselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBookselfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBookselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
