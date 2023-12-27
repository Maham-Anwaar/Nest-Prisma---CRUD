import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  HttpCode,
  Param,
  Delete,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { Prisma } from '@prisma/client';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  async create(@Body() createPatientDto: Prisma.PatientCreateInput) {
    return this.patientService.create(createPatientDto);
  }

  @Get()
  async findAll() {
    return this.patientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.patientService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePatientDto: Prisma.PatientUpdateInput,
  // ) {
  //   return this.patientService.update(+id, updatePatientDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.patientService.remove(+id);
  }

  @Post('transfer')
  @HttpCode(204)
  async transferPatienttoAnotherFacility(
    @Body() data: { patientId: string; targetFacilityId: string },
  ) {
    return this.patientService.transfer(
      +data.patientId,
      +data.targetFacilityId,
    );
  }
}
