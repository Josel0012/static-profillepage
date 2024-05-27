import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rate-page',
  templateUrl: './rate-page.component.html',
  styleUrls: ['./rate-page.component.scss']
})
export class RatePageComponent implements OnInit{
  rateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(){
    this.rateForm = this.fb.group({
      hourlyRate: ['', Validators.required],

    });
  }

  onSubmit(){
    console.log(this.rateForm.value);
  }
}
