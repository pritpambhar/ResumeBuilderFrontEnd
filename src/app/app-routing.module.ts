import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralInfoComponent } from './builder/general-info/general-info.component';


const routes: Routes = [
  {
   path: "builder",
   loadChildren: () => import('./builder/builder.module').then(m => m.BuilderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
