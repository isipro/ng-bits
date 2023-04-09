import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const imports = [
  CommonModule, MatToolbarModule, MatIconModule, MatButtonModule
]

const exports = [
  MatToolbarModule, MatIconModule, MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [ ...imports ],
  exports: [ ...exports ]
})
export class MaterialModule { }
