import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServerModel} from '../../../shared/models/servers.model';

@Component({
  selector: 'app-servers-table',
  templateUrl: './servers-table.component.html',
  styleUrls: ['./servers-table.component.scss']
})
export class ServersTableComponent implements OnInit {

  @Input() public servers: ServerModel[];
  @Input() public searchValue: string;
  @Output() private serverTableAction = new EventEmitter();
  public selectedIndex: number;

  constructor() {
  }

  ngOnInit() {
  }

  public serverAction($event): void {
    this.serverTableAction.emit($event);
  }


}
