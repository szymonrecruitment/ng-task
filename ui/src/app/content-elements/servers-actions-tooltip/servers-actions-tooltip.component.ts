import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServerModel} from '../../../shared/models/servers.model';

@Component({
  selector: 'app-servers-actions-tooltip',
  templateUrl: './servers-actions-tooltip.component.html',
  styleUrls: ['./servers-actions-tooltip.component.scss']
})
export class ServersActionsTooltipComponent implements OnInit {

  @Input() public server: ServerModel;
  @Output() private serverAction = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public makeServerAction(action: string): void {
    this.serverAction.emit({server: this.server, action});
  }
}
