import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ServerModel} from '../models/servers.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllServers(): Observable<ServerModel[]> {
    return this.http.get<ServerModel[]>(`${this.baseUrl}servers`);
  }

  public getServerById(id: number): Observable<ServerModel> {
    return this.http.get<ServerModel>(`${this.baseUrl}servers/${id}`);
  }

  public turnOnServer(id: number): Observable<ServerModel> {
    return this.http.put<ServerModel>(`${this.baseUrl}servers/${id}/on`, {});
  }

  public turnOffServer(id: number): Observable<ServerModel> {
    return this.http.put<ServerModel>(`${this.baseUrl}servers/${id}/off`, {});
  }

  public rebootServer(id: number): Observable<ServerModel> {
    return this.http.put<ServerModel>(`${this.baseUrl}servers/${id}/reboot`, {});
  }

}


