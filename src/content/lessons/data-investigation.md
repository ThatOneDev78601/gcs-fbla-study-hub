---
title: "A complete data investigation: question, cleaning, analysis, visuals, and recommendations"
summary: "Frame a question, check and document a dataset, clean it reproducibly, analyze with fair comparisons and uncertainty, build three clear visuals, and recommend feasible actions."
sourceIds: ["census-data","pandas-docs","microsoft"]
reviewed: "2026-11-02"
---

## Frame the question and check the source

A good analysis question is specific, answerable with available data, and tied to a decision: "Which branch library programs reach the most residents per 1,000 people, and where should next year's program budget go?" This lesson uses a fictional library dataset; students choose their own data for the competition topic.

Check every source: who published the data, how it was collected, what period it covers, how each field is defined, and its known limitations. Prefer official and documented sources. Save the original file unchanged, and record the download date and URL.

Write a data dictionary listing each column's name, meaning, type (number, text, date), units, and allowed values. It catches problems early, such as a column mixing counts and percentages.

## Clean and transform reproducibly

A spreadsheet works for small datasets if each step is documented. A short script is more reproducible, because the steps are the code.

1. Copy the raw file; never edit the original.
2. Remove exact duplicate rows and record how many were removed.
3. Standardize categories, such as "N. Branch," "North," and "north branch" all becoming "North."
4. Handle missing values deliberately: leave them blank and exclude them, fill them using a stated rule, or drop rows, and record the choice and count.
5. Check outliers: a program with 9,000 attendees at a 40-seat room is probably an entry error. Verify it before removing or correcting it.
6. Create calculated fields, such as attendance per 1,000 residents or percent change.
7. Keep a cleaning log, or a script in Python or R, so someone else can repeat every step and get the same result.

```python
import pandas as pd
raw = pd.read_csv("library_programs_raw.csv")
df = raw.drop_duplicates()
df["branch"] = df["branch"].str.strip().str.title().replace({"N. Branch": "North"})
print("Missing attendance:", df["attendance"].isna().sum())
df = df.dropna(subset=["attendance"])
df["per_1000"] = df["attendance"] / df["residents"] * 1000
df.to_csv("library_programs_clean.csv", index=False)
```

## Analyze fairly and state uncertainty

Compare like with like. Raw counts favor large groups; rates adjust for size. Branch A had 4,800 program visits and serves 24,000 residents; Branch B had 3,000 visits and serves 10,000 residents. A has more visits, but B reaches 300 per 1,000 residents compared with A's 200, so B's programs reach a larger share of its community.

Describe the uncertainty. Small samples vary a lot; a 50% jump from 4 to 6 attendees means little. Survey results have margins of error. Data from one year may reflect an unusual event.

Correlation is not causation. If branches with more programs have more visitors, the programs may cause visits, busier branches may schedule more programs, or both may depend on a third factor such as location near a school. To support a causal claim, you need a comparison that rules out other explanations, such as the same branch before and after a change, with other conditions steady.

## Visualize and recommend

Choose the chart for the question: bar charts compare categories, line charts show change over time, scatter plots show relationships between two numbers, and tables give exact values. Start bar chart axes at zero, label axes with units, use a clear title that states the finding, add a source note, and avoid 3D effects and pie charts with many slices. Make sure colors are distinguishable for people with color vision deficiency.

Recommendations follow from findings: each states the action, the evidence, the resources needed (money, staff, time), feasibility, how success will be measured, and possible social or economic effects, including on groups who might be left out.

> **Example**
>
> Three visuals for the library analysis.
>
> 1. Bar chart: "Branch B reaches the most residents per 1,000," program visits per 1,000 residents by branch, axis from zero, source note.
> 2. Line chart: "Weekend programs grew while weekday programs stayed flat," monthly attendance by program time over two years.
> 3. Scatter plot: "Branches near schools draw more youth attendance," distance to nearest school versus youth attendance per 1,000, with a note that this shows association, not proof of cause.
>
> Recommendation: shift 15% of next year's program budget to weekend sessions at Branches A and C, measured by visits per 1,000 residents in a six-month pilot. Resources: existing staff with adjusted schedules. Limitation: one year of data; repeat the analysis after the pilot.

> **Try it yourself**
>
> A dataset shows Store X had 1,200 complaints and Store Y had 300. Store X served 400,000 customers; Store Y served 50,000. (a) Compare complaint rates per 1,000 customers. (b) Write one sentence a careful analyst would add before recommending action.

<details>
<summary>Check your answer</summary>

(a) X: 1,200 / 400,000 x 1,000 = 3.0 per 1,000. Y: 300 / 50,000 x 1,000 = 6.0 per 1,000. Y's rate is twice X's despite fewer complaints. (b) Sample sentence: "Before acting, check whether both stores record complaints the same way and whether this pattern holds across several months."

</details>

## Report the process

A process report or presentation explains the question, data sources and their limits, cleaning steps and counts, methods, findings with visuals, recommendations, and limitations, in that order. Judges should be able to repeat the analysis from your files. Map each section to the rating criteria so every scored requirement is easy to find.

## Key terms

**Data dictionary.** A description of each field in a dataset: name, meaning, type, units, and allowed values.

**Reproducible analysis.** An analysis that someone else can repeat from the same files and steps to get the same results.

**Rate.** A count adjusted for size, such as visits per 1,000 residents.

**Confounding variable.** A third factor that affects both variables being compared.

**Outlier.** A value far from the others that may be an error or a real extreme.
