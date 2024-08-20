import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DxDraggableTypes } from 'devextreme-angular/ui/draggable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Tool pro definici layoutů (3DCI.UI.DLD)';

  blocks = [1]

  @ViewChild('edit', { static: false }) edit!: ElementRef<HTMLButtonElement>;
  @ViewChild('addDiv', { static: false }) addDiv!: ElementRef<HTMLButtonElement>;
  @ViewChild('save', { static: false }) save!: ElementRef<HTMLButtonElement>;
  @ViewChild('cancel', { static: false }) cancel!: ElementRef<HTMLButtonElement>;
  @ViewChild('container', {static: false}) container!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.addDiv.nativeElement.style.display = 'none';
    this.save.nativeElement.style.display = 'none';
    this.cancel.nativeElement.style.display = 'none';

    this.edit.nativeElement.addEventListener('click', () => {
      this.edit.nativeElement.style.display = 'none';
      this.addDiv.nativeElement.style.display = 'flex';
      this.save.nativeElement.style.display = 'flex';
      this.cancel.nativeElement.style.display = 'flex';
    });

    this.cancel.nativeElement.addEventListener('click', () => {
      this.addDiv.nativeElement.style.display = 'none';
      this.save.nativeElement.style.display = 'none';
      this.cancel.nativeElement.style.display = 'none';
      this.edit.nativeElement.style.display = 'flex';
    });

    this.addDiv.nativeElement.addEventListener('click', () => {
      this.blocks.push(1);
    });

  }

  onItemDragStart(e: DxDraggableTypes.DragStartEvent) {
    
  }

  onItemDragEnd(e: DxDraggableTypes.DragEndEvent) {

  }

  
  

}
