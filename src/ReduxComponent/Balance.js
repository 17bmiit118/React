import { useSelector } from "react-redux";

const Balance = () => {

    const amount = useSelector(state => state.amount);
    console.log(amount);
    return (
        <button>Balance :{amount}</button>
    )
}

export default Balance;