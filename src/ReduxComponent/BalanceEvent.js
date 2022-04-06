import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from '../state/index';

const BalanceEvent = () => {

    const dispatch = useDispatch();
   // const actions = bindActionCreators(actionCreators,dispatch);
      const {depositeMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch);
   
    return (
        <>
        {/* <button onClick={()=>{dispatch(actionCreators.depositeMoney(100))}}>Add</button>
        <button onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>Withdraw</button> */}

        {/* <button onClick={()=>actions.depositeMoney(100)}>Add</button>
        <button onClick={()=>actions.withdrawMoney(100)}>Withdraw</button> */}

        <button onClick={()=>depositeMoney(100)}>Add</button>
        <button onClick={()=>withdrawMoney(100)}>Withdraw</button>
        </>
    )
}

export default BalanceEvent;