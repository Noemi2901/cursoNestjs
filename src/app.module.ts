import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ArtistasModule } from './artistas/artistas.module';
import { CancionesModule } from './canciones/canciones.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        autoLoadEntities: true,
        synchronize: true,
        ssl: {
          rejectUnauthorized: false,
        },
      }),
    ArtistasModule,
    CancionesModule,
    AuthModule,
  ],
})
export class AppModule {}
