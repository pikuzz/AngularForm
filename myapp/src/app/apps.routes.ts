
import{HomeComponent} from './home/home.component';
import { ReactiveForms } from './reactiveforms/reactiveforms.component';
import { LoginComponent } from './login/login.component';


export const routes = [{
   path: 'home',
   component: HomeComponent
},

{
  path: 'register',
  component: ReactiveForms
},

{
  path:'login',
  component: LoginComponent
}
];
