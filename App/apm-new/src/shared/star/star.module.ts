import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StarComponent],
  exports: [StarComponent, CommonModule],
})
export class StarModule {}
