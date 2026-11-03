---
title: "Statistics, SQL, and data tools for data science"
summary: "Classify variables, calculate variance, standard deviation, z-scores, and expected value, work with normal and multivariate data, query with SQL, clean data in Python, and recognize core data and AI libraries and R."
sourceIds: ["pandas-docs","sklearn-docs","python-docs"]
reviewed: "2026-11-02"
---

## Variables and descriptive statistics

Categorical variables name groups: nominal variables have no order (favorite color) and ordinal variables have an order (small, medium, large). Quantitative variables are numbers: discrete variables are counted (number of siblings) and continuous variables are measured (height). The variable type decides which summaries and charts make sense.

The mean is the average, the median is the middle value when sorted, and the mode is the most common value. The median resists outliers better than the mean. Variance measures spread: the average squared distance from the mean. The standard deviation is the square root of variance, in the original units. Use the population formula (divide by n) for a whole population and the sample formula (divide by n - 1) for a sample.

> **Example**
>
> Find the mean, sample variance, and sample standard deviation of 4, 8, 6, 5, 7.
>
> 1. Mean: (4 + 8 + 6 + 5 + 7) / 5 = 30 / 5 = 6.
> 2. Deviations from the mean: -2, 2, 0, -1, 1. Squares: 4, 4, 0, 1, 1. Sum: 10.
> 3. Sample variance: 10 / (5 - 1) = 2.5. (Population variance would be 10 / 5 = 2.)
> 4. Sample standard deviation: square root of 2.5 = 1.58.
>
> Mean 6, sample variance 2.5, sample standard deviation about 1.58.

## Normal distributions, z-scores, and expected value

Many measurements form a bell-shaped normal distribution. The 68-95-99.7 rule says about 68% of values fall within one standard deviation of the mean, 95% within two, and 99.7% within three. A z-score tells how many standard deviations a value is from the mean: z = (x - mean) / standard deviation. With a mean of 70 and a standard deviation of 8, a score of 86 has z = 2, higher than about 97.5% of values.

Expected value is the long-run average of a random outcome: multiply each outcome by its probability and add. A game that pays $50 with probability 0.1 and loses $5 with probability 0.9 has an expected value of 0.1 x 50 + 0.9 x (-5) = 5 - 4.5 = $0.50 per play.

Multivariate data has several variables per record. Explore it with scatter plots, correlation coefficients (from -1 to 1, measuring linear association), and grouped summaries. Correlation does not show causation.

## Query data with SQL

SQL retrieves data from relational databases. SELECT chooses columns, FROM names tables, WHERE filters rows, JOIN combines tables on matching keys, GROUP BY groups rows for aggregate functions (COUNT, SUM, AVG, MIN, MAX), HAVING filters groups, and ORDER BY sorts. A products table lists Pen (Office, $2.00), Notebook (Office, $4.50), Mug (Kitchen, $9.00), and Kettle (Kitchen, $30.00). An orders table records quantities: 10 pens, 4 notebooks, 2 mugs, 5 more pens, and 2 kettles.

```sql
SELECT p.category, SUM(o.qty * p.price) AS revenue
FROM orders AS o
JOIN products AS p ON p.id = o.product_id
GROUP BY p.category
ORDER BY revenue DESC;
```

- Result: Kitchen 78.00 (2 x 9 + 2 x 30) and Office 48.00 (15 x 2 + 4 x 4.50).
- SELECT name, price FROM products WHERE price > 5 ORDER BY price; returns Mug 9.00, then Kettle 30.00.

## Clean data in Python, and the tool landscape

Python's pandas library loads tables into DataFrames and makes cleaning repeatable: read_csv loads data, drop_duplicates removes repeated rows, isna finds missing values, fillna or dropna handles them, astype fixes types, and groupby summarizes. NumPy provides fast numeric arrays, matplotlib and seaborn draw charts, scikit-learn trains classic machine learning models, and PyTorch and TensorFlow build deep learning models. Jupyter notebooks mix code, output, and notes.

R is a language built for statistics. Its tidyverse packages use readable verbs: filter rows, select columns, mutate to add columns, group_by and summarise for grouped statistics, and ggplot2 for charts. Choose the tool your team and task need; the concepts transfer.

```python
import pandas as pd

df = pd.read_csv("survey.csv")
df = df.drop_duplicates()
df["grade"] = df["grade"].astype("Int64")
print(df.isna().sum())                     # missing values per column
df = df.dropna(subset=["hours_sleep"])
print(df.groupby("grade")["hours_sleep"].agg(["mean", "std", "count"]))
```

> **Try it yourself**
>
> (a) Test scores have a mean of 75 and a standard deviation of 5. What is the z-score of 62, and is it unusual? (b) Write a SQL query that counts orders per product name, showing only products with at least 2 orders.

<details>
<summary>Check your answer</summary>

(a) z = (62 - 75) / 5 = -2.6. It is unusual: more than two standard deviations below the mean, lower than roughly 99% of scores if the distribution is normal. (b) SELECT p.name, COUNT(*) AS order_count FROM orders AS o JOIN products AS p ON p.id = o.product_id GROUP BY p.name HAVING COUNT(*) >= 2; With the sample data, only Pen appears, with 2 orders.

</details>

## Key terms

**Ordinal variable.** A categorical variable whose categories have a meaningful order.

**Standard deviation.** The typical distance of values from the mean.

**Z-score.** The number of standard deviations a value is from the mean.

**Expected value.** The probability-weighted average of all possible outcomes.

**GROUP BY.** A SQL clause that groups rows so aggregate functions summarize each group.
