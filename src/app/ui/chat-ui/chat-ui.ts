import {
  Component,
  computed,
  effect,
  input,
  output,
  signal,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { LucideAngularModule, SendHorizontal } from 'lucide-angular';
import { form, FormField, required } from '@angular/forms/signals';
import { User } from '@angular/fire/auth';
import { IChatMessage } from './chat.interface';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-chat-ui',
  imports: [FormsModule, DatePipe, LucideAngularModule, FormField],
  templateUrl: './chat-ui.html',
})
export class ChatUi {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  constructor() {
    effect(() => {
      this.messages();
      setTimeout(() => {
        this.scrollToBottom();
      }, 50);
    });
  }

  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  user = input<User | null>();
  onChat = output<IChatMessage>();
  messages = input<IChatMessage[] | undefined>([]);
  title = input<string>('Chat Support');

  online = computed(() => {
    const msgs = this.messages() || [];
    return new Set(msgs.map((m) => m.userid)).size;
  });

  private initialChatMessage: IChatMessage = {
    message: '',
    userid: 'user',
    username: 'User',
    avatar: 'https://via.placeholder.com/150',
    created: Date.now().toString(),
  };

  readonly sendHorizontal = SendHorizontal;

  chatModel = signal<IChatMessage>(this.initialChatMessage);

  chatForm = form(this.chatModel, (schema) => {
    required(schema.message);
  });

  sendMessage() {
    const currentForm = this.chatForm().value();
    this.chatForm().setControlValue({
      ...currentForm,
      created: Date.now().toString(),
      userid: this.user()?.uid || 'user',
      username: this.user()?.displayName || 'User',
      avatar: this.user()?.photoURL || 'https://via.placeholder.com/150',
    });

    this.onChat.emit(this.chatForm().value());

    this.chatForm().value().message = '';
  }
}
