import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxDraggableModule, DxResizableModule } from 'devextreme-angular';
import { DraggableResizableComponent } from './draggable-resizable/draggable-resizable.component';

@NgModule({
  declarations: [
    AppComponent,
    DraggableResizableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxResizableModule,
    DxDraggableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
