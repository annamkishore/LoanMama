import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.css']
})
export class NewLoanComponent implements OnInit {
  newLoanForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    mobile: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  onNewLoan() {
    // TODO: Use EventEmitter with form value
    console.warn(this.newLoanForm.value);
  }

  keyDownEvent(event) {
    if (event.keyCode === 13 && this.newLoanForm.valid) {
      this.onNewLoan();
    }
  }
}
