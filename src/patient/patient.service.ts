import { Injectable } from '@nestjs/common';
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

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
