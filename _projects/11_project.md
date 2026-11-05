---
layout: page
title: Pseudo-PFLOW
description: Nationwide agent-based simulation of business vehicles for synthetic mobility analysis
img: assets/img/traffic-flow.jpg
importance: 2
category: tokyo
---

Nationwide agent-based simulation of business vehicles generating 4.5 million daily trips for 1.5 million-plus truck and taxi agents across 106 zones, with calibration and cross-verification against source statistics.

Work at CSIS, The University of Tokyo (October 2025–present), including the technical documentation for the truck and taxi ABMs: calibration, data provenance and cross-verification.

### Why it exists

Household travel surveys say almost nothing about **business vehicles**. Trucks and taxis take up a large share of urban road space, and they barely appear in a diary of "where did you go yesterday". A city calibrated only on households is a model of the commute, not of traffic. Pseudo-PFLOW fills that gap with synthetic trucks and taxis: their daily activity is assigned to a zone system and checked against statistics that _are_ published.

### Method

- **Unit:** the agent-day. **Geography:** 106 zones. **Judge:** published counts, totals and shares, not a loss curve.
- **Provenance is part of the method.** Every trip rate has to be traceable to the table it came from. Without that, it is a simulator, not a synthetic population.
- **Scale:** about 4.5 million daily trips from more than 1.5 million agents. The truck and taxi output loaded into trajectory-viz holds 4.43 million trips and 233 million waypoints.

### What it is for

- A planner who wants national freight and taxi load on the network without waiting for a new establishment survey.
- A researcher who wants a baseline of business-vehicle kilometres that a passenger-only four-step model will not give them.
- A check on whether a generative mobility model is inventing truck-shaped trips or only commuting. Synthetic Tokyo resident trajectories from Pseudo-PFLOW are also the training data for the first [GUFM]({{ '/projects/10_project/' | relative_url }}) experiments.

### Tools

The outputs are explored in [trajectory-viz]({{ '/projects/12_project/' | relative_url }}), an open-source dashboard I wrote for this work. It filters trips by hour, speed, dwell and detour, queries trip chains, and draws trails, OD arcs and heatmaps on the map.

The setup and the rules for reporting progress are in the blog post [Pseudo-PFLOW: making the freight that surveys miss]({{ '/blog/2026/pseudo-pflow/' | relative_url }}). Results that are not yet published stay off this site.

### Focus

- Agent-based modeling
- Synthetic population
- Nationwide simulation
- Calibration and validation
