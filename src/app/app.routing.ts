import { Routes } from '@angular/router';

export const appRouter: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'test',
        loadChildren: './test/test.module#TestModule'
    }
];