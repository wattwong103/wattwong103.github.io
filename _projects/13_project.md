---
layout: page
title: BKK/FLOW
description: Open-data platform for flood exposure, buildings and evacuation in Bangkok, built on the PFLOW people–activities–trips–trajectories contract
importance: 1
category: mobility
github: https://github.com/wattwong103/flood-vul-evac
---

BKK/FLOW takes the PFLOW way of describing a city (people, their activities, their trips, their trajectories) to Bangkok and asks what flooding does to it. It uses only open data: OpenStreetMap, WorldPop and JRC Global Surface Water, checked through a licence-aware source registry.

Code: [github.com/wattwong103/flood-vul-evac](https://github.com/wattwong103/flood-vul-evac) (MIT).

**Status: demonstration.** The current four-area release uses declared flood scenarios and uncalibrated behaviour. It is not a forecast, a warning product or an evacuation recommendation, and no shelter or other destination in it has been verified.

### Pipeline

Sources → people → activities → trips → trajectories → aggregates → flood impact → evacuation → validation → publish.

Each run writes immutable artefacts with a manifest. A FastAPI service reads only those artefacts, and a React and MapLibre site reads only the API, so every number on a map can be traced back to one run.

### Pilot: Khlong San

| Property     | Value                                                     |
| ------------ | --------------------------------------------------------- |
| Area         | Khlong San district, 5.96 km²                             |
| Residents    | 115,959 (WorldPop 2020, 100 m cells)                      |
| Walk network | 7,514 directed edges, 6,701 nodes, 168.7 km               |
| Buildings    | 6,963 OSM footprints, 2,398 intersecting the study area   |
| CRS          | EPSG:32647 (UTM 47N), with the choice justified in config |

### City scale

An earlier run covered the whole Bangkok Metropolitan Administration: 1,643.5 km², about 1.04 million network edges, 272,116 building footprints and 10.9 million modelled residents. It has since been superseded because it used an older source inventory, and is kept only as historical evidence.

That run asked a narrow question: when road edges that touch water are closed, what share of residents near water can still reach the network? Using JRC annual surface water for 2010, 2011, 2012 and 2020, the answer is about 95.5–97.8%, depending on the year and how many wet edges are closed. These are connectivity percentages, not evacuation success rates.

City-scale flood depth and evacuation outcomes are left empty on purpose, each with a stated reason. Filling them needs terrain, hydraulic forcing, validation against real events and shelter capacity checked with operators.

### Related

- [When the railway is a floodplain]({{ '/blog/2026/when-the-railway-is-a-floodplain/' | relative_url }}), the earlier flood-risk work on Thai railway track.
- [Bangkok: one city, one action, one output]({{ '/blog/2026/bangkok-world-model/' | relative_url }}), on what a flood does to crowding hours later.
