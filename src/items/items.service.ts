import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
// similar to dto
@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
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
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }
  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
