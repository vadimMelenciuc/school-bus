export interface IEmitter {
    id: string;
    send(event: string, content: any): void;
}
