import { Route } from '@angular/router';
import { PortfolioComponent } from './portfolio-component/portfolio.component';

export const appRoutes: Route[] = [
  {
    path: 'education',
    loadChildren: () =>
      import('education/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'experience',
    loadChildren: () =>
      import('experience/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'social',
    loadChildren: () =>
      import('social/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: PortfolioComponent,
  },
];
