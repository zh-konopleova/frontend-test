import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class AppService {
  constructor(private db: AngularFirestore) {}

}
