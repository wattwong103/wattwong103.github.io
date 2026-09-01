---
layout: post
title: "Bangkok: one city, one action, one output"
date: 2026-11-07
description: Sparse data, monsoon physics, a fractured transit graph. The world-model product here is not a robotaxi clip — it is crowding three hours after a flood, a concert, or a motorcade.
tags: research world-models bangkok human-mobility
categories: research-notes
featured: true
---

The [world-models note]({{ '/blog/2026/world-models-are-the-next-layer-for-mobility/' | relative_url }}) ended on a rule: pick **one city + one action type + one output people would open daily**. This is Bangkok. Tokyo is a [separate post]({{ '/blog/2026/tokyo-one-city-one-action-one-output/' | relative_url }}). They are not the same product with a different basemap.

## The unit

- **City:** Bangkok (BMA + the rail spines that actually move people: BTS, MRT, ARL, BMTA, boats).
- **Actions:** flood / royal motorcade / concert (plus the ordinary cousin: a feeder cut or a station closure).
- **Output:** BTS + bus crowding, **three hours ahead**, by line and by station group — not a citywide delay index.

If that screen is not something a duty officer at BMTA or a BTS station master would keep open, it is a paper. The consumer view is thinner: “will my bus be wrecked at 18:00.”

## Why Bangkok is not a METR-LA fine-tune

Almost every photorealistic world model in 2026 sits in a car on a well-mapped street graph. Bangkok’s binding constraints are the opposite:

1. **Sparse, fractured open data.** GTFS is incomplete or stale depending on the operator. BMTA, BTS, MRT, and boats do not share a clock. [TODM](https://wattwong103.github.io/th-open-transdata/) exists because finding the table is still a week of work. A world model that assumes Uber-scale probe density will silently train on the CBD and call it the city.
2. **Physics Waymo will not cover.** Motorcycle filtering, songthaew stop patterns, jaywalk regimes, sidewalks that are not sidewalks. That is the infrastructure-centric world-model argument in miniature: a roadside camera at a few intersections has *years* of those behaviors. Fleet AV data does not.
3. **Monsoon as an action, not weather noise.** We already treated water on the **railway** as an operating rule (FRI in centimetres) in the [flood orals]({{ '/blog/2026/when-the-railway-is-a-floodplain/' | relative_url }}). The missing piece is the *urban* graph: when a canal road goes under, which BTS stations overload, which bus routes die, who is stuck in a songthaew that never comes.
4. **Land use is local.** The [Blue Line GWR]({{ '/blog/2026/land-use-is-not-a-global-coefficient/' | relative_url }}) is the warning: a citywide elasticity will mis-state both Siam and Tha Phra. An intervention rollout that uses one demand head for the whole BMA will do the same.

Google Mobility AI will underserve this city relative to Tokyo. That is the product reason to be here.

## Data stack (what you can actually start from)

Do not wait for a 70,000-household survey refresh.

| Layer | Start here | Do not pretend |
| --- | --- | --- |
| Synthetic population / traces | [WorldMove](https://www.nature.com/articles/s41597-026-06555-2) (Bangkok is in the 1,600-city set) | That WorldMove *is* the HTS |
| Open catalogues | TODM + MOT / BMA portals | That BMTA GTFS is complete |
| Network | OSM + whatever official rail station lists exist | A fused multi-operator GTFS |
| Grounding | Street View / map tiles as *layout condition*, not as a video world | Genie-invented soi geometry |
| Weather / flood | Public rainfall + the railway FRI work as a prior on *how water becomes an operating rule* | A hydrology digital twin on day one |
| Behavior | HTS 2022 margins where they exist; mode shares as calibration targets | Microdata on GitHub |

The honest MVP is **WorldMove + OSM + a handful of counted corridors + rainfall**, with a learned residual on top of a calibrated simulator. Not Atlas.

## What to fake first vs what to learn

**Fake (simulator) first.** Lane closure, station closure, concert centroid: a macroscopic or mesoscopic assignment (even a four-step with a time-of-day slice, which is how I was trained in Nakhon Ratchasima) plus crude crowding = volume / capacity on BTS links. Operators already think in that language.

**Learn next.** The residual world model: given state (flows, weather, clock, a one-hot action) predict the *distribution* of crowding three hours out, including the tail. Flood and motorcade are rare; that is why you need a world model instead of last-week’s LSTM. You will not have enough labelled motorcades. You will have enough ordinary evenings to learn the base dynamics, then condition on the rare action with a lot of humility and a simulator prior.

**Do not learn.** Photoreal rain on Sukhumvit. Useless if the mode split is wrong.

## The Bangkok-shaped hole

The [world-models post]({{ '/blog/2026/world-models-are-the-next-layer-for-mobility/' | relative_url }}) listed five breaks. Bangkok hits all of them except “we have no city”:

- Ego vs city → corridor crowding, not a camera in a taxi.
- Grounding → real BTS/MRT graph, not a generated street.
- Sparse-data → WorldMove + TODM, not METR-LA.
- Behavior not pixels → MobilityGen-style activity sequences if you can; HTS margins if you cannot.
- Closed-loop with operators → a web paint-an-action tool, Thai-language, three-hour horizon.

Tokyo, next, has the opposite problem: the synthetic population and the sensors already exist. The missing object is still the action.
