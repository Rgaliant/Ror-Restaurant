import React from 'react'
import { Form, } from 'semantic-ui-react'

class MenuForm extends React.Component {
  state = { name: "", description: "", courseOne: "", courseTwo: "", courseThree: "", courseFour: "", courseFive: "" }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value,  })
    
  }

  // handleChange2 = (e) => {
  // this.setState({ description: e.target.value, })
  // }

  componentDidMount() {
    if (this.props.id)
      this.setState({ name: this.props.name, description: this.props.description, courseOne: this.props.courseOne, courseTwo: this.props.courseTwo, courseThree: this.props.courseThree, courseFour: this.props.courseFour, courseFive: this.props.courseFive  });
  }

  handleSubmit = (e) => {
    let {name, description, courseOne, courseTwo, courseThree, courseFour, courseFive} = this.state
    e.preventDefault()
    if (this.props.id) {
      this.props.editMenu({id: this.props.id, name, description, courseOne, courseTwo, courseThree, courseFour, courseFive});
      this.props.toggleEdit()
    } else {
    this.props.addMenu(name, description, courseOne, courseTwo, courseThree, courseFour, courseFive)
    }
    this.setState({ name: "", description: "", courseOne: "", courseTwo: "", courseThree: "", courseFour: "", courseFive: "" })
  }

  

  render() {
   
    return (
      
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Menu Name"
          placeholder="Add a Menu Name"
          required
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Menu Description"
          placeholder="Describe this Menu"
          required
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <Form.Input
          label="First Course"
          placeholder="What is the First Course?"
          required
          name="courseOne"
          value={this.state.courseOne}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Second Course"
          placeholder="What is the Second Course?"
          required
          name="courseTwo"
          value={this.state.courseTwo}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Third Course"
          placeholder="What is the Third Course?"
          required
          name="courseThree"
          value={this.state.courseThree}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Fourth Course"
          placeholder="What is the Fourth Course?"
          required
          name="courseFour"
          value={this.state.courseFour}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Fifth Course"
          placeholder="What is the Fifth Course?"
          required
          name="courseFive"
          value={this.state.courseFive}
          onChange={this.handleChange}
        />
        <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
      </Form>
  
    )
  }
}

export default MenuForm