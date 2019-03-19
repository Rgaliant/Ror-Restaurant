import React from 'react'
import { Header, Icon, Button, Card } from 'semantic-ui-react'
import MenuForm from './MenuForm'

class Menu extends React.Component {
   state = {
      editing: false,
      name: "",
      description: "",
      courseOne: "",
      courseTwo: "", 
      courseThree: "", 
      courseFour: "", 
      courseFive: ""
   }

  toggleEdit = () => this.setState({ editing: !this.state.editing, });

  

  render() {
    return (
  <div>
    <Card>
      <Card.Content>
      {
          this.state.editing ? 
          <MenuForm { ...this.props } />
          :
        <div>
        <Card.Header as="h2" style={styles.header}>{ this.props.name }</Card.Header>
        <Card.Meta style={{ textAlign: "center" }}>{ this.props.description }</Card.Meta>
        <br />
        <br />
        <Card.Description>
        <p style={styles.body}>{this.props.courseOne}</p>
        <p style={styles.body}>{this.props.courseTwo}</p>
        <p style={styles.body}>{this.props.courseThree}</p>
        <p style={styles.body}>{this.props.courseFour}</p>
        <p style={styles.body}>{this.props.courseFive}</p>
        </Card.Description>
        </div>
      }
        <br />
        <br />
        <Button icon color="blue" onClick={this.toggleEdit}>
            <Icon name="pencil" />
        </Button>
        <Button 
          icon 
          color="red" 
          size="tiny" 
          onClick={() => this.props.deleteMenu(this.props.id)} 
          style={{ marginLeft: "15px", }}
        >
          <Icon name="trash" />
        </Button>
      </Card.Content>
    </Card>
  </div>
    )
  }
}

const styles = {
  body: {
    textAlign: "center",
  },
  header: {
    textAlign: "center"
  }

}

export default Menu