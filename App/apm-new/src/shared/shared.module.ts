import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StarModule } from './star/star.module';

@NgModule({
  exports: [CommonModule, FormsModule, StarModule],
})
export class SharedModule {}
