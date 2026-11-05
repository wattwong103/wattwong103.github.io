---
layout: page
title: Generative Urban Foundation Model (GUFM)
description: Decoder-only transformer generating realistic human-mobility trajectories across world cities from real data
importance: 1
category: tokyo
related_publications: true
---

Investigator on the Generative Urban Foundation Model (GUFM) in Sekimoto Lab (IIS, CSIS), The University of Tokyo. GUFM generates realistic human-mobility trajectories across global cities from real data with a decoder-only transformer. In parallel it explores world models and diffusion methods.

This is current research (2025–present). The aim is a model you can take to a city that does not have a 70,000-household travel survey. The academic write-up lives on the [research one-pager](https://wattwong103.github.io/research/).

### First result: conditioning on who and where

The first GUFM paper, at UMFM 2026, asks a narrow question. If a generator is told a person's demographics and home location, does it produce better mobility, and does the answer depend on how you measure "better"?

- **Setup.** A 12.3-million-parameter autoregressive generator trained on synthetic Tokyo trajectories from Pseudo-PFLOW. Four conditioning pathways (channels A–D) are compared in matched experiments, with acceptance thresholds fixed before each one. The held-out test set is every resident of one ward, Chiyoda.
- **Demographics.** No tested demographic channel moved a judged metric past its threshold, across three training runs each. The result is specific to these mechanisms, this model and this synthetic corpus.
- **Home location.** Writing the home into the persona raises exact next-cell accuracy from 0.128 to 0.196, but lowers accuracy within 2 km over all predictions from 0.794 to 0.550. The same reversal repeats in Setagaya and Nerima. About 69% of prediction steps target the person's own home cell, and that is where the loss sits.
- **Generated days.** Started from an observed first event, the personalised model is better on ward-level destination distributions and on returning exactly home. It is worse on trip-length distributions and on ending the day within 2 km of home.

The finding that matters is about evaluation. Exact next-cell accuracy, spatial closeness and the quality of a generated day can disagree, so each needs its own evidence.

The paper is {% cite wongkaew2026umfm %}, presented as a talk on November 3, 2026 at ACM SIGSPATIAL in Riverside, CA. The full entry is under References below.

### Talks

- _Generating Realistic Urban Mobility: The Role of Demographics and Home Location_. Urban Intelligence & Computing Symposium (Information School, University of Washington, and CSIS, The University of Tokyo), Seattle, WA, November 2, 2026.

### Focus

- Foundation models for human mobility
- Decoder-only transformers
- World models and diffusion methods
- Evaluation protocols for generated mobility

### Related

- [Pseudo-PFLOW]({{ '/projects/11_project/' | relative_url }}), the source of the synthetic Tokyo trajectories used in the first experiments, and [trajectory-viz]({{ '/projects/12_project/' | relative_url }}), the dashboard for exploring that output.
- [World models are the next layer for mobility]({{ '/blog/2026/world-models-for-mobility/' | relative_url }}) and the [Tokyo]({{ '/blog/2026/tokyo-world-model/' | relative_url }}) and [Bangkok]({{ '/blog/2026/bangkok-world-model/' | relative_url }}) follow-ups.
