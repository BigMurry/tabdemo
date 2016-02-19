import React from 'react'
import {TabControl, TabItem} from '../components'

const {Component} = React

export default class App extends Component{

  render(){
    return(
      <TabControl active={0}>
        <TabItem title={'tab1'}>
          {'tab 1 content'}
        </TabItem>
        <TabItem title={'tab2'}>
          {'tab 2 content'}
        </TabItem>
        <TabItem title={'tab3'}>
          {'tab 3 content'}
        </TabItem>
      </TabControl>
    )
  }
}
