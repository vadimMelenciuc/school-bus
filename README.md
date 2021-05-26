# School Bus

![Node.js CI](https://github.com/vadimMelenciuc/school-bus/workflows/Node.js%20CI/badge.svg?branch=main)

```ts
import { BusEmitter } from './emitter';
import { BusObserver } from './observer';
import { Static } from './static';

class Receiver extends BusObserver {
    constructor(id: string) {
        super(id);
    }
    notification(event: string, emitter: string, content: any) {
        console.log(...arguments);
    }
}

const mother = new Receiver('motherShip').observeEvent(['secret', 'mother']);
const planet = new Receiver('planet').observeEvent(['secret']);
const ship = new BusEmitter('ship');

Static.DefaultBus.registerObserver([mother, planet]);
ship.send('secret', { star: 'delilah', status: 'save' });
ship.send('mother', { star: 'delilah', status: 'save' });

```