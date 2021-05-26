import { expect } from 'chai';

import { Bus } from './bus';
import { IBus, IObserver } from './models';

describe('bus functionality testing', () => {
    let id: string;
    let bus: IBus;

    beforeEach(() => {
        id = 'id';
        bus = new Bus(id);
    });

    it('Should declare id on instantiation', () => {
        expect(bus.id).to.be.eq(id, 'Id does not match');
    });

    it('Should register an emitter by id', () => {
        const emitterId = 'emitter-id';
        bus.registerEmitter(emitterId);
        expect(bus.emitters.includes(emitterId)).to.be.eq(true, 'Emitter did not register');
    });

    it('Should not register a duplicated emitter by id', () => {
        const emitterId = 'emitter-id';
        const duplicatedEmitterId = 'emitter-id';
        bus.registerEmitter(emitterId);
        const emittersLength = bus.emitters.length;
        bus.registerEmitter(duplicatedEmitterId);
        expect(bus.emitters.length).to.be.eq(emittersLength, 'Registered a duplicated emitter');
    });

    it('Should register a observer', () => {
        let observer = ({ observer: 'observer' } as unknown) as IObserver;
        const observersLength = bus.observers.length;
        bus.registerObserver(observer);
        expect(bus.observers.length).to.not.be.eq(observersLength, 'Registered a observer');
    });

    it('Should register many observer', () => {
        let observer1 = ({ observer: 'observer' } as unknown) as IObserver;
        let observer2 = ({ observer: 'observer' } as unknown) as IObserver;
        let observers = [observer1, observer2]
        const observersLength = bus.observers.length;
        bus.registerObserver(observers);
        expect(bus.observers.length).to.not.be.eq(observersLength, 'Registered a observer');
    });
});
