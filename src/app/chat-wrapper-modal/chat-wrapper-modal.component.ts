import { Component, OnInit } from '@angular/core';
import { Message } from '../core/models/message';

@Component({
  selector: 'app-chat-wrapper-modal',
  templateUrl: './chat-wrapper-modal.component.html',
  styleUrls: ['./chat-wrapper-modal.component.css']
})
export class ChatWrapperModalComponent implements OnInit {
  public message : Message;
  public messages : Message[] = [];

  constructor() { }

  ngOnInit() {
    this.message = new Message('');
  }

}
