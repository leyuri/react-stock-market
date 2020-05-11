import produce from "immer"

const baseState = {

    loading: false,
    error:"",
    symbolsList: { },

};

const reducer = produce((state, action) => {
    console.log(action);
    switch(action.type) {
        case "FETCH_COMPANIES":
            action.payload.symbolsList.forEach(e => {
                // symbolsList 있는 배열을 하나하나 읽으면서
                state.symbolsList[e.symbol] = e;
                // state의 companies의 안에 있는 스토어의 symbol
            })
            break;
        case 'ERROR':
            state.error = action.payload;
            // immer.js를 사용했기 때문에 이런 식으로 가능하다. 
            break;
        case 'CREAR_ERRORS':
            state.error = null;
            break;
        case 'START_LOADING':
            state.loading = true;
            break;
        case 'END_LOADING':
            state.loading = false;
            break;
        default:
            break;
    }
}, baseState);

export default reducer;

/*
state와 action이 들어왔을 때 새로운 state를 만들어내는 function을.. -> immer을 통해 만들어 볼 것
*/