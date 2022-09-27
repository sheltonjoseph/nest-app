import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';

@Table
export class Item extends Model {
  //   @AutoIncrement
  //   @PrimaryKey
  //   @Column(DataType.BIGINT)
  //   todo_id: number;

  @Column
  description: string;

  @Column({ defaultValue: false })
  isDone: boolean;
}
