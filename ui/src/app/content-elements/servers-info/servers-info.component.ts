import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers-info',
  templateUrl: './servers-info.component.html',
  styleUrls: ['./servers-info.component.scss']
})
export class ServersInfoComponent implements OnInit {

  @Input() public serversNumber: number;

  constructor() {
  }

  ngOnInit() {
  }

}
