import 'mocha';
import { expect } from 'chai';

import { BusObserver } from './observer';

class TestObserver extends BusObserver {
    notification(event: string, emitter: string, content: any) {
        // do nothing
    }
}

describe('newBus functionality testing', () => {
    let observer;

    beforeEach(() => {
        observer = new TestObserver('id');
    });
    it('Should register an event', () => {
        const initialLength = observer.observableEvents.length;
        observer.observeEvent('1');
        expect(observer.observableEvents.length).to.be.eq(initialLength + 1);
    });
    it('Should not register an existing event', () => {
        const initialLength = observer.observableEvents.length;
        observer.observeEvent('1');
        observer.observeEvent('1');
        expect(observer.observableEvents.length).to.be.eq(initialLength + 1);
    });

    it('Should register various event form array', () => {
        const initialLength = observer.observableEvents.length;
        observer.observeEvent(['1', '2']);
        expect(observer.observableEvents.length).to.be.eq(initialLength + 2);
    });
    it('Should not register an repeated event form array', () => {
        const initialLength = observer.observableEvents.length;
        observer.observeEvent(['1', '1']);
        expect(observer.observableEvents.length).to.be.eq(initialLength + 1);
    });
});
