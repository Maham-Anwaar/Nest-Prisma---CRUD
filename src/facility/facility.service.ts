import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FacilityService {
  constructor(readonly databaseService: DatabaseService) {}

  async create(createFacilityDto: Prisma.FacilityCreateInput) {
    return this.databaseService.facility.create({ data: createFacilityDto });
  }

  async findAll() {
    return this.databaseService.facility.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.facility.findUnique({ where: { id } });
  }

  async update(id: number, updateFacilityDto: Prisma.FacilityUpdateInput) {
    return `This action updates a #${id} facility`;
  }

  async remove(id: number) {
    this.databaseService.facility.delete({ where: { id } });
  }
}
