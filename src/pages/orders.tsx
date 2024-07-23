import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC"
import { Column } from "react-table";
import { Link } from "react-router-dom";

type Datatype = {
    _id: string;
    amount: number;
    quantity: number;
    discount: number;
    status: ReactElement;
    action: ReactElement;
}

const column: Column<Datatype>[] = [
    {
        Header: "Id",
        accessor:"_id"
    },
    {
        Header: "Quantity",
        accessor:"quantity"
    },
    {
        Header: "Discount",
        accessor:"discount"
    },
    {
        Header: "Amount",
        accessor:"amount"
    },
    {
        Header: "Status",
        accessor:"status"
    },
    {
        Header: "Action",
        accessor:"action"
    },
]

const Orders = () => {

    const [rows] = useState<Datatype[]>([
      {
        _id: "abcde",
        amount: 12000,
        quantity: 3,
        discount: 120,
        status: <span className="red">Processing</span>,
        action: <Link to={`/order/abcde`}>View</Link>,
      },
    ]);

    const Table = TableHOC<Datatype>(
        column,
        rows,
        "dashboard-product-box",
        "Orders",
        rows.length > 6?true:false
    )();
  return (
      <div className="container">
          <h1>My Orders </h1>
          {Table}
    </div>
  )
}

export default Orders