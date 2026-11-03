---
title: "Spreadsheet labs: functions, references, summaries, and charts"
summary: "Hands-on labs with a downloadable practice file: IF and AND, lookups, PMT and FV, dates, absolute references, multi-sheet formulas, sorting, filtering, pivot tables, calculated fields, grouping, and charts, each with an answer key."
sourceIds: ["microsoft"]
reviewed: "2026-11-02"
---

## Set up the practice file

Download the practice file [computer-applications-sales.csv](/practice/computer-applications-sales.csv) and open it in Excel or Google Sheets. It has 12 fictional sales records with Date, Region, Rep, Product, Units, and Unit Price in columns A to F, with headers in row 1 and data in rows 2 to 13. Save it as a workbook (.xlsx) before you start, since CSV files do not keep formulas, formatting, or extra sheets.

Work through each lab, then compare your results with the answer key. The function names below match Microsoft Excel; Google Sheets uses the same names for these functions. Use the Production Test Reference Guide named in the current event guide for any required formatting.

1. In G1 type Revenue. In G2 enter =E2*F2 and fill down to G13.
2. Format F and G as currency with two decimals.
3. Freeze the top row so headers stay visible.
4. In G14 enter =SUM(G2:G13). Check: total revenue is $2,401.25.

## Logic, lookups, and references

IF returns one value when a test is true and another when it is false. AND requires every condition to be true; OR requires at least one. Nest IFs, or use IFS, for more than two outcomes. COUNTIF, SUMIF, and AVERAGEIF apply one condition; COUNTIFS and SUMIFS apply several.

A relative reference such as G2 changes when copied. An absolute reference such as $J$1 stays fixed, which you need when every row uses one shared input cell. A mixed reference such as $J1 fixes only the column. Lookups find a value by a key: VLOOKUP(key, table, column number, FALSE) searches the first column of a table for an exact match; XLOOKUP(key, lookup range, return range, "Not found") is more flexible and works in any direction. INDEX with MATCH does the same in older versions.

| Lab task | Formula (row 2, then fill down) | Answer key |
| --- | --- | --- |
| H: flag sales of $250 or more | =IF(G2>=250,"High","Standard") | 3 rows are High (Blake $270, Avery $264, Blake $300) |
| I: bonus for South sales of $250 or more | =IF(AND(G2>=250,B2="South"),"Bonus","") | 2 rows (both Blake) |
| Count Planner sales | =COUNTIF(D2:D13,"Planner") | 4 |
| Total Planner units | =SUMIF(D2:D13,"Planner",E2:E13) | 80 |
| South revenue | =SUMIF(B2:B13,"South",G2:G13) | $675.00 |
| Average units per sale | =AVERAGE(E2:E13) | 51.25 |
| Commission at a rate in J1 (enter 0.05 in J1) | =G2*$J$1 | Row 2: $7.00; the reference to J1 must be absolute |

> **Example**
>
> Build a price lookup. On a new sheet named Prices, list Notebook 3.50, Pen pack 2.25, and Planner 12.00 in A2:B4. On the sales sheet, look up each product's price.
>
> 1. In K2 enter =XLOOKUP(D2,Prices!$A$2:$A$4,Prices!$B$2:$B$4,"Not found").
> 2. Or, with VLOOKUP: =VLOOKUP(D2,Prices!$A$2:$B$4,2,FALSE).
> 3. Fill down. Every result should match column F.
>
> Absolute references keep the price table fixed as the formula fills down, and FALSE (or XLOOKUP's default) forces an exact match. If a product is misspelled, XLOOKUP shows "Not found" instead of an error.

## Financial and date functions

PMT calculates a loan payment: =PMT(rate per period, number of periods, present value). Enter the loan as a positive present value and Excel returns a negative payment (cash going out), or enter it as negative to get a positive result. =PMT(6%/12,60,-20000) returns $386.66 for a $20,000, 5-year loan at 6%. FV calculates the future value of regular savings: =FV(5%/12,120,-100) returns $15,528.23 for $100 a month for 10 years at 5%. Divide annual rates by 12 and multiply years by 12 for monthly periods.

Dates are stored as serial numbers, so they can be subtracted. TODAY() returns the current date. =EDATE(A2,3) adds three months. =NETWORKDAYS(A2,A3) counts workdays between two dates. =TEXT(A2,"mmmm") returns the month name, which is useful for grouping. =DATEDIF(A2,A3,"d") returns days between dates.

## Multiple sheets, sorting, filtering, and pivot tables

Refer to another sheet with its name and an exclamation point: =Prices!B2. A 3D reference adds the same cell across consecutive sheets: =SUM(Jan:Mar!B5). Sort the whole table, not one column, by selecting any cell in the data and using a multi-level sort, such as Region A to Z, then Revenue largest to smallest. Filters hide rows that do not match without deleting them; SUBTOTAL(9,G2:G13) sums only the visible rows.

A pivot table summarizes data by category without formulas. Insert a pivot table from A1:G13, put Region in Rows, Product in Columns, and Revenue in Values (Sum). Group dates by month to see trends. A calculated field adds a formula inside the pivot table, such as Commission = Revenue x 0.05. Refresh the pivot table after changing source data. Outline grouping and the Subtotal command collapse and summarize sorted data.

| Pivot check | Answer key |
| --- | --- |
| Revenue by region | North $572.75; South $675.00; East $575.00; West $578.50 |
| Revenue by product | Notebook $665.00; Pen pack $776.25; Planner $960.00 |
| Revenue by month | January $854.00; February $751.00; March $796.25 |
| Grand total | $2,401.25 |

## Charts and checking your work

Choose a column or bar chart to compare categories (revenue by region), a line chart for change over time (revenue by month), and a pie chart only for a few parts of a whole. Add a descriptive title, axis titles with units, and data labels where they help. Remove clutter such as unnecessary gridlines and 3D effects. Move a chart to its own sheet or position it so it prints on one page.

Check every workbook before submitting: compare totals with a quick manual estimate, use Show Formulas to look for typed numbers that should be formulas, search for error values (#N/A, #DIV/0!, #REF!), confirm absolute references after filling, and set the print area, orientation, scaling, and repeated header rows.

> **Try it yourself**
>
> Using the practice file: (a) Write a formula that returns the total revenue for Casey. (b) Write a formula that counts sales in the East region with at least 50 units. (c) Create a column chart of revenue by product. Which product leads, and by how much over the second?

<details>
<summary>Check your answer</summary>

(a) =SUMIF(C2:C13,"Casey",G2:G13) returns $575.00 (180 + 202.50 + 192.50). (b) =COUNTIFS(B2:B13,"East",E2:E13,">=50") returns 2 (90 pen packs and 55 notebooks). (c) Planner leads with $960.00, which is $183.75 more than Pen pack at $776.25. The chart should have a title, labeled axes with currency, and categories in a sensible order.

</details>

## Key terms

**Absolute reference.** A cell reference with dollar signs, such as $J$1, that does not change when copied.

**XLOOKUP.** A function that finds a key in one range and returns the matching value from another.

**PMT.** A function that calculates the payment for a loan with constant payments and rate.

**Pivot table.** An interactive summary that groups and totals data by category.

**Calculated field.** A formula added inside a pivot table using its fields.
