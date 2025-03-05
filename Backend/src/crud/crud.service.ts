import { Injectable } from '@nestjs/common';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud } from './entities/crud.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CrudService {
  constructor(
    @InjectRepository(Crud) private readonly crudService: Repository<Crud>,
  ) {}

  async create(createCrudDto: CreateCrudDto) {
    const data = await this.crudService.create(createCrudDto);
    return this.crudService.save(data);
  }

  async findAll() {
    try {
      const data = await this.crudService.find();
      return data.length == 0 ? 'NO SE ENCONTRARON DATOS' : data;
    } catch (error) {
      return error;
    }
  }

  findOne(id: number) {
    return this.crudService.findOne({ where: { codigo: id } });
  }

  async update(id: number, updateCrudDto: UpdateCrudDto) {
    try {
      const data = await this.findOne(id);
      if (data) {
        this.crudService.update(id, updateCrudDto);
        return 'ACTUALIZADO CON EXITO';
      }
      return 'NO SE ENCONTRO DATOS';
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const data = await this.findOne(id);
      if (data) {
        this.crudService.delete(id);
        return 'ELIMINADO CON EXITO';
      }
      return 'NO ENCONTRADO';
    } catch (error) {
      return error;
    }
  }
}
