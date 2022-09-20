import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return ' get all items';
  }

  @Post()
  create(@Body() body: CreateItemDto): string {
    return `Name: ${body.name} , Desc: ${body.description} , qty : ${body.qty} , phno: ${body.phno}`;
  }
}
