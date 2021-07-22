import Button from "../../components/Button";
import Switch from "react-switch";
import { useEffect, useState } from "react";

import style from "./FormSettings.module.scss";

const Switcher = ({ id, onClick }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (checked, _, id) => {
    setChecked(checked);
    onClick(id, checked);
  };

  return <Switch onChange={handleChange} checked={checked} id={id} />;
};

const FormSettings = () => {
  const [data, setData] = useState({});

  const onClick = (id, result) => {
    setData((prev) => ({ ...prev, [id]: result }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className={style.container}>
      <form className={style.questions}>
        <fieldset>
          <legend>
            <h2>問卷資訊</h2>
            <hr />
          </legend>
          <label className={style.formcontrol}>
            <span>問卷名稱</span>
            <input type="text" placeholder="無標題活動問卷" />
          </label>
          <label className={style.formcontrol}>
            <span>活動描述</span>
            <textarea />
          </label>
          <label className={style.formcontrol}>
            <span>備註圖片</span>
            <input type="file" />
          </label>
        </fieldset>

        <fieldset>
          <legend>
            <h2>回收設定</h2>
            <hr />
          </legend>
          <label className={style.formcontrol}>
            <span>問卷截止時間</span>
            <Switcher id="deadline" onClick={onClick} />
          </label>
          <label className={style.formcontrol}>
            <span>收集填表者名單</span>
            <Switcher id="collect" onClick={onClick} />
          </label>
        </fieldset>

        <fieldset>
          <legend>
            <h2>填寫者權限</h2>
            <hr />
          </legend>
          <label className={style.formcontrol}>
            <span>可檢視他人完整回覆</span>
            <Switcher id="viewable" onClick={onClick} />
          </label>
          <label className={style.formcontrol}>
            <span>僅能提交一份</span>
            <Switcher id="only" onClick={onClick} />
          </label>
          <label className={style.formcontrol}>
            <span>提交後可編輯</span>
            <Switcher id="editable" onClick={onClick} />
          </label>
        </fieldset>
        <div className={style.buttons}>
          <Button text="取消" />
          <Button text="建立題目 >" color="primary" />
        </div>
      </form>
    </div>
  );
};

export default FormSettings;
