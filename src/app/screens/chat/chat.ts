import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '@services/auth.service';
import { DataService } from '@services/data.service';
import { ChatUi } from '@ui/chat-ui/chat-ui';
import { IChatMessage } from '@ui/chat-ui/chat.interface';

@Component({
  selector: 'app-chat-screen',
  imports: [ChatUi],
  templateUrl: './chat.html',
})
export class ChatScreen {
  private readonly authService = inject(AuthService);
  private readonly dataService = inject(DataService);
  user = toSignal(this.authService.userState$());
  messages = toSignal(this.dataService.getChats());

  onChatHandler(chat: IChatMessage) {
    this.dataService.addChat(chat);
  }
}
