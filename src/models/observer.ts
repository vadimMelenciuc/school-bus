export interface IObserver {
    id: string;
    observableEvents: string[];
    notification(event: string, emitter: string, action: any): void;
}
