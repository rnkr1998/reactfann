import React,{Component} from 'react';


class Locationdata extends Component
{

    constructor()
    {
      super();
     this.state=
   {
       lists:{},//location data fetch
       count:1,
       Names:{}, 
       error:null,
       input:'',
      
     }
   }
  
   componentDidMount()
    {
        let a=this.props.id;
        let url="https://rickandmortyapi.com/api/location/"+a;
   

        fetch(url)
        .then((resp) => resp.json())
        .then(json => {
         this.setState({lists: json})
      console.log(this.props.id);
      this.componentDidCatch(this.state.lists.residents);
        
        })
     
        .catch(function(error) {
          console.log('Request failed', error);
        });
    }



    
    componentDidCatch(v)                                           //Get Location data residents names function
    {
      
     
      for (let i in v)
      {
          
        
         
         fetch(v[i])
         .then((respp) => respp.json())
         .then(json => {
          this.setState({Names: json})
          this.component(this.state.Names.name, i,v);
         
          
         })
         
         
         .catch(function(error) {
           console.log('Request failed', error);
         });
         
    }
    }
  
  
    component(e)                                                    // update location data residents list function 
    {
      
      document.getElementById("residents").innerHTML +=   this.state.count+ ".<b id='resinames'> " +e+"</b><br/>";
      this.setState({count :this.state.count+1});
    }








    render()
    {


                let r=this.state.lists;                   
               let date=require('dateformat');

    return(

        
        <div className="Locationdata" style={{marginLeft:"250px"}}>
                      <div className="head">
           <h1  style={{borderBottom: "2px solid #CECBCE", fontFamily:"times new roman" ,fontStyle:"oblique", fontWeight:"bolder", fontSize:"40px"}}>Locations - <span>{r.name}</span></h1>
           
                         </div>
                         <div className="Locationdatas" style={{marginLeft:"50px"}}>
                           <br/><br/>
                         
                          <h3 className="locationtitle">Type :     <span style={{fontSize:"20px", fontWeight:"lighter"}}>{r.type}</span></h3>
                         <h3 className="locationtitle">Dimension :    <span style={{fontSize:"20px" ,fontWeight:"lighter"}}>{r.dimension}</span></h3>
                           <h3 className="locationtitle">Created :     <span style={{fontSize:"20px", fontWeight:"lighter"}}>{date(r.created, "ddd mmm dd yyyy")}</span></h3>
                           
                            <br/>
                               </div>
                                <div className="residents" style={{marginLeft:"20px"}}>
                                  <h3 className="locationtitle">Residents:</h3>

                                   <div id="residents" style={{cursor:"pointer"}}>


                                   </div>
                                 
                             
                                      
                                           
                                     
                                       
                                      

                                        
       


                                       
       
     

                                   </div>


                                   </div>

        
        
 

    );
}
}

export default Locationdata;