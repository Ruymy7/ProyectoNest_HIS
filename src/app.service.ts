import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome(): string {
    return 'API REST HIS Bootcamp GeeksHubs | FutuRS (Ribera Salud)';
  }
}
