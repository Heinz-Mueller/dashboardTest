import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss'],
})

export class MyTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // console.log('myTest Ausgabe');
  }



  test(): void {
    // @ts-ignore
    debugger;
    // @ts-ignore
    console.log("TESTTTT");
    // @ts-ignore
    debugger;
  }

}

