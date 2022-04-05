export const countReducer = (state,action) => {
    switch(action.type)
    {
      case 'ADD':
        return state + action.value;
      case 'REMOVE':
        return state - action.value;
    }
}