import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
buttonClickCounter:number=0;
buttonClickList=[];
IsbuttonCreated:boolean=false;
onButtonClick()
{
  this.buttonClickCounter++;
  this.IsbuttonCreated=!this.IsbuttonCreated;
  this.buttonClickList.push("Button Click Number is "+this.buttonClickCounter);
}

  constructor() { }

  ngOnInit() {
  }

}
