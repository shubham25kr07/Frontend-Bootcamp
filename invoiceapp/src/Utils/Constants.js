const ENTITY = {
  CUSTOMER_ENTITY: "CUSTOMER",
  ITEM_ENTITY: "ITEM",
  INVOICE_ENTITY: "INVOICE",
  DASHBOARD_ENTITY: "DASHBOARD",
};

const CUSTOMER_COLUMN = [
  {
    title: "ID",
    render: (rowData) => {
      return rowData.id;
      // return <span>{rowData.id}</span>;
    },
  },
  {
    title: "NAME",
    render: (rowData) => {
      return rowData.name;
      // return <span>{rowData.name}</span>;
    },
  },
  {
    title: "EMAIL",
    render: (rowData) => {
      return rowData.email;
      // return <span>{rowData.email}</span>;
    },
  },
  {
    title: "PHONE NUMBER",
    render: (rowData) => {
      return rowData.phone_number;
      // return <span>{rowData.phone_number}</span>;
    },
  },
  {
    title: "CREATED ON",
    render: (rowData) => {
      return rowData.created_at;
      // return <span>{rowData.created_at}</span>;
    },
  },
];

const ITEM_COLUMN = [
  {
    title: "ID",
    render: (rowData) => {
      return <span>{rowData.id}</span>;
    },
  },
  {
    title: "NAME",
    render: (rowData) => {
      return <span>{rowData.Item_Name}</span>;
    },
  },
  {
    title: "PRICE",
    render: (rowData) => {
      return <span>{rowData.Price}</span>;
    },
  },
  {
    title: "DESCRIPTION",
    render: (rowData) => {
      return <span>{rowData.Item_Description}</span>;
    },
  },
  {
    title: "CREATED ON",
    render: (rowData) => {
      return <span>{rowData.added_on}</span>;
    },
  },
];

const INVOICE_COLUMN = [
  {
    title: "ID",
    render: (rowData) => {
      return <span>{rowData.InvoiceId}</span>;
    },
  },
  {
    title: "DATE",
    render: (rowData) => {
      return <span>{rowData.CreatedAt}</span>;
    },
  },
  {
    title: "CUSTOMER",
    render: (rowData) => {
      return <span>{rowData.CustomerName}</span>;
    },
  },
  {
    title: "NUMBER",
    render: (rowData) => {
      return <span>{rowData.ReferenceNumber}</span>;
    },
  },
  {
    title: "PAID STATUS",
    render: (rowData) => {
      return <span>{rowData.PaidStatus}</span>;
    },
  },
  {
    title: "AMOUNT",
    render: (rowData) => {
      return <span>{rowData.TotalAmount}</span>;
    },
  },
  // {
  //   title: "CREATED ON",
  //   render: (rowData) => {
  //     return <span>{rowData.added_on}</span>;
  //   },
  // },
];
const INVOICE_ITEM_MODAL_HEADER = [
  {
    title: "Items",
    render: (rowData) => {
      return <div className="table-row-0">{rowData.Item_Name}</div>;
    },
  },
  {
    title: "Price",
    render: (rowData) => {
      return <div className="table-row-1">{rowData.Price}</div>;
    },
  },
];
const INVOICE_CUSTOMER_MODAL_HEADER = [
  {
    title: "Customers",
    render: (rowData) => {
      return rowData.name;
      // return <span>{rowData.name}</span>;
    },
  },
  {
    title: "email",
    render: (rowData) => {
      return rowData.email;
      // return <span>{rowData.name}</span>;
    },
  },
  {
    title: "Number",
    render: (rowData) => {
      return rowData.phone_number;
      // return <span>{rowData.name}</span>;
    },
  },
];
const INVOICE_ITEMS_COLUMN = [
  {
    title: "Items",
    render: (rowData) => {
      return <div>{rowData.Item_Name}</div>;
    },
  },
  {
    title: "Quantity",
    render: (rowData) => {
      return (
        <div>
          <input
            className="table-row-input"
            type="text"
            value={rowData.count || 1}
            // rowData={(e) => onChange(i, parseInt(e.target.value) || 0)}
          />
        </div>
      );
    },
  },
  {
    title: "Price",
    render: (rowData) => {
      return <div>{rowData.Price}</div>;
    },
  },
  {
    title: "Amount",
    render: (rowData) => {
      return <div>{rowData.Price}</div>;
    },
  },
];
export {
  ENTITY,
  CUSTOMER_COLUMN,
  ITEM_COLUMN,
  INVOICE_COLUMN,
  INVOICE_ITEMS_COLUMN,
  INVOICE_ITEM_MODAL_HEADER,
  INVOICE_CUSTOMER_MODAL_HEADER,
};
