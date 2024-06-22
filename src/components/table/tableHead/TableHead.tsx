import { META_ROWS } from "../../../data/data";
import { IMetaRow } from "../type";
import "./tableHead.css";

const TableHead = () => {
  return (
    <div className="table__head">
      {META_ROWS.map((row: IMetaRow) => (
        <div key={row.id} style={{ width: `${row.size}%` }}>
          <h4>{row.label}</h4>
        </div>
      ))}
    </div>
  );
};

export default TableHead;
