import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Culture from "./Culture";
import Politics from "./Politics";
import Popular from "./Popular";
import Startups from "./Startups";
import News from "./News";
import Tech from "./Tech";
import Self from "./Self";
import Design from "./Design";
import Story from "./Story";

import Health from "./Health";
import Collections from "./Collections";
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
          <Container className="navbar">
            <Row>
              <Col sm="12">
                <ul className="header">
          
            
                  <li><NavLink exact to="/">HOME</NavLink></li>
                  <li><NavLink to="/news">THE NEW NEW</NavLink></li>
                  <li><NavLink to="/culture">CULTURE</NavLink></li>
                  <li><NavLink to="/tech">TECH</NavLink></li>
                  <li><NavLink to="/startups">STARTUPS</NavLink></li>
                  <li><NavLink to="/self">SELF</NavLink></li>
                  <li><NavLink to="/politics">POLITICS</NavLink></li>
                  <li><NavLink to="/design">DESIGN</NavLink></li>
                  <li><NavLink to="/health">HEALTH</NavLink></li>
                  <li><NavLink to="/popular">POPULAR</NavLink></li>
                  <li><NavLink to="/collections">COLLECTIONS</NavLink></li>
                
                </ul>
              </Col>
            </Row>
          </Container>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/Culture" component={Culture}/>
            <Route exact path="/Politics" component={Politics}/>
            <Route exact path="/Popular" component={Popular}/>
            <Route exact path="/Startups" component={Startups}/>
            <Route exact path="/News" component={News}/>
            <Route exact path="/Tech" component={Tech}/>
            <Route exact path="/Self" component={Self}/>
            <Route exact path="/Design" component={Design}/>
            <Route exact path="/Health" component={Health}/>
            <Route exact path="/Collections" component={Collections}/>
            <Route exact path="/Story/:id" component={Story}/>
          </div>
        
        </div>

      </HashRouter>
    );
  }
} 
export default Main;