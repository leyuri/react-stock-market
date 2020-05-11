import axios from "axios";

// const BASE_URL = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1"

const BASE_URL = "https://financialmodelingprep.com/api/v3/"

export const API_URL = 'https://finnhub.io/api/v1/'
export const API_KEY = 'bqbdflvrh5r8t7qng0fg'


export function fetchCompanyList() {
    // asyn 작업을 해야하므로 redux-thunk을 사용해야 하고, 이를 사용하기 위해 함수를 리턴해줘야 한다.
    return async (dispatch) => {
        // 함수는 dispatch를 받고, 무언가 하는 함수를 리턴해준다. 
        const url = `${BASE_URL}company/stock/list`;
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


export function fetchCompany(company) {
    return async (dispatch) => {
        const url = `${BASE_URL}company/profile/${company}`;
        try {
        const result = await axios(url)
        dispatch({
            type: 'FETCH_COMPANY',
            payload: result.data
        })
        } catch (error) {
            console.error(error);
        }
    }
}

