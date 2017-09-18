import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import {HomeComponent} from './demo/components/home/home.component';
import {PaginationComponent} from './demo/components/pagination/pagination.component';



const appRoutes: Routes = [
	{ path:'home', component: HomeComponent },
	{ path: 'pagination', component: PaginationComponent },	
	{ path: '',	redirectTo: 'home', pathMatch: 'full' }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);