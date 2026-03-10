import { Module } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { CancionesController } from './canciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cancion } from './cancione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cancion])],
  controllers: [CancionesController],
  providers: [CancionesService],
  exports: [CancionesService]
})
export class CancionesModule {}
