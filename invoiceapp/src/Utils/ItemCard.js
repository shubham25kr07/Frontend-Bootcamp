const ItemCard = ({ Name, Quantity, Price, classNameField, className }) => {
  return (
    <div className={"item-card-field"}>
      <div className="item-card-name">Model A</div>
      <div className="item-card-field-quantity-price">
        <div className="item-card-quantity">x2</div>
        <div className={className || "total-amount-default"}>$30000</div>
      </div>
    </div>
  );
};
export default ItemCard;
