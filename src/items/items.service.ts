import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interface'

@Injectable()
export class ItemsService {
private readonly items: Item[] = [
    {
        id: '1323244232',
        name: 'Joe',
        price: 2923,
        desc: 'new'
    },
    {
        id: '13445442',
        name: 'Doe',
        price: 3433,
        desc: 'old'
    }
];

findAll(): Item[]{
    return this.items;
}

findOne(id: string): Item {
    return this.items.find(item => item.id === id);
}
}
