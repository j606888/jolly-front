import style from './Release.module.scss'
import Button from '../../components/Button'
import Checkbox from "../../components/Checkbox"

const Release = () => {
  return <div className={style.container}>
    <div className={style.share}>
      <h2>分享你的問卷</h2>
      <div className={style.link}>
        <input type="text" value="https://www.joli.com/sw234sa" />
        <Button color="primary" text="複製" />
      </div>
    </div>
    <hr />
    <div className={style.mattermost}>
      <h2>發布活動訊息至 Mattermost 頻道</h2>
      <div className={style.formcontrol} >
      <Checkbox name="tainan" value="台南辦公室" />
      </div>
      <div className={style.formcontrol} >
      <Checkbox name="townsquare" value="Town Square" />
      </div>
      <div className={style.formcontrol} >
      <Checkbox name="costomer" value="Customer Support" />
      </div>
      <div className={style.formcontrol} >
      <Checkbox name="design" value="設計部" />
      </div>
    </div>
    <div className={style.send}>
      <Button color="primary" text="發布活動訊息" />
    </div>
  </div>
}

export default Release