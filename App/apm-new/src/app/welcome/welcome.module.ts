import { NgModule } from '@angular/core';

import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutes } from './welcome.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [SharedModule, WelcomeRoutes],
})
export class WelcomeModule {}
