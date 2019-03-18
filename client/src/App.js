import React, { Component } from 'react';
import { Container, } from 'semantic-ui-react'
import MenuForm from './components/MenuForm'
import MenuList from './components/MenuList'
import axios from 'axios'



class App extends Component {
  state = {
    menus: [],
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

  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      const { menus, } = this.state;
      this.setState({ menus: menus.filter(t => t.id !== id), })
    })
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });


  render() {
    return (
      <div>
        <Container style={{ padding: "30px 0" }}>
        <MenuForm addMenu={this.addMenu} />
        <br />
        <br />
        <br />
        <MenuList 
        menus={this.state.menus}
        updateMenu={this.updateMenu}
        deleteMenu={this.deleteMenu}
        />
        <br />
        </Container>
      </div>
    );
  }
}

export default App;
