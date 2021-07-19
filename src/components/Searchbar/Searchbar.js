import style from './Searchbar.module.scss'

const Searchbar = () => {
  return (
    <div className={style.container}>
      <form>
        <input type="text" placeholder="搜尋問卷標題" className={style.search}/>
        <div className={style.filters}>
          <select>
            <option value="A">我創建的問卷</option>
            <option value="B">所有問卷</option>
          </select>
          <select>
            <option value="C">全部狀態</option>
            <option value="D">已結束</option>
            <option value="F">執行中</option>
          </select>
        </div>
      </form> 
    </div>
  )
}

export default Searchbar