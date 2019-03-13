import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.appService.createRequest(this.query);
    this.query = '';
  }


}
