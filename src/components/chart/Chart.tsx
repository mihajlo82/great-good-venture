import { PieChart } from "@mui/x-charts/PieChart";
import "./chart.css";

export const Chart = () => {
  return (
    <section className="chart">
      <h2 className="chart__title">KYC Application Reports</h2>

      <PieChart
        series={[
          {
            data: [
              { id: 1, value: 11, label: "Approved", color: "green" },
              { id: 2, value: 20, label: "Rejected", color: "orange" },
              { id: 3, value: 7, label: "Cancelled", color: "red" },
              { id: 4, value: 10, label: "Ready For Review", color: "yellow" },
              { id: 5, value: 54, label: "In Progress", color: "blue" },
            ],
            arcLabel: (params) => params.value.toString() ?? "",
          },
        ]}
        width={600}
        height={250}
      />
    </section>
  );
};
