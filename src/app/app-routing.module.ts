
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { MovieComponent } from "./movie/movie.component";
import { MovieHeaderComponent } from "./movie/movie-header/movie-header.component";
import { MovieBodyComponent } from "./movie/movie-body/movie-body.component";
import { SimilarComponent } from "./movie/similar/similar.component";
import { PlayComponent } from "./movie/play/play.component";
import { CommentsComponent } from "./movie/comments/comments.component";
import { HeaderComponent } from "./profile/header/header.component";
import { BodyComponent } from "./profile/body/body.component";
import { ActivityComponent } from "./profile/body/activity/activity.component";
import { PlaylistsComponent } from "./profile/body/playlists/playlists.component";
import { RegisterComponent } from "./register/register.component";
import { ForgetpassComponent } from "./forgetpass/forgetpass.component";
import { SearchComponent } from "./search/search.component";
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "auth",
  //   pathMatch: "full"
  // },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "**",
    component: ProfileComponent
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
