import React from 'react'

const {Component} = React

export default class TabItem extends Component{
  render(){
    return(
      <div className={'tab-content'}>
        {this.props.children}
      </div>
    )
  }
}
