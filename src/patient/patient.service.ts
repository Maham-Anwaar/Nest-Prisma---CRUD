import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PatientService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createPatientDto: Prisma.PatientCreateInput) {
    return this.databaseService.patient.create({ data: createPatientDto });
  }

  async findAll() {
    return this.databaseService.patient.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.patient.findUnique({ where: { id } });
  }

  // update(id: number, updatePatientDto: UpdatePatientDto) {
  //   return `This action updates a #${id} patient`;
  // }

  async remove(id: number) {
    return `This action removes a #${id} patient`;
  }

  async transfer(patientId: number, targetFacilityId: number): Promise<void> {
    const patient = await this.databaseService.patient.findUnique({
      where: { id: patientId },
    });

    if (!patient) {
      throw new NotFoundException(`Patient with ID ${patientId} not found`);
    }

    await this.databaseService.patient.update({
      where: { id: patientId },
      data: {
        facilityId: targetFacilityId,
      },
    });
  }
}
