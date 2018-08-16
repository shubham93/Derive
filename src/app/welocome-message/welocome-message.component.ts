import { Component, OnInit } from '@angular/core';
import { Message } from '../core/models/message';

@Component({
  selector: 'app-welocome-message',
  templateUrl: './welocome-message.component.html',
  styleUrls: ['./welocome-message.component.css']
})
export class WelocomeMessageComponent implements OnInit {
  message: Message
  constructor() { }

  ngOnInit() {
    this.message = 
      new Message('Welcome to chatbot universe', new Date())
    ;
  }

}
