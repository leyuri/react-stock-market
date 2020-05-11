import produce from "immer"

const baseState = {};

const reducer = produce((state, action) => {
}, baseState);

export default reducer;

/*
state와 action이 들어왔을 때 새로운 state를 만들어내는 function을.. -> immer을 통해 만들어 볼 것
*/