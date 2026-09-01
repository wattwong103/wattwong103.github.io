---
layout: post
title: When the railway is a floodplain
date: 2026-10-03
description: ICCBEI 2023 and ICRT 2024 orals — DSM, twelve years of climate, Extra Trees, and an index a dispatcher can read in centimetres of water.
tags: railways research climate
categories: research-notes
featured: false
---

Two orals, one problem: water on Thai railway tracks is not a binary GIS layer. It is an operating rule.

- ICCBEI 2023 (oral): [Risk assessment of railway tracks in floodplain area using digital surface model and computer vision](https://civil.eng.chula.ac.th/iccbei2023/Proceedings/ICCBEI2023-Prodeedings-completed.pdf) ([paper PDF](https://wattwong103.github.io/research/pdf/ICCBEI2023-Prodeedings-completed-101-108.pdf), [slides](https://wattwong103.github.io/research/pdf/Flood%20Presentation%20ICCBEI.pdf)).
- ICRT 2024 (oral): [Integrating digital surface model for flood risk assessment of railway networks in Thailand](https://wattwong103.github.io/research/pdf/J0104.pdf).

Project writeup, figures, poster: [Railway flood risk mapping]({{ '/projects/6_project/' | relative_url }}). The Elsevier chapter on track management under extreme events is in press; this post stays with the orals.

## Question

Embankments block flow. Monsoon does the rest. The useful output is not a red polygon. It is: at this kilometre, at this water depth, do we run, crawl, or close.

## Data and method

Inputs we actually used:

- digital surface models for elevation and the track in the terrain
- climate records **2005–2016** (twelve years)
- drainage-basin descriptors, slope, elevation
- computer vision on the surface where the track sits in the floodplain

Four risk-factor families: climate, basin, slope, elevation. Most location-years do not flood, so a classifier trained on raw counts learns to say zero. We used **ADASYN** on the minority flooded cases.

The label is an **operation-based Flood Risk Index**, tied to water on the structure:

| FRI | Water | Operations |
| --- | --- | --- |
| 0 | none | normal |
| 1 | 0–30 cm (ballast to sleeper bottom) | caution |
| 2 | 31–60 cm (sleeper to railhead) | reduced speed |
| 3 | 61–70 cm (over railhead) | minimal operations |
| 4 | >70 cm | no operations |

Several classifiers were tried. **Extra Trees** was the one we kept. On the project evaluation: **0.98** accuracy on training, **0.71** F1 on the 2015–2016 test years. That drop is the honest result. Rainfall features dominated importance: average rainfall, average rainfall per day, maximum rainfall per day.

The maps in the project page run north–south along the network, ground in green, rail in brown, water in blue. I am not regenerating them here.

## What I would not do again

Training accuracy of 0.98 next to test F1 of 0.71 is a split and a class problem, not a victory lap. I would lead with the test F1 and with FRI-class recall, especially FRI 3–4 — those are the closures. I would also stop calling rainfall “the most important factor” as if that were a surprise; the contribution is translating rainfall and terrain into **centimetres the operator already uses**.

Same method rule as buckling: the index has to be a sentence in the control room.
