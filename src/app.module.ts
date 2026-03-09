import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ArtistasModule } from './artistas/artistas.module';
import { CancionesModule } from './canciones/canciones.module';
import { RolesModule } from './roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
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
