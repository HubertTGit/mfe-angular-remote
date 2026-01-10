import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chat-ui',
  imports: [FormsModule, DatePipe],
  templateUrl: './chat-ui.html',
})
export class ChatUi {
  messages = signal<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  newMessage = signal('');

  sendMessage() {
    if (!this.newMessage().trim()) return;

    this.messages.update((msgs) => [
      ...msgs,
      {
        id: crypto.randomUUID(),
        text: this.newMessage(),
        sender: 'user',
        timestamp: new Date(),
      },
    ]);
    this.newMessage.set('');
  }
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}
