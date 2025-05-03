import React from 'react'

class Main_menu extends React.Component {
  render() {
    return (
      <nav>
        {this.props.children}
      </nav>
    )
  }
}

export default Main_menu;




