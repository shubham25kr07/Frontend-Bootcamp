import SelectList from "./SelectList";

const PopUp = (props) => {
  const { displayModel, showModel, dataList, setSelectedItemList } = props;

  return (
    <div>
      {displayModel && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={showModel}>
              Close
            </button>
            <SelectList
              dataList={dataList}
              showModel={showModel}
              setSelectedItemList={setSelectedItemList}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default PopUp;
