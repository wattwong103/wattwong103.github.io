---
layout: post
title: "Pseudo-PFLOW: making the freight that surveys miss"
date: 2026-10-24
description: In progress at CSIS — a nationwide ABM of trucks and taxis, 4.5 million daily trips, 106 zones. Method and question only; no unpublished fit.
tags: research human-mobility coding
categories: research-notes
featured: false
---

Status: **in progress**, CSIS / Sekimoto Lab, The University of Tokyo. Project card: [Pseudo-PFLOW]({{ '/projects/11_project/' | relative_url }}). This post is the question and the setup. It is not a results paper.

## Why it exists

Household travel surveys are where I learned the craft. They are also almost silent on **business vehicles**. Trucks and taxis eat urban road space and they barely appear in a diary of “where did you go yesterday.” If you only calibrate a city on households, you are modelling the commute and calling it traffic.

Pseudo-PFLOW is a nationwide **agent-based** picture of those missing vehicles: synthetic trucks and taxis, daily activity, assigned to a zone system, checked against statistics that *are* published. The CV numbers I will repeat, and not add to:

- on the order of **4.5 million** daily trips
- **1.5 million-plus** truck and taxi agents
- **106** zones
- calibration and cross-verification against **source statistics** (not against a private GPS dump I will not name here)

I also wrote technical documentation for the truck and taxi ABMs: calibration, data provenance, cross-verification. That sentence is on the CV because provenance *is* the method. If you cannot say which table an agent’s trip rate came from, you have a simulator, not a synthetic population.

## What the model is for

A planner who wants national freight and taxi load on the network without waiting for a new establishment survey. A researcher who wants a baseline of business-vehicle kilometres that a passenger-only four-step will not give them. Later, a check on whether a generative mobility model is inventing truck-shaped trips or only commuting.

It is not a digital twin of every depot. It is not GUFM. GUFM is the other Tokyo thread and it is not this series.

## How I am willing to talk about progress

Same rules as [the method post]({{ '/blog/2026/how-i-actually-do-the-research/' | relative_url }}):

- The unit is the agent-day, the geography is the zone, the judge is a published margin (counts, totals, shares) — not a loss curve.
- If a calibration gap is not in a public figure, it is not on this blog.
- Code and papers, when they exist as citable objects, go on [publications]({{ '/publications/' | relative_url }}) and GitHub. Until then, the project page is the placeholder.

When there is a paper, this post gets a DOI line. Until then: 4.5 million trips, 106 zones, and a refusal to fake the fit.

The layer after a synthetic population is action-conditioned dynamics: [world models for mobility]({{ '/blog/2026/world-models-are-the-next-layer-for-mobility/' | relative_url }}).
