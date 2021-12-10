import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchDialogComponent } from './serch-dialog.component';

describe('SerchDialogComponent', () => {
  let component: SerchDialogComponent;
  let fixture: ComponentFixture<SerchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerchDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
