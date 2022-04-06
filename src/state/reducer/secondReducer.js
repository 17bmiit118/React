const reducer = (state=0,action)=>{
    if(action.type==='deposite'){
        return state + 5;
    }
    else if(action.type==='withdraw'){
        return state - 5;
    }
    else
    {
        return state;
    }
}

export default reducer;