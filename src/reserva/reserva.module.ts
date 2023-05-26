import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { ReservaEntity } from './reserva.entity';
import { ReservaController } from './reserva.controller';

@Module({
  imports:[TypeOrmModule.forFeature([ReservaEntity])],
  providers: [ReservaService],
  controllers: [ReservaController]
})
export class ReservaModule {}
