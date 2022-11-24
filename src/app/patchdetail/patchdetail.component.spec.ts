import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchdetailComponent } from './patchdetail.component';

describe('PatchdetailComponent', () => {
  let component: PatchdetailComponent;
  let fixture: ComponentFixture<PatchdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
