import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  requestList;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.requestList = this.appService.getAllRequests();
  }

}
