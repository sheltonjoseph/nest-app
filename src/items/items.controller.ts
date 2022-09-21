import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

// get all items
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  // FOR Receiving hardcoded data
  // @Get()
  // findAll(): Item[] {
  //   return this.itemsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param() param): Item {
  //   return this.itemsService.findOne(param.id);
  // }

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() param): Promise<Item> {
    return this.itemsService.findOne(param.id);
  }

  @Post()
  create(@Body() body: CreateItemDto): Promise<Item> {
    return this.itemsService.create(body);
  }

  // delete the id also anthor way of pasing the param
  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  // update a item
  @Put(':id')
  update(@Body() updateBody: CreateItemDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updateBody.name}`;
  }
}
