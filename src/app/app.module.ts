import { BodyComponent } from './profile/body/body.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// assets
import { AngularFontAwesomeModule } from "angular-font-awesome";
// import { CarouselModule } from "angular2-carousel";
import { SlickCarouselModule } from "ngx-slick-carousel";


// components
import { BodyComponent1 } from './search/body/body.component';
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
import { ActivityComponent } from './profile/body/activity/activity.component';
import { PlaylistsComponent } from './profile/body/playlists/playlists.component';
import { RegisterComponent } from './register/register.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { SearchComponent } from './search/search.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { InSearchComponent } from './movie/in-search/in-search.component';
import { TopprofileComponent } from './profile/topprofile/topprofile.component';
import { SliderComponent } from './slider/slider.component';
import { NavComponent1 } from './search/nav/nav.component';
import { SlideComponent } from './slider/slide/slide.component';

@NgModule({
  declarations: [
    BodyComponent1,
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
    ActivityComponent,
    PlaylistsComponent,
    RegisterComponent,
    ForgetpassComponent,
    SearchComponent,
    NotfoundComponent,
    ProfileComponent,
    InSearchComponent,
    TopprofileComponent,
    SliderComponent,
    BodyComponent,
    NavComponent1,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
