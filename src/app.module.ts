import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'enrutapp',
      password: '12345',
      database: 'enrutapp',
      autoLoadEntities: true,
      synchronize: false, 
    }),
    UsuariosModule,
  ],
})
export class AppModule {}
