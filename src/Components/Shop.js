import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../State/index";
import { bindActionCreators } from "redux";


function Shop(){

    const dispatch = useDispatch();
    const action = bindActionCreators(actionCreators, dispatch)
    return(
        <div className="container">
           <br /><br /><br />
            <button className="btn btn-success mx-2" onClick={() => { dispatch(action.depositMoney(500)) }}>+</button>
                     deposit or withdraw balance by 500
            <button className="btn btn-danger mx-2" onClick={() => { dispatch(action.withdrawMoney(500)) }}>-</button>
        </div>
    );
};
export default Shop;