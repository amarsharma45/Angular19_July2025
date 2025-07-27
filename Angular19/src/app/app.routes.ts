import { Routes  } from '@angular/router';
import { Login } from './login/login';
import { CounterGame } from './counter-game/counter-game';
import { EventsTests } from './events-tests/events-tests';
import { ControlflowElseIf } from './controlflow-else-if/controlflow-else-if';
import { LoopInTemplate } from './loop-in-template/loop-in-template';
import { SinglalsPractice }  from './singlals-practice/singlals-practice';
import { ForLoopContectualVariables } from './for-loop-contectual-variables/for-loop-contectual-variables';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { ToDoList } from './to-do-list/to-do-list';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'counter-game', component: CounterGame },
  { path: 'events-tests', component: EventsTests },
  { path: 'loop-in-template', component: LoopInTemplate },
  { path: 'singlals-practice', component: SinglalsPractice },
  { path: 'for-loop-contectual-variables', component: ForLoopContectualVariables },
  { path: 'two-way-binding', component: TwoWayBinding },
  { path: 'to-do-list', component: ToDoList },

  
  
  { path: 'simple-calculation', loadComponent: () => import('./simple-calculation/simple-calculation').then(m => m.SimpleCalculation) },
  { path: 'controlflow-else-if', component: ControlflowElseIf },
  { path: '**', redirectTo: 'login' }
];
