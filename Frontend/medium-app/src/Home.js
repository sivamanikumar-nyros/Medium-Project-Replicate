import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Contact from "./Contact";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
       Button,Row, Col,Container, Nav, NavItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

 
class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      adminstory:[]
    }

    axios.post('http://10.90.90.117:5000/').then(res=>{

      if(res.data.status == "success"){

        this.setState({adminstory:res.data.story});
       console.log(this.state.adminstory);

      }

      
    })
    
  }




  render() {
      var row={
        padding:"15px"

      }

      var story = this.state.adminstory.map((d) => {
        return (
          <Row style={row}>
           <Col sm="4">
              <img src="ramayana.jpg" height="100px" width="100px"/>
              {d.story_title}
            
            </Col>
            <Col sm="8">{d.description}</Col>
            
          </Row>
          
        )
        
      });

      console.log('story', story)
  

    

    
    return (
      <div>
        <Container>
        <Row>
          <Col sm="4">
            <Card>
              <CardImg top width="100%" src="ram.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>{}</CardTitle>
                <CardSubtitle>{this.state.adminstory.description}</CardSubtitle>
                <CardText>{this.state.adminstory.story}</CardText>
                <Button>Read More</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="4">
            {story}
            

          </Col>
          <Col sm="4">
            <Card>
              <CardImg top width="100%" src="ram.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>{this.state.adminstory.story_title}</CardTitle>
                <CardSubtitle>{this.state.adminstory.description}</CardSubtitle>
                <CardText>{this.state.adminstory.story}</CardText>
                <Button>Read More</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      </div>
    );
  }
}
 
export default Home;