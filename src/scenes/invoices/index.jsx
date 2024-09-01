import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", width: 90 }, // Set fixed width
    {
      field: "name",
      headerName: "Name",
      width: 200, // Set fixed width
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 150, // Set fixed width
    },
    {
      field: "email",
      headerName: "Email",
      width: 200, // Set fixed width
    },
    {
      field: "cost",
      headerName: "Cost",
      width: 120, // Set fixed width
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      width: 150, // Set fixed width
    },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            overflowX: "auto", // Allow horizontal scrolling
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            whiteSpace: "nowrap", // Prevent text wrapping
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <div style={{ height: '100%', width: '100%', overflowX: 'auto' }}>
          <DataGrid
            checkboxSelection
            rows={mockDataInvoices}
            columns={columns}
            disableColumnMenu // Optional: Disables the column menu to prevent text shortening
          />
        </div>
      </Box>
    </Box>
  );
};

export default Invoices;
