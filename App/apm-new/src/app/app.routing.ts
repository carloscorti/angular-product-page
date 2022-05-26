import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () =>
      import(
        /* webpackChunkName: "welcome.module" */ './welcome/welcome.module'
      ).then((modeleImport) => modeleImport.WelcomeModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: '**', pathMatch: 'full', redirectTo: 'welcome' },
];

export const AppRoutes = RouterModule.forRoot(routes);
