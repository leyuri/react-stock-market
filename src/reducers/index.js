import produce from "immer"

const baseState = {

    loading: false,
    error:"",
    companies:
    [
        {
            "description": "AGILENT TECHNOLOGIES INC",
            "displaySymbol": "A",
            "symbol": "A"
        },
        {
            "description": "ALCOA CORP",
            "displaySymbol": "AA",
            "symbol": "AA"
        },
        {
            "description": "PERTH MINT PHYSICAL GOLD ETF",
            "displaySymbol": "AAAU",
            "symbol": "AAAU"
        },
        {
            "description": "ATA CREATIVITY GLOBAL - ADR",
            "displaySymbol": "AACG",
            "symbol": "AACG"
        },
        {
            "description": "ADVISORSHARES DORSEY WRIGHT",
            "displaySymbol": "AADR",
            "symbol": "AADR"
        },
        {
            "description": "AMERICAN AIRLINES GROUP INC",
            "displaySymbol": "AAL",
            "symbol": "AAL"
        },
        {
            "description": "ALTISOURCE ASSET MANAGEMENT",
            "displaySymbol": "AAMC",
            "symbol": "AAMC"
        },
        {
            "description": "ATLANTIC AMERICAN CORP",
            "displaySymbol": "AAME",
            "symbol": "AAME"
        },
        {
            "description": "AARON'S INC",
            "displaySymbol": "AAN",
            "symbol": "AAN"
        },
        {
            "description": "APPLIED OPTOELECTRONICS INC",
            "displaySymbol": "AAOI",
            "symbol": "AAOI"
        },
        {
            "description": "AAON INC",
            "displaySymbol": "AAON",
            "symbol": "AAON"
        },
        {
            "description": "ADVANCE AUTO PARTS INC",
            "displaySymbol": "AAP",
            "symbol": "AAP"
        },
        {
            "description": "APPLE INC",
            "displaySymbol": "AAPL",
            "symbol": "AAPL"
        },
        {
            "description": "AMERICAN ASSETS TRUST INC",
            "displaySymbol": "AAT",
            "symbol": "AAT"
        },
        {
            "description": "ALMADEN MINERALS LTD - B",
            "displaySymbol": "AAU",
            "symbol": "AAU"
        },
        {
            "description": "ATLAS AIR WORLDWIDE HOLDINGS",
            "displaySymbol": "AAWW",
            "symbol": "AAWW"
        },
        {
            "description": "ISHARES MSCI ALL COUNTRY ASI",
            "displaySymbol": "AAXJ",
            "symbol": "AAXJ"
        },
        {
            "description": "AXON ENTERPRISE INC",
            "displaySymbol": "AAXN",
            "symbol": "AAXN"
        },
        {
            "description": "ALLIANCEBERNSTEIN HOLDING LP",
            "displaySymbol": "AB",
            "symbol": "AB"
        },
        {
            "description": "ABB LTD-SPON ADR",
            "displaySymbol": "ABB",
            "symbol": "ABB"
        },
        {
            "description": "ABBVIE INC",
            "displaySymbol": "ABBV",
            "symbol": "ABBV"
        },
        {
            "description": "AMERISOURCEBERGEN CORP",
            "displaySymbol": "ABC",
            "symbol": "ABC"
        },
        {
            "description": "AMERIS BANCORP",
            "displaySymbol": "ABCB",
            "symbol": "ABCB"
        },
        {
            "description": "ABEONA THERAPEUTICS INC",
            "displaySymbol": "ABEO",
            "symbol": "ABEO"
        },
        {
            "description": "ABSOLUTE CORE STRATEGY ETF",
            "displaySymbol": "ABEQ",
            "symbol": "ABEQ"
        },
        {
            "description": "AMBEV SA-ADR",
            "displaySymbol": "ABEV",
            "symbol": "ABEV"
        },
        {
            "description": "ASBURY AUTOMOTIVE GROUP",
            "displaySymbol": "ABG",
            "symbol": "ABG"
        },
        {
            "description": "ARCA BIOPHARMA INC",
            "displaySymbol": "ABIO",
            "symbol": "ABIO"
        },
        {
            "description": "ABM INDUSTRIES INC",
            "displaySymbol": "ABM",
            "symbol": "ABM"
        },
        {
            "description": "ABIOMED INC",
            "displaySymbol": "ABMD",
            "symbol": "ABMD"
        },
        {
            "description": "ARBOR REALTY TRUST INC",
            "displaySymbol": "ABR",
            "symbol": "ABR"
        },
        {
            "description": "",
            "displaySymbol": "ABR-A",
            "symbol": "ABR-A"
        },
        {
            "description": "",
            "displaySymbol": "ABR-B",
            "symbol": "ABR-B"
        },
        {
            "description": "",
            "displaySymbol": "ABR-C",
            "symbol": "ABR-C"
        },
        {
            "description": "ABBOTT LABORATORIES",
            "displaySymbol": "ABT",
            "symbol": "ABT"
        },
        {
            "description": "ALLEGIANCE BANCSHARES INC",
            "displaySymbol": "ABTX",
            "symbol": "ABTX"
        },
        {
            "description": "ARBUTUS BIOPHARMA CORP",
            "displaySymbol": "ABUS",
            "symbol": "ABUS"
        },
        {
            "description": "ASSOCIATED CAPITAL GROUP - A",
            "displaySymbol": "AC",
            "symbol": "AC"
        },
        {
            "description": "ARCOSA INC",
            "displaySymbol": "ACA",
            "symbol": "ACA"
        },
        {
            "description": "ACADIA PHARMACEUTICALS INC",
            "displaySymbol": "ACAD",
            "symbol": "ACAD"
        },
    ]
};

const reducer = produce((state, action) => {
}, baseState);

export default reducer;

/*
state와 action이 들어왔을 때 새로운 state를 만들어내는 function을.. -> immer을 통해 만들어 볼 것
*/