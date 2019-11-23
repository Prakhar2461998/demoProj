import React from 'react'
import Header from './Header'
import './index.css'

class App extends React.Component
{
  deleteHandler()
  {
    alert("delete");
  }
  render()
  {
    return  (


      <div>
        <Header />
        <button className="Add"> Add</button><br />
        <br />
        <span className="Name">  Name</span>
        <span className="Phonenumber">    Phone </span>
      
        <br />
        <br/>
      
        <span>PRAKHAR</span>
        <span className="Number"> 8968966689</span>
        <button className="Delete"onClick={this.deleteHandler}>delete</button>
      
        <br />
        <br/>
        
      
        <span>PRAKHAR</span>
        <span className="Number"> 8968966689</span>
        <button className="Delete" onClick={this.deleteHandler}>delete</button>
       
      </div>
      
      )
  }

  

}
export  default App;
