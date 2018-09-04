import { Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';
import { TestComponent } from './test/test.component';

export const testRouter: Routes = [
    {
        path: '',
        component: TestComponent
    },
    {
        path: 'sidenav',
        component: SidenavComponent
    }
];