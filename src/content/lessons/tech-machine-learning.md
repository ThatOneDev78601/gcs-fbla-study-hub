---
title: "Machine learning, evaluation and AI reasoning"
summary: "Choose learning methods and judge models using unseen data and relevant metrics."
sourceIds: ["mba","openstax"]
reviewed: "2026-10-27"
---

## Match the learning method to the task

Artificial intelligence is a broad field concerned with tasks such as perception, reasoning and decision-making. Machine learning builds patterns from data instead of hand-writing every rule. Supervised learning uses labeled examples: classification predicts categories, while regression predicts numerical values. Unsupervised learning explores structure such as clusters without supplied target labels. Reinforcement learning uses feedback from actions toward a reward. A feature is an input representation and a label is the target in supervised learning. Training data quality and relevance constrain what a model can learn; more data is not automatically better data.

## Evaluate on information the model has not seen

Separate training, validation and test data so model selection does not contaminate the final evaluation. Overfitting learns details that fail to generalize; underfitting misses useful structure. Leakage occurs when information unavailable at prediction time enters training or evaluation. Accuracy is correct predictions divided by all predictions. Precision measures how often positive predictions are correct; recall measures how many actual positives are found. Choose metrics based on the cost of mistakes. A model that always predicts the majority class can appear accurate while failing the very cases that matter.

> **Work through an example**
>
> Only 2% of transactions are fraudulent. A model labels every transaction legitimate.
>
> It achieves 98% accuracy but zero recall for fraud. Evaluate the confusion matrix, precision, recall and the costs of missed fraud before calling it useful.

## Representation, reasoning and limitations

Models represent information through features, rules, graphs, vectors or learned parameters. Computer vision interprets images; natural language processing works with language. Search explores candidate states or solutions, while rule systems apply explicit conditions. Generative models produce plausible content from learned patterns but can produce false statements. Monitor deployment for drift when data or behavior changes. Human review, suitable uncertainty and limits on automated action matter in consequential settings. Common mistakes include calling every automated rule machine learning, testing on training examples, optimizing one metric without business context and presenting a confident generated explanation as verified evidence.

## Key terms to remember

**Overfitting.** Learning patterns too specific to training data to generalize well.

**Recall.** The share of actual positive cases identified as positive.

**Data leakage.** Use of information that should be unavailable to a prediction or evaluation.
