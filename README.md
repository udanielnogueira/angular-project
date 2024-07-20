# angular-project

package.json
- consigo ver a versão do angular

index.html
- é a página que roda todos os componentes

app.component.html
- html do componente app

app.component.css
- css do componente app

app-routing.module.ts (app.routes.ts)
- configuração de rotas dos componentes

criar um componente home
- ng generate component <home>

adicionar a rota do componente home no route (app.routes.ts)
~~~ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path:'home', component: HomeComponent}
];
~~~

dentro de app criei as pastas
- components pages service guard
- o guard vai fazer a segurança das rotas
- o service vai ser para se comunicar com a API

para o localhost redirecionar sempre pra home
~~~ts
export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'listar', component: ListarComponent}
];
~~~

adicione o header dentro do home
- pegue o selector do header em header.component.ts e cole no home.component.html
- importe o header component no arquivo home.component.ts

~~~ts
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
~~~