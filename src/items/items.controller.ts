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
import { Item } from './items.entity';

// get all items
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param() param): Promise<Item> {
    return this.itemsService.findOne(param.id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  // delete the id also anthor way of pasing the param
  // @Delete(':id')
  // delete(@Param('id') id): Promise<Item> {
  //   return this.itemsService.delete(id);
  // }

  // update a  hard coded item
  // @Put(':id')
  // update(@Body() updateBody: CreateItemDto, @Param('id') id): string {
  //   return `Update ${id} - Name: ${updateBody.name}`;
  // }

  // @Put(':id')
  // update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
  //   return this.itemsService.update(id, updateItemDto);
  // }
}
