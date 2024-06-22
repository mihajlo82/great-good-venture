import TableBody from "./tableBody/TableBody";
import TableHead from "./tableHead/TableHead";
import "./table.css";
import { TABLE_DATA } from "../../data/data";

const Table = () => {
  return (
    <section className="table__layout">
      <div className="table">
        {TABLE_DATA.length > 0 ? (
          <>
            <TableHead />
            <TableBody />
          </>
        ) : (
          <p className="no__data--found">No Data Found!</p>
        )}
      </div>
    </section>
  );
};

export default Table;
