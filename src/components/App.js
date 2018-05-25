// import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import './App.css';
// import PropTypes from 'prop-types';
// import {action} from './actions/index'

// // let action={type:'ADD'}; 这是一个action对象

// //  const App = props => {//rscp 创建的scp 创建的
// //   console.log(props)
// //   let {todos,adds,click}=props
// //    return (
// //      <div>
// //        {adds.connt}
// //       <button onClick={click}>+</button>  
// //       <p>{todos.text}</p>
// //      </div>
    
// //    );
// //  };
 

//   const mapStateToProps = state => {
//   return {
//     adds: state.add,//adds，todos是对应的App组件的参数，名称可以随便定义
//     todos:state.todo//他们的值，state是全局state。add，todo是state的一部值，
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     click: id => {
//       dispatch(action())//reducer 要保持纯净纯函数，接受当前state返回一个新的state，其余不做任何逻辑处理，
//       //所有的逻辑处理，比如调用api和路由跳转等，需要在dispach（action）之前。
//     }
//   }
// }  
 

//  let Apps =connect(mapStateToProps,mapDispatchToProps)(App)
 
//  export default Apps;

 
 
 


