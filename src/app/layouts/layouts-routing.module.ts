import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModernSassComponent } from './modern-sass/modern-sass.component';

const routes: Routes = [
  {
    path: '',
    component: ModernSassComponent,
    data: {
      title: "Modern SASS| Unice Landing Page"
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
