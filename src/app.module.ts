import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PatientModule } from './patient/patient.module';
import { FacilityModule } from './facility/facility.module';

@Module({
  imports: [DatabaseModule, PatientModule, FacilityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
