---
layout: post
title: "The research thread: from Bangkok surveys to generative mobility"
date: 2026-08-25
description: How travel-behaviour work in Thailand led to railway climate risk, ridership and land use, and now foundation models of human mobility in Tokyo
tags: research human-mobility railways urban-mobility
categories: mobility-innovation
featured: false
---

People ask what I work on and I still give three answers. The honest one is a thread, not a topic.

It starts as geography. I trained students for the Geography Olympiad, then wrote a dissertation on a time-specific four-step model of public transit in Nakhon Ratchasima. That is the unglamorous core: people leave home for a reason, pick a mode, load a network. At the Chulalongkorn University Transportation Institute I spent three years doing the same thing at national scale — household travel surveys, airport egress at Don Mueang, tuk-tuk safety, garbage routing, GIZ climate-sensitive planning in Chiang Mai and Khon Kaen. The Pheu Thai year was that skill applied to bus routes and congestion charging.

## Rails that flood and rails that buckle

In parallel I worked with ARIISE on the track itself. Thailand's railway does not fail in the abstract. It fails when monsoon water sits above the ballast, and when continuous welded rail gets hot enough to snap through. We used digital surface models and computer vision to map floodplain risk, then machine learning to turn that into an operation-based flood index — what the dispatcher can still run at 30 cm of water versus 70. That work was an oral at ICCBEI 2023 and again at ICRT 2024. The buckling paper, with XGBoost on finite-element scenarios, is in *Discover Applied Sciences* (2024). A chapter on track management under extreme events is in press with Elsevier.

That is not a side project. If you care about mode shift in a tropical country, you have to care whether the train shows up in October.

## Land use is not a global coefficient

The other Bangkok thread is ridership. Land use next to the MRT Blue Line does not have one effect. It has a geography. We used geographically weighted regression so the relationship can change along the line and across the day. An abstract went to IWGMS 2024; the paper went to CASPT 2025 and the *Public Transport* special issue (2026). A related accessibility index for Bangkok, led by Kongtup Wanichjaroenporn, is accepted at *Transportation Research Record*.

The lesson I keep is methodological and political: a citywide elasticity is a convenient lie. Station catchments are not interchangeable. Policy that pretends they are will overbuild one place and starve another.

## Tokyo: generating the city instead of only surveying it

Since October 2025 I have been in Sekimoto Lab at CSIS, The University of Tokyo, on two pieces of the same problem.

**Pseudo-PFLOW** is a nationwide agent-based picture of business vehicles — on the order of 4.5 million daily trips from more than a million truck and taxi agents across 106 zones — calibrated and cross-checked against the statistics we actually have. It is what you build when the survey does not cover the freight that is eating the road.

**The Generative Urban Foundation Model** is the research bet: a decoder-only transformer (and, in parallel, world models and diffusion) that learns to generate realistic human-mobility trajectories across cities from real data. The point is not a prettier map. It is a model you can take to a city that does not have a 70,000-household travel survey.

I do not have a paper from that work on this site yet. When I do, it will go on [publications]({{ '/publications/' | relative_url }}) and the [research one-pager](https://wattwong103.github.io/research/). The thread that got me here is already public: behaviour as geography, infrastructure as climate, and now mobility as something you might generate rather than only observe.

If you want a single sentence: I am trying to make travel demand models that survive a flood, a new mall, and a city they were not calibrated on.

Deeper notes, one habit or paper at a time, start at [how I actually do the research]({{ '/blog/2026/how-i-do-research/' | relative_url }}).
