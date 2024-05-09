import { IToken } from "../../interfaces/token.interfaces";

export interface IComplexToken extends IToken {
    extraData: string;
}

export class ComplexToken implements IComplexToken {
    id: number;
    name: string;
    ticker: string;
    description: string;
    extraData: string;

    constructor(id: number, name: string, ticker: string, description: string, extraData: string) {
        this.id = id;
        this.name = name;
        this.ticker = ticker;
        this.description = description;
        this.extraData = extraData;
    }

    describe(): string {
        return `Token: ${this.name} [${this.ticker}], Extra Data: ${this.extraData}`;
    }
}