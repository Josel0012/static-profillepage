import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shift-page',
  templateUrl: './shift-page.component.html',
  styleUrls: ['./shift-page.component.scss'],
})
export class ShiftPageComponent implements OnInit {
  scheduleForm!: FormGroup;

  daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  timeSlots = [
    'Mornings',
    'Afternoons',
    'Overnight Active',
    'Overnight Passive',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.scheduleForm = this.fb.group({
      schedule: this.fb.array(
        this.daysOfWeek.map(() => {
          return this.createDaySchedule();
        })
      ),
    });
  }

  createDaySchedule(): FormGroup {
    const group: any = {};
    this.timeSlots.forEach((slot) => {
      group[slot] = [''];
    });
    return this.fb.group(group);
  }

  schedule(): FormArray {
    return this.scheduleForm.get('schedule') as FormArray;
  }

  onSubmit() {
    for (let sched of this.schedule().controls) {
      console.log(sched.value);
    }
  }
}
