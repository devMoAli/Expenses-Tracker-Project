import Chart from "react-apexcharts";
const options = {
  labels: ["Income", "Expenses"],
  colors: ["#34abeb", "#eb8334"],
  charts: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#34abeb", "#eb8334"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};

export default function TransactionChartSummary({
  expenses = 100,
  income = 100,
}) {
  return (
    <Chart
      options={options}
      series={[income, expenses]}
      type="pie"
      width={"100%"}
      height={"100%"}
    />
  );
}
