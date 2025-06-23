import { Routes } from '@angular/router';
import { NotFoundComponent } from './logs/not-found/not-found.component';
import { NotFoundpageComponent } from './components/not-foundpage/not-foundpage.component';

export const routes: Routes = [
    {path:"", redirectTo:"login" ,pathMatch:'full'},
    {path:"",
    loadComponent:()=>import("./layouts/after-login/after-login.component").then((c)=>c.AfterLoginComponent),
        children:[
        // {path:"", redirectTo:"login" ,pathMatch:'full'},
        {path:"home",
            loadComponent:()=>import("./components/home/home.component").then((c) => c.HomeComponent),
            title:"home"
        },
        {path:"benfits",
            loadComponent:()=>import("./components/benfits/benfits.component").then((c)=>c.BenfitsComponent),
            title:"benfits"
        },
        {path:"howitworks",
            loadComponent:()=>import("./components/how-it-works/how-it-works.component").then((c)=>c.HowItWorksComponent),
            title:"how it works"
        }, 
        {path:"pricing",
            loadComponent:()=>import("./components/pricing/pricing.component").then((c)=>c.PricingComponent),
            title:"prices"
        }, 
       {path:"error",
            loadComponent:()=>import("./components/not-foundpage/not-foundpage.component").then((c)=>c.NotFoundpageComponent),
            title:"error page now working !"
        }
        ]
    },
        {path:"",
    loadComponent:()=>import("./layouts/log-layout/log-layout.component").then((c)=>c.LogLayoutComponent),
        children:[
        // {path:"", redirectTo:"login" ,pathMatch:'full'},
        {path:"login",
            loadComponent:()=>import("./logs/login/login.component").then((c) => c.LoginComponent),
            title:"login "
        },
        {path:"register",
            loadComponent:()=>import("./logs/register/register.component").then((c)=>c.RegisterComponent),
            title:"register"
        },
        {path:"book-demo",
            loadComponent:()=>import("./components/bookademo/bookademo.component").then((c)=>c.BookademoComponent),
            title:"book A Demo "
        }
        ]
    },
        {path:"**",
            redirectTo:"error" ,pathMatch:'full', title:"error page now working--last !"
        }

];
