import { IObserver } from './observer';

export interface IBus {
    id: string;
    emitters: string[];
    observers: IObserver[];
    registerEmitter(id: string): void;
    registerObserver(observer: IObserver | IObserver[]): void;
    notify(event: string, emitter: string, action: any): void;
}

export interface IBusSequence {
    pre: () => {};
    post: () => {};
}
