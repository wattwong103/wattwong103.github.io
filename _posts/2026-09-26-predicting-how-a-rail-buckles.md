---
layout: post
title: Predicting how a rail buckles
date: 2026-09-26
description: "Discover Applied Sciences 2024: XGBoost on 8,000 FEM track scenarios, snap-through versus progressive failure, a Thailand case."
tags: railways research machine-learning
categories: research-notes
featured: false
---

Paper: Wongkaew, Muanyoksakul, Ngamkhanong, Sresakoolchai, Kaewunruen. [Data driven machine learning prognostics of buckling failure modes in ballasted railway track](https://doi.org/10.1007/s42452-024-05885-3). *Discover Applied Sciences* 6, 212 (April 2024). PDF on this site: [buckling_01.pdf]({{ '/assets/pdf/buckling_01.pdf' | relative_url }}). Project notes: [here]({{ '/projects/7_project/' | relative_url }}).

This was the first journal paper. The question was not “will the rail fail in heat?” Railway engineers already know continuous welded rail can buckle. The question was **which failure**, on **which geometry**, early enough to change maintenance.

## Question

Two modes matter in the field. **Snap-through** is sudden lateral jump. **Progressive** is a slower walk-out, often at lower lateral stiffness and lower temperature. They are not the same repair, and they are not the same speed restriction. A binary “buckle / no buckle” classifier would have been easier and less useful.

Climate makes the question operational in Thailand: hotter days, CWR, ballast that is not a European textbook.

## Data and method

Labels came from finite-element simulations, not from waiting for a pile-up. About **8,000** track scenarios. The features the model was allowed to see:

- lateral stiffness
- displacement limits
- torsional resistance
- unconstrained length
- initial misalignment

Outputs: non-buckling, snap-through, progressive.

Most simulated tracks do not fail, so a dummy that always says “no buckle” looks good. We used SMOTE on the minority modes and k-fold validation. Models in the bake-off: logistic regression, kNN, decision trees, random forest, XGBoost, LightGBM. **XGBoost** was the one we kept. On that evaluation, F1 was **0.97**. Feature importance put **lateral misalignment**, **torsional resistance**, and **lateral displacement limit** at the top.

We then took the trained model to a real alignment in Thailand and asked whether it recovered mode and the temperature neighbourhood of the failure. The paper and the [poster]({{ '/assets/pdf/PosterBuckling2.pdf' | relative_url }}) are the place for the case plots. I will not restyle them here.

## What I would not do again

Misalignment in the FEM set was a sine wave. Real track is a mess of welds and tamps. The paper already flags that. Next time I want measured geometry in the training distribution, not only in the case study. And I would report the confusion between snap-through and progressive as the headline metric, not overall F1 — overall F1 is too easy to inflate with the majority class even after SMOTE.

The habit this paper taught me, which [the method post]({{ '/blog/2026/how-i-actually-do-the-research/' | relative_url }}) is about: pick a label a maintainer already has a word for, then make the ML answer in that word.
