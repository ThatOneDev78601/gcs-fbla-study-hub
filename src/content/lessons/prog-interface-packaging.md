---
title: "Interfaces, intelligent features, packaging, and demonstrations"
summary: "Design usable and accessible interfaces, add an intelligent feature you can explain and evaluate, organize source code, write a README with credits, package a standalone app, and demonstrate against the rubric."
sourceIds: ["python-docs","wcag","sklearn-docs"]
reviewed: "2026-11-02"
---

## Usable, accessible interfaces

An interface should make the main task obvious. Use clear labels next to every field, sensible defaults, consistent navigation, and short instructions where users might hesitate. Show feedback after every action, such as "Saved" or a specific error beside the field. Group related controls and put the main action where users expect it.

Accessibility means people using keyboards, screen readers, magnification, or color-vision aids can use the program. Every control should work with the keyboard, have a visible focus indicator, and have a text label. Meet contrast requirements, do not rely on color alone, and let text scale. Test with real users: give three to five people a task, watch without helping, and note where they hesitate. Record each problem and the change you made.

## Add an intelligent feature you can explain

Some events require an intelligent or advanced feature. Read the current guide's definition before choosing. Options range from simple to complex: rule-based logic, scoring and recommendation, search with ranking, a trained machine learning model, or a call to an AI service. Choose the simplest approach that meets the requirement and that you can explain, test, and run reliably during judging.

The example below recommends items by counting shared tags. It is transparent: you can explain exactly why each recommendation appears.

```python
def recommend(item_tags, user_likes, k=3):
    """Rank items by how many tags they share with the user's likes."""
    scores = {name: len(tags & user_likes) for name, tags in item_tags.items()}
    ranked = sorted(scores, key=lambda n: (-scores[n], n))
    return [n for n in ranked if scores[n] > 0][:k]


books = {
    "Atlas": {"maps", "history"},
    "Byte": {"coding", "games"},
    "Cosmos": {"space", "history"},
    "Dune": {"space", "fiction"},
}
print(recommend(books, {"space", "history"}))
```

> **Example**
>
> What does the recommendation code print, and how would you evaluate the feature?
>
> 1. Scores: Atlas 1 (history), Byte 0, Cosmos 2 (space and history), Dune 1 (space).
> 2. Sorted by score, then name: Cosmos, Atlas, Dune. Byte is excluded because its score is 0.
>
> It prints ['Cosmos', 'Atlas', 'Dune']. To evaluate it, write test cases with expected rankings, ask a few users whether recommendations seem useful, and note limits: it ignores ratings and treats all tags as equally important. If you use an AI service instead, explain what data is sent, how you protect privacy, what happens when the service is unavailable, and how you checked the output's accuracy.

## Organize, document, and credit

Organize source code into folders by purpose, with meaningful file and function names and brief comments explaining why, not what. Keep secrets such as API keys out of the code. Use version control such as Git with frequent, descriptive commits; the history also documents your process.

A README explains what the program does, system requirements, how to install and run it, how to use the main features, known limitations, and credits. List every library, template, image, sound, and code sample you used with its license and source. Event rules often restrict templates or require originality, so check them.

## Package and demonstrate

A standalone build runs without installing a programming language. For Python, PyInstaller can bundle a program: pyinstaller --onefile --windowed app.py creates an executable in the dist folder. Test the build on a different computer before the event, since missing files and paths are common failures. Keep a backup copy on a second device or storage.

Plan the demonstration around the rubric. Show the main user path first, then the required features, the intelligent feature with an explanation, validation and error handling, accessibility, and the code structure. Have test data loaded so you do not type during judging. Practice answering "How does this part work?" by pointing to the specific function.

> **Try it yourself**
>
> Write a README outline for a small program you could build, such as a study-session tracker. Include at least six section headings and one sentence under each.

<details>
<summary>Check your answer</summary>

Sample: Overview: what the program does and for whom. Requirements: operating system and anything to install. Installation: how to run the packaged app or source. Using the app: the main tasks step by step. Data and privacy: where data is saved and what is collected. Testing: how to run the tests and what they cover. Known limitations: what it does not do yet. Credits and licenses: every library and asset with its license. A strong outline lets a judge run and understand the program without the author present.

</details>

## Key terms

**Usability testing.** Watching real users attempt tasks to find where an interface confuses them.

**README.** A document explaining how to install, run, and use a program.

**Standalone executable.** A packaged program that runs without installing its programming language.

**Version control.** A system such as Git that records changes to code over time.

**Rule-based system.** A program that makes decisions using explicit if-then rules.
