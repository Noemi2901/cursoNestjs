import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Artista } from '../artistas/artista.entity';

@Entity()
export class Cancion {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  duracion: number;

  @Column()
  album: string;

  @Column()
  anioLanzamiento: number;

  @Column()
  reproducciones: number;

  @ManyToOne(() => Artista, (artista) => artista.canciones)
  artista: Artista;
}
