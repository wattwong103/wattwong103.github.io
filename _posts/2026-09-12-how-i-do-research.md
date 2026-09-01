---
layout: post
title: How I actually do the research
date: 2026-09-12
description: Geography first, an operational question second, a model third — and a citywide elasticity last, if at all.
tags: research method
categories: research-notes
featured: true
---

The [overview]({{ '/blog/2026/the-research-thread-from-bangkok-surveys-to-generative-mobility/' | relative_url }}) is the arc. This is the method. Four habits I can point to in the papers, not a philosophy of science.

## 1. Start from something a dispatcher or a planner could use

The flood work did not begin as “apply Extra Trees to climate data.” It began as: if water is on the track, what can the railway still run? That produced an operation-based Flood Risk Index — ballast, sleeper, railhead — not a generic hazard score. The buckling work asked which *mode* of failure you get (snap-through vs progressive), because those are different maintenance problems. The Blue Line GWR asked where land use actually moves ridership, not whether land use “matters” in a citywide regression.

If I cannot say who would change a decision, I do not have a question yet. Consultancy language (“insights,” “frameworks”) is usually a missing user.

## 2. Geography before the model

I came in through the Geography Olympiad and a four-step model of public transit in Nakhon Ratchasima. That sequence is still the lab order: *where*, then *why people leave*, then *which mode*, then *which network*. Machine learning sits on top of that, it does not replace it. A transformer that generates trajectories is still a geography problem — agents in space, at hours, with purposes — or it is a sampler with no transport content.

Bangkok is a bad place to skip this. A coefficient estimated on the whole BMA will describe Siam and Lat Krabang with the same sentence. They do not share a sentence.

## 3. Distrust the global elasticity

The published GWR paper exists because a single land-use coefficient on the MRT Blue Line is a convenient lie. Station catchments are not interchangeable; morning and evening are not interchangeable. I would rather report a map of local relationships that I can argue with than a star on a citywide beta.

That habit is not only for ridership. Flood features that matter in the North may not be the ones that matter on a floodplain in the Central region. An accessibility index that averages Bangkok into one number is a press release. The TRR paper Kongtup led is an index *and an application* — the application is the geography.

## 4. The code has to be able to lie to you

I write the pipeline so that a split, a class imbalance, or a leakage shows up as a number I do not like, not as a figure I can still present. SMOTE on the buckling FEM set, ADASYN on the flood years, k-fold instead of a lucky test year: those are not ML fashion. Most railway-flood years are “no flood.” A model that always says zero is accurate and useless.

The [next post]({{ '/blog/2026/code-is-the-lab-notebook/' | relative_url }}) is that habit in Python and R. This one is the rule: if I cannot break the result from the repo, I do not believe it.

## What I do not do

I do not start from a method looking for a case (“we should GWR something”). I do not treat a household survey as ground truth without asking who was home to answer it. I do not put unpublished accuracy on this blog. And I do not pretend a Tokyo foundation model and a Nakhon Ratchasima four-step are the same craft — they share the question, not the estimator.

Papers and orals that this method actually produced are on [publications]({{ '/publications/' | relative_url }}). The thread that connects them is already written. The rest of this series is one paper, one codebase, one in-progress model at a time.
