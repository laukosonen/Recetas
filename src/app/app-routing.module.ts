import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetaComponent } from './components/receta/receta.component';
import { PlatosComponent } from './pages/platos/platos.component';
import { HomeComponent } from './pages/home/home.component';




const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'  
  },
  {
    path:'home',
    component:HomeComponent
  },
 
  {
    path:'platos',
    component:PlatosComponent
  },
  {
    path:'receta/:id',
    component:RecetaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
