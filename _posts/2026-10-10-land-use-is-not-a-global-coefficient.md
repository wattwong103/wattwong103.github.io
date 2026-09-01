---
layout: post
title: Land use is not a global coefficient
date: 2026-10-10
description: GWR on Bangkok’s MRT Blue Line — IWGMS 2024 abstract, CASPT 2025, Public Transport special issue 2026.
tags: research urban-planning ridership
categories: research-notes
featured: false
---

Paper: Wongkaew, Wanichjaroenporn, Bunditsakulchai. Spatiotemporal dynamics of land use and ridership: a geographically weighted regression analysis of Bangkok’s MRT Blue Line. *Public Transport* (2026), special issue of [CASPT 2025](https://www.caspt.org/); pages 1–45 as indexed. Earlier: abstract at the 3rd International Workshop on Geographic Modelling and Simulation (IWGMS 2024). On this site: [publications]({{ '/publications/' | relative_url }}).

I am not restating a table of local coefficients here. They belong in the paper. This is why we refused a single beta.

## Question

Does land use next to a Blue Line station move ridership the same way at every station, at every hour? A citywide regression says yes by construction. Anyone who has been at Hua Lamphong at 08:30 and at Tha Phra at 14:00 knows the construction is the result.

The operational user is a planner who is about to allow a mall, a condo, or a depot next to a station and wants to know whether *this* catchment behaves like the CBD.

## Method, in one paragraph

Geographically weighted regression: the relationship between land-use (and related) variables and ridership is estimated locally, so coefficients can change along the line and across time slices. That is the whole trick. We did not invent GWR. We used it because Bangkok’s Blue Line is a ring-plus-diameter through districts that do not share a labour market, a parking regime, or a feeder bus.

IWGMS 2024 took the abstract. CASPT 2025 took the full argument. The journal special issue is the version to cite.

## What the paper is for, on this blog

Two sentences I will keep using:

1. A citywide elasticity is a convenient lie.
2. Station catchments are not interchangeable.

If those sound like slogans, the maps in the paper are the evidence. If a TOD policy uses one land-use coefficient for the whole MRT, it will overbuild one station and starve another and call both “evidence-based.”

## What I would not do again

I would put the time-of-day split in the first figure, not the appendix instinct. The spatial story is easy to sell; the temporal story is the one operators actually staff. And I would be more brutal in the paper about what GWR is not: it is not a causal design. It is a spatially honest description. Causal land-use effects need a different paper (instruments, openings, or a panel with a shock). This one is the description we did not have.

Kongtup’s accessibility-index paper, next in this series, is the complement: not “how land use loads a station” but “can you reach the city from here at all.”
