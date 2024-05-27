import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bio-page',
  templateUrl: './bio-page.component.html',
  styleUrls: ['./bio-page.component.scss']
})
export class BioPageComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}


  ngOnInit(){
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      residentialAddress: ['', Validators.required],
      suburb: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      mobileNumber: ["", [Validators.required,Validators.pattern('[- +()0-9]+')]],
      ageRange: ['', Validators.required],
      gender: ['', Validators.required],
      profilePicture: [null]
    });
  }

  profile(field:string): FormGroup | any {
    return this.profileForm.controls[field] as FormGroup;
  }

  onSubmit(){
    console.log(this.profileForm.value);
    if(!this.profileForm.valid){
      alert('Please input valid data');
      return
    }

    alert("Saved Info");
    
  }
}
