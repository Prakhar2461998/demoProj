import React from 'react'
import "./index.css"
import  "./style.css"
class AddSubscriber extends React.Component
{
render()
{

    return(
         <div>
        <div className="Header">
            Add Subscriber
            </div>
        <div>
            <button> BACK</button><br />
            <br/>
            <form>
               <label>NAME</label><br/>
                <input type="text"></input>
<br />
<br />
                <label>Phone:</label>
                <br />
                <input type="text"></input>
              <br/>
              <br />

             <div>
                 <span>Subscribers to be added</span>
                 <br/>
                 <br/>
                 <span>Name:</span>
                 <br/>
                 <span>Phone:</span>
             </div>
             <br/>
             <br />
             <button type="submit" className="Add">Add</button>
            </form>
 
        </div>
        </div>
    )
}


}
export default AddSubscriber;


