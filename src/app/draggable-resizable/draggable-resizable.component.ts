import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DxDraggableComponent, DxDraggableTypes } from 'devextreme-angular/ui/draggable';
import { DxResizableComponent, DxResizableTypes } from 'devextreme-angular/ui/resizable';

@Component({
  selector: 'app-draggable-resizable',
  templateUrl: './draggable-resizable.component.html',
  styleUrls: ['./draggable-resizable.component.css']
})
export class DraggableResizableComponent implements AfterViewInit {
  @ViewChild(DxResizableComponent) resize?: DxResizableComponent;
  @ViewChild(DxDraggableComponent) drag?: DxDraggableComponent;
  @ViewChild('remove', {static: false}) remove! : ElementRef<HTMLButtonElement>;
  @ViewChild('draggableResizableContent', {static: false}) draggableResizableContent!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.draggableResizableContent.nativeElement.addEventListener('mouseover', () => {
      this.remove.nativeElement.style.display = 'flex';
    });
    this.draggableResizableContent.nativeElement.addEventListener('mouseleave', () => {
      this.remove.nativeElement.style.display = 'none';
    });
    this.remove.nativeElement.addEventListener('click', event => {
      this.remove.nativeElement.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.removeChild(this.remove.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement);
    });
  }

  onItemDragEnd(event: DxDraggableTypes.DragEndEvent) {
    this.resize?.['element'].nativeElement.style.setProperty('position', 'static');
    this.resize?.['element'].nativeElement.style.removeProperty('transform');
  }

  onResizeStart(event: DxResizableTypes.ResizeStartEvent): void {
    this.resize?.['element'].nativeElement.style.setProperty('transform', 'translate(0px, 0px)');
  }

  onResizeEnd(event: DxResizableTypes.ResizeEndEvent): void {    
    this.drag?.['element'].nativeElement.style.setProperty('height', event.height + 'px');
    this.drag?.['element'].nativeElement.style.setProperty('width', event.width + 'px');
    this.resize?.['element'].nativeElement.style.removeProperty('transform');
  }
}
