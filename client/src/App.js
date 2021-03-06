import React, { Component } from 'react';
import { Container, Button, Icon, Header } from 'semantic-ui-react'
import MenuForm from './components/MenuForm'
import MenuList from './components/MenuList'
import axios from 'axios'
import './App.css'



class App extends Component {
  state = {
    menus: [],
    editing: false
  }

  componentDidMount() {
    axios.get("/api/menus")
    .then( res => {
      this.setState({ menus: res.data })
    })
    .catch( err => {
      console.log(err)
    })
  }

  addMenu = (name, description, courseOne, courseTwo, courseThree, courseFour, courseFive) => {
    axios.post('/api/menus', { name, description, courseOne, courseTwo, courseThree, courseFour, courseFive })
    .then( res => {
      const { menus, } = this.state;
      this.setState({ menus: [...menus, res.data], });
    })
  }

  updateMenu = (id) => {
    axios.put(`/api/menus/${id}`)
      .then( res => {
        const menus = this.state.menus.map( t => {
        if (t.id === id)
          return res.data;
        return t;
      });
      this.setState({ menus, });
    })
  }

  editMenu = (menuData) => {
    
    const menus = this.state.menus.map( menu => {
      if (menu.id === menuData.id)
        return menuData;
      return menu
    });
    this.setState({ menus, });
  }

  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      const { menus, } = this.state;
      this.setState({ menus: menus.filter(t => t.id !== id), })
    })
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });

  toggleEdit = () => this.setState({ editing: !this.state.editing, });

  render() {
    return (
      <div style={{ backgroundColor: "#f5f5f5" }}>
      <br />
        <Header as='h1' style={{ textAlign: "center", marginTop: "25px"}}>Fine Dining All Day</Header>
        <Container style={{ padding: "30px 0" }}>
        <Button icon color="blue" onClick={this.toggleForm} style={{ marginLeft: "45%" }}>
            <Icon name='angle double down' />Add a New Menu
        </Button>
        { this.state.showForm ? 
        <MenuForm 
        addMenu={this.addMenu} 
        editMenu={this.editMenu}
        style={{ marginLeft: "45%" }} 
        toggleEdit={this.toggleEdit}
        /> : null }
        
        
        <br />
        <br />
        <br />
        <MenuList 
        menus={this.state.menus}
        updateMenu={this.updateMenu}
        deleteMenu={this.deleteMenu}
        editMenu={this.editMenu}
        toggleEdit={this.toggleEdit}
        />
        <br />
        </Container>
      </div>
    );
  }
}

export default App;
