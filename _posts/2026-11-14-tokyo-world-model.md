---
layout: post
title: "Tokyo: one city, one action, one output"
date: 2026-11-14
description: Dense rails, a synthetic freight population, operators who already have dashboards. The world-model product here is what happens to the corridor after you close a line — not whether you can forecast the next train.
tags: research world-models tokyo human-mobility
categories: research-notes
featured: true
---

[Bangkok]({{ '/blog/2026/bangkok-world-model/' | relative_url }}) is a sparse-data, monsoon, fractured-GTFS problem. Tokyo is not. Copying the Bangkok MVP onto a 23-ku basemap would waste the one thing this city has: a population layer and a rail graph that already work.

Same rule as the [world-models note]({{ '/blog/2026/world-models-for-mobility/' | relative_url }}): **one city + one action type + one daily output.**

## The unit

- **City:** Tokyo metropolitan rail + the surface streets that feed it (JR East, metro, private railways). Freight on the same geography via [Pseudo-PFLOW]({{ '/blog/2026/pseudo-pflow/' | relative_url }}).
- **Actions:** a **line or corridor closure** (typhoon / incident / planned engineering) and its cousin, a **pricing or access change** (congestion charge trial, express-stop skip). Not a concert. Tokyo already handles concerts.
- **Output:** delay and crowding **on the parallel corridors**, 1–6 hours out, passenger *and* business-vehicle. A duty officer at a JR control centre already sees the closed line. They do not see a coherent “what the trucks do instead.”

If the screen only restates the delay already on Yahoo Transit, it is not a world model. It is a scraper.

## Why Tokyo is not Bangkok with better GTFS

1. **The graph is real and dense.** Vertical integration on JR, private railways that own the station, metro as a separate clock — still one of the most complete urban rail objects on Earth. Grounding is not the bottleneck. [JR: past, present, future]({{ '/blog/2026/jr-past-present-future/' | relative_url }}) is the institutional layer; the world model is the dynamics layer.
2. **A synthetic population already exists in this lab.** Pseudo-PFLOW: on the order of **4.5 million** daily business-vehicle trips, **1.5 million-plus** truck and taxi agents, **106** zones, calibrated against source statistics. That is the freight that household surveys miss. The world-model job is to roll those agents *under an action*, not to invent them again.
3. **Operators are not waiting for a startup dashboard.** JR East, TMG, and the expressway companies have measurement. Google Mobility AI and DeepETT-class ETA stacks will be judged here on operational metrics. A Tokyo product that only forecasts the next 15 minutes of traffic has already lost.
4. **The rare event is a network event.** Typhoon, earthquake inspection, last-train failure, a Shinkansen feeder shock. The photoreal AV world models (Waymo, Cosmos, SceneDiffuser++) will give you the flooded intersection in 4K. They will not tell you whether the Saikyō Line dump lands on the Yamanote or on the Metropolitan Expressway — or on the trucks Pseudo-PFLOW is supposed to be counting.

## Data stack (what this lab can actually touch)

| Layer | Start here | Do not pretend |
| --- | --- | --- |
| Business vehicles | Pseudo-PFLOW agents + published margins | Unpublished fit numbers on this blog |
| Passenger | Public counts, congestion reports, GTFS-like feeds where they exist | A fused JR+metro+private AFC dump |
| Network | DRM / OSM / published railway GIS | A full nationwide digital twin |
| Action | Official closure tweets, planned engineering bulletins, typhoon track | A hydrology model of the Sumida |
| Grounding | The real rail graph; Street View only as context tokens | Training Genie on Shinjuku |

The honest MVP is **Pseudo-PFLOW (or a thinner passenger assignment) + a published corridor graph + a one-hot action (this line closed) → delay/crowding on named parallels**. A learned residual world model on top, trained on historical closures and typhoon days that *are* public, not on lab-only traces.

GUFM stays off this page. If a decoder-only trajectory model later becomes the passenger prior, that is a paper, not a product sentence.

## What to fake first vs what to learn

**Fake first.** Close the Chuo Line; dump demand onto the parallel metro and the next JR corridor with a capacity constraint. Show trucks rerouting on the 106-zone system instead of teleporting. This is assignment plus a closure flag. Operators will forgive crude physics. They will not forgive a missing parallel.

**Learn next.** \(s_{t+1} = f(s_t, a_t, c_t)\) where \(a_t\) is the closure/pricing vector and \(c_t\) is weather and clock. The loss that matters is crowding and delay on the *unclosed* links, and truck-hours on the zone graph — against DeepETT-class ETAs, not FID.

**Do not learn.** Photoreal rain at Shibuya scramble. Tokyo does not have a pixel problem.

## The Tokyo-shaped hole

Bangkok’s hole is data and SE Asian traffic physics. Tokyo’s hole is **action-conditioned coherence on a network that is already observed**:

- Ego vs city → still corridor, but the corridor is a JR line plus the expressway the trucks take.
- Grounding → already have the graph; do not invent it.
- Sparse-data → *not* the constraint inside the 23 wards; it *is* the constraint the moment you care about nationwide freight (that is why Pseudo-PFLOW is nationwide, 106 zones, not one ward).
- Behavior not pixels → activity sequences for passengers if you have them; business-vehicle diaries from the ABM if you do not.
- Closed-loop with operators → they already have a dashboard. The paint-an-action tool has to beat “the control centre already knows.” The wedge is **freight + parallel crowding jointly**, which those dashboards split across agencies.

## Do not merge the two cities

A single “Asian mega-city world model” will average away the only useful facts: Bangkok needs synthetic people and monsoon as an action; Tokyo needs synthetic *freight* and a line closure as an action. Same math, \(s_{t+1} = f(s_t, a_t, c_t)\). Different \(a\), different data, different buyer.

If I only ship one web MVP, Bangkok is the one Google will underserve. If I only ship one lab demo from CSIS, Tokyo is the one where Pseudo-PFLOW can be the prior tomorrow morning.
