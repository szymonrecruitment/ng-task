export interface ServerModel {
  id: number;
  name: string;
  status: 'ONLINE' | 'OFFLINE' | 'REBOOTING';
}
