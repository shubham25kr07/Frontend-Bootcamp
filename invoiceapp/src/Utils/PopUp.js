import { INVOICE_ITEMS_COLUMN } from "./Constants";
import SelectList from "./SelectList";
import TableHeader from "./TableHeader";

const PopUp = (props) => {
  const { displayModel, showModel, dataList, setList, tableHeader } = props;

  return (
    <div>
      {displayModel && (
        <div className="popup">
          <div className="popup-inner">
            <button type="primary" className="close-btn" onClick={showModel}>
              Close
            </button>
            <div className="modal-header">
              <TableHeader columns={tableHeader} />
            </div>
            <SelectList
              dataList={dataList}
              setList={setList}
              tableHeader={tableHeader}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default PopUp;
