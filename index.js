const store=require('./app/store');
const {cakeActions:{ordered,restocked}}=require('./features/cake/cakeSlice');
const {icecreamActions:{ordered:icecreamOrdered,restocked:icecreamRestoced}}=require('./features/icecream/icecreamSlice');

console.log('Initial state ',store.getState())
const unsubscribe= store.subscribe(()=>{
    console.log('updated state ',store.getState())
});

store.dispatch(ordered())
store.dispatch(restocked(2))

store.dispatch(icecreamOrdered());
store.dispatch(icecreamRestoced(3))



unsubscribe()