import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: '**', pathMatch: 'full', redirectTo: 'welcome' },
];

export const AppRoutes = RouterModule.forRoot(routes);
