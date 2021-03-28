import React, { Component } from 'react'
import { Input, Menu, Container } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
      <Menu secondary stackable>
      <Menu.Item
        name='Build a Partner'
        active={activeItem === 'Build A Partner'}
        href="/"
      />
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
      </Container>
    )
  }
}
