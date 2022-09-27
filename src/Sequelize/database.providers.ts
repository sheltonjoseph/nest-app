import { Sequelize } from 'sequelize-typescript';
import { Item } from '../items/items.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'nest',
      });
      sequelize.addModels([Item]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
