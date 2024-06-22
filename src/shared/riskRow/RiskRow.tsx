import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import { IRiskRow } from "./type";
import "./riskRow.css";

const RiskRow = ({ text }: IRiskRow) => {
  return (
    <div className="risk__row">
      <span className="checker">
        <CheckTwoToneIcon style={{ color: "white" }} />
      </span>

      <p className="checker__text">{text}</p>
    </div>
  );
};

export default RiskRow;
