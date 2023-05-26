import { Controller, UseInterceptors,Get,Param ,Post ,Body, Put} from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';
import { ReservaDto } from './reserva.dto';
import { ReservaEntity } from './reserva.entity';
import { plainToInstance } from 'class-transformer';

@Controller('reserva')
@UseInterceptors(BusinessErrorsInterceptor)
export class ReservaController {
    constructor(private readonly reservaService: ReservaService){}

    @Get()
    async findAll() {
        return await this.reservaService.findAll();
    }

    @Get(':reservaId/:correo')
    async findOne(@Param('reservaId') reservaId:string,@Param('correo') correo:string) {
        return await this.reservaService.findOne(reservaId,correo);
    }

    @Post()
    async create(@Body() reservaDTO: ReservaDto) {
      const reserva: ReservaEntity = plainToInstance(ReservaEntity,reservaDTO);
      return await this.reservaService.create(reserva);
    }

    @Put(':reservaId')
    async update(@Param('reservaId') reservaId:string, @Body() reservaDTO: ReservaDto) {
      const reserva: ReservaEntity = plainToInstance(ReservaEntity,reservaDTO);
      return await this.reservaService.update(reservaId,reserva);
    }
}
