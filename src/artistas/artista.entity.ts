import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cancion } from '../canciones/cancione.entity';

@Entity()
export class Artista {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  pais: string;

  @Column()
  genero: string;

  @Column()
  anioDebut: number;

  @Column()
  rol: string;

  @Column()
  password: string;

  @OneToMany(() => Cancion, (cancion) => cancion.artista)
  canciones: Cancion[];
}
