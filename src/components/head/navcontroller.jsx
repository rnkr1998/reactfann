import React from 'react';
import {Component} from 'react';

import Homepage from '../main/Homepage.jsx';
import Locations from '../main/Locations.jsx';
import Locationdata from '../main/Locationdata.jsx';





class navcontroller extends Component {
  constructor()
  {
    super();
    this.state=
    {
      id:0,
      converge:'',
      showHome:true,
      showLocation:false,
      showLoactiondata:false,
    }
  }

Handling = () =>
{
  this.setState({showHome:true});
  this.setState({showLocation:false});
  this.setState({showLocationdata:false});
 

}

 Handlingg = () =>
 {
  this.setState({showHome:false});
  this.setState({showLocation:true});
  this.setState({showLocationdata:false});
 }

 Handle =(f) =>
 {
   this.setState({id:f});
 }
  
 guide = (b) =>
 {
  if(b===true)
  {
    this.setState({showHome:false});
  this.setState({showLocation:false});
  this.setState({showLocationdata:true});
  }
 }
  render()
{
  return (
    <div className="nav">
    

    
     <div id="navi">
     <div className="sidenav">
                    
                       <a id="homebtn" href="#home" onClick={this.Handling} >Home</a>
                    
                   
                     <a  id="locbtn" href="#locations" onClick={this.Handlingg}>Locations</a>
                     
                    </div>
    </div>

    

     <div id="main">
     {
       this.state.showHome?

     <div id="Home">
     <Homepage />
     </div>
     :null
    }

     {
       this.state.showLocation?
     <div id="Location">
     <Locations ids={this.Handle} control={this.guide}/>
      </div>
      :null
    }
      {
       this.state.showLocationdata?
       <div id="Locationdata" >
     <Locationdata id={this.state.id}/>
     </div>
            :null
            }
     </div>
     



         

    </div>
  );
}
}

export default navcontroller;
