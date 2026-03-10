import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artista } from 'src/artistas/artista.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Artista)
    private repo:Repository<Artista>,
    private jwtService:JwtService
  ){}

  async register(data: any) {

      if (!data || !data.password) {
        throw new Error('Password requerido');
      }
      const hash = await bcrypt.hash(data.password, 10);
      const user = await this.repo.save({
        ...data,
        password: hash
      });

      return user;
  }

  async login(nombre,password){

    const user = await this.repo.findOne({where:{nombre}})

    if(!user) throw new UnauthorizedException()

    const match = await bcrypt.compare(password,user.password)

    if(!match) throw new UnauthorizedException()

    const payload={
      id:user.id,
      rol:user.rol
    }

    return {
      access_token:this.jwtService.sign(payload)
    }
  }
}
