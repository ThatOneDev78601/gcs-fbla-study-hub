---
title: "Collect, clean, analyze and communicate data"
summary: "Produce a reproducible analysis with clear units, honest charts and useful conclusions."
sourceIds: ["mba","openstax","microsoft"]
reviewed: "2026-10-27"
---

## Start with a question and a data plan

Define the decision, target population, unit of observation and measurement before collecting data. Distinguish numerical measurements from categories, and discrete counts from continuous quantities. Record provenance: who collected the data, when, how and under which definitions. A CSV is a plain-text table exchange format; a workbook can contain formulas, formatting and multiple sheets. SQL retrieves structured records; Python, R and spreadsheets can transform and analyze them. Select tools based on dataset size, reproducibility and the task. Keep an untouched raw copy so corrections and transformations can be audited.

## Clean deliberately and calculate correctly

Check missing values, duplicate records, impossible ranges, inconsistent categories and mismatched units. Decide and document how each issue will be handled. A missing sale is not automatically a zero sale. Standardize dates and identifiers before merging datasets. Sorting changes order; filtering changes the visible subset. A pivot table summarizes data by categories, but its result depends on the aggregation selected. Relative spreadsheet references move when copied, while absolute references lock a row or column. Calculate percentage change as new minus old, divided by old; a zero baseline requires a different description.

> **Work through an example**
>
> A club’s attendance rises from 40 to 50 members.
>
> The increase is 10 members, or 10 ÷ 40 = 25%. Dividing by the new value would answer a different question and understate this growth rate.

## Communicate without distortion

Choose a chart that fits the question: lines for ordered time trends, bars for category comparisons and scatterplots for relationships between numerical variables. Label units, period, source and relevant uncertainty. Truncated bar axes can exaggerate differences; a line chart may use a narrower scale if it is clearly labeled and justified. Separate results from interpretation and limitations. Provide a recommendation that the evidence supports rather than inventing certainty. Common mistakes include claiming causation from a trend, reporting many decimal places unsupported by measurement quality, and making a chart attractive while leaving the denominator or comparison group undefined.

## Key terms to remember

**Provenance.** A record of where data came from and how it was produced.

**Pivot table.** A tool for grouping and aggregating tabular data.

**Percentage change.** The change divided by the original value, expressed as a percentage.
