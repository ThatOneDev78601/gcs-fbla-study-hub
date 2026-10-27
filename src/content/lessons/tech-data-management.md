---
title: "Databases, information quality and business systems"
summary: "Turn stored facts into reliable information while keeping relationships and access clear."
sourceIds: ["mdn","openstax"]
reviewed: "2026-10-27"
---

## Organize data for a purpose

Data are recorded facts; information is data interpreted in context. A database organizes related data for retrieval and update. A relational table contains rows representing records and columns representing attributes. A primary key uniquely identifies a record. A foreign key links a record to a related table. Separating customers from orders avoids repeating the same customer details in every transaction. Normalization reduces avoidable duplication and update anomalies, though system designers may make documented performance tradeoffs. Choose data types and validation rules that reflect meaning, such as a date for an order date rather than arbitrary text.

## Retrieve, protect and improve information

Queries select, filter, join, group and summarize records. A join connects related rows using a defined relationship; a careless many-to-many join can multiply results and distort totals. A transaction groups changes that should succeed or fail together, such as recording both sides of an inventory transfer. Backups, access permissions and audit trails support trustworthy operation. Data quality includes accuracy, completeness, consistency, timeliness and fitness for purpose. A required field can improve completeness without guaranteeing truth. Document a data dictionary so people interpret field definitions, codes and units consistently.

> **Work through an example**
>
> A customer’s address appears in 30 order records and changes next month.
>
> Store customer details once in a customer table and link orders using a customer ID. If historical shipping addresses must remain unchanged, preserve that transaction-specific information deliberately.

## Connect systems to business decisions

Transaction processing systems record routine operations. Management reporting summarizes activity, while decision-support systems help analyze alternatives. Enterprise resource planning connects major functions through shared processes and data; customer relationship management organizes customer interactions. Integrations must reconcile identifiers, formats and ownership rather than merely moving files. Common mistakes include using names as guaranteed unique keys, calculating totals after an unintended duplicate join, and collecting fields no one needs. Ask who owns each dataset, how corrections occur and which decision the information supports. A technically successful import can still produce poor information if definitions disagree.

## Key terms to remember

**Primary key.** A field or field combination uniquely identifying a row.

**Foreign key.** A field linking a row to a related table.

**Normalization.** Structuring relational data to reduce unnecessary duplication and anomalies.
