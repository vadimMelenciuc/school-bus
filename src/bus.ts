import { IBus, IBusSequence, IObserver } from './models';

export class Bus implements IBus {
    public id: string;
    public emitters: string[] = [];
    public observers: IObserver[] = [];
    // @ts-ignore
    private busSequence: IBusSequence;

    constructor(id: string);
    constructor(id: string, busSequence?: IBusSequence) {
        this.id = id;
        if (busSequence) {
            this.busSequence = busSequence;
        }
    }

    public registerEmitter(id: string) {
        if (!this.emitters.includes(id)) {
            this.emitters.push(id);
            return true;
        }
        return false;
    }

    public registerObserver(observer: IObserver | IObserver[]) {
        if (Array.isArray(observer)) {
            for (const obs of observer) {
                this.observers.push(obs);
            }
        } else {
            this.observers.push(observer);
        }
    }

    public notify(event: string, emitter: string, action: any) {
        for (const observer of this.observers) {
            observer.notification(event, emitter, action);
        }
    }
}
