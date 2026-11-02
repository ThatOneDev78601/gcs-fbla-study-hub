---
title: "Business spreadsheet formulas and checks"
summary: "Formulas, cell references, summaries, and checks for a business worksheet."
sourceIds: ["microsoft","maryland","national"]
reviewed: "2026-10-27"
---

## Build the calculation before the formatting

Start by identifying which columns are inputs and which are calculated outputs. Keep units consistent: a percentage entered as 0.08 represents eight percent when formatted as a percentage. Multiplication and division occur before addition and subtraction unless parentheses change the order. A formula such as =B2*C2 calculates line revenue. SUM adds a range; AVERAGE computes its arithmetic mean; COUNT counts numeric values, while COUNTA counts nonempty cells. Blank cells and zero values have different meanings, so inspect missing data before calculating an average.

## Choose functions and cell references

IF selects an output based on a condition; COUNTIF counts matching records; SUMIF totals records matching a condition. A lookup retrieves a related value using a key. Confirm whether an exact match is required and what happens when the key is missing. Relative references move when copied, absolute references hold both row and column, and mixed references hold one. Use a fixed reference for a shared assumption such as a discount rate, then test the copied formula in the first and last rows.

> **Example**
>
> Quantity is in B2, price in C2, and a discount of 10% is stored in H2. You need revenue after discount for each row.
>
> Use =B2*C2*(1-$H$2). With 4 units at $25, the result is $90. Copy down, then verify that B and C row numbers move while $H$2 stays fixed.

## Summarize and check the finished workbook

Sort the entire dataset so values stay attached to the correct records. Filters temporarily hide records; they do not delete them. Use a pivot table when the task asks for grouped totals by category or period, and refresh it after changing source data. Conditional formatting highlights a rule; data validation restricts permitted entry. Neither guarantees that a plausible number is correct. Verify totals manually on a small sample, inspect formula errors, label charts and units, and test print area, scaling, repeated headers, and page orientation.

- Practice task: create six sales rows, calculate discounted revenue, total revenue by product, and produce one labeled comparison chart.
- Common mistake: typing a total over a formula or including a subtotal twice in a grand total.

## Key terms

**Mixed reference.** A reference fixing only its row or its column, such as A$2 or $A2.

**Pivot table.** A tool that groups and summarizes source records.

**Data validation.** Rules restricting the values a cell accepts.
