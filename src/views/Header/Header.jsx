import style from './Header.module.less'
import { Button, Input } from 'antd'

export default function Header(params) {
	return (
		<div className={style.header}>
			<Button className={style.btn}>撤销</Button>
			<Button className={style.btn}>重做</Button>
			<Button className={style.btn}>插入图片</Button>
			<Button className={style.btn}>预览</Button>
			<Button className={style.btn}>保存</Button>
			<Button className={style.btn}>清空画布</Button>
			<div className={style.size}>
				<span>画布大小：</span>
				<Input size="small"></Input>*<Input size="small"></Input>
			</div>
		</div>
	)
}
