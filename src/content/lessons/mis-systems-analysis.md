---
title: "Management information systems: analysis, OOP, databases, projects, and infrastructure"
summary: "Gather requirements, test feasibility, diagram workflows, design and verify systems, apply object-oriented programming, design normalized schemas, compare SQL, NoSQL, and OLAP, choose a project method, and evaluate emerging infrastructure."
sourceIds: ["python-docs","pmi","cisco"]
reviewed: "2026-11-02"
---

## Analyze requirements and feasibility

The systems development life cycle (SDLC) moves through planning, analysis, design, development, testing, implementation, and maintenance. In analysis, gather requirements through interviews, surveys, observation, document review, and joint workshops with stakeholders (users, managers, IT staff, and sponsors). Functional requirements say what the system must do ("Managers can approve time-off requests"); nonfunctional requirements say how well ("Pages load in under two seconds," "Data is encrypted").

Feasibility asks whether the project should proceed, often summarized as TELOS: technical (can it be built), economic (do benefits exceed costs), legal, operational (will people use it), and schedule (can it be done in time). Workflow diagrams and data flow diagrams show processes, data stores, external entities, and data flows, which reveal gaps and duplicated work. Validation asks whether you are building the right system; verification asks whether you built the system right.

## Object-oriented programming

Object-oriented programming models a system as objects. A class is a blueprint; an object is an instance of it. Attributes hold an object's data and methods define its behavior. Encapsulation keeps data private and changes it only through methods, which protects rules such as "balance cannot go negative." Inheritance lets a subclass reuse and extend a parent class. Polymorphism lets different classes respond to the same method call in their own way. Abstraction exposes only what users of the class need.

A library is code you call, such as a date library. A framework calls your code within its structure, such as a web framework that runs your functions when pages are requested.

```python
class Account:
    def __init__(self, owner, balance=0.0):
        self.owner = owner
        self._balance = balance          # encapsulated

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self._balance += amount

    @property
    def balance(self):
        return self._balance


class SavingsAccount(Account):           # inheritance
    def __init__(self, owner, balance=0.0, rate=0.04):
        super().__init__(owner, balance)
        self.rate = rate

    def add_interest(self):
        self.deposit(self._balance * self.rate)


acct = SavingsAccount("Lee", 500)
acct.add_interest()
print(acct.balance)                      # 520.0
```

## Data design and storage choices

A relational database stores data in tables with a primary key that uniquely identifies each row and foreign keys that link tables. Normalization reduces duplication: first normal form has one value per cell and no repeating groups; second removes data that depends on only part of a composite key; third removes data that depends on non-key columns. Integrity rules enforce valid data: entity integrity (no missing primary keys), referential integrity (foreign keys must match an existing row), and domain constraints (allowed values). Transactions follow ACID properties: atomic, consistent, isolated, and durable.

NoSQL databases trade some structure for flexibility or scale: document stores (JSON-like records), key-value stores, wide-column stores, and graph databases for relationships. Online transaction processing (OLTP) systems handle many small, fast updates, such as sales. Online analytical processing (OLAP) systems analyze large historical data in cubes that can be sliced, diced, and drilled into, usually from a data warehouse.

> **Example**
>
> A spreadsheet stores orders with columns: OrderID, CustomerName, CustomerEmail, Product1, Product2, Product3. Redesign it.
>
> Create Customers (CustomerID primary key, Name, Email), Orders (OrderID primary key, CustomerID foreign key, OrderDate), Products (ProductID, Name, Price), and OrderItems (OrderID, ProductID, Quantity, with the pair as the key). This removes repeated product columns, stores each email once, allows any number of items per order, and lets the database enforce that every order belongs to a real customer.

## Project methods and infrastructure

Waterfall completes each phase before the next, which suits stable, well-understood requirements. Agile delivers working software in short cycles and adapts to feedback. Scrum is a common Agile framework: a product owner prioritizes the product backlog, the team delivers an increment each sprint (usually one to four weeks), and the team holds sprint planning, a daily scrum, a sprint review, and a retrospective, guided by a scrum master. Kanban visualizes work on a board and limits work in progress. Poor project management leads to scope creep, missed deadlines, budget overruns, and systems users reject.

Infrastructure choices include on-premises servers, virtualization, and cloud services (IaaS, PaaS, SaaS). Automation ranges from scripts to robotic process automation of repetitive clicks and infrastructure as code. Blockchain is a shared ledger where each block contains a hash of the previous one, making tampering evident; it fits cases with many parties who do not fully trust each other and is often unnecessary when one trusted database would work. IoT and edge computing collect and process data near where it is created.

> **Try it yourself**
>
> A small clinic wants to replace paper sign-in sheets with a tablet check-in system. (a) Write two functional and two nonfunctional requirements. (b) Choose Waterfall or Scrum and justify it. (c) Name one feasibility concern.

<details>
<summary>Check your answer</summary>

(a) Functional: patients enter name and date of birth to find their appointment; front desk sees a live list of checked-in patients. Nonfunctional: check-in completes in under 30 seconds; patient data is encrypted and meets HIPAA requirements. (b) Scrum, because staff and patient feedback on early versions will change the design; short sprints deliver a usable check-in screen quickly. (c) Legal and operational: protecting health information, and whether older patients can use a tablet, which suggests keeping a staff-assisted option.

</details>

## Key terms

**Nonfunctional requirement.** A requirement describing quality, such as speed, security, or usability.

**Encapsulation.** Keeping an object's data private and accessible only through its methods.

**Foreign key.** A column that references the primary key of another table.

**Normalization.** Organizing tables to reduce duplicated data and update errors.

**OLAP.** Online analytical processing for multidimensional analysis of historical data.

**Sprint.** A fixed, short Scrum cycle that produces a usable increment.
