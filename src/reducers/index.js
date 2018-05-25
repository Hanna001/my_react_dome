import { combineReducers } from "redux";
import{addReducers} from './add';
// import{todoReducers} from './todo'


//combineReducer的作用是把reducer拆分成多个函数，用于分别处理state树的一个分支。
let reducers=combineReducers({
    add:addReducers,//addReducers是全局state数的一个分支，由add这个key来维护。
    // todo:todoReducers
})

export{reducers}