import React,{Component} from 'react';


class Locations extends Component
{
    constructor()
    {
        super();
        this.state=
        {
           
         
          
            list:       //locations fetch
            {
               results:[]
            }
            ,
            id:''
         
    }
    }

    Handler = (f) => 
    { 
         this.setState({id:f});

         console.log(f);
         this.props.ids(f);
         this.props.control(true);
    }




    componentDidMount()
    {
        let url="https://rickandmortyapi.com/api/location/";
   

        fetch(url)
        .then((resp) => resp.json())
        .then(json => {
         this.setState({list:json})
        
         
        
        })
     
        .catch(function(error) {
          console.log('Request failed', error);
        });
    }





render()
{
    let res= this.state.list.results;
    return(

 <div className="Location" style={{marginLeft:"250px"}}>
      
                  <div className="head">
              <h1 id="headingg"  style={{borderBottom: "2px solid #CECBCE", marginBottom:"30px", fontFamily:"times new roman" ,fontStyle:"oblique", fontWeight:"bolder", fontSize:"40px"}}>Locations</h1>
           
                  </div>
                <div className="pagination">
                <a href="#about">Prev</a>
               <a href="#about">1</a>
                <a href="#about" className="active">2</a>
                        <a href="#about">3</a>
    
                        <a href="#about">5</a>
                        <a href="#about">6</a>
                          <a href="#about">Next</a>
                          </div>
                           <div className="row">
   
   

   
        {
                  res.map( sub =>
           {
            return <div key={sub.id} id="key" className="column" style={{marginTop:"20px"}}>
              
          
          
                    
   
         
         
          <div className="w3-card-4" onClick={this.Handler.bind(this,sub.id)}>
              <header className="w3-container w3-white" style={{textAlign:"center" ,height:"35px"}}>
          <h5 style={{marginTop:"5px"}} >{sub.type}</h5>
                  </header>
   
                   <div id="locationnameclass" className="w3-container" style={{height:"150px", backgroundColor:"#E8EAE3"}}>
                     <h4 style={{marginTop:"50px"}} className="locationame" >{sub.name}</h4>
                </div>
   
                   <footer className="w3-container w3-white"  style={{textAlign:"center" ,height:"35px"}} >
              <h5 style={{marginTop:"5px"}}>{sub.residents.length}<span> Residents</span></h5>
                 </footer>
                   </div>
   
                    
                
   
   
              
   
   
        
                 
   </div>
          })
      }
      
      
   </div>
  
   </div>


    );
}


}
export default Locations;