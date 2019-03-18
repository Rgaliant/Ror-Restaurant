import React from 'react'
import { Header, Icon, Button, Card } from 'semantic-ui-react'

const Menu = ({ id, name, description, updateMenu, deleteMenu, courseOne, courseTwo, courseThree, courseFour, courseFive }) => (
  <div>
    <Card>
      <Card.Content>
        <Card.Header as="h2" style={styles.header}>{ name }</Card.Header>
        <Card.Meta style={{ textAlign: "center" }}>{ description }</Card.Meta>
        <br />
        <br />
        <Card.Description>
        <p style={styles.body}>{courseOne}</p>
        <p style={styles.body}>{courseTwo}</p>
        <p style={styles.body}>{courseThree}</p>
        <p style={styles.body}>{courseFour}</p>
        <p style={styles.body}>{courseFive}</p>
        </Card.Description>
        <br />
        <br />

        <Button 
          icon 
          color="red" 
          size="tiny" 
          onClick={() => deleteMenu(id)} 
          style={{ marginLeft: "15px", }}
        >
          <Icon name="trash" />
        </Button>
      </Card.Content>
    </Card>
  </div>
)

const styles = {
  body: {
    textAlign: "center",
  },
  header: {
    textAlign: "center"
  }

}

export default Menu