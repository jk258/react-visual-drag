import React, { Component } from 'react'
import VisualLeft from './components/VisualLeft/VisualLeft'
import VisualRight from './components/VisualRight/VisualRight'
import style from './VisualContent.module.less'

export default class VisualContent extends Component {
	render() {
		return (
			<div className={style.visualcontent}>
				<VisualLeft />
				<div></div>
				<VisualRight />
			</div>
		)
	}
}
