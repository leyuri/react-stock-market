import React from 'react'
import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CompanyPage = () => {

    const { symbol } = useParams();
    // stores 중에 내가 원하는 스토어를 가져올 수 있어야 한다. 
    const company = useSelector(state => state.symbolsList[symbol])

    return (
        <div>
            <AppBar/>
            Detail: {symbol}
            <BottomNav/>
        </div>
    )
};
export default CompanyPage; 