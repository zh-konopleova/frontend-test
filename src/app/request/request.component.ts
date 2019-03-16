import { Input, Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { Request } from '../request.model';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  @Input() request: Request;

  constructor(private appService: AppService) { }

  ngOnInit(): void {}

  onClickDeleteButton(): void {
    this.appService.deleteRequest(this.request);
  }
}
