import { Link } from "react-router-dom";

const AddBox = ({ value, link }) => {
  return (
    <div className="empty-invoice-list">
      <div className="empty-box">
        <div className="empty-box-text" data-testid="custom-element">
          NO Customers
        </div>
        <Link to={link} className="add-button">
          <i className="fa fa-plus"></i>
          Add Customer
        </Link>
      </div>
    </div>
  );
};

export default AddBox;
