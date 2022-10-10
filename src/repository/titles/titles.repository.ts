import { Injectable, Inject } from '@nestjs/common';
import { Repository, In, EntityManager } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TitlesEntity } from './titles.entity';

@Injectable()
export class TitlesRepository {
  constructor(
    @InjectRepository(TitlesEntity)
    private repository: Repository<TitlesEntity>,
  ) {}

  async findTitle(): Promise<TitlesEntity[]> {
    const data =  await this.repository.find({
      where: {
        emp_no: In([10001]),
      },
    });
    return data
  }

  async updateTitle(transactionManager: EntityManager): Promise<void> {
    await transactionManager.update(
      TitlesEntity,
      {emp_no: In([10001])},
      {title: 'Senior Engineer xx'},
    )
  }
}