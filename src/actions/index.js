import axios from "axios";

export const API_URL = 'https://financialmodelingprep.com/api/v3/'
export const API_KEY = 'd810ca5ac3a0619c23826fa0eaee53b4'
export const SECOND_URL = 'https://finnhub.io/api/v1/'
export const SECOND_KEY = 'bqbdflvrh5r8t7qng0fg'


export function fetchCompanyList() {
    // asyn 작업을 해야하므로 redux-thunk을 사용해야 하고, 이를 사용하기 위해 함수를 리턴해줘야 한다.
    return async (dispatch) => {
        // 함수는 dispatch를 받고, 무언가 하는 함수를 리턴해준다. 
        const url = `${API_URL}company/stock/list?apikey=${API_KEY}`;
        try {
        const result = await axios(url)
        dispatch({
            type: 'FETCH_COMPANIES',
            payload: result.data
            // payload 에 result안에 있는 data를 넘겨준다
        })
        // result를 받으면 그때 dispatch를 할 것..!
        } catch (error) {
            // error 처리
            console.error(error);
        }
    }
}



