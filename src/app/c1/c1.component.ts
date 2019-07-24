import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  img: string;
  constructor() { }

  ngOnInit() {
    this.img = 'https://static.giantbomb.com/uploads/original/0/1872/413615-neo.jpg';
  }

}
