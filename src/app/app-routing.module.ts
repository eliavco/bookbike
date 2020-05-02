import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleComponent } from './components/example/example.component';

const routes: Routes = [
	{ path: 'app', component: ExampleComponent },
	{ path: '', component: ExampleComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
