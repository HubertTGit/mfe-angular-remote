import { Timestamp } from '@angular/fire/firestore';

export interface IChatMessage {
  id?: string;
  message: string;
  userid: string | undefined;
  username: string | undefined | null;
  avatar: string | undefined | null;
  created: Timestamp;
}
