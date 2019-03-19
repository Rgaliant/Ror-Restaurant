import React from 'react'
import Menu from './Menu'
import { Card } from 'semantic-ui-react';

const MenuList = ({ menus, updateMenu, deleteMenu, editMenu, toggleEdit }) => (
  <div>
    <Card.Group  style={{ display: 'flex', justifyContent: 'space-around' }}>
    { menus.map( menu => 
      <Menu
        key={menu.id}
        {...menu}
        updateMenu={updateMenu}
        deleteMenu={deleteMenu}
        editMenu={editMenu}
        toggleEdit={toggleEdit}
      />
    )
  }
    </Card.Group>
  </div>
)

export default MenuList