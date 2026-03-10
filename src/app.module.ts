import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ArtistasModule } from './artistas/artistas.module';
import { CancionesModule } from './canciones/canciones.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'musicdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ArtistasModule,
    CancionesModule,
    AuthModule,
  ],
})
export class AppModule {}
