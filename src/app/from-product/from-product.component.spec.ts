import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromProductComponent } from './from-product.component';

describe('FromProductComponent', () => {
  let component: FromProductComponent;
  let fixture: ComponentFixture<FromProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromProductComponent]
    });
    fixture = TestBed.createComponent(FromProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
