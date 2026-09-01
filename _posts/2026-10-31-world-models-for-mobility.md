---
layout: post
title: "World models are the next layer for mobility"
date: 2026-10-31
description: Not the next 15 minutes of traffic — how the city evolves under actions. Predict, simulate, plan. What 2025–26 actually built, and the product-shaped hole that is left.
tags: research world-models human-mobility geoAI
categories: research-notes
featured: true
---

World models are the right next layer for mobility work. They do not just forecast the next 15 minutes of traffic. They learn how the city *evolves* under actions, so you can roll out “what if” futures. That is the gap between a dashboard and infrastructure people would actually use.

This sits next to [Pseudo-PFLOW]({{ '/blog/2026/pseudo-pflow/' | relative_url }}): a synthetic population when surveys miss the vehicles, and a world model when you need those agents to stay coherent after you close a lane. It is not a GUFM paper. It is why action-conditioned dynamics belong in the same lab as generative mobility.

## What a world model is (in 2026)

Classic mobility models answer: *given history, what happens next?*

A **world model** answers: *given the current state of the world + an action, how does the world evolve?* You compress observations (GPS, cameras, cell load, maps, weather) into a latent state, then roll that state forward under hypothetical interventions.

Three capabilities matter for transportation:

| Capability | Mobility version |
| --- | --- |
| **Predict** | Next location, flow, travel time, occupancy |
| **Simulate** | Counterfactual: close a lane, retune a signal, add BRT, a concert, flooding |
| **Control / plan** | Choose actions whose imagined futures look good (delay, emissions, safety) |

That last piece is why operators care. Static forecast models break the moment you change the network. World models are built to stay coherent under action trajectories.

## Three stacks that actually predict mobility

### 1. Street-level / AV world models (highest fidelity)

These generate the next seconds–minutes of a driving scene: other vehicles, pedestrians, signals, weather, even lidar.

- **Waymo World Model** (Feb 2026) is Genie 3 specialized for driving. Controllable via driving actions, scene layout (roads, signals, other users), and language (weather, time of day). Used to rehearse rare events that never show up in fleet data.
- **Genie 3 + Street View** (May 2026) grounds those worlds in *real streets*, not invented cities. That is the geoAI hook: simulation anchored to an actual place.
- **NVIDIA Cosmos / OmniDreams**: open(ish) world foundation models for physical AI. Cosmos 3 unifies generation + reasoning + action. OmniDreams does real-time *closed-loop* AV simulation — the policy drives, the world model renders the next sensor frame. Cosmos 3 is also being used for traffic-anomaly reasoning on city cameras.
- **AutoWorld** (Mar 2026): self-supervised world model from raw LiDAR occupancy → multi-agent traffic simulation (Waymo Sim Agents). Better in partially observed scenes than trajectory-only baselines.
- **SceneDiffuser++**: one generative world model that does *city-scale A-to-B* simulation — spawn/despawn agents, traffic lights, occlusion, long rollouts on a map.
- **Infrastructure-centric world models (I-WM)** (2026 vision paper): almost everything above is ego-vehicle. Roadside cameras/lidar have the opposite strength — years of behavior at one intersection, including rare crashes. Proposal: combine roadside *temporal depth* with vehicle *spatial breadth*, then share latents over V2X. This is the most underrated angle for public infra.

If you only care about robotaxis, stop here. If you care about *cities*, keep going.

### 2. Network / population mobility world models (the planning layer)

This is closer to “will people actually use this transit change?”

- **[MobiWM](https://arxiv.org/abs/2604.08199)** (Apr 2026, Tsinghua-adjacent group around Yong Li): first explicit *world model for mobile networks*. State = cell traffic; actions = antenna power / azimuth / tilt. Multimodal context (images + sequences) with shared spatial semantics. Unlimited-horizon rollout for counterfactual planning across 31,900 cells / 9 districts; at least **16.4%** better distributional fidelity than forecast baselines on average; used as a learned surrogate inside actor-critic optimization.
- **[MobiWorld](https://arxiv.org/abs/2507.09462)**: generative foundation model that emits both element-level data (traffic, user distribution, app usage, *mobility trajectories*) and system KPIs (throughput, coverage, energy) under policies and urban context. Same group’s framing of “what a world model even *is* for networks.”
- **[DeepMobility](https://doi.org/10.1093/pnasnexus/pgaf081)** (*PNAS Nexus*, 2025): generative model that jointly captures *individual trajectories and city-wide flows*, and actually reproduces known scaling laws of human mobility instead of memorizing training traces. Trained only on locations; transferred across Chinese megacities and Senegal. Direct use: synthetic mobility for planning, epidemics, traffic engineering.
- **MobilityGen** (2025–26): diffusion model of multi-day activity-travel sequences (purpose, mode, destination) coupled to the built environment. Enables analyses static OD matrices cannot: mode-specific access to urban space, co-presence / segregation.
- **[WorldMove](https://www.nature.com/articles/s41597-026-06555-2)** (*Scientific Data*, 2026): open synthetic human-mobility data for **1,600+ cities**. Used with a microscopic simulator (MOSS) for traffic and emissions; mixing synthetic + sparse real traces *improves* forecasting when real data is thin (Shanghai, Nanchang, New York). This is the data layer a Bangkok-scale side project can actually start from. Pipeline: [tsinghua-fib-lab/WorldMove](https://github.com/tsinghua-fib-lab/WorldMove).
- **AgentMove**: LLM agent for *zero-shot next-location prediction* using spatial-temporal memory + a “world knowledge generator” over addresses. Works across 12 cities without per-user training data — important where privacy / data access is the blocker.
- **Google Mobility AI** (2025, updated Jan 2026): measurement → digital-twin simulation (Traffic Simulation API) → optimization (signals, routing, evacuations, congestion pricing eval). Geospatial foundation embeddings + generative geospatial reasoning. Aimed at agencies, not consumers.
- Uber’s **DeepETT** (2026) is *not* a world model, but shows the production bar: graph-aware transformer on a ~100M-segment global road graph, 6% better long-trip ETAs, claimed ~$100M annual value. World models will be judged against systems like this on *operational* metrics, not FID.

### 3. General spatial world models (the platform layer)

- **World Labs** (Fei-Fei Li): Marble (generate/explore 3D worlds from text/image/video, World API Jan 2026) → RTFM (real-time interactive frames with spatial memory) → **Atlas** (1 Sept 2026): omni model over text/image/video/3D, reconstruction + space-time simulation, Real-to-Sim for robotics. Their claim is that *spatial intelligence* is the next stack after language.
- **Seoul World Model**: grounds video world models in a *real metropolis* via street-view retrieval. Most generic world models drift off the actual street graph; this one is built to stay on it.

For a mobility product, you usually do **not** train Atlas/Genie from scratch. You use them as a grounded simulator or as a prior, then attach a cheaper mobility head (flows, ETAs, demand).

## Why this is different from “just another traffic LSTM”

| Old stack | World-model stack |
| --- | --- |
| Predict \(x_{t+1}\) from \(x_{\le t}\) | Predict \(s_{t+1} = f(s_t, a_t, c_t)\) |
| Breaks when you change signals, lanes, fares | Rollout is defined *under* those actions |
| One most-likely future | Multimodal futures (brake vs go, rain vs dry) |
| City-specific trained graph | Foundation + city conditioning / few-shot |
| Needs dense sensors | Can mix sparse GPS + synthetic WorldMove + street view |

The papers that matter most for *this* thesis (mobility behavior + geoAI + usable infra) are the ones that treat **actions and context as first-class**: MobiWM, I-WM, MobilityGen, SceneDiffuser++, Google Mobility AI. Everything else is either AV-only or a better forecaster.

## What is still broken (and therefore buildable)

1. **Ego vs city.** Almost all photorealistic world models sit in a car. Cities need intersection- and network-level models that answer “what happens to the corridor,” not “what does my camera see.” I-WM is a research vision, not a product.
2. **Grounding.** Generative worlds invent geometry. Mobility infra cannot. Street View + Genie, Seoul WM, and map-conditioned SceneDiffuser++ are the pattern: retrieve or condition on real layout.
3. **Sparse-data cities.** WorldMove + AgentMove + city-conditioned memory exist because most of the world is not METR-LA. Bangkok, secondary Thai cities, and most ASEAN metros live here.
4. **Behavior, not pixels.** Predicting photoreal rain is useless if mode choice and activity sequences are wrong. DeepMobility / MobilityGen are the behavioral world models; they are under-productized.
5. **Closed-loop with operators.** Google has a Traffic Simulation API for agencies. There is no good *open, intervention-first* web tool: “draw a lane closure / new stop / fare change → see demand, delay, and who is harmed.” That is a product-shaped hole.

## Side-project shapes that people would actually use

Given the focus here (webs + infra for transportation behavior, geoAI):

**A. Intervention sandbox (highest product fit)**  
Map of a real city → user paints an action (roadwork, flood, concert, new BTS feeder, signal retiming) → world-model rollout of flows / ETAs / crowding for 1–24h. Backend can start crude (calibrated simulator + learned residual world model) and get smarter. Agencies and event operators pay for this; commuters use a thin consumer view (“will my bus be wrecked at 18:00”).

**B. Sparse-city mobility twin**  
WorldMove-style synthetic population + whatever open GPS/transit GTFS you can get + street-view grounding. Target a city that Google Mobility AI will underserve. Evaluate on next-location, OD, and travel-time *under interventions*, not just next-step RMSE.

**C. Roadside / intersection world model**  
Fixed camera or cheap lidar at a few Bangkok intersections. Learn long-horizon behavioral distributions (jaywalk regimes, motorcycle filtering, songthaew stop patterns). This is I-WM in miniature and is unique to SE Asia traffic physics that Waymo/NVIDIA data will not cover.

**D. Mobility head on a spatial foundation**  
Don’t train a Genie. Use embeddings / reconstructed 3D / Street View as context tokens, then train a small action-conditioned predictor for demand and travel time. Invert the usual “mobility graph improves urban embeddings” story: use the foundation to improve mobility.

## Suggested reading order (dense, 2025–26)

1. Survey: *A Survey of World Models for Autonomous Driving* — taxonomy of generation vs planning.
2. [MobiWM](https://arxiv.org/abs/2604.08199) + [MobiWorld](https://arxiv.org/abs/2507.09462) — best “world model *for mobility systems*” papers, not cars.
3. [DeepMobility](https://doi.org/10.1093/pnasnexus/pgaf081) + MobilityGen + [WorldMove](https://www.nature.com/articles/s41597-026-06555-2) — human behavior layer + open data.
4. Waymo WM + Genie/Street View + SceneDiffuser++ — what frontier simulation looks like.
5. Infrastructure-centric WM — the public-infra research agenda.
6. Google Mobility AI + Uber DeepETT — what production systems already ship without calling themselves world models.

One city + one action + one daily output, written out: [Bangkok]({{ '/blog/2026/bangkok-world-model/' | relative_url }}) (flood / motorcade / concert → BTS+bus crowding, three hours) and [Tokyo]({{ '/blog/2026/tokyo-world-model/' | relative_url }}) (line closure → parallel crowding and trucks). Same \(s_{t+1}=f(s_t,a_t,c_t)\). Different \(a\), different data, different buyer.

## Sources I actually opened

- Qi, Chai, Wang, Li. [MobiWM](https://arxiv.org/abs/2604.08199), arXiv:2604.08199, 2026. (≥16.4% average gain vs baselines; 31,900 cells / 9 districts.)
- Chai, Yuan, Li. [MobiWorld](https://arxiv.org/abs/2507.09462), arXiv:2507.09462, 2025.
- Yuan, Ding, Jin, Li. [DeepMobility](https://doi.org/10.1093/pnasnexus/pgaf081), *PNAS Nexus* 4(5), pgaf081, 2025.
- Yuan, Zhang, Ding, Li. [WorldMove](https://doi.org/10.1038/s41597-026-06555-2), *Scientific Data*, 2026. Data: [worldmove](https://fi.ee.tsinghua.edu.cn/worldmove/).
