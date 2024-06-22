import { IRow } from "../type";
import TableRow from "./tableRow/TableRow";
import { TABLE_DATA } from "../../../data/data";
import "./tableBody.css";

const TableBody = () => {
  return (
    <div className="table__body">
      {TABLE_DATA.map((row: IRow) => (
        <TableRow {...row} key={row.id} />
      ))}
    </div>
  );
};

export default TableBody;
