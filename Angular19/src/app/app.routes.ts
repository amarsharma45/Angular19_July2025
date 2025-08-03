import { Routes } from '@angular/router';
import { Login } from './login/login';
import { CounterGame } from './counter-game/counter-game';
import { EventsTests } from './events-tests/events-tests';
import { ControlflowElseIf } from './controlflow-else-if/controlflow-else-if';
import { LoopInTemplate } from './loop-in-template/loop-in-template';
import { SinglalsPractice } from './singlals-practice/singlals-practice';
import { ForLoopContectualVariables } from './for-loop-contectual-variables/for-loop-contectual-variables';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { ToDoList } from './to-do-list/to-do-list';
import { GetApiData } from './get-api-data/get-api-data';
import { EmployeeCrud } from './employee-crud/employee-crud';
import { AuthGuard } from './guards/auth.guard.ts';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },

  { path: 'counter-game', component: CounterGame, canActivate: [AuthGuard] },
  { path: 'events-tests', component: EventsTests, canActivate: [AuthGuard] },
  { path: 'loop-in-template', component: LoopInTemplate, canActivate: [AuthGuard] },
  { path: 'singlals-practice', component: SinglalsPractice, canActivate: [AuthGuard] },
  { path: 'for-loop-contectual-variables', component: ForLoopContectualVariables, canActivate: [AuthGuard] },
  { path: 'two-way-binding', component: TwoWayBinding, canActivate: [AuthGuard] },
  { path: 'to-do-list', component: ToDoList, canActivate: [AuthGuard] },
  { path: 'get-api-data', component: GetApiData, canActivate: [AuthGuard] },
  { path: 'employee-crud', component: EmployeeCrud, canActivate: [AuthGuard] },
  { path: 'simple-calculation', 
    loadComponent: () => import('./simple-calculation/simple-calculation')
      .then(m => m.SimpleCalculation),
    canActivate: [AuthGuard]
  },
  { path: 'controlflow-else-if', component: ControlflowElseIf, canActivate: [AuthGuard] },

  // Fallback
  { path: '**', redirectTo: 'login' }
];
