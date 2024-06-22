import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import { IStatus } from "./type";
import "./status.css";

const Status = ({ status }: IStatus) => {
  return (
    <div className="status__layout">
      {status === "Approved" ? <CheckTwoToneIcon /> : <MoreHorizTwoToneIcon />}

      <p className="status__text">{status}</p>
    </div>
  );
};

export default Status;
