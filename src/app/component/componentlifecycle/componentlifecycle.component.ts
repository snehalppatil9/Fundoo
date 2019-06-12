import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentlifecycle',
  templateUrl: './componentlifecycle.component.html',
  styleUrls: ['./componentlifecycle.component.scss']
})
export class ComponentlifecycleComponent implements OnInit {

  data:number=100;
  constructor() {
      console.log(`new - data is ${this.data}`);
  }
  ngOnChanges() {
      console.log(`ngOnChanges - data is ${this.data}`);
  }
  ngOnInit() {
      console.log(`ngOnInit  - data is ${this.data}`);
  }
  ngDoCheck() {
      console.log("ngDoCheck")
  }
  ngAfterContentInit() {
      console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
      console.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
      console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
      console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
      console.log("ngOnDestroy");
  }
  fnAddNumber():void{
      this.data+=100;
  }
  deleteNumber():void{
      this.data -=10;
  }
}
