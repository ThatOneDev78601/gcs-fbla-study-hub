---
title: "Inventory costing, adjustments, and errors"
summary: "Compute FIFO, LIFO, and weighted-average results from one dataset, then handle returns, shrinkage, write-downs, and inventory errors."
sourceIds: ["openstax","fasb","mba"]
reviewed: "2026-11-02"
---

## One dataset, three answers

Cost flow methods decide which unit costs go to cost of goods sold and which stay in ending inventory. They do not have to match the physical flow of goods. The total cost of goods available for sale is always split between the two, so ending inventory plus cost of goods sold equals goods available under every method.

Use this periodic dataset for Trailhead Outfitters. Beginning inventory is 100 units at $10. Purchases are 200 units at $11 in March, 150 units at $12 in June, and 50 units at $13 in September. Goods available are 500 units costing 1,000 + 2,200 + 1,800 + 650 = $5,650. The store sold 380 units at $20 each, so 120 units remain.

| Method | Ending inventory (120 units) | Cost of goods sold (380 units) | Gross profit on $7,600 sales |
| --- | --- | --- | --- |
| FIFO: oldest costs sold first | 50 x $13 + 70 x $12 = $1,490 | $5,650 - $1,490 = $4,160 | $3,440 |
| LIFO: newest costs sold first | 100 x $10 + 20 x $11 = $1,220 | $5,650 - $1,220 = $4,430 | $3,170 |
| Weighted average | $5,650 / 500 = $11.30 per unit; 120 x $11.30 = $1,356 | 380 x $11.30 = $4,294 | $3,306 |

- When prices rise, FIFO gives the highest ending inventory and net income. LIFO gives the highest cost of goods sold and the lowest taxable income.
- U.S. GAAP allows LIFO, but IFRS does not. A company that uses LIFO for taxes must also use it for financial reports, called the LIFO conformity rule.
- Specific identification tracks the actual cost of each unit. It suits unique, high-value items such as cars or jewelry.

## Periodic and perpetual systems

A periodic system updates inventory only after a physical count at the end of the period. Purchases go to a Purchases account, and cost of goods sold is calculated as beginning inventory plus net purchases minus ending inventory. A perpetual system updates Inventory and Cost of Goods Sold with every sale, usually through point-of-sale scanning.

FIFO gives the same answer under both systems. LIFO and average cost can differ because a perpetual system uses only the units on hand at the moment of each sale. If a question says perpetual LIFO, work through each sale in date order.

## Returns, shrinkage, and write-downs

A purchase return reduces Inventory in a perpetual system. A customer return puts the goods back into Inventory at their cost and reduces Cost of Goods Sold, but only if the goods can be resold.

Shrinkage is the loss of inventory from theft, damage, or recording errors. It is found by comparing the perpetual record with a physical count. If records show inventory costing $1,560 and the count values it at $1,490, debit Cost of Goods Sold (or Inventory Shrinkage) $70 and credit Inventory $70. Shrinkage rate is the loss divided by the recorded amount: 70 / 1,560 = 4.5%.

Obsolete or damaged goods may be worth less than they cost. Under FIFO and average cost, inventory is reported at the lower of cost and net realizable value. Net realizable value is the expected selling price minus the costs to complete and sell. Companies using LIFO or the retail method use a lower of cost or market rule instead.

> **Example**
>
> Trailhead holds 30 last-season jackets that cost $40 each. They can now sell for $45, but selling them will require $8 each in markdown advertising and shipping.
>
> Net realizable value is 45 - 8 = $37, which is below the $40 cost. Write down 30 x $3 = $90: debit Cost of Goods Sold (or Loss on Inventory Write-Down) 90; credit Inventory 90. The jackets are then carried at $37 each.

## Inventory errors and turnover

Because ending inventory is subtracted to find cost of goods sold, an error in ending inventory moves net income in the same direction. If ending inventory is overstated by $500, cost of goods sold is understated by $500 and net income is overstated by $500. That ending inventory becomes next year's beginning inventory, so next year's income is understated by $500. Over the two years the error cancels, but both years' statements are wrong.

Inventory turnover equals cost of goods sold divided by average inventory. Days in inventory equals 365 divided by turnover. A grocery store has high turnover; a furniture store has low turnover. Compare a company with its own history and its industry rather than with unrelated businesses.

> **Try it yourself**
>
> Beginning inventory is 40 units at $5. The company buys 60 units at $6, then 50 units at $7. It sells 90 units using a periodic system. Find ending inventory and cost of goods sold under FIFO, LIFO, and weighted average.

<details>
<summary>Check your answer</summary>

Goods available: 150 units costing 200 + 360 + 350 = $910. Ending inventory is 60 units. FIFO: 50 x 7 + 10 x 6 = $410 ending; COGS $500. LIFO: 40 x 5 + 20 x 6 = $320 ending; COGS $590. Weighted average: 910 / 150 = $6.0667 per unit; ending 60 x 6.0667 = $364; COGS 90 x 6.0667 = $546. Each pair adds to $910.

</details>

## Key terms

**FIFO.** First-in, first-out: the oldest costs are assigned to cost of goods sold first.

**LIFO.** Last-in, first-out: the newest costs are assigned to cost of goods sold first.

**Goods available for sale.** Beginning inventory plus net purchases for the period.

**Shrinkage.** Inventory loss from theft, damage, or errors, found by comparing records with a count.

**Net realizable value.** Estimated selling price minus the costs needed to complete and sell the item.
