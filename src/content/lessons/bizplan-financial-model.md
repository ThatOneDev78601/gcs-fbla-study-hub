---
title: "Building a linked financial model for a startup"
summary: "Turn assumptions into startup costs, a sales forecast, monthly cash flow, break-even, and linked financial statements, then test what happens when assumptions change."
sourceIds: ["sba","openstax","microsoft"]
reviewed: "2026-11-02"
---

## Start with an assumptions sheet

A financial model is only as good as its assumptions. Put every assumption on one sheet with its source: prices, costs per unit, volumes, wages, rent, loan terms, and growth rates. Every other sheet should calculate from these cells, so changing one assumption updates the whole model. Never type a number into a formula that should come from an assumption.

Continuing the fictional phone repair kiosk: the average repair price is $80. Parts average 35% of price ($28) and card fees are 3% ($2.40), so variable cost is $30.40 and contribution margin is $49.60 per repair. Monthly fixed costs are rent $1,500, wages $2,400, insurance $150, software $60, and marketing $290, totaling $4,400.

| Startup cost | Amount |
| --- | --- |
| Tools and diagnostic equipment | $4,000 |
| Initial parts inventory | $3,000 |
| Kiosk build-out | $6,000 |
| Licenses and permits | $500 |
| Launch marketing | $1,500 |
| Cash reserve (3 months of fixed costs) | $13,200 |
| Total | $28,200 |

## Break-even and funding

Break-even volume is fixed costs divided by contribution margin: 4,400 / 49.60 = 88.7, so the kiosk needs about 89 repairs a month to cover costs before loan payments. That is above the 80-repair steady state from the market research, which is an important finding: the plan must raise volume, raise prices, or cut fixed costs.

Funding covers startup costs. Suppose the owner invests $10,000 and borrows $18,200 through a microloan at 8% for 5 years. The monthly payment is $369.03. In the first month, interest is 18,200 x 0.08 / 12 = $121.33 and the rest, $247.70, repays principal. Interest goes on the income statement; principal repayment does not, but both reduce cash.

## Forecast monthly cash flow

New businesses usually ramp up. Assume 60 repairs in month 1, then 10 more each month. The table shows the first three months.

|  | Month 1 | Month 2 | Month 3 |
| --- | --- | --- | --- |
| Repairs | 60 | 70 | 80 |
| Revenue | $4,800 | $5,600 | $6,400 |
| Variable costs | ($1,824) | ($2,128) | ($2,432) |
| Fixed costs | ($4,400) | ($4,400) | ($4,400) |
| Loan payment | ($369) | ($369) | ($369) |
| Net cash flow | ($1,793) | ($1,297) | ($801) |

- The three months use $3,891 of the $13,200 reserve, so the reserve is adequate for the ramp-up if the forecast holds.
- Depreciation on the $10,000 of tools and build-out, about $167 a month over 5 years, reduces profit on the income statement but not cash.
- The statements link: net income flows to owner's equity on the balance sheet; ending cash on the cash flow statement equals cash on the balance sheet; loan principal repaid lowers the loan liability.

## Test the assumptions

Sensitivity analysis changes one assumption at a time to see what matters most. If price rises to $90 with the same costs, variable cost becomes $34.20 (35% parts plus 3% fees), contribution is $55.80, and break-even falls to 4,400 / 55.80 = about 79 repairs. If volume is 20% below forecast, the reserve lasts fewer months. Present a base case, a conservative case, and an optimistic case, and explain which assumptions drive the difference.

Common errors include mixing monthly and yearly figures, forgetting owner pay, ignoring seasonality, counting loan proceeds as revenue, and forecasting growth with no evidence. Check that the balance sheet balances in every period.

> **Example**
>
> A judge asks, "What happens if a competitor cuts prices and you must charge $70?"
>
> At $70, variable cost is $26.60 (35% plus 3%), contribution is $43.40, and break-even rises to 4,400 / 43.40 = about 102 repairs a month. The kiosk would need more volume, a cheaper parts supplier, or lower fixed costs. A presenter who has run this scenario can answer in seconds.

> **Try it yourself**
>
> Using the kiosk model, calculate break-even if rent rises to $1,800 (fixed costs $4,700) and the price stays $80. Then calculate monthly profit before loan payments at 100 repairs.

<details>
<summary>Check your answer</summary>

Break-even: 4,700 / 49.60 = 94.8, so about 95 repairs. Profit at 100 repairs: 100 x 49.60 - 4,700 = 4,960 - 4,700 = $260 a month before the $369 loan payment, which means cash flow is still negative by about $109 a month. The plan needs a higher price or volume of about 103 repairs, since (4,700 + 369) / 49.60 = 102.2, to cover the loan.

</details>

## Key terms

**Assumption.** An estimated input to a model, such as price or volume, stated with its basis.

**Startup costs.** One-time costs to open a business, plus any initial cash reserve.

**Sensitivity analysis.** Testing how results change when one assumption changes.

**Cash reserve.** Money set aside to cover losses while a business ramps up.

**Contribution margin.** Price minus variable cost per unit.
