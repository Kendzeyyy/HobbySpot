import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ChannelsPage} from "../pages/channels/channels";
import { MediaProvider } from '../providers/media/media';
import {HttpClientModule} from "@angular/common/http";
import {ThumbnailPipe} from "../pipes/thumbnail/thumbnail";
import {LoginPage} from "../pages/login/login";
import {CategoriesPage} from "../pages/categories/categories";
import {RegisterPage} from '../pages/register/register';
import {UploadPage} from '../pages/upload/upload';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {TabsPage} from '../pages/tabs/tabs';
import {LogoutPage} from '../pages/logout/logout';
import {CommentsPage} from "../pages/comments/comments";
import {TimeFormatterPipe} from "../pipes/time-formatter/time-formatter";
import {Camera} from '@ionic-native/camera';
import {ProfilePage} from "../pages/profile/profile";
import {SearchPage} from "../pages/search/search";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChannelsPage,
    LoginPage,
    ProfilePage,
    CategoriesPage,
    ThumbnailPipe,
    TimeFormatterPipe,
    RegisterPage,
    AboutPage,
    ContactPage,
    TabsPage,
    UploadPage,
    LogoutPage,
    CommentsPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChannelsPage,
    CategoriesPage,
    LoginPage,
    ProfilePage,
    RegisterPage,
    UploadPage,
    AboutPage,
    ContactPage,
    TabsPage,
    UploadPage,
    LogoutPage,
    CommentsPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MediaProvider,
    TimeFormatterPipe,
    ThumbnailPipe,
    Camera
  ]
})
export class AppModule {}
