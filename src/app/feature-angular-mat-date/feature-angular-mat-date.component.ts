import { Component, OnInit } from '@angular/core';
import { AngularMatDateService } from './angular-mat-date.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feature-angular-mat-date',
  templateUrl: './feature-angular-mat-date.component.html',
  styleUrls: ['./feature-angular-mat-date.component.css']
})
export class FeatureAngularMatDateComponent implements OnInit {
  userDate!: any; // Bind the user input to this variable
  responseDate!: any; // This will store the date from the API or response

  dateForm!: FormGroup;

  constructor(private dataService: AngularMatDateService) { }

  ngOnInit(): void {
    this.dateForm = new FormGroup({
      senddate: new FormControl('') ,// Define the form control for date
      responDate: new FormControl('')
    });
    this.dataService.getData().subscribe((data: any[])=>{
      console.log(data)
      this.responseDate = new Date(data[0].createdAt)
      this.dateForm.controls['responDate'].setValue(new Date(data[0].createdAt))
    },(error)=>{
      console.log(error)
    })
  }

  onDateChange(event: any)
  {
    //console.log(event)
    let date = this.formatDate(event.value)
    console.log(date)
    
  }
  formatDate(date: Date): string {
    if (!date) return '';
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-based
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year
    return `${month}/${day}/${year}`;
  }
  onFormControlDateChange(event: any)
  {
    let date = this.formatDate(event.value)
    console.log(date)
  }
  onSubmit()
  {

  }
  resetFormControl()
  {
    this.dateForm.controls['senddate'].reset()
    this.dateForm.controls['responDate'].reset()
  }
  resetNgModelControl()
  {
    this.userDate = ''; // Bind the user input to this variable
    this.responseDate = '';
  }
  setOtherNgmodelValue(){
    this.responseDate = new Date()
    this.userDate = new Date()
  }
  setOtherFormControlValue()
  {
    this.dateForm.controls['senddate'].patchValue(new Date())
    this.dateForm.controls['responDate'].patchValue(new Date())
  }
}
