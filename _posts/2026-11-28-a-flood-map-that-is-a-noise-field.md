---
layout: post
title: A flood map that is really a noise field
date: 2026-11-28
description: BKK/FLOW puts the PFLOW contract on Bangkok using open data. Its city-scale flood depth is empty on purpose, and the reason is one terrain tile.
tags: research bangkok climate open-source
categories: research-notes
featured: false
---

[BKK/FLOW]({{ '/projects/13_project/' | relative_url }}) asks a Tokyo question about Bangkok. PFLOW describes a city as people, their activities, their trips and their trajectories. What happens to that picture when the water comes up? The code is on [GitHub](https://github.com/wattwong103/flood-vul-evac), and everything in it is built from open data: OpenStreetMap, WorldPop and JRC Global Surface Water.

The pilot is Khlong San, on the Thonburi bank of the Chao Phraya: 5.96 km², 115,959 modelled residents, and a walk network of 7,514 directed edges. The current demonstration release went out on 11 October.

## Not better than Pseudo-PFLOW

The comparison is written down in the repository, headline first. [Pseudo-PFLOW](https://pflow.csis.u-tokyo.ac.jp/data-provision-service/about-pseudo-people-flow-data/) covers all 1,724 municipalities in Japan, with census-derived person attributes and calibrated behaviour. It reports an R² of 0.81 against mobile-phone location data at 1 km. BKK/FLOW has modelled age per cell and nothing calibrated. Sex is a scenario assumption.

What it does have is a hazard dimension and a paper trail: a licence-aware source registry, immutable runs with manifests, and an API that only reads those runs. That is a real difference. It is not a substitute, and pretending otherwise is the quickest way to lose a reviewer.

## One terrain tile

The plan said: take a digital elevation model, set a water surface, subtract, and get depth. The only terrain reachable from my setup was an SRTM-family tile service at about 19 m per pixel. For the tile over central Bangkok, which includes all of Khlong San, the mean elevation was **7.76 m**. The real ground there is 1–2 m above sea level.

A transect across the Chao Phraya, sampled every 150 m, read like this:

```
9  8  9  4  4  10  7  9  9  7  5  5  10  9  7  10  9  3  10  11  10  8  13  15 ...
```

There is no river in it. The lowest reading is about 3 m, where the riverbed should be below sea level.

Bangkok's flood-relevant terrain spans about **0–2 m**. This data carries **±5–10 m** of error over that same range. Depth is water surface minus terrain, so every depth it produced would be mostly noise, and the flooded area would trace the error pattern instead of the hydrology. Nudge the assumed water level and you get changes that look plausible and mean nothing.

A map that looks like a flood map and is really a noise field is worse than no map, because people will read it as a flood map. So city-scale flood depth and evacuation outcomes are null in BKK/FLOW, and each null carries its reason. The gap is on the record. Nobody missed it.

## What it can say

JRC annual surface water is observed, not modelled, so the city run uses it. The question is narrow: when road edges that touch water close, what share of the residents near water can still reach the network? Across 2010, 2011, 2012 and 2020 the answer is about 95.5–97.8%, depending on the year and how many wet edges close. That is connectivity, not evacuation success. Routing ignores one-way streets, and foot access is an assumption.

There are also 1,034 candidate destinations tagged as shelters, schools, hospitals and community buildings. None is verified. A tag is not capacity, and it is not a promise of a dry route.

That city run has since been superseded because it used an older source inventory. It is kept as history, not as a current result.

## What would change the answer

Better terrain, real hydraulic forcing, validation against an actual flood event, and shelter capacity checked with whoever runs the shelters. Until then the release is labelled a demonstration: not a forecast, not a warning and not an evacuation recommendation.

This is the same rule as [the railway floodplain work]({{ '/blog/2026/when-the-railway-is-a-floodplain/' | relative_url }}) and the [Bangkok world-model post]({{ '/blog/2026/bangkok-world-model/' | relative_url }}). Say what the dispatcher, or the district office, can actually use. If you cannot measure it, leave the cell empty and say why.
