import {connect} from 'react-redux';
import Count from '../../components/count/Count'
import {action} from '../../actions/index'
//1,引入需要包装的组件
//2，引入connect
//3，引入action

const mapStateToProps=(state)=>{
    return {
        //这里需要return 包装组件传人的参数，key可以随便定义，和组件参数保持一致就行
        //值，是全局state的一部值，需要那个引入那个，值是reducer维护的一部分全局states。
        number:state.add
        
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {//这里传入组件的事件参数
    addClick:()=>{
        dispatch(action())
    }
}
}

const addcount =connect(mapStateToProps,mapDispatchToProps)(Count)
export default addcount;