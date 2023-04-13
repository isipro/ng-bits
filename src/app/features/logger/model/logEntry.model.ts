export class LogEntry {
    constructor(
        public user: string,
        public action: string,
        public time: string,
        public status: string,
    ) {}

    toString(): void{

    }
}