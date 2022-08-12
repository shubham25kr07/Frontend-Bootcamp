import { useState } from "react";
import PopUp from "./PopUp";

const DropDownModal = (props) => {
  const [displayModel, setDisplayModel] = useState(false);
  const { dataList } = props;

  console.log(displayModel);
  const showModel = () => {
    setDisplayModel(!displayModel);
  };

  return (
    <div>
      <button onClick={showModel}>Open Modal</button>
      <PopUp
        dataList={dataList}
        displayModel={displayModel}
        showModel={showModel}
      />
    </div>
  );
};
export default DropDownModal;
