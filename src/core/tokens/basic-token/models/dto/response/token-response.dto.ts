export interface BasicTokenResponseDto {
    id: number;
    name: string;
    ticker: string;
    description: string;
}

export interface ComplexTokenResponseDto {
    id: number;
    name: string;
    ticker: string;
    description: string;
    extraData: string;
}
