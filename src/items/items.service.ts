import { Injectable, Inject } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './items.entity';
// similar to dto
@Injectable()
export class ItemsService {
  constructor(
    @Inject('ITEMS_REPOSITORY') private ItemsRepository: typeof Item,
  ) {}
  // HARDCODEDED DATA FOR REFERENCE
  //   private readonly items: Item[] = [
  //     {
  //       id: '23423423423',
  //       name: 'item one',
  //       qty: 100,
  //       description: 'THIS IS ITEM ONE',
  //     },
  //     {
  //       id: '22342314',
  //       name: 'item two',
  //       qty: 50,
  //       description: 'THIS IS ITEM two',
  //     },
  //   ];

  //   async findAll(): Item[] {
  //     return this.items; // you can acces the items inside the class using this keyword since it is a class
  //   }
  //   findOne(id: string): Item {
  //     return this.items.find((item) => item.id === id);
  //   }

  async findAll(): Promise<Item[]> {
    return await this.ItemsRepository.findAll<Item>();
  }
  @ApiParam({ name: 'id', required: true })
  async findOne(id: any): Promise<Item> {
    return await this.ItemsRepository.findOne((id = id));
  }

  async create(item: CreateItemDto): Promise<Item> {
    const newItem = new this.ItemsRepository(item);
    const res: any = await newItem.save();
    return res;
  }

  // async delete(id: string): Promise<Item> {
  //   return await this.ItemsRepository.findByIdAndRemove(id);
  // }
  // async update(id: string, item: Item): Promise<Item> {
  //   return await this.ItemsRepository.findByIdAndUpdate(id, item, { new: true });
  // }
}
