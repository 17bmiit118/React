const reducer = (state=0,action)=>{
    if(action.type==='deposite1'){
        return state + 5;
    }
    else if(action.type==='withdraw1'){
        return state - 5;
    }
    else
    {
        return state;
    }
}

export default reducer;