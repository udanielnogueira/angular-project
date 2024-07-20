# angular-project

Projeto em Angular do Advanced Front-End na Pós-graduação em Desenvolvimento Full-Stack.

## 2 Introdução ao Angular

Aula 2 do Advanced Front-End.

## Configurações Iniciais

Observação
- O node precisa estar instalado

Documentação
- https://angular.io/
- https://angular.io/docs
- https://angular.io/guide/setup-local

Passo a Passo
- Verifique se o Node está instalado executando ``node -v`` ou ``node`` no terminal
- Instale o Angular na pasta do projeto `` npm install -g @angular/cli``
- Execute ``ng new my-app`` na pasta do projeto

Execute a Aplicação
- ``cd my-app``
- ``ng serve --open``

## Conceitos Iniciais

package.json
- Consigo ver a versão do angular

index.html
- Página indexa os componentes

app.component.html
- html do componente app

app.component.css
- css do componente app

app.routes.ts (antigo app-routing.module.ts)
- Configuração de rotas dos componentes

## Criação de Components e Pastas

Crie um componente home listar e header
- ``ng generate component pages/home``
- ``ng generate component pages/listar``
- ``ng generate component components/header``
- Note que além de criar components você criou pastas

Adicione a rota do componente home no route (app.routes.ts)
- Faça o mesmo processo para o componente listar depois
~~~ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path:'home', component: HomeComponent}
];
~~~

Dentro de app crie 2 pastas
- service guard
- O guard vai fazer a segurança das rotas
- O service vai ser para se comunicar com a API

## Redirecionando Localhost para Home

Para o localhost redirecionar sempre pra home (app.routes.ts)
~~~ts
export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'listar', component: ListarComponent}
];
~~~

## Adicionando o Componente Header em Home

Pegue o selector do header em header.component.ts e cole no home.component.html
~~~~html
<app-header></app-header>
~~~~
Importe o header component no arquivo home.component.ts
~~~ts
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
~~~

## Criando uma Variável na Home para Exibir no Header

Crie a variável em home.component.ts
```ts
export class HomeComponent {
  nome:string = "Daniel Nogueira";
}
```
Passe a variável no html de home.component.html
~~~html
<app-header [nome]="nome"></app-header>
~~~
Faça a ligação com o header no header.component.ts
```ts
export class HeaderComponent {
  @Input() nome:string = '';
}
```
Use a variável no header.component.html
~~~html
<h1>Olá {{nome}}</h1>
~~~

## Usando o Style do APP Component no Style Global

Copie o style do app.component.html
- Cole no style.css global da pasta src
- Apague o estilo do app.component.html

## Criando um Footer e Adicionando na Home

Crie um componente footer ``ng g component components/footer``
- Adicione o footer na home assim como feito no header