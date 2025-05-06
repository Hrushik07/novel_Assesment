import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
} from "@mui/material";

const About = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 10, lg: 18 },
        py: { xs: 3, sm: 4 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: theme.palette.text.primary }}
      >
        About the Loan Calculator
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: theme.palette.text.primary }}
      >
        Introduction
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to the <strong>Loan Calculator</strong>! Our tool helps you
        easily calculate your monthly loan payments based on the loan amount,
        interest rate, and loan term. Whether you are considering taking out a
        personal loan, mortgage, or car loan, our calculator provides an
        accurate estimation of what your monthly payments would be, helping you
        make informed financial decisions.
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: theme.palette.text.primary }}
      >
        How It Works
      </Typography>
      <Typography variant="body1" paragraph>
        Our loan calculator works by using the following inputs:
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Loan Amount"
            secondary="The total amount of money you are borrowing."
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Interest Rate"
            secondary="The annual interest rate charged on the loan."
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Loan Term"
            secondary="The duration over which you will repay the loan (e.g., 15 years, 30 years, etc.)."
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
      </List>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.text.primary }}
      >
        By inputting these details, the loan calculator provides the following
        output:
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Monthly Payment"
            secondary="The amount you’ll need to pay each month."
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Total Payment"
            secondary="The total amount you’ll pay over the entire term, including both principal and interest."
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Total Interest Paid"
            secondary="The total amount of interest you will pay over the course of the loan."
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
      </List>

      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: theme.palette.text.primary }}
      >
        Key Features:
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Easy-to-Use Interface"
            secondary="Simply enter your loan details, and the calculator will do the rest."
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Customizable Loan Terms"
            secondary="You can adjust the loan amount, interest rate, and term to see how different scenarios impact your monthly payments."
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Real-Time Results"
            secondary="Get instant calculations as soon as you enter or modify your loan details."
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Multiple Loan Types"
            secondary="Ideal for calculating personal loans, home mortgages, car loans, and more."
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Save Your Results"
            secondary="Keep track of your loan calculations for future reference."
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
      </List>

      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: theme.palette.text.primary }}
      >
        Why Use the Loan Calculator?
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ color: theme.palette.text.primary }}
      >
        Understanding your loan payments is crucial before committing to a loan.
        This tool helps you:
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Plan Your Budget"
            secondary="By knowing exactly how much you’ll pay each month, you can plan your finances more effectively."
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Compare Loan Offers"
            secondary="Use the calculator to compare different loans with varying interest rates and terms."
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Make Informed Decisions"
            secondary="With clear, real-time calculations, you can make better financial choices that suit your needs."
            sx={{ color: theme.palette.text.primary }}
          />
        </ListItem>
      </List>

      <Divider
        sx={{ margin: "20px 0", backgroundColor: theme.palette.divider }}
      />

      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: theme.palette.text.primary }}
      >
        Disclaimer
      </Typography>
      <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
        This loan calculator is for informational purposes only. The results
        provided are estimates based on the information entered and should not
        be considered as final offers or advice. Actual loan terms and monthly
        payments may vary based on factors such as credit score, lender
        policies, and other financial considerations.
      </Typography>
    </Box>
  );
};

export default About;
