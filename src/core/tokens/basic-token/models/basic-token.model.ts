import { IToken } from "../../interfaces/token.interfaces";

export class BasicToken implements IToken {
    id: number;
    name: string;
    ticker: string;
    description: string;

    constructor(id: number, name: string, ticker: string, description: string) {
        this.id = id;
        this.name = name;
        this.ticker = ticker;
        this.description = description;
    }

    describe(): string {
        return `Token: ${this.name} [${this.ticker}]`;
    }
}