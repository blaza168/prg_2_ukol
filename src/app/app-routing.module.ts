import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {FrontEndComponent} from './components/front-end/front-end.component';
import {StructureComponent} from './components/structure/structure.component';
import {BackendComponent} from './components/backend/backend.component';
import {SummaryComponent} from './components/summary/summary.component';
import {EndComponent} from './components/end/end.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
  },
  {
    path: 'deleni',
    component: StructureComponent,
  },
  {
    path: 'klientska-cast',
    component: FrontEndComponent,
  },
  {
    path: 'servrova-cast',
    component: BackendComponent,
  },
  {
    path: 'shrnuti',
    component: SummaryComponent,
  },
  {
    path: 'konec',
    component: EndComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
