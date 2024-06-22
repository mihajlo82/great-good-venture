import SubjectIcon from "@mui/icons-material/Subject";
import RiskRow from "../../../../shared/riskRow/RiskRow";
import Status from "../../../../shared/status/Status";
import { META_ROWS } from "../../../../data/data";
import { IRow } from "../../type";
import { characterChecker } from "../../../../utils/stringChecker";
import "./tableRow.css";

const TableRow = (props: IRow) => {
  const { createdDate, email, createdTime, username, type, score, status } =
    props;

  return (
    <div className="table__row">
      <div style={{ width: `${META_ROWS[0].size ?? 15}%` }}>
        <h4>{characterChecker(createdDate, 15)}</h4>
        <h5 className="font__gray">{characterChecker(createdTime, 15)}</h5>
      </div>

      <div style={{ width: `${META_ROWS[1].size ?? 15}%` }}>
        <h4> {characterChecker(username, 25)} </h4>
        <h5 className="font__gray"> {characterChecker(email, 33)} </h5>
      </div>

      <div style={{ width: `${META_ROWS[2].size ?? 15}%` }}>
        <p>{characterChecker(type, 20)}</p>
      </div>

      <div style={{ width: `${META_ROWS[3].size ?? 15}%` }}>
        {!!score ? (
          <RiskRow text={characterChecker(score, 25)} />
        ) : (
          "Not calculated"
        )}
      </div>

      <div style={{ width: `${META_ROWS[4].size ?? 15}%` }}>
        <Status status={characterChecker(status, 33) ?? ""} />
      </div>

      <div style={{ width: `${META_ROWS[5].size ?? 15}%` }}>
        <SubjectIcon
          className="subject__icon"
          onClick={() => window.alert("Comming Soon...")}
        />
      </div>
    </div>
  );
};

export default TableRow;
