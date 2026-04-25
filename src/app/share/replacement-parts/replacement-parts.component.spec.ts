import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplacementPartsComponent } from './replacement-parts.component';

describe('ReplacementPartsComponent', () => {
  let component: ReplacementPartsComponent;
  let fixture: ComponentFixture<ReplacementPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplacementPartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplacementPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
