import 'mocha';
import { expect } from 'chai';
import { spy, SinonSpy } from 'sinon';

import { BusEmitter } from './emitter';
import { IBus } from './models';

describe('emitter functionality testing', () => {
    let registerEmitterSpy: SinonSpy;
    let notifySpy: SinonSpy;
    let bus: Partial<IBus>;
    class BusMock implements Partial<IBus> {
        registerEmitter(id: string) {
            registerEmitterSpy();
        }
        notify(...args: any[]) {
            notifySpy(...args);
        }
    }

    beforeEach(() => {
        bus = new BusMock();
        registerEmitterSpy = spy();
        notifySpy = spy();
    });

    it('Should register the emitter in instantiation', () => {
        const id = 'id';
        const emitter = new BusEmitter(id, bus as IBus);
        expect(registerEmitterSpy.called).to.be.eq(true, 'Did not register the emitter id');
        expect(emitter.id).to.be.eq(id, 'Not the same ID');
    });

    it('Should send a notification on the send method', () => {
        const id = 'id';
        const event = 'event';
        const content = 'content';
        const emitter = new BusEmitter(id, bus as IBus);
        emitter.send(event, content);

        expect(notifySpy.called).to.be.eq(true, 'Did not called the bus notification');
        expect(notifySpy.calledWithMatch(id)).to.be.eq(true, 'Not called with ID');
        expect(notifySpy.calledWithMatch(event)).to.be.eq(true, 'Not called with event');
        expect(notifySpy.calledWithMatch(content)).to.be.eq(true, 'Not called with content');
    });
});
