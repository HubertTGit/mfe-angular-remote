import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  CollectionReference,
  query,
  orderBy,
} from '@angular/fire/firestore';
import { IChatMessage } from '@ui/chat-ui/chat.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private firestore = inject(Firestore);

  getChats(): Observable<IChatMessage[]> {
    const chatCollection = collection(this.firestore, 'chats') as CollectionReference<IChatMessage>;
    const q = query(chatCollection, orderBy('created'));
    return collectionData(q, { idField: 'id' });
  }

  addChat(chat: IChatMessage) {
    const chatCollection = collection(this.firestore, 'chats');
    return addDoc(chatCollection, chat);
  }
}
