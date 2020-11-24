import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductCategoryListComponent } from './new-product-category-list.component';

describe('NewProductCategoryListComponent', () => {
  let component: NewProductCategoryListComponent;
  let fixture: ComponentFixture<NewProductCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
