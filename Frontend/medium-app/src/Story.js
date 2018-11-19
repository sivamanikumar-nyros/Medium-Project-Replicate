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
                <h1 align="center">{this.state.storiesData.story_title}</h1>
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









