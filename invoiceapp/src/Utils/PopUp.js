import SelectList from "./SelectList";

const PopUp = (props) => {
  const { displayModel, showModel, dataList } = props;

  return (
    <div>
      {displayModel && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={showModel}>
              Close
            </button>
            <SelectList dataList={dataList} />
          </div>
        </div>
      )}
    </div>
  );
};
export default PopUp;
