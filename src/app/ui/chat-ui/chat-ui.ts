import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { LucideAngularModule, SendHorizontal } from 'lucide-angular';
import { form, FormField } from '@angular/forms/signals';

interface IChatMessage {
  id: string;
  message: string;
  userid: string;
  username: string;
  avatar: string;
  timestamp: Date;
}

@Component({
  selector: 'app-chat-ui',
  imports: [FormsModule, DatePipe, LucideAngularModule, FormField],
  templateUrl: './chat-ui.html',
})
export class ChatUi {
  readonly sendHorizontal = SendHorizontal;

  chatModel = signal<IChatMessage>({
    id: '',
    message: '',
    userid: '',
    username: '',
    avatar: '',
    timestamp: new Date(),
  });
  chatForm = form(this.chatModel);

  messages = signal<IChatMessage[]>([
    {
      id: '1',
      message: 'Hello! How can I help you today?',
      userid: 'bot',
      username: 'Bot',
      avatar: 'https://via.placeholder.com/150',
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
        message: this.newMessage(),
        userid: 'user',
        username: 'User',
        avatar: 'https://via.placeholder.com/150',
        timestamp: new Date(),
      },
    ]);
    this.newMessage.set('');
  }
}
