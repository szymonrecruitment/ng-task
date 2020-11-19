import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-servers-search',
  templateUrl: './servers-search.component.html',
  styleUrls: ['./servers-search.component.scss']
})
export class ServersSearchComponent implements OnInit {

  @Input() public searchValue: string;
  @Output() public searchChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
