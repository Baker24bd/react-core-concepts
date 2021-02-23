import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Product ditails 
const products =[
  {name:'Samsung j7 prime', price:'$59.05'},
  {name:'Samsung A10', price:'$25.05'},
  {name:'Samsung J10', price:'$102.05'}
]
// Friends ditails
const friends =[
  {name:'Oyashim Akram', Age:'23 year old', Job:'YouTubing'},
  {name:'Nazmun Nahar Niha', Age:'21 year old', Job:'Doctur'},
  {name:'Ruma Akter', Age:'17 year old', Job:'Study'}
]
  return (
    <div className="App">
      <header className="App-header">
            <p>My first react paragraph</p>
            {/* Friends system */}
            {
              friends.map(friend =><Friend friend={friend}></Friend>)
            }
            {/* Counter sysrem */}
            <Counter></Counter>
            {/* uasers data load */}
            <Users></Users>

            {/* ai ta dainamik babe banano hoyeche map diye */}
            {
              products.map(product =><Product product={product}></Product>)
            }

            {/* <Product product={products[0]}></Product>
            <Product product={products[1]}></Product>
            <Product product={products[2]}></Product> */}
            
              {/* Local system babe banano hoyeche,,, */}
            <Person name="Baker Hossain" Hobbi="Programming"></Person>
            <Person name="Oyashim Akram" Hobbi="YouTubing"></Person>
            <Person name="Nazmun Nahar Niha" Hobbi="Cheleder thokano"></Person>
      </header>
    </div>
  );
}
// Counter function style,,
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncease = () =>   setCount(count + 1);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}> Increase</button>
    </div>
  )
}
// Users data,,,
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>Name: {user.name}</li>)
        }
      </ul>
    </div>
  )
}
// Friends function style,,,
function Friend(props){
  const friendStyle={
    border:'5px solid red',
    width:'700px',
    margin:'10px'
  }
  return (
    <div style={friendStyle}>
      <h1>Name: {props.friend.name} </h1>
      <h2>Age: {props.friend.Age}</h2>
      <h3>Job: {props.friend.Job} </h3>
    </div>
  )
}
// Products function style,,,,
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    hight:'200px',
    width:'200px',
    float:'left'
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name} </h3>
      <h5>{props.product.price} </h5>
      <button>Buy Now</button>
    </div>
  )
}
// Person function style,,,
function Person(props){
  const personStyle={
    border:'5px solid yellow',
    width:'400px',
    margin:'10px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name} </h1>
      <h3>Hobbi: {props.Hobbi} </h3>
    </div>
  )
}
export default App;
