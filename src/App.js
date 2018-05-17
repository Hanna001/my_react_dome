import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import PropTypes from 'prop-types';

// let action={type:'ADD'}; 这是一个action对象
let  action=()=>{//这是一个action创建的函数，使用时需要加（），优点比较灵活，可以传参
  return{
    type:'ADD'
  }
}
 const App = props => {//rscp 创建的
  let {connt,click}=props
   return (
     <div>
      {connt}
      <button onClick={click}>+</button>
     </div>
    
   );
 };
 

  const mapStateToProps = state => {
  return {
    connt: state.connt
  }
}

const mapDispatchToProps = dispatch => {
  return {
    click: id => {
      dispatch(action())
    }
  }
}  
 

 let Apps =connect(mapStateToProps,mapDispatchToProps)(App)
 
 export default Apps;

 
 
 


