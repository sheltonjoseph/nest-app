import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Item extends Model {
  @Column
  description: string;

  @Column({ defaultValue: false })
  isDone: boolean;
}
