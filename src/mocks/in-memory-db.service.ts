import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemProductService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        id: 1,
        title: 'Apple',
        sku: 'apple1',
        description: 'Red apple',
        category: ['green', 'red' , 'fruit'],
      },
      {
        id: 2,
        title: 'Banana',
        sku: 'banana1',
        description: 'Yellow Banana',
        category: ['yellow', 'green' , 'fruit' ],
      },
      {
        id: 3,
        title: 'Grapes',
        sku: 'grapes1',
        description: 'Green Grapes',
        category: ['violet', 'green' , 'fruit' ],
      },
      {
        id: 4,
        title: 'Eggplant',
        sku: 'eggplant1',
        description: 'White Eggplant',
        category: ['violet', 'green' , 'vegetable' ],
      },
    ];
    return { products };
  }
}
