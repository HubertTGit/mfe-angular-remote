import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '@services/auth.service';
import { ChatUi } from '@ui/chat-ui/chat-ui';

@Component({
  selector: 'app-chat-screen',
  imports: [ChatUi],
  templateUrl: './chat.html',
})
export class ChatScreen {
  private readonly authService = inject(AuthService);
  user = toSignal(this.authService.userState$());
}
