import {Component, OnInit} from '@angular/core';
import {ServersService} from '../shared/services/servers.service';
import {ServerModel} from '../shared/models/servers.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public servers$: Observable<ServerModel[]>;
  public searchValue: string;

  constructor(
    private serversService: ServersService
  ) {
  }

  ngOnInit(): void {
    this.getServers();
  }

  public getServers(): void {
    this.servers$ = this.serversService.getAllServers();
  }

  public serverAction($event): void {
    if ($event.action === 'turnOff') {
      this.serversService.turnOffServer($event.server.id).subscribe(res => {
        this.getServers();
      });
    }

    if ($event.action === 'turnOn') {
      this.serversService.turnOnServer($event.server.id).subscribe(res => {
        this.getServers();
      });
    }

    if ($event.action === 'reboot') {
      this.serversService.rebootServer($event.server.id).subscribe(res => {
        const tmpServerRebooting: ServerModel = res;
        const rebootInterval = setInterval(() => {
          this.serversService.getServerById($event.server.id).subscribe(server => {
            if (JSON.stringify(server) !== JSON.stringify(tmpServerRebooting)) {
              clearInterval(rebootInterval);
              this.getServers();
            }
          });
        }, 1000);
        this.getServers();
      });
    }
  }


}
