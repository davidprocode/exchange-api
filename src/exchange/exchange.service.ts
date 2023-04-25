import { Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeService {
  async convertAmount(): Promise<any> {
    throw new Error();
  }
}
