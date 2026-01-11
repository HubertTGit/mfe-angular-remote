import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { LucideAngularModule, SendHorizontal } from 'lucide-angular';
import { form, FormField, required } from '@angular/forms/signals';
import { User } from '@angular/fire/auth';
import { IChatMessage } from './chat.interface';

@Component({
  selector: 'app-chat-ui',
  imports: [FormsModule, DatePipe, LucideAngularModule, FormField],
  templateUrl: './chat-ui.html',
})
export class ChatUi {
  user = input<User | null>();
  chatOutput = output<IChatMessage>();
  messages = input<IChatMessage[]>([]);
  online = signal<number>(1);

  readonly sendHorizontal = SendHorizontal;

  chatModel = signal<IChatMessage>({
    message: '',
    userid: this.user()?.uid,
    username: this.user()?.displayName,
    avatar: this.user()?.photoURL,
    timestamp: new Date(),
  });
  chatForm = form(this.chatModel, (schema) => {
    required(schema.message);
  });

  sendMessage() {
    this.chatOutput.emit(this.chatModel());

    this.chatModel.set({
      message: '',
      userid: this.user()?.uid,
      username: this.user()?.displayName,
      avatar: this.user()?.photoURL,
      timestamp: new Date(),
    });
    // if (!this.newMessage().trim()) return;

    // this.messages.update((msgs) => [
    //   ...msgs,
    //   {
    //     id: crypto.randomUUID(),
    //     message: this.newMessage(),
    //     userid: 'user',
    //     username: 'User',
    //     avatar: 'https://via.placeholder.com/150',
    //     timestamp: new Date(),
    //   },
    // ]);
    // this.newMessage.set('');
  }
}
