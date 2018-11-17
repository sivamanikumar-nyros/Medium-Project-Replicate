import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
       Button,Row, Col,Container, Nav, NavItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class Health extends Component {

  constructor(props){
    super(props);

    
    this.state = {
      adminstory:[],
      olderPost:{},
      recentPost:{}
      
    }

    axios.post('http://10.90.90.117:5000/health').then(res=>{

      if(res.data.status === "success"){

        
        this.setState({adminstory:res.data.story});
       console.log(this.state.adminstory);
       

        for (var x = 0; x < res.data.story.length; x++) {
          if(res.data.story.length === x + 3){
            this.setState({ recentPost: res.data.story[x] })
          }
        }

        for (var y = 0; y < res.data.story.length; y++) {
          if(res.data.story.length === y + 1){
            this.setState({ olderPost: res.data.story[y] })
          }
        }

      }
  
    })

    
  }

  render() {


    var row={
        padding:"15px"



      }


    
    
    var story = this.state.adminstory.map((d) => 

            <Row style={row}>
              <Col sm="4">
                <img src="health.jpeg" height="100px" width="100px" alt="poster"/>
              </Col>
              <Col sm="8" key={d}>{d.description}<NavLink to="/Story">Read-more</NavLink></Col>
            </Row>

      );

      
   
    return (
      <HashRouter>
    <Container>
        <Row>

          <Col sm="4">
            <Card>
              <CardImg top width="100%" src="health.jpeg" alt="Card image cap" />
              <CardBody>
                <CardTitle>{this.state.olderPost.title}</CardTitle>
                <CardText>{this.state.olderPost.description}</CardText>
                <NavLink to="/Story">Read-more</NavLink>
              </CardBody>
            </Card>
          </Col>
         
          <Col sm="4">
            
            {story}

          </Col>
          <Col sm="4">
             <Card>
              <CardImg top width="100%" src="health.jpeg" alt="Card image cap" />
              <CardBody>
                <CardTitle>{this.state.recentPost.title}</CardTitle>
                <CardText>{this.state.recentPost.description}</CardText>
                <NavLink to="/Story">Read-more</NavLink>
              </CardBody>
            </Card>
          </Col>
        </Row>

      

      </Container> 
</HashRouter>
     
    );
  }
}

export default Health;
