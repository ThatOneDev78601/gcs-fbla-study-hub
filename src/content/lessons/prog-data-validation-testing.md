---
title: "Saving data, validating input, handling errors, and testing"
summary: "Store data in files or a database, check input for format and meaning, recover from errors with helpful messages, generate reports, and write automated tests."
sourceIds: ["python-docs","mdn"]
reviewed: "2026-11-02"
---

## Persistent data

Variables disappear when a program closes. Persistent storage keeps data between runs. A JSON file suits small structured data such as settings or a short list of records. A CSV file suits tables that may be opened in a spreadsheet. A database such as SQLite, which is built into Python, suits larger data, searching, and multiple related tables. Plan for missing or damaged files so the program does not crash on first run.

```python
import json
from pathlib import Path

DATA_FILE = Path("entries.json")


def load_entries():
    if not DATA_FILE.exists():
        return []
    try:
        return json.loads(DATA_FILE.read_text())
    except json.JSONDecodeError:
        print("Saved data was damaged; starting with an empty list.")
        return []


def save_entries(entries):
    DATA_FILE.write_text(json.dumps(entries, indent=2))
```

## Validate input for format and meaning

Validation has layers. Presence: is the field filled in? Format: is it a number, a date, an email? Range and meaning: is a quantity between 1 and 99, is a pickup date in the future, does an ID exist? Reject bad input with a message that says what is wrong and how to fix it, and let the user try again without losing other entries.

Raise exceptions in small functions and catch them where the program talks to the user. This keeps the validation rule in one place, where it can be tested.

```python
def parse_hours(text):
    """Return hours as a float from 0.25 to 24, or raise ValueError."""
    value = float(text)  # raises ValueError for text like "abc"
    if not 0.25 <= value <= 24:
        raise ValueError("hours must be between 0.25 and 24")
    return value


while True:
    raw = input("Hours spent: ").strip()
    try:
        hours = parse_hours(raw)
        break
    except ValueError as err:
        print(f"Please enter a number from 0.25 to 24 ({err}).")
```

- Empty input, "abc," "-3," and "30" are all rejected with a message; "1.5" is accepted.
- Never show users a raw crash trace. Log technical details for yourself and show a plain message to the user.

## Generate a report

A report summarizes stored data for a decision: totals by category, counts, averages, and date ranges. Build it from functions that return data, and keep printing or formatting separate, so the same totals can be shown on screen, saved to CSV, or charted.

```python
def totals_by_category(entries):
    totals = {}
    for e in entries:
        totals[e["category"]] = totals.get(e["category"], 0) + e["hours"]
    return totals


entries = [
    {"category": "Reading", "hours": 1.5},
    {"category": "Math", "hours": 2.0},
    {"category": "Reading", "hours": 0.5},
]
for category, hours in sorted(totals_by_category(entries).items()):
    print(f"{category:<10}{hours:>6.2f}")
```

> **Example**
>
> What does the report print?
>
> Math totals 2.00 and Reading totals 1.5 + 0.5 = 2.00. Sorted alphabetically, it prints "Math        2.00" then "Reading     2.00", with names left-aligned in 10 characters and hours right-aligned in 6.

## Test automatically

Automated tests check that functions behave correctly and keep working after changes. With the pytest package (install with pip install pytest), any function named test_ in a file named test_*.py runs with the command pytest. Test normal cases, boundary cases (exactly 0.25 and 24), and invalid input. Write a test that reproduces each bug before fixing it.

Also test by hand from the user's view: a checklist of tasks, the expected result, the actual result, and any fix made. This test log is strong evidence in a presentation.

```python
import pytest
from tracker import parse_hours


def test_accepts_valid_hours():
    assert parse_hours("1.5") == 1.5


def test_accepts_boundaries():
    assert parse_hours("0.25") == 0.25
    assert parse_hours("24") == 24


def test_rejects_text():
    with pytest.raises(ValueError):
        parse_hours("abc")


def test_rejects_out_of_range():
    with pytest.raises(ValueError):
        parse_hours("30")
```

> **Try it yourself**
>
> Write parse_quantity(text) that returns an int from 1 to 99 or raises ValueError, plus three pytest tests: one valid, one boundary, and one invalid.

<details>
<summary>Check your answer</summary>

```python
import pytest


def parse_quantity(text):
    value = int(text)
    if not 1 <= value <= 99:
        raise ValueError("quantity must be 1 to 99")
    return value


def test_valid():
    assert parse_quantity("5") == 5


def test_boundary():
    assert parse_quantity("99") == 99


def test_invalid():
    with pytest.raises(ValueError):
        parse_quantity("0")
```

int("2.5") also raises ValueError, which correctly rejects fractions.

</details>

## Key terms

**Persistent storage.** Saving data so it remains after the program closes.

**Validation.** Checking that input is present, correctly formatted, and meaningful.

**Exception.** An error signal raised during execution that can be caught and handled.

**Unit test.** An automated check of one small piece of code.

**Boundary case.** An input at the edge of the allowed range.
