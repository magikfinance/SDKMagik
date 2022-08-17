import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 2000,
    TESTNET = 568
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0xAaA04462e35f3e40D798331657cA015169e005d7";
export declare const INIT_CODE_HASH = "0x746cdd6c24c5f1496602686ccbb848d5d9c8e5ccc408250c4cc8be8331de6857";
export declare const SPOOKY_FACTORY_ADDRESS = "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3";
export declare const SPOOKY_INIT_CODE_HASH = "0xcdf2deca40a0bd56de8e3ce5c7df6727e5b1bf2ac96f283fa9c4b3e6b42ea9d2";
export declare const SUSHI_FACTORY_ADDRESS = "0xc35DADB65012eC5796536bD9864eD8773aBc74C4";
export declare const SUSHI_INIT_CODE_HASH = "0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
