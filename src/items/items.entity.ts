import { Table, Column, Model } from 'sequelize-typescript';
import { CreateItemDto } from './dto/create-item.dto';

@Table
export class Item extends Model {
  static save(item: CreateItemDto): import("./dto/create-item.dto").CreateItemDto | PromiseLike<import("./dto/create-item.dto").CreateItemDto> {
    throw new Error('Method not implemented.');
  }
  @Column
  description: string;

  @Column({ defaultValue: false })
  isDone: boolean;
}
