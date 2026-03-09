import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artista } from './artista.entity';

@Injectable()
export class ArtistasService {
  
  
  constructor(
     @InjectRepository(Artista)
     private repo: Repository<Artista>,
  ) {}

  create(data){
  return this.repo.save(data);
  }

  findAll(){
  return this.repo.find({relations:['canciones']});
  }

  findOne(id:number){
  return this.repo.findOne({where:{id}});
  }

  update(id:number,data){
  return this.repo.update(id,data);
  }

  remove(id:number){
  return this.repo.delete(id);
  }
}
