import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { appendFile } from 'fs';
import { CreateItemDto } from './dto/create-item-dto';
import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
    // @Get() 
    // findAll(@Req() req: Request, @Res() res: Response): string {
    //     console.log(req.url);
    //     return 'Get all items'
    // }

    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Item {
        return this.itemsService.findOne(id)
    }

    // @Get(':id')
    // findOne(@Param() param): string {
    //     return `item ${param.id}`
    // }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto}`;
    }

    @Delete(':id')
    delete(@Param('id') id ): string {
        return `delete ${id}`
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateItemDto: CreateItemDto):string {
        return `update ${id}- Name ${updateItemDto.name}`
    }
}