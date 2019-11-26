import React from 'react'
import "./index.css"
import  "./style.css"
import {Link} from 'react-router-dom'
class AddSubscriber extends React.Component
{
constructor()
{
    super();
    this.state = {

        id:0,
        name:' ',
            phone:' '
    }

   // this.inputChangedHandler = this.inputChangedHandler.bind(this)
   

}

inputChangedHandler = (e)=>

{
    console.log(e.target, e.target.name)
const state =this.state
  state[e.target.name] = e.target.value;

  this.setState(state);
  console.log(this.state);

}

onFormSubmitted=(e)=>
{
e.preventDefault();
this.props.addSubscriberHandler(this.state);
this.setState({

    id:0,
    name:' ',
    phone:' '

})
this.props.history.push("/");

}

render()
{
  const{name,phone}=this.state;
    return(
         <div>
        <div className="Header">
            Add Subscriber
            </div>
        <div>
           <Link to="/"><button> BACK</button> </Link>
           <br />
            <br/>
            <form onSubmit={this.onFormSubmitted.bind(this)}> 
               <label >Name</label><br/>
                <input type="text"  id="name" name="name" onChange={this.inputChangedHandler} ></input>
<br />
<br />
                <label  >Phone:</label>
                <br />
                <input type="text" id="phone" name="phone"  onChange={this.inputChangedHandler}></input>
              <br/>
              <br />

             <div>
                 <span>Subscribers to be added</span>
                 <br/>
                 <br/>
                 <span>Name:{name}</span>
                 <br/>
                 <span>Phone:{phone}</span>
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


