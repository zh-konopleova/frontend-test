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
    this.db.collection('search-history').add({query});
  }

  deleteRequest() {
    alert(123);

  //   // this.ref.collection('search-history').doc().delete();
  //   // this.db.collection('search-history').doc().delete().then(function() {
  //   //   console.log("Document successfully deleted!");
  //   //   })
  //   // .catch(function(error) {
  //   //   console.error("Error removing document: ", error);
  //   // });
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
