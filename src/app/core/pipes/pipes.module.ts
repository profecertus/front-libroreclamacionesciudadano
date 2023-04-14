import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PadnumberPipe} from './padnumber.pipe';



@NgModule({
  declarations: [PadnumberPipe],
  exports: [PadnumberPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
