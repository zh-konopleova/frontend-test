import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';

import { Request } from './request.model';

@Injectable()
export class AppService {
  constructor(private db: AngularFirestore) {}

  createRequest(request: Request): void {
    this.db.collection('search-history').add(request.serialize())
  }

  deleteRequest(request: Request): void {
    this.db.collection('search-history').doc(request.id).delete();
  }

  getAllRequests(): Observable<Request[]> {
    return this.db.collection('search-history')
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        }),
        map((requests) => {
          return requests.map((request) => new Request().deserialize(request));
        }),
        map((requests) => {
          return requests.sort(Request.compare);
        })
      );
  }
}
