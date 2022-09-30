import { Sequelize } from 'sequelize-typescript';
import { Item } from '../items/items.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 7000,
        username: 'postgres',
        password: 'Eagle2022',
        database: 'taskify',
      });
      sequelize.addModels([Item]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
