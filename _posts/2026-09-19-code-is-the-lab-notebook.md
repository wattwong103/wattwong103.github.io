---
layout: post
title: Code is the lab notebook
date: 2026-09-19
description: Python, R, and a graph of Bangkok — how the research actually runs, from A* on the network to FEM dumps into XGBoost.
tags: coding research python
categories: research-notes
featured: true
---

I do not have a separate “coding career.” The repositories are how the questions in [how I do the research]({{ '/blog/2026/how-i-do-research/' | relative_url }}) get to a number someone else can rerun. Python for networks and ML, R for surveys and plots, QGIS when the unit of analysis is a catchment. That is the stack. This is the map of it.

## A city as a graph

[NaviCity]({{ '/projects/2_project/' | relative_url }}) is the simplest version of the habit. Bangkok’s public transport is a graph: stations as nodes, BTS / MRT / bus / boat as edges, two weights on each edge — time and fare. Routing is A\*. The user picks which weight to minimise, or a mix. Two trial modules (taxi/ride-hail, bus/rail) instead of a fake “all modes, live, production” screenshot.

The code is public: [wattwong103/transport-cost](https://github.com/wattwong103/transport-cost). It is a trial. That is the point of putting it on GitHub rather than in a slide.

The same idea shows up in travel-time work for the Department of Highways: a snapshot of speeds on every segment at 08:00 is not a vehicle’s day. Trajectory time (when that car left, when it arrived) is a different object. If the notebook cannot compute both, I will present whichever is easier. So the notebook computes both.

## Open data before a platform fantasy

[TODM](https://github.com/wattwong103/th-open-transdata) — the Thailand Transport Open Data Map — is not a data lake. It is a catalogue: where is the bus layer, who owns it, do you need to register. I built it because I was tired of every project starting with a week of finding files. The live map is at [th-open-transdata]({{ '/th-open-transdata/' | relative_url }}).

If a pipeline cannot say which ministry table it ate, it is not a pipeline. It is a folder.

## FEM out, labels in

The railway papers are not “we trained XGBoost.” They are: a finite-element or a surface model produces a label a classifier is allowed to see.

**Buckling.** About 8,000 track scenarios from FEM. Inputs the model is allowed: lateral stiffness, displacement limits, torsional resistance, unconstrained length, initial misalignment. Outputs: no buckle / snap-through / progressive. Classes are unbalanced (most scenarios do not fail), so SMOTE, then k-fold, then a bake-off (logit, kNN, trees, Random Forest, XGBoost, LightGBM). XGBoost won on that set (F1 0.97 on the project writeup). Feature importance, in that run, put misalignment, torsion, and lateral displacement limit at the top. Details and the paper are in the [next post]({{ '/blog/2026/predicting-how-a-rail-buckles/' | relative_url }}).

**Flood.** DSM plus twelve years of climate (2005–2016). Labels are an operation-based index, not a binary wet/dry. Most years at most locations are dry, so ADASYN instead of pretending accuracy on zeros is skill. Extra Trees was the best of the set we tried (train accuracy 0.98, test F1 0.71 on 2015–2016 — that gap is the story, not a footnote). [Flood post]({{ '/blog/2026/when-the-railway-is-a-floodplain/' | relative_url }}) walks the index.

Those numbers live in the project pages and the papers. I am not adding a new score here.

## R when the unit is a household

Travel-demand surveys, mode-choice tables, the boring histograms that tell you whether the sample has anyone who actually rides a bus: that is R, ggplot2, sometimes GeoDa. Python is faster to put on GitHub. R is faster when the question is “show me the distribution before you model it.” I still start there for anything that came from a questionnaire.

## What I will not put in a gist

Live passenger APIs I do not have a licence to republish. FEM decks that are not mine. Household microdata. The blog will link a repo when the repo is the work. When the work is a paper, the paper is the work — [publications]({{ '/publications/' | relative_url }}).

Pseudo-PFLOW, later in this series, is the same notebook habit at national scale: agents, zones, calibration against published statistics, no unpublished loss curves on this site.
