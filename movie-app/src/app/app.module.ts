import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MoviesService } from './movies.service';
import { MovieCardComponent } from './catalog/movie-card/movie-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

import { NgxPaginationModule } from 'ngx-pagination';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'catalog/:id', component: MovieDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
    BrowserAnimationsModule,
    MatToolbarModule,
    NgxPaginationModule
  ],
  providers: [MoviesService, AuthService, AuthGuard, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
