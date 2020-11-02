import { IBus } from './models/bus';
import { Static } from './static';

export class BusEmitter {
    public id: string;
    private bus: IBus;

    constructor(id: string, bus: IBus = Static.DefaultBus) {
        this.id = id;
        this.bus = bus;
        this.bus.registerEmitter(id);
    }

    send(event: string, content: any) {
        this.bus.notify(this.id, event, content);
    }
}
