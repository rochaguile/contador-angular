import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: 'relatorios', loadChildren: () => import('./relatorios/relatorios.module').then(m => m.RelatoriosModule) },
  { path: 'cameras', loadChildren: () => import('./cameras/cameras.module').then(m => m.CamerasModule) },
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
