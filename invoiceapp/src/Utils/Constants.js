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
      return <span>{rowData.id}</span>;
    },
  },
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
      return <span>{rowData.phone_number}</span>;
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
      return <span>{rowData.price}</span>;
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
      return <span>rowData.ReferenceNumber</span>;
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
export { ENTITY, CUSTOMER_COLUMN, ITEM_COLUMN, INVOICE_COLUMN };
