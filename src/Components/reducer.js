export const reducer = (state , action) =>{
    if(action.type === "Remove_Item"){
        return {
            ...state ,
            item : state.item.filter((curElem)=>{
                 return curElem.id !== action.payload
            })
        }
    }
    else if(action.type === "delete_Item"){
        return {
            ...state ,
            item : [],
        }
    }
    else if(action.type === "increment_item"){
       let updatedCart = state.item.map((curElem) =>{
        if(curElem.id === action.payload){
            return {...curElem , quantity: curElem.quantity + 1 }
        }
        return curElem
       })
       return {...state , item: updatedCart}
    }

    else if(action.type === "decrement_item"){
       let updatedCart = state.item.map((curElem) =>{
        if(curElem.id === action.payload){
            return {...curElem , quantity: curElem.quantity - 1}
        }
        return curElem
       })
       .filter((curElem)=> curElem.quantity==! 0 )
       return {...state , item: updatedCart}
    }
    else if (action.type === "GET_TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce(
          (accum, curVal) => {
            let { price, quantity } = curVal;
    
            let updatedTotalAmount = price * quantity;
            accum.totalAmount += updatedTotalAmount;
    
            accum.totalItem += quantity;
            return accum;
          },
          {
            totalItem: 0,
            totalAmount: 0,
          }
        );
        return { ...state, totalItem, totalAmount };
      }
        return state
}