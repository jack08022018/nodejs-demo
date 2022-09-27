import { Injectable, Inject } from '@nestjs/common';
import { Repository, In } from 'typeorm';
import { TitlesEntity } from './titles.entity';

@Injectable()
export class TitlesRepository {
  constructor(
    @Inject('TITLES_REPOSITORY')
    private titlesRepository: Repository<TitlesEntity>,
  ) {}

  async findTitle(): Promise<TitlesEntity[]> {
    const data =  await this.titlesRepository.find({
      where: {
        emp_no: In([10001]),
      },
    });
    return data
  }

  // async updateTitle(): Promise<void> {
  //   await this.titlesRepository.save({
  //     salary: 100,
  //     where: {
  //       emp_no: In([10001])
  //     },
  //   });
  // }
}