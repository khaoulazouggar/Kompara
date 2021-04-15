import React, { useState } from "react";
import "../css/home.css";
import { Checkbox, Radio, Modal } from "antd";
import brand from "../photos/Kompara.png";
import "antd/dist/antd.css";
import ReactPlayer from "react-player";

export default function Home() {
  const [GenderValue, setGenderValue] = React.useState("");
  const [Situationvalue, setSituationValue] = React.useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onclick = (checkedValues) => {
    // console.log("checked = ", checkedValues);
    setSituationValue(checkedValues);
  };

  const onChange = (e) => {
    // console.log("radio checked", e.target.value);
    setGenderValue(e.target.value);
  };

  const showModal = () => {
    setIsModalVisible(true);
    // console.log(isModalVisible)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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

              <Radio.Group onChange={onChange} value={GenderValue} className="checkbox_div">
                <Radio value="H">Homme</Radio>
                <Radio value="F">Femme</Radio>
              </Radio.Group>
            </div>
            <div className="in_choose_content">
              <span className="checkbox_span">Je me déplace</span>

              <Checkbox.Group onChange={onclick} value={Situationvalue} className="checkbox_div">
                <Checkbox value="A">À pieds</Checkbox>
                <Checkbox value="B">En voiture</Checkbox>
              </Checkbox.Group>
            </div>
          </div>

          <button className="submit_button" onClick={showModal}>
            <span className="decouvre_parti">C'est parti !</span>
          </button>
          <Modal
            title="Découvrez-vous en vidéo"
            visible={isModalVisible}
            onCancel={handleCancel}
            width="686px"
            footer={null}
          >
            {GenderValue === "H" ? 
              Situationvalue[0] === "A" && Situationvalue.length === 1 ? <ReactPlayer url="https://www.youtube.com/watch?v=YI-IRx5MUJw" width="100%" height="100%" /> 
              : Situationvalue[0] === "B" && Situationvalue.length === 1 ? <ReactPlayer url="https://www.youtube.com/watch?v=sxpeZcj-mUI" width="100%" height="100%" />
              : Situationvalue.length === 0  ? <div className="error"><h1>Vous devez choisir une situation</h1></div> : <ReactPlayer url="https://www.youtube.com/watch?v=2clED6rdvPU" width="100%" height="100%" />

              : GenderValue === "F" ?
              Situationvalue[0] === "A" && Situationvalue.length === 1 ? <ReactPlayer url="https://www.youtube.com/watch?v=nnZsH4kNyLI" width="100%" height="100%" />
             : Situationvalue[0] === "B" && Situationvalue.length === 1  ?  <ReactPlayer url="https://www.youtube.com/watch?v=NJd-j05Oc7c" width="100%" height="100%" />
             : Situationvalue.length === 0  ? <div className="error"><h1>Vous devez choisir une situation</h1></div> : <ReactPlayer url="https://www.youtube.com/watch?v=iLXgLYFg2Dg" width="100%" height="100%" />
             : <div className="error"><h1>Vous devez choisir votre sexe et une situation</h1></div>
            }
          </Modal>
        </div>
      </div>
    </div>
  );
}
