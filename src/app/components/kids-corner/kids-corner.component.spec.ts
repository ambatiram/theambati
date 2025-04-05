import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsCornerComponent } from './kids-corner.component';

describe('KidsCornerComponent', () => {
  let component: KidsCornerComponent;
  let fixture: ComponentFixture<KidsCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsCornerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
