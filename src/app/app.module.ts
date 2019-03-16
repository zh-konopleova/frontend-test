import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HistoryComponent } from './history/history.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppService } from './app.service';
import { RequestComponent } from './request/request.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HistoryComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
