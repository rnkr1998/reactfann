import React from 'react';

import { FaSearch } from 'react-icons/fa';

import rickyandmorky from '../rickyandmorky.jpeg';

function Header()
{
    return(
        <div id="header" >
        
        <div style={{backgroundColor:"#ede3fc"}} className="headandnavigation">
                   <div id="navbar" style={{backgroundColor: "#dee3e3",
                 position: "fixed",
                 top:"0",
                 width:"100%",
                 height:"87px"}}>
                      <div>

                        
                      <img src={rickyandmorky} id="titleimg"  alt="" style={{height:"50px",
                                   width:"120px",
                                       margin:"10px 5px 5px 20px"}}/>
                                         <span id="searchcontent" style={{backgroundColor:"#b5b3ba" ,padding:"12px",borderRadius:"10px",
                   marginLeft:"900px" ,marginTop:"50px"}}>character
                                         
                                         <input type="search" className="searchbox" id="searchbox" placeholder="Type a location" 
                                         style={{borderStyle:"none", padding:"10px", width:"160px",marginLeft:"5px"}}/>
                                       
                                          <button className="glyphicon glyphicon-search" id="buttonn"><FaSearch/></button>
                                        
                                         </span>
                        
                                         



                

</div>
<hr id="lineone"/>           

                    </div>
                  
                    <div>

 </div>
        
        </div>
      
        </div>
    );
}
export default Header;