import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Item extends Model {
  @Column
  todo_id: number;

  @Column
  description: string;

  @Column({ defaultValue: false })
  isDone: boolean;
}
