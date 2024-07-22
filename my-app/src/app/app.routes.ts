import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
// import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'listar', component: ListarComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'login', component: LoginComponent},
  // {path: 'main', component: MainComponent}
];
