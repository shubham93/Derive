import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ChatWrapperModalComponent } from './chat-wrapper-modal/chat-wrapper-modal.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { WelocomeMessageComponent } from './welocome-message/welocome-message.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatWrapperModalComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent,
    WelocomeMessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [ChatWrapperModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
