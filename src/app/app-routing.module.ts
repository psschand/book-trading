import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { BookComponent } from './book/book.component';
 
const routes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    //{ path: 'home', component: DashboardComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: SettingsComponent },
    { path: 'books', component: BookComponent },
    { path: 'mybooks', loadChildren: 'app/mybook/mybook.module#MybookModule' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
    exports: [ RouterModule]
})
export class AppRoutingModule {}