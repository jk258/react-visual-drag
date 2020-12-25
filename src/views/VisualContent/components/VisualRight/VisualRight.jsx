import { Menu } from 'antd'
import React, { Component } from 'react'
import style from './VisualRight.module.less'

export default class VisualRight extends Component {
	state = {
		current: '',
	}
	tabClick = (e) => {
		this.setState({ current: e.key })
	}
	render() {
		const visualTabs = [{ name: '属性' }, { name: '动画' }, { name: '事件' }]
		return (
			<div className={style.visuaRight}>
				<Menu mode="horizontal" onClick={this.tabClick}>
					{visualTabs.map((item, index) => {
						return <Menu.Item key={index}>{item.name}</Menu.Item>
					})}
				</Menu>
			</div>
		)
	}
}
