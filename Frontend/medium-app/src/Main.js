import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Culture from "./Culture";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
       Button,Row, Col,Container, Nav, NavItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Container>
        <Row>
          <Col sm="2"><h2><b>Medium</b></h2></Col>
          <Col sm="6"></Col>
          <Col sm="4">
            <Row>
              <Col sm='6'><a href="#" className="btn btn-outline-success"><b>Become a member</b></a></Col>
              <Col sm='3'><a href="#" className="btn btn-outline-success"><b>signup</b></a></Col>
              <Col sm='3'><a href="#" className="btn btn-outline-success" ><b>Get started</b></a></Col>
            </Row>

          </Col>
        </Row> 
      </Container>

          <ul className="header">
            
            <li><NavLink exact to="/">HOME</NavLink></li>
            <li><NavLink to="/THE NEW NEW">THE NEW NEW</NavLink></li>
            <li><NavLink to="/CULTURE">CULTURE</NavLink></li>
            <li><NavLink to="/TECH">TECH</NavLink></li>
            <li><NavLink to="/STARTUPS">STARTUPS</NavLink></li>
            <li><NavLink to="/SELF">SELF</NavLink></li>
            <li><NavLink to="/POLITICS">POLITICS</NavLink></li>
            <li><NavLink to="/DESIGN">DESIGN</NavLink></li>
            <li><NavLink to="/HEALTH">HEALTH</NavLink></li>
            <li><NavLink to="/POPULAR">POPULAR</NavLink></li>
            <li><NavLink to="/COLLECTIONS">COLLECTIONS</NavLink></li>
          </ul>
          
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/Culture" component={Culture}/>
          </div>
        <footer>
            <h2>footer part</h2>
          </footer>
        </div>

      </HashRouter>
    );
  }
} 
export default Main;