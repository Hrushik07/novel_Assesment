import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const API_KEY = "e57be9532cc6743c2a960b6b";

const generateAmortizationSchedule = (principal, annualRate, years, emi) => {
  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;
  const schedule = [];
  let balance = principal;

  for (let month = 1; month <= months; month++) {
    const interest = balance * monthlyRate;
    const principalPaid = emi - interest;
    balance -= principalPaid;

    schedule.push({
      month,
      principal: principalPaid,
      interest,
      balance: balance > 0 ? balance : 0,
    });
  }

  return schedule;
};

function Home() {
  const theme = useTheme();
  const [loanAmount, setLoanAmount] = useState("100000");
  const [rate, setRate] = useState("8.5");
  const [term, setTerm] = useState("3");
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [currencyRates, setCurrencyRates] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [visibleRows, setVisibleRows] = useState(6);

  const calculateEMI = async () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseInt(term) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r <= 0 || n <= 0) {
      alert("Please enter valid numeric values for all fields.");
      return;
    }

    const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue);

    const amortizationData = generateAmortizationSchedule(
      P,
      rate,
      term,
      emiValue
    );
    setSchedule(amortizationData);
    setVisibleRows(100);

    try {
      const res = await axios.get(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`
      );
      setCurrencyRates(res.data.conversion_rates);
    } catch (err) {
      console.error("Exchange rate fetch failed", err);
    }
  };

  const resetTable = () => {
    setLoanAmount("100000");
    setRate("8.5");
    setTerm("3");
    setEmi(null);
    setSchedule([]);
    setCurrencyRates({});
    setSelectedCurrency("USD");
    setVisibleRows(20);
  };

  const getConverted = (value) => {
    const rate = currencyRates[selectedCurrency] || 1;
    return `${(value * rate).toFixed(2)} ${selectedCurrency}`;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        px: { xs: 2, sm: 4, md: 10, lg: 18 },
        py: { xs: 3, sm: 4, md: 5 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        textAlign={{ xs: "center", sm: "left" }}
      >
        Loan Calculator Dashboard
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        <TextField
          label="Loan Amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <TextField
          label="Interest Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <TextField
          label="Term (Years)"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={calculateEMI}
        sx={{
          color: theme.palette.getContrastText(theme.palette.primary.main),
        }}
      >
        CALCULATE
      </Button>

      {emi && (
        <>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Monthly EMI: {getConverted(emi)}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              gap: 2,
              mt: 2,
            }}
          >
            <Typography>Currency</Typography>
            <Select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              size="small"
              sx={{
                width: 100,
                color: theme.palette.text.primary,
                backgroundColor:
                  theme.palette.mode === "light"
                    ? "#ffffff"
                    : theme.palette.background.paper,
              }}
            >
              {Object.keys(currencyRates).map((code) => (
                <MenuItem key={code} value={code}>
                  {code}
                </MenuItem>
              ))}
            </Select>

            <Button
              variant="outlined"
              color="secondary"
              onClick={resetTable}
              sx={{
                ml: { xs: 0, sm: "auto" },
                color:
                  theme.palette.mode === "light"
                    ? "#000"
                    : theme.palette.secondary.main,
                borderColor: theme.palette.secondary.main,
              }}
            >
              RESET TABLE
            </Button>
          </Box>

          <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
            Amortization Schedule ({selectedCurrency})
          </Typography>

          <Box
            sx={{ height: 400, overflow: "auto", width: "100%" }}
            onScroll={(e) => {
              const bottom =
                e.target.scrollHeight - e.target.scrollTop ===
                e.target.clientHeight;
              if (bottom && visibleRows < schedule.length) {
                setVisibleRows((prev) => prev + 20);
              }
            }}
          >
            <TableContainer
              component={Paper}
              sx={{
                maxHeight: 400,
                overflowY: "auto",
                backgroundColor: theme.palette.background.paper,
                width: "100%",
              }}
            >
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {[
                      "Month",
                      "Principal",
                      "Interest",
                      "Remaining Balance",
                    ].map((label) => (
                      <TableCell
                        key={label}
                        sx={{
                          backgroundColor:
                            theme.palette.mode === "light"
                              ? "#f0f0f0"
                              : theme.palette.background.paper,
                          color: theme.palette.text.primary,
                          position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                      >
                        <strong>{label}</strong>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {schedule.slice(0, visibleRows).map((row) => (
                    <TableRow key={row.month}>
                      <TableCell sx={{ color: theme.palette.text.primary }}>
                        {row.month}
                      </TableCell>
                      <TableCell sx={{ color: theme.palette.text.primary }}>
                        {getConverted(row.principal)}
                      </TableCell>
                      <TableCell sx={{ color: theme.palette.text.primary }}>
                        {getConverted(row.interest)}
                      </TableCell>
                      <TableCell sx={{ color: theme.palette.text.primary }}>
                        {getConverted(row.balance)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Home;
