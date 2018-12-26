import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatGridListModule, MatIconModule, MatMenuModule, MatButtonModule, MatCheckboxModule, MatToolbarModule],
  exports: [MatGridListModule, MatIconModule, MatMenuModule, MatButtonModule, MatCheckboxModule, MatToolbarModule]
})

export class MaterialModule { }
