---
title: "Payroll workbook: from timecard to tax deposit"
summary: "Calculate gross pay, deductions, net pay, and employer taxes, then journalize and remit them using dated practice assumptions."
sourceIds: ["irs-pub15","ssa-wage-base","dol-flsa","openstax"]
reviewed: "2026-11-02"
---

## Practice assumptions and where to check them

Payroll rates and limits change, so every number below is a stated practice assumption for 2026. Check IRS Publication 15 and the Social Security Administration before using any rate outside this lesson. On a test, use the rates the question gives you.

Employee Social Security tax is 6.2% of wages up to the yearly wage base, which the SSA set at $184,500 for 2026. Medicare tax is 1.45% of all wages with no limit, plus an additional 0.9% withheld from an employee's wages above $200,000 in a year. The employer matches Social Security and the regular 1.45% Medicare. Together these are called FICA. The federal unemployment tax (FUTA) is 6.0% on the first $7,000 of each employee's wages, reduced to a net 0.6% when the employer receives the full state credit. State unemployment tax (SUTA) rates vary by state and employer. This lesson assumes 2.6%.

Federal and state income tax withholding come from the employee's Form W-4 and the IRS or state tables. Tests usually give you the withholding amount. Do not try to compute it unless the question supplies the table.

## Calculate gross pay and taxable wages

The Fair Labor Standards Act requires overtime of at least 1.5 times the regular rate for hours over 40 in a workweek for nonexempt employees. Exempt employees, usually salaried professionals and managers who meet duty and salary tests, are not owed overtime.

Deductions affect taxable wages differently. A traditional 401(k) contribution reduces wages subject to federal income tax withholding, but it is still subject to Social Security, Medicare, and FUTA. A Section 125 cafeteria plan health premium reduces wages for income tax, FICA, and FUTA. This difference is a common test question.

> **Example**
>
> Rosa earns $18 an hour and works 46 hours in a week. She contributes 5% of gross pay to a traditional 401(k) and pays $30 for health insurance through a Section 125 plan. Her W-4 and the tables give federal withholding of $61.00 and state withholding of $30.00. Her year-to-date wages are well below every wage base.
>
> 1. Regular pay: 40 x $18 = $720.00. Overtime rate: $18 x 1.5 = $27. Overtime pay: 6 x $27 = $162.00. Gross pay: $882.00.
> 2. 401(k): 5% x 882 = $44.10. Health premium: $30.00.
> 3. FICA wages: 882 - 30 = $852.00. The 401(k) is not subtracted.
> 4. Social Security: 852 x 6.2% = $52.82. Medicare: 852 x 1.45% = $12.35.
> 5. Total deductions: 44.10 + 30.00 + 52.82 + 12.35 + 61.00 + 30.00 = $230.27.
> 6. Net pay: 882.00 - 230.27 = $651.73.
>
> Rosa's check is $651.73. Her earnings record shows gross pay $882.00, each deduction, and net pay, and her year-to-date totals are updated.

## Calculate employer payroll taxes

Employer taxes are an expense of the business and are never deducted from the employee. Using Rosa's $852 of FICA and FUTA wages, the employer owes Social Security 52.82, Medicare 12.35, FUTA 852 x 0.6% = 5.11, and SUTA 852 x 2.6% = 22.15. Total payroll tax expense is $92.43.

Wage bases matter near the limit. If an employee has already earned $183,000 in 2026 and earns $3,000 more, only 184,500 - 183,000 = $1,500 is subject to Social Security tax. All $3,000 is still subject to Medicare. FUTA stops for each employee once that employee's wages for the year pass $7,000.

## Journalize the payroll and the deposits

The payroll entry records gross wages as expense and creates a liability for each amount withheld. The employer tax entry is separate. Later entries pay the employee and remit the withheld and employer taxes.

| Entry | Debit | Credit |
| --- | --- | --- |
| Record payroll | Wages Expense 882.00 | Social Security Tax Payable 52.82; Medicare Tax Payable 12.35; Federal Income Tax Payable 61.00; State Income Tax Payable 30.00; 401(k) Payable 44.10; Health Insurance Payable 30.00; Wages Payable 651.73 |
| Record employer taxes | Payroll Tax Expense 92.43 | Social Security Tax Payable 52.82; Medicare Tax Payable 12.35; FUTA Tax Payable 5.11; SUTA Tax Payable 22.15 |
| Pay employee | Wages Payable 651.73 | Cash 651.73 |
| Deposit federal taxes reported on Form 941 | Federal Income Tax Payable 61.00; Social Security Tax Payable 105.64; Medicare Tax Payable 24.70 | Cash 191.34 |

- The federal deposit combines withheld income tax with both halves of FICA: 61.00 + (52.82 x 2) + (12.35 x 2) = 191.34.
- FUTA is deposited separately and reported yearly on Form 940. SUTA goes to the state agency.
- Check the totals: the credits in the payroll entry must add up to gross pay.

## Payroll records and forms

The payroll register lists every employee for one pay period with hours, gross pay, each deduction, and net pay. The employee earnings record follows one employee across the whole year and supplies the year-to-date totals that tell you when a wage base is reached. Federal law requires employers to keep employment tax records for at least four years.

| Form | Who files or receives it | What it reports |
| --- | --- | --- |
| W-4 | Employee gives to employer | Information used to figure federal income tax withholding |
| I-9 | Employee and employer | Identity and authorization to work (kept by employer, not sent to IRS) |
| 941 | Employer, quarterly | Federal income tax withheld and FICA for the quarter |
| 940 | Employer, yearly | FUTA tax |
| W-2 | Employer to each employee | Yearly wages and taxes withheld |
| W-3 | Employer to the Social Security Administration | Summary of all W-2 forms |
| 1099-NEC | Business to an independent contractor | Nonemployee compensation. Contractors are not on payroll and have no withholding. |

> **Try it yourself**
>
> Dev earns $16 an hour and works 44 hours. There are no pre-tax deductions. Federal withholding is $38.00 and state withholding is $20.00. Using this lesson's assumptions, find gross pay, Social Security, Medicare, net pay, and the employer's total payroll tax expense.

<details>
<summary>Check your answer</summary>

Gross pay: 40 x 16 = 640, plus 4 x 24 = 96, for $736.00. Social Security: 736 x 6.2% = $45.63. Medicare: 736 x 1.45% = $10.67. Net pay: 736 - 45.63 - 10.67 - 38 - 20 = $621.70. Employer taxes: Social Security 45.63 + Medicare 10.67 + FUTA 4.42 (736 x 0.6%) + SUTA 19.14 (736 x 2.6%) = $79.86.

</details>

## Key terms

**FICA.** Federal Insurance Contributions Act taxes: Social Security and Medicare, paid by both employee and employer.

**Wage base.** The maximum yearly wages subject to a particular tax, such as Social Security or FUTA.

**Nonexempt employee.** An employee covered by FLSA overtime rules.

**Payroll register.** A summary of all employees' earnings and deductions for one pay period.

**Employee earnings record.** A cumulative record of one employee's pay and deductions for the year.
