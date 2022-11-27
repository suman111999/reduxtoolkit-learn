const {createSlice}=require('@reduxjs/toolkit');

const initialState={
    noOfCakes:10
}
const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        //ordered->it is a action creator function
        ordered:(state)=>{
            //now reducers doesnot need to return new state
            //and now we can directly mutate the state
            //as inertnally immer lib handles it as do it like normal redux.
            state.noOfCakes-=1
        },
        //it is a action creator function and we do not have to write action seperatly create slice will
        //create action creator using this "restocked" keyword.
        restocked:(state,action)=>{
            state.noOfCakes +=action.payload
        }
    }
});

//createSlice takes care of:
//defining action type constant
//action object
//action creator
//switch statement in reducer
//hadling immutable state in reducers
//so reduce the boilerplate code and reduce importing external lib explecitly 
//it returns reducer and actions a object contaions all action creator function.

module.exports={
    cakeReducer:cakeSlice.reducer,
    cakeActions:cakeSlice.actions
}


