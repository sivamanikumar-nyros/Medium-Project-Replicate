// import React, { Component } from "react";
// import {
//   Route,
//   NavLink,
//   HashRouter
// } from "react-router-dom";

// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
//        Button,Row, Col,Container, Nav, NavItem} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import axios from 'axios';

// class Story extends Component {

//   constructor(props){
//     super(props);

    
//     this.state = {
//       adminstory:[]
      
      
//     }

//     axios.post('http://10.90.90.117:5000/').then(res=>{

//       if(res.data.status === "success"){

        
//         this.setState({adminstory:res.data.story});
//        console.log(this.state.adminstory);
       

        

//       }
  
//     })

    
//   }

//   render() {


//     var row={
//         padding:"15px"



//       }


    
    
//     var story = this.state.adminstory.map((d) => 

//             <Row style={row}>
//               <Col sm="12">
//                 <img src="home.jpeg" height="100px" width="100px" alt="poster"/>
//               </Col>
//               <Col sm="12" key={d}>Title:{d.story_title}Description:{d.description}Content:{d.story} <NavLink to="/">Back</NavLink></Col>
//             </Row>

            
            

//       );

      
   
//     return (
//       <HashRouter>
//     <Container>
//         <Row>

          
//           <Col sm="12">
            
//             {story}

//           </Col>
          
//         </Row>

      

//       </Container> 
// </HashRouter>
     
//     );
//   }
// }

// export default Story;




import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

import { Row, Col,Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class Story extends Component{


  constructor(props){
    super(props);

    this.state= {

      url_id:this.props.match.params.id,
      storiesData:{}
    }
    
    
  }


  componentDidMount(){

    this.getData();

  }

  getData(){



    axios.post('http://10.90.90.117:5000/findStory', {get_id:this.state.url_id}).then(res=>{


      if( res.data.status === "success"){

        console.log(res.data);

        this.setState({storiesData:res.data.findStory});

        console.log(this.state.storiesData);


      }



    })




  }
  



render(){


  return(


      
    <Container>
      <Row>
        <Col sm='12'>
                <h1 align="center">{this.state.storiesData.title}</h1>
            </Col>
          </Row>

          <Row>
        <Col sm='12'>
                <h4>{this.state.storiesData.story}</h4>
            </Col>
          </Row>

          
      </Container>

      





    );

  }
}
export default Story;









