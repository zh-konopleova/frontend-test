import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AppService } from '../app.service';
import { Request } from '../request.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: FormGroup = new FormGroup({
    query: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(100)
    ])
  })

  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    let request = new Request(this.form.get('query').value);
    this.appService.createRequest(request);

    this.form.reset();
  }

  isControlValid(control: string) {
    return this.form.controls[control].valid;
  }
}
