import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Core
import { RolesModule } from './roles/roles.module';
import { TiposDocModule } from './tipos-doc/tipos-doc.module';
import { UsuariosModule } from './usuarios/usuarios.module';

// Conductores y salud
import { EpsModule } from './eps/eps.module';
import { ArlModule } from './arl/arl.module';
import { ConductoresModule } from './conductores/conductores.module';

// Vehículos
import { TipoVehiculoModule } from './tipo-vehiculo/tipo-vehiculo.module';
import { MarcasModule } from './marcas/marcas.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';

// Ubicaciones y rutas
import { UbicacionesModule } from './ubicaciones/ubicaciones.module';
import { RutasModule } from './rutas/rutas.module';

// Turnos y pasajes
import { TurnosModule } from './turnos/turnos.module';
import { MetodoPagoModule } from './metodo-pago/metodo-pago.module';
import { PasajesModule } from './pasajes/pasajes.module';
import { DetallePasajePasajeroModule } from './detalle-pasaje-pasajero/detalle-pasaje-pasajero.module';

// Reservas privadas
import { ReservasPrivadasModule } from './reservas-privadas/reservas-privadas.module';
import { DetalleReservaPrivadaPasajeroModule } from './detalle-reserva-privada-pasajero/detalle-reserva-privada-pasajero.module';

// Encomiendas
import { EstadosEncomiendaModule } from './estados-encomienda/estados-encomienda.module';
import { EncomiendasModule } from './encomiendas/encomiendas.module';
import { HistorialEstadoEncomiendaModule } from './historial-estado-encomienda/historial-estado-encomienda.module';

@Module({
  imports: [
    // =========================
    // CONEXIÓN A BASE DE DATOS
    // =========================
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'enrutapp',
      password: '12345',
      database: 'enrutapp',
      autoLoadEntities: true,
      synchronize: false, // ⚠️ mantener false en producción
    }),

    // =========================
    // MÓDULOS
    // =========================
    RolesModule,
    TiposDocModule,
    UsuariosModule,

    EpsModule,
    ArlModule,
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
  controllers: [],
  providers: [],
})
export class AppModule {}