import React, { useState } from "react";
import "../css/home.css";
import { Checkbox, Radio, Modal} from "antd";
import brand from "../photos/Kompara.png";
import 'antd/dist/antd.css';
import ReactPlayer from 'react-player'

export default function Home() {
  const [value, setValue] = React.useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onclick = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const showModal = () => {
    setIsModalVisible(true);
    console.log(isModalVisible)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  console.log(isModalVisible)
  return (
    <div className="home_brand">
      <div className="brand">
        <img className="image" alt={brand} src={brand}></img>
      </div>
      <div className="home">
        <div className="home_content">
          <div className="descreption">
            <span className="decouvre_parti">Découvrez-vous en vidéo</span>
          </div>
          <div className="choose_content">
            <div className="in_choose_content">
              <span className="checkbox_span">Je suis</span>

              <Radio.Group onChange={onChange} value={value} className="checkbox_div">
                <Radio value={1}>Homme</Radio>
                <Radio value={2}>Femme</Radio>
              </Radio.Group>
            </div>
            <div className="in_choose_content">
              <span className="checkbox_span">Je me déplace</span>

              <Checkbox.Group onChange={onclick} className="checkbox_div">
                <Checkbox value="A">À pieds</Checkbox>
                <Checkbox value="B">En voiture</Checkbox>
              </Checkbox.Group>
            </div>
          </div>

          <button className="submit_button" onClick={showModal}>
            <span className="decouvre_parti">C'est parti !</span>
          </button>
          <Modal title="Découvrez-vous en vidéo" visible={isModalVisible} onCancel={handleCancel} width= "686px"  footer={null}>
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'    width='100%'
          height='100%' />
          </Modal>
        </div>
      </div>
    </div>
  );
}
