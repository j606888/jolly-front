import { Link } from 'react-router-dom'
import style from './NewCard.module.scss'

const NewCard = () => {
  return (
    <Link className={style.container} to="/new-form">
      <i className="fas fa-plus fa-2x"></i>
      <p>建立新活動問卷</p>
    </Link>
  )
}

export default NewCard