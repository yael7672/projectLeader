import produce from 'immer';
import createReducer from './ReducerUtil';
const initialState = {
    user: {
        _id: '',
        name: 'name',
        age: 'age',
        city:"city",
        mail:"mail",
        phone:"phone"
    
    }
}
const user = {
    setUserName(state,action){
        state.user.name = action.payload;

    },

    setName(state, action) {
        state.user.name = action.payload;
    },
    setAge(state, action) {
        state.user.age = action.payload;
    },
    setCity(state, action) {
        state.user.city = action.payload;
    },
    setMail(state, action) {
        state.user.mail = action.payload;
    },
    setPhone(state, action) {
        state.user.phone = action.payload;
    }

}
export default produce((state, action) => createReducer(state, action, user), initialState);