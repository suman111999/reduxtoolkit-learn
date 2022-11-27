const { configureStore, getDefaultMiddleware } = require('@reduxjs/toolkit');
const {createLogger}=require('redux-logger');

const {cakeReducer} = require('../features/cake/cakeSlice');
const {icecreamReducer}=require('../features/icecream/icecreamSlice');

const logger=createLogger()

const store = configureStore({
    //put all reducer in reducer object keyword
    //it is like combineReducers
    reducer: {
        cake:cakeReducer,
        icecream:icecreamReducer
    },
    //redux toolkit have some default middleware in array
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)

});

module.exports=store;