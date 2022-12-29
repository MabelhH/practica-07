import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavardComponent } from './navard/navard.component';



@NgModule({
  declarations: [
    NavardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavardComponent
  ],
})
export class SharedModule { }
