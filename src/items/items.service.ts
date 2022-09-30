import { Injectable, Inject } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './items.entity';
// similar to dto
@Injectable()
export class ItemsService {
  constructor(
    @Inject('ITEMS_REPOSITORY') private ItemsRepository: typeof Item,
  ) {}

  async findAll(): Promise<Item[]> {
    return await this.ItemsRepository.findAll<Item>({
      order: [['createdAt', 'DESC']],
    });
  }

  async findOne(id: number): Promise<Item> {
    return await this.ItemsRepository.findOne({ where: { id } });
  }

  async create(item: CreateItemDto): Promise<Item> {
    // const newItem = new this.ItemsRepository(item);
    return await this.ItemsRepository.save(item);
  }

  async delete(id: number): Promise<any> {
    const res = await this.ItemsRepository.destroy({ where: { id } });
    return res;
  }
  async update(id: number, item: CreateItemDto): Promise<any> {
    // return
    const result = await this.ItemsRepository.update(item, { where: { id } });
    return result;
  }
}
