---
title: "Programming foundations in Python"
summary: "A runnable beginner sequence: variables and types, input and output, conditions, loops, functions, lists and dictionaries, scope, and splitting a program into modules."
sourceIds: ["python-docs","mdn"]
reviewed: "2026-11-02"
---

## Why one language, and how to run it

The concepts in this lesson exist in every language, but learning them in one language first makes practice concrete. This lesson uses Python 3 because its syntax is short and readable and it is free. Install Python from python.org, then save code in a file such as grades.py and run it from a terminal with python grades.py (or python3 on macOS and Linux). A free editor such as Visual Studio Code or IDLE, which comes with Python, works well.

Competitive events usually allow any language that meets the requirements. Check the current guide for platform, packaging, and judging requirements before choosing.

## Variables, types, input, and output

A variable is a name for a value. Python's basic types are int (whole numbers), float (decimals), str (text), and bool (True or False). input() always returns text, so convert it before doing math. f-strings insert values into text and can format them, such as two decimal places with :.2f.

```python
name = input("Your name: ")
bill = float(input("Bill total: "))
people = int(input("Number of people: "))
tip_rate = 0.18

share = bill * (1 + tip_rate) / people
print(f"{name}, each person pays ${share:.2f}")
```

- Entering 60 for the bill and 4 people prints "each person pays $17.70" because 60 x 1.18 / 4 = 17.70.
- Entering "four" for people raises a ValueError. The next lesson shows how to handle bad input.

## Conditions, loops, and functions

if, elif, and else choose between paths. A for loop repeats once for each item in a sequence; a while loop repeats as long as a condition is true. A function packages steps under a name, takes parameters, and returns a result, which makes code reusable and testable. Name functions with verbs that say what they do.

Lists hold ordered items: scores = [92, 88, 95]. Dictionaries map keys to values: {"Ana": [92, 88, 95]}. Variables created inside a function are local, meaning they exist only inside it; this scope rule prevents functions from accidentally changing each other's data.

```python
def average(scores):
    """Return the mean of a non-empty list of numbers."""
    return sum(scores) / len(scores)


def letter_grade(avg):
    if avg >= 90:
        return "A"
    elif avg >= 80:
        return "B"
    elif avg >= 70:
        return "C"
    else:
        return "Below C"


students = {"Ana": [92, 88, 95], "Ben": [78, 85, 80]}
for name, scores in students.items():
    avg = average(scores)
    print(f"{name}: {avg:.1f} ({letter_grade(avg)})")
```

> **Example**
>
> Trace the program above. What does it print?
>
> 1. Ana: (92 + 88 + 95) / 3 = 275 / 3 = 91.67, which is at least 90, so "A".
> 2. Ben: (78 + 85 + 80) / 3 = 243 / 3 = 81.0, which is at least 80 but below 90, so "B".
>
> It prints "Ana: 91.7 (A)" and "Ben: 81.0 (B)". Tracing by hand like this is the most useful debugging habit for beginners.

## Organize code into modules and debug

As a program grows, split it into modules (separate .py files) by responsibility: one for data, one for calculations, one for the user interface. Import functions where they are needed: from grading import average. Keep the main program short and readable. A common pattern ends the main file with if __name__ == "__main__": main(), so the file can be imported for testing without running.

Debugging is systematic. Read the error message's last line and the line number. Reproduce the problem with the smallest input. Print or inspect variable values before the failing line. Change one thing at a time and retest. Common beginner bugs include off-by-one loop ranges, forgetting to convert input() text to numbers, using = instead of ==, and indentation that puts a line inside or outside a loop by mistake.

> **Try it yourself**
>
> Write a function count_passing(scores, cutoff=70) that returns how many scores are at or above the cutoff. Then call it on [65, 70, 88, 59, 91] and print the result.

<details>
<summary>Check your answer</summary>

```python
def count_passing(scores, cutoff=70):
    count = 0
    for s in scores:
        if s >= cutoff:
            count += 1
    return count
```

print(count_passing([65, 70, 88, 59, 91]))

It prints 3 (70, 88, and 91). A shorter version is return sum(1 for s in scores if s >= cutoff). Test the edge case: a score exactly equal to the cutoff counts.

</details>

## Key terms

**Variable.** A name that refers to a stored value.

**Function.** A named, reusable block of code that can take inputs and return a result.

**Dictionary.** A collection that maps keys to values.

**Scope.** The part of a program where a variable can be used.

**Module.** A separate file of code that can be imported into other files.
