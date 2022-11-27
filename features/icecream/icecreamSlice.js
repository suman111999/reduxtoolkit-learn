const {createSlice}=require('@reduxjs/toolkit');
const { cakeActions } = require('../cake/cakeSlice');

const initialState={
    noOficecream:40
};

//here slice doesnot mean slicing the icecream ,it is just redux toolkit term
const icecreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.noOficecream-=1
        },
        restocked:(state,action)=>{
            state.noOficecream+=action.payload
        }
    },
    //M-1 to use extraReducers(not recomended)
    // extraReducers:{
    //     //on dispatching action for action constant 'cake/ordered'->decrease no of icecream.
    //     //with decreaseing of cake-> icecream will also decrease
    //     ['cake/ordered']:(state)=>{
    //         state.noOficecream-=1
    //     }
    // }

    //M-2
    extraReducers:(builder)=>{
        builder.addCase(cakeActions.ordered,(state,action)=>{
            state.noOficecream--
        })
    }
});

module.exports={
    icecreamReducer:icecreamSlice.reducer,
    icecreamActions:icecreamSlice.actions
}