import { Component } from '@angular/core';
import { ChatUi } from '@ui/chat-ui/chat-ui';

@Component({
  selector: 'app-chat-screen',
  imports: [ChatUi],
  templateUrl: './chat.html',
})
export class ChatScreen {}
