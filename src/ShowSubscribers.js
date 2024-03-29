import React from 'react'
import Header from './Header'
import './index.css'
import {Link} from 'react-router-dom'

class ShowSubscribers extends React.Component
{
    onDeletedClick = (subscriberId)=>
    {
      this.props.deleteSubscriberHandler(subscriberId);
    }


  render()
  {
      return  (


      <div>
        <Header />
        <div className="component-body-container">
       <Link to="/add">   <button className="custom-btn add-btn">Add</button> </Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
        </div>
      
      
      
      {
          this.props.subscribersList.map(sub=>{

              return <div   className=" grid-container"key={sub.id}>
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>

                <button className="custom-btn delete-btn" onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>
                
                </div>

          })

      }
      
      </div>
      
      )
  }

  

}
export  default ShowSubscribers;
