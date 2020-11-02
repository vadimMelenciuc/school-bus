import { IObserver } from './models';

export abstract class BusObserver implements IObserver {
    public id: string;
    public observableEvents: string[] = [];
    constructor(id: string) {
        this.id = id;
    }
    abstract notification(event: string, emitter: string, content: any);
    public observeEvent(event: string | string[]): BusObserver {
        if (Array.isArray(event)) {
            for (const eve of event) {
                this._observeEvent(eve);
            }
        } else {
            this._observeEvent(event);
        }
        return this;
    }
    private _observeEvent(event: string) {
        if (!this.observableEvents.includes(event)) {
            this.observableEvents.push(event);
        }
    }
}
