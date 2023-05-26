import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservaModule } from './reserva/reserva.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaEntity } from './reserva/reserva.entity';
import { LoginModule } from './login/login.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'reservas',
    entities: [
      ReservaEntity
    ],
    dropSchema: true,
    synchronize: true,
    keepConnectionAlive: true,
  }),ReservaModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
