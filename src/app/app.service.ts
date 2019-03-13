import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Request { query: string;}
export interface RequestId extends Request { id: string; }

@Injectable()
export class AppService {
  private RequestCollection: AngularFirestoreCollection<Request>;
  requests: Observable<RequestId[]>;

  constructor(private db: AngularFirestore) {}

  createRequest(query: string): void {
    // let createdAt = +new Date();
    this.db.collection('search-history').add({query, createdAt});
  }

  deleteRequest(id: string) {
    this.db.collection('search-history').doc(id).delete();
  }

  getAllRequests(): Observable<any[]> {
    return this.db.collection('search-history').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }));
  }

  // getRequest(id): Observable<any> {
  //   return this.db.collection('search-history').doc(id).valueChanges();
  // }

}
