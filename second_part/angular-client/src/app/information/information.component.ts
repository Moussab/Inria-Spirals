import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  @Input()
  information: any;

  constructor() { }

  ngOnInit() {
  }

}
