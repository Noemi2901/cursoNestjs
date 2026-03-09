import { Injectable } from '@nestjs/common';
import { Cancion } from './cancione.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CancionesService {
      constructor(
        @InjectRepository(Cancion)
        private repo:Repository<Cancion>
      ){}

      create(data){
       return this.repo.save(data);
      }

      findAll(){
        return this.repo.find({relations:['artista']});
      }

      update(id: number,data){
        return this.repo.update(id,data);
      }

      delete(id: number){
        return this.repo.delete(id);
      }

}
