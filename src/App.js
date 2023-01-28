import React from "react";
import Header from './components/Header';
import Card from './components/Card';
import './index.css';
import data from './data';

//app component
export default function App() { 
  const mappedData = data.map((item, index) => {
    //passing the props to the Card component
    
    return (
        <Card 
          key = {item.id}
          index = {index}
          arrLength = {data.length}
          {...item}
        />
    )
  })
  return (
    <div className="container">
      <Header />
      {mappedData}
    </div>
  )
}