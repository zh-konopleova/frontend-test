import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  searchControl: FormControl;

  constructor(private appService: AppService) { }

  ngOnInit() {
    // this.searchControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(100)]);

    // this.searchControl.valueChanges.subscribe((value) => console.log(value));
    // this.searchControl.statusChanges.subscribe((status) => console.log(status));
  }

  onSubmit(): void {
    this.appService.createRequest(this.searchControl.value);
  }


}
