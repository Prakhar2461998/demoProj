import React from 'react'
import Header from './Header'
import './index.css'

class ShowSubscribers extends React.Component
{
     constructor()
     {
       super()
           this.state={
subscribersListToShow:[]

           }
     

     }
     componentDidMount()
     {
      let newSubscriber ={

        id:1,
        name:"Prakhar"  ,
        phone:"8968966689"
      }
      let subscriberList =this.state.subscribersListToShow;
      subscriberList.push(newSubscriber);
      this.setState({
         
             subscribersListToShow:subscriberList
      });
     }


  render()
  {
      return  (


      <div>
        <Header />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
        </div>
      
      
      
      {
          this.state.subscribersListToShow.map(sub=>{

              return <div   className=" grid-container"key={sub.id}>
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>

                <button className="Delete">Delete</button>
                
                </div>

          })

      }
      
      </div>
      
      )
  }

  

}
export  default ShowSubscribers;
