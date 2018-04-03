import { Route } from "@angular/compiler/src/core";
import { HomeComponent } from "./app/home/home.component";
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./app/login/login.component";
import { CalendarioComponent } from "./app/calendario/calendario.component";
import { ChelicerataComponent } from "./app/chelicerata/chelicerata.component";
import { HexapadaComponent } from "./app/hexapada/hexapada.component";
import { UserComponent } from "./app/user/user.component";
import { BuscarComponent } from "./app/buscar/buscar.component";

 const routes : Routes = [
    {path:'home',component: HomeComponent},
    {path:'login',component: LoginComponent},
    {path:'calendario',component:CalendarioComponent },
    {path:'chelicerata',component:ChelicerataComponent },
    {path:'hexapoda',component:HexapadaComponent },
    {path:'user',component:UserComponent },
    {path:'buscar',component:BuscarComponent },
    {path:'',redirectTo: 'home',pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);

