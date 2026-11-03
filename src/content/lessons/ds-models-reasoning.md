---
title: "Machine learning models, AI reasoning, generative AI, and responsible data use"
summary: "Choose and validate models, read a confusion matrix, explain deep learning, apply Bayes' rule and logic, describe how language models work, and handle privacy, bias, and credibility across the data science process."
sourceIds: ["sklearn-docs","nist-csf"]
reviewed: "2026-11-02"
---

## Choose, train, and validate models

Supervised learning learns from labeled examples. Classification predicts a category (spam or not spam); regression predicts a number (a house price). Unsupervised learning finds structure without labels, such as clustering customers into groups. Reinforcement learning learns by trial and reward, such as a game-playing agent.

Split data into training, validation, and test sets. Train on the training set, tune choices on the validation set (or with cross-validation), and report final performance once on the untouched test set. Overfitting means a model memorizes training data and performs poorly on new data; underfitting means it is too simple to capture the pattern. Simpler, explainable models such as linear and logistic regression and decision trees are good starting points; random forests, gradient boosting, and neural networks may be more accurate but harder to explain.

## Evaluate with the right metric

A confusion matrix counts true positives (TP), false positives (FP), false negatives (FN), and true negatives (TN). Accuracy is (TP + TN) / total. Precision is TP / (TP + FP): of everything flagged, how much was right. Recall is TP / (TP + FN): of everything real, how much was found. F1 is the harmonic mean of precision and recall. For regression, use mean absolute error (MAE) or root mean squared error (RMSE).

> **Example**
>
> A fraud model reviews 200 transactions: TP 40, FP 10, FN 20, TN 130.
>
> 1. Accuracy: (40 + 130) / 200 = 85%.
> 2. Precision: 40 / (40 + 10) = 80%.
> 3. Recall: 40 / (40 + 20) = 66.7%.
> 4. F1: 2 x 0.80 x 0.667 / (0.80 + 0.667) = 0.727.
>
> The model misses one-third of fraud cases. If missed fraud is costly, raise recall even if precision drops, and explain the tradeoff. High accuracy alone can mislead when one class is rare.

## Deep learning and generative AI

A neural network passes inputs through layers of connected units. Each connection has a weight, and training adjusts the weights with backpropagation to reduce error. Deep learning uses many layers. Convolutional networks suit images; transformer networks, which use attention to weigh relationships between parts of the input, power modern language models.

Data must be represented as numbers. Categories can be one-hot encoded as columns of 0s and 1s. Embeddings represent words, images, or items as vectors in which similar meanings are close together, which supports search and recommendations.

A large language model is trained on large amounts of text to predict the next token, a word or word piece. It generates fluent text but can produce false statements with confidence, often called hallucinations, and it reflects patterns, including biases, in its training data. Check generated facts against reliable sources, protect private data in prompts, and disclose AI use where rules require it.

## Logical and probabilistic reasoning

Predicate logic states facts and rules precisely. "For every x, if x is a student then x is a person" is written as: for all x, Student(x) implies Person(x). From Student(Maya), a system can conclude Person(Maya). Knowledge representation methods include rules, semantic networks (concepts linked by relationships), frames (objects with slots), and ontologies (formal vocabularies).

Logical reasoning gives certain conclusions from true premises; probabilistic reasoning handles uncertainty. Bayes' rule updates a probability with new evidence: P(A given B) = P(B given A) x P(A) / P(B). A Bayesian network is a graph of variables with conditional probability tables, used for diagnosis and prediction when evidence is incomplete.

> **Example**
>
> A condition affects 1% of people. A test detects 90% of true cases and gives false positives for 5% of healthy people. A person tests positive. What is the probability they have the condition?
>
> 1. True positives per 10,000 people: 100 have the condition, and 90 test positive.
> 2. False positives: 9,900 are healthy, and 5% (495) test positive.
> 3. P(condition given positive) = 90 / (90 + 495) = 90 / 585 = 15.4%.
>
> Only about 15% of positives are real cases because the condition is rare. This base-rate effect is why screening results are confirmed with a second test.

## Privacy, bias, credibility, and the full process

The data science process runs from defining the question, through collecting, cleaning, exploring, modeling, and evaluating data, to communicating results, deploying a solution, and monitoring it over time. Ethics applies at every step.

Protect privacy by collecting only needed data, getting consent, securing storage, and remembering that removing names does not guarantee anonymity, since combinations of fields such as zip code, birth date, and gender can re-identify people. Bias enters through unrepresentative samples, labels that reflect past discrimination, and features that act as proxies for protected traits. Check model performance separately for different groups. Judge credibility by documenting sources, methods, and limitations, and by being honest about uncertainty.

> **Try it yourself**
>
> A model screening job applications has 92% accuracy overall, but recall for qualified applicants from one community college is 60% compared with 90% for others. (a) What does the recall gap mean? (b) Name two possible causes. (c) Recommend two actions.

<details>
<summary>Check your answer</summary>

(a) The model misses 40% of qualified applicants from that college, compared with 10% for others, so it unfairly screens them out. (b) Few examples from that college in the training data, or labels based on past hiring decisions that favored other schools. (c) Collect more representative training data or reweight it, remove features that act as proxies, evaluate by group before deployment, and keep a human review of rejected applications.

</details>

## Key terms

**Overfitting.** A model fitting training data too closely and performing poorly on new data.

**Precision.** The share of predicted positives that are actually positive.

**Recall.** The share of actual positives the model correctly finds.

**Embedding.** A vector representation in which similar items are close together.

**Bayes' rule.** A formula for updating a probability given new evidence.

**Re-identification.** Linking supposedly anonymous data back to specific people.
