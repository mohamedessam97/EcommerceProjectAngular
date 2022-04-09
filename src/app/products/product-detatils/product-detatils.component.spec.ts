import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetatilsComponent } from './product-detatils.component';

describe('ProductDetatilsComponent', () => {
  let component: ProductDetatilsComponent;
  let fixture: ComponentFixture<ProductDetatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
