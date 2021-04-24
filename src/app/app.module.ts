import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { StoreModule } from '@ngrx/store';
import { newsfeedReducer } from './state/newsfeed.reducers';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { NewsfeedEffects } from './state/newsfeed.effects';
import { FriendsListComponent } from './newsfeed/friends-list/friends-list.component';
import { NewsfeedListComponent } from './newsfeed/newsfeed-list/newsfeed-list.component';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    NewsfeedComponent,
    FriendsListComponent,
    NewsfeedListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      newsfeed: newsfeedReducer
    }),
    EffectsModule.forRoot([
      NewsfeedEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
