import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableResizableComponent } from './draggable-resizable.component';

describe('DraggableResizableComponent', () => {
  let component: DraggableResizableComponent;
  let fixture: ComponentFixture<DraggableResizableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraggableResizableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraggableResizableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
