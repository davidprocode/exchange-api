import {Test, TestingModule} from '@nestjs/testing';
import {ExchangeService} from './exchange.service';
import {BadRequestException} from '@nestjs/common';

describe('ExchangeService', () => {
    let service: ExchangeService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({providers: [ExchangeService]}).compile();

        service = module.get<ExchangeService>(ExchangeService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('convertAmount()', () => {
        it('should be throw if is called with invalid params', async () => {
            await expect(service.convertAmount({from: '', to: '', amount: ''})).rejects.toThrow()
        });
    });
});
