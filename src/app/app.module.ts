import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MovieComponent } from './movie/movie.component';
import { MovieHeaderComponent } from './movie/movie-header/movie-header.component';
import { MovieBodyComponent } from './movie/movie-body/movie-body.component';
import { SimilarComponent } from './movie/similar/similar.component';
import { PlayComponent } from './movie/play/play.component';
import { CommentsComponent } from './movie/comments/comments.component';
import { HeaderComponent } from './profile/header/header.component';
import { BodyComponent } from './profile/body/body.component';
import { ActivityComponent } from './profile/body/activity/activity.component';
import { PlaylistsComponent } from './profile/body/playlists/playlists.component';
import { RegisterComponent } from './register/register.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MovieComponent,
    MovieHeaderComponent,
    MovieBodyComponent,
    SimilarComponent,
    PlayComponent,
    CommentsComponent,
    HeaderComponent,
    BodyComponent,
    ActivityComponent,
    PlaylistsComponent,
    RegisterComponent,
    ForgetpassComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
