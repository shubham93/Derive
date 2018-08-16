import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Message } from '../core/models/message';
import { MessageItemComponent } from 'src/app/message-item/message-item.component';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input('messages')
  private messages: Message[];

  @ViewChild('chatlist', { read: ElementRef }) chatList: ElementRef;
  @ViewChildren(MessageListComponent, { read: ElementRef }) chatItems: QueryList<MessageItemComponent>;

  constructor() { }

  ngAfterViewInit() {
    this.chatItems.changes.subscribe(elements => {
      this.scrollToBottom();
    });
  }

  private scrollToBottom(): void {
    try {
      this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
    }
    catch (err) {
      console.log('Could not find the "chatList" element.');
    }
  }

  ngOnInit() {
  }

}
