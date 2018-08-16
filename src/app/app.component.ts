import { Component } from '@angular/core';
import { MatDialog } from '../../node_modules/@angular/material/dialog';
import { ChatWrapperModalComponent } from './chat-wrapper-modal/chat-wrapper-modal.component';
import { Message } from './core/models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-widget';
  constructor( public dialog: MatDialog,) {

  }
  openChatModal() {
    const dialogRef = this.dialog.open(ChatWrapperModalComponent, {
      width: "600px",
      height: "60vh"
    });
    dialogRef.afterClosed().subscribe((result: Message) => {
    });
  }
}
