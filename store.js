import { legacy_createStore as createStore } from "redux";

const reducer = (store,action)=>{
    if(action.type=="ADD_COUNT"){
        return {...store,counter:store.counter+action.paylaod}
    }
    // else if(action.type=="Add_Todo"){
    //     return{...store,todo:[...store.todo,action.paylaod]
    // }
    
   return store

}


const initState={
  counter:0,
  todo:[]
  
}
const store =createStore(reducer,initState)
console.log("store before",store.getState())
store.dispatch ({type: "ADD_COUNT" , paylaod:1})

store.dispatch({type:"Add_Todo",
paylaod:{
    title: "learn react",status:false
 },
})

console.log("store after",store.getState())
