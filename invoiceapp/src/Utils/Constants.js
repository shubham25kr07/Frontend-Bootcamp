const ENTITY = {
  CUSTOMER_ENTITY: "CUSTOMER",
  ITEM_ENTITY: "ITEM",
  INVOICE_ENTITY: "INVOICE",
  DASHBOARD_ENTITY: "DASHBOARD",
};

const CUSTOMER_COLUMN = [
  {
    title: "NAME",
    render: (rowData) => {
      return <span>{rowData.name}</span>;
    },
  },
  {
    title: "EMAIL",
    render: (rowData) => {
      return <span>{rowData.email}</span>;
    },
  },
  {
    title: "PHONE NUMBER",
    render: (rowData) => {
      return <span>{rowData.phoneNumber}</span>;
    },
  },
  {
    title: "CREATED ON",
    render: (rowData) => {
      return <span>{rowData.created_at}</span>;
    },
  },
];

const ITEM_COLUMN = [
  {
    title: "NAME",
    render: (rowData) => {
      return <span>{rowData.name}</span>;
    },
  },
  {
    title: "PRICE",
    render: (rowData) => {
      return <span>{rowData.price}</span>;
    },
  },
  {
    title: "DESCRIPTION",
    render: (rowData) => {
      return <span>{rowData.description}</span>;
    },
  },
  {
    title: "CREATED ON",
    render: (rowData) => {
      return <span>{rowData.created_at}</span>;
    },
  },
];

export { ENTITY, CUSTOMER_COLUMN, ITEM_COLUMN };
