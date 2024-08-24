import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: 'header', component:HeaderComponent},
    {path: '', component:HomeComponent},
    {path: 'footer', component:FooterComponent}
];
