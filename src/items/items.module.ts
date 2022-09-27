// same as app.module.ts
import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
// import { ItemSchema } from './schemas/items.schema';
import { DatabaseModule } from '../Sequelize/database.module';
import { itemsProviders } from './items.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ItemsController],
  providers: [ItemsService, ...itemsProviders],
})
export class ItemsModule {}
