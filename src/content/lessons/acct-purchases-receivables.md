---
title: "Purchasing, sales, and receivables"
summary: "Purchase documents, the three-way match, discounts, returns and allowances, and the methods for uncollectible accounts."
sourceIds: ["openstax","mba"]
reviewed: "2026-11-02"
---

## Follow the purchasing documents

A purchase passes through several documents so that no single person can order, receive, and pay for goods alone. Each document answers a different question. Tests often describe a document and ask for its name, or ask which document is compared with which.

Before paying, the accounts payable clerk performs a three-way match. The purchase order shows what was ordered and at what price. The receiving report shows what actually arrived. The vendor invoice shows what the vendor is billing. If all three agree, a voucher is approved for payment. In a voucher system, the approved voucher becomes the record that authorizes the check or electronic payment.

| Document | Prepared by | Purpose |
| --- | --- | --- |
| Purchase requisition | Department needing goods | Internal request asking purchasing to buy |
| Purchase order | Purchasing department | Authorizes the vendor to ship at stated terms |
| Receiving report | Receiving department | Records quantity and condition of goods received |
| Vendor invoice | Vendor (seller) | Bill requesting payment |
| Voucher | Accounts payable | Approves payment after documents are matched |
| Debit memo | Buyer | Notifies the vendor that the buyer is reducing the amount owed for a return or allowance |
| Credit memo | Seller | Notifies the customer that the seller is reducing the amount owed |

## Record purchases with terms and returns

Credit terms of 2/10, n/30 mean the buyer may take a 2% discount if it pays within 10 days. Otherwise the full amount is due in 30 days. The discount applies only to the amount still owed after returns. FOB shipping point means the buyer owns goods once they leave the seller and pays freight. FOB destination means the seller owns them until they arrive.

The entries below use a perpetual inventory system, where the Inventory account is updated with each purchase and sale.

> **Example**
>
> Maple Hardware buys $2,000 of merchandise on account, terms 2/10, n/30. It returns $200 of damaged goods and pays the balance within the discount period.
>
> 1. Purchase: debit Inventory 2,000; credit Accounts Payable 2,000.
> 2. Return: debit Accounts Payable 200; credit Inventory 200.
> 3. Balance owed: 2,000 - 200 = 1,800. Discount: 1,800 x 2% = 36.
> 4. Payment: debit Accounts Payable 1,800; credit Inventory 36; credit Cash 1,764.
>
> Maple pays $1,764. The discount lowers the cost of the inventory. Under a periodic system, the same amounts go to Purchases, Purchase Returns and Allowances, and Purchase Discounts instead of Inventory.

## Record sales, returns, allowances, and discounts

A sale on account under a perpetual system needs two entries: one for the selling price and one for the cost of the goods. A sales return means goods come back. A sales allowance is a price reduction the customer accepts while keeping the goods. Sales Returns and Allowances and Sales Discounts are contra-revenue accounts with debit balances. Net sales equal gross sales minus both.

> **Example**
>
> Maple sells goods for $1,500 on account, terms 2/10, n/30. The goods cost $900. The customer returns goods priced at $100 that cost $60, then receives a $50 allowance for a scratch, then pays within 10 days.
>
> 1. Sale: debit Accounts Receivable 1,500; credit Sales 1,500. Debit Cost of Goods Sold 900; credit Inventory 900.
> 2. Return: debit Sales Returns and Allowances 100; credit Accounts Receivable 100. Debit Inventory 60; credit Cost of Goods Sold 60.
> 3. Allowance: debit Sales Returns and Allowances 50; credit Accounts Receivable 50. No inventory entry, because nothing came back.
> 4. Balance: 1,500 - 100 - 50 = 1,350. Discount: 1,350 x 2% = 27. Debit Cash 1,323; debit Sales Discounts 27; credit Accounts Receivable 1,350.
>
> Net sales are 1,500 - 150 - 27 = 1,323. Cost of goods sold is 900 - 60 = 840, so gross profit is 483.

## Estimate and write off uncollectible accounts

Some customers will never pay. The direct write-off method records bad debt expense only when a specific account is judged uncollectible. It is simple and is used for tax purposes, but it is not allowed under GAAP when bad debts are material because the expense lands in a later period than the sale.

The allowance method estimates bad debts in the same period as the sales. The estimate is credited to Allowance for Doubtful Accounts, a contra-asset. Net realizable value is Accounts Receivable minus the allowance. When a specific account is later written off, debit the Allowance and credit Accounts Receivable. That write-off entry does not change expense or net realizable value.

The percentage-of-sales method multiplies credit sales by a rate and records that amount as expense, ignoring the existing allowance balance. The aging method estimates the required ending balance of the allowance, then records whatever adjustment reaches that balance.

| Age of receivable | Balance | Estimated % uncollectible | Estimate |
| --- | --- | --- | --- |
| 0 to 30 days | $20,000 | 1% | $200 |
| 31 to 60 days | $6,000 | 5% | $300 |
| 61 to 90 days | $3,000 | 10% | $300 |
| Over 90 days | $1,000 | 40% | $400 |
| Total | $30,000 |  | $1,200 required ending allowance |

- If the allowance already has a $350 credit balance, the adjustment is 1,200 - 350 = $850.
- If the allowance has a $100 debit balance because write-offs exceeded the estimate, the adjustment is 1,200 + 100 = $1,300.
- If a written-off customer later pays, first reinstate the account (debit A/R, credit Allowance), then record the collection (debit Cash, credit A/R).

> **Try it yourself**
>
> A company has credit sales of $80,000 and receivables of $30,000. The allowance has a $350 credit balance. (a) Using 1% of credit sales, what is bad debt expense? (b) Using the aging table above, what is bad debt expense? (c) What is net realizable value after the aging adjustment?

<details>
<summary>Check your answer</summary>

(a) 80,000 x 1% = $800, regardless of the existing balance. (b) The required balance is $1,200, so the expense is 1,200 - 350 = $850. (c) Net realizable value is 30,000 - 1,200 = $28,800.

</details>

## Control accounts and collection measures

The Accounts Receivable account in the general ledger is a control account. A subsidiary ledger keeps a separate account for each customer. At month end, the schedule of accounts receivable, which lists each customer's balance, must equal the control account. Accounts payable works the same way with a vendor subsidiary ledger.

Receivables turnover equals net credit sales divided by average accounts receivable. Days sales outstanding equals 365 divided by turnover. If net credit sales are $400,000 and average receivables are $40,000, turnover is 10 and customers take about 36.5 days to pay. If terms are n/30, the business should review its credit and collection policies.

## Key terms

**Three-way match.** Comparing the purchase order, receiving report, and vendor invoice before approving payment.

**Voucher.** An internal document that authorizes payment after supporting documents are verified.

**Sales allowance.** A price reduction given to a customer who keeps the goods.

**Allowance for Doubtful Accounts.** A contra-asset holding the estimate of receivables that will not be collected.

**Net realizable value of receivables.** Accounts receivable minus the allowance for doubtful accounts.

**Aging schedule.** A table that groups receivables by how long they have been outstanding to estimate uncollectible amounts.
