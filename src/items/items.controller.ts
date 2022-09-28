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
import { ApiParam } from '@nestjs/swagger';

// get all items
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', required: true })
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  // delete the id also anthor way of pasing the param
  @Delete(':id')
  @ApiParam({ name: 'id', required: true })
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', required: true })
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }
}
