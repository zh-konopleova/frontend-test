import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AppService } from '../app.service';
import { Request } from '../request.model';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  requestList: Observable<Request[]>;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.requestList = this.appService.getAllRequests();
  }
}
