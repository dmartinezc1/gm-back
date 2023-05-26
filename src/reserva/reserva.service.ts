import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReservaEntity } from './reserva.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class ReservaService {
    constructor(
        @InjectRepository(ReservaEntity)
        private readonly resevaRepository: Repository<ReservaEntity>
    ){}

    async findAll(): Promise<ReservaEntity[]> {
        return await this.resevaRepository.find();
    }

    async findOne(id: string,correo: string): Promise<ReservaEntity> {
        const reserva: ReservaEntity = await this.resevaRepository.findOne({where: [{id:id},{correo:correo}] } );
        if (!reserva)
          throw new BusinessLogicException("La reserva no existe", BusinessError.NOT_FOUND);
   
        return reserva;
    }

    async create(reserva: ReservaEntity): Promise<ReservaEntity> {
        return await this.resevaRepository.save(reserva);
    }

    async update(id: string, reserva: ReservaEntity): Promise<ReservaEntity> {
        const persistedReserva: ReservaEntity = await this.resevaRepository.findOne({where:{id}});
        if (!persistedReserva)
          throw new BusinessLogicException("The museum with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.resevaRepository.save({...persistedReserva, ...reserva});
    }
}
