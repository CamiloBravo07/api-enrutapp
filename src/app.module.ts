import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TiposDocModule } from './tipos-doc/tipos-doc.module';
import { RolesModule } from './roles/roles.module';
import { EpsModule } from './eps/eps.module';
import { ArlController } from './arl/arl.controller';
import { ArlModule } from './arl/arl.module';
import { ConsuctoresModule } from './consuctores/consuctores.module';
import { ConductoresService } from './conductores/conductores.service';
import { ConductoresController } from './conductores/conductores.controller';
import { ConductoresModule } from './conductores/conductores.module';
import { TipoVehiculoModule } from './tipo-vehiculo/tipo-vehiculo.module';
import { MarcasService } from './marcas/marcas.service';
import { MarcasController } from './marcas/marcas.controller';
import { MarcasModule } from './marcas/marcas.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';
import { UbicacionesService } from './ubicaciones/ubicaciones.service';
import { UbicacionesModule } from './ubicaciones/ubicaciones.module';
import { RutasController } from './rutas/rutas.controller';
import { RutasModule } from './rutas/rutas.module';
import { TurnosService } from './turnos/turnos.service';
import { TurnosModule } from './turnos/turnos.module';
import { MetodoPagoController } from './metodo-pago/metodo-pago.controller';
import { MetodoPagoModule } from './metodo-pago/metodo-pago.module';
import { PasajesService } from './pasajes/pasajes.service';
import { PasajesModule } from './pasajes/pasajes.module';
import { DetallePadajePasajeroController } from './detalle-padaje-pasajero/detalle-padaje-pasajero.controller';
import { DetallePasajePasajeroController } from './detalle-pasaje-pasajero/detalle-pasaje-pasajero.controller';
import { DetallePasajePasajeroModule } from './detalle-pasaje-pasajero/detalle-pasaje-pasajero.module';
import { ReservasPrivadasService } from './reservas-privadas/reservas-privadas.service';
import { ReservasPrivadasController } from './reservas-privadas/reservas-privadas.controller';
import { ReservasPrivadasModule } from './reservas-privadas/reservas-privadas.module';
import { DetalleReservaPrivadaPasajeroModule } from './detalle-reserva-privada-pasajero/detalle-reserva-privada-pasajero.module';
import { EstadosEncomiendaService } from './estados-encomienda/estados-encomienda.service';
import { EstadosEncomiendaModule } from './estados-encomienda/estados-encomienda.module';
import { EncomiendasController } from './encomiendas/encomiendas.controller';
import { EncomiendasService } from './encomiendas/encomiendas.service';
import { EncomiendasModule } from './encomiendas/encomiendas.module';
import { HistorialEstadoEncomiendaModule } from './historial-estado-encomienda/historial-estado-encomienda.module';

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
    TiposDocModule,
    RolesModule,
    EpsModule,
    ArlModule,
    ConsuctoresModule,
    ConductoresModule,
    TipoVehiculoModule,
    MarcasModule,
    VehiculosModule,
    UbicacionesModule,
    RutasModule,
    TurnosModule,
    MetodoPagoModule,
    PasajesModule,
    DetallePasajePasajeroModule,
    ReservasPrivadasModule,
    DetalleReservaPrivadaPasajeroModule,
    EstadosEncomiendaModule,
    EncomiendasModule,
    HistorialEstadoEncomiendaModule,
  ],
  controllers: [ArlController, ConductoresController, MarcasController, RutasController, MetodoPagoController, DetallePadajePasajeroController, DetallePasajePasajeroController, ReservasPrivadasController, EncomiendasController],
  providers: [ConductoresService, MarcasService, UbicacionesService, TurnosService, PasajesService, ReservasPrivadasService, EstadosEncomiendaService, EncomiendasService],
})
export class AppModule {}
