import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [{ path: 'welcome', component: WelcomeComponent }];

export const WelcomeRoutes = RouterModule.forChild(routes);
