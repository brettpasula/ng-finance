import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';

// descending in specificity
const routes: Routes = [
  {
    path: 'create-account',
    component: CreateAccountFormComponent
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
