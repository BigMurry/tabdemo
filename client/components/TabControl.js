import React from 'react'
import classnames from 'classnames'

const {Component} = React

export default class TabControl extends Component{

  constructor(props){
    super(props)
    this._renderTabHead = this._renderTabHead.bind(this)
    this._renderTabContent = this._renderTabContent.bind(this)
    this.state = {
      activeIndex: props.active===undefined
        ? 0
        : props.active
    }
  }

  _tabClick(idx){
    this.setState({activeIndex: idx})
  }

  _renderTabHead(){
    const {activeIndex} = this.state
    const tabs = this.props.children
    return(
      <div className={'tab-head-wrapper'}>
        {tabs.map((tab, idx) => {
          return (
            <div
              key={idx}
              onClick={this._tabClick.bind(this, idx)}
              className={classnames('tab-head', {'active': activeIndex === idx})}>
              {tab.props.title}
            </div>
          )
        })}
      </div>
    )
  }

  _renderTabContent(){
    const tabs = this.props.children
    const {activeIndex} = this.state
    return (
      <div className={'tab-content-wrapper'}>
        {tabs[activeIndex]}
      </div>
    )
  }

  render(){
    return(
      <div>
        {this._renderTabHead()}
        {this._renderTabContent()}
      </div>
    )
  }
}
