---
layout: post
title: Looking at 233 million waypoints
date: 2026-11-21
description: A synthetic population needs a map you can question. trajectory-viz, DuckDB under FastAPI, and the vehicle_key bug that never crashes.
tags: coding human-mobility open-source
categories: research-notes
featured: false
---

[Pseudo-PFLOW]({{ '/blog/2026/pseudo-pflow/' | relative_url }}) produces trucks and taxis. The output I work with is about 4.43 million trips and 233 million waypoints. A CSV is not a way to look at that. A notebook map of a random sample is a way to fool yourself, because the sample is always the part that looks fine.

So I built [trajectory-viz]({{ '/projects/12_project/' | relative_url }}): a map you can ask questions of. The code is on [GitHub](https://github.com/wattwong103/trajectory-viz) under MIT. It is an alpha, and it says so.

## What I needed to ask

A calibration table tells you the totals match. It does not tell you whether a truck's day looks like a truck's day. For that I wanted:

- trips filtered by hour, distance, average speed, dwell time and detour ratio;
- trip chains: how many stops, whether the vehicle comes back, whether it passes through a given box;
- one vehicle's whole day, segment by segment, with its speed and its stops;
- the same view for two fleets side by side.

None of that is exotic. All of it is slow if every question means another script.

## The stack, briefly

DuckDB holds trips and waypoints, about 8 GB at PFLOW scale, with 12 indexes on the columns people filter by. FastAPI serves about 30 endpoints on top of it. React, deck.gl and MapLibre draw the map. In Docker it is one container on one port.

The one design decision I would defend is the **source registry**. A new dataset is a block in `sources.yaml`, not new backend code. The front end asks the API which vehicle types exist and draws a button for each. That is how a viewer built for two hard-coded fleets now reads GPX tracks, GeoJSON, NDJSON pings, Parquet and ABM trip CSVs. Sources that are only timestamped points get trips cut out of them at ingest.

## The bug that never crashes

Taxi IDs restart from 1 in every city. Tokyo taxi #47 and Osaka taxi #47 are different cars with the same integer. Group by `vehicle_id` and you silently merge two fleets. Every count is plausible. Every chart is wrong.

The fix is boring: a globally unique `vehicle_key` (`taxi:tokyo:47`) built at ingest, and a rule that every grouping, distinct count and waypoint join uses it. The same mistake turned up again in a trip-chain query that joined on the old pair of columns. Nothing errored. The fix was checked against a ground-truth join on the Kichijōji database.

## Kichijōji

The latest work came from a small question about a pedestrian superblock around Kichijōji. Answering it needed three things the tool did not have. Transport mode had to become a real filter instead of a separate source per mode. Footfall needed its own layer. And there had to be a way to say "pedestrianise this box" and see the trips and vehicle-kilometres that disappear. That last one is a query-time scenario, so no data is rewritten.

The buildings were wrong too. The synthetic footprints around the station came from dissolved city blocks, and the height rule made the biggest blocks the tallest, so the shopping streets turned into 60 m slabs. They are now real [PLATEAU](https://www.mlit.go.jp/plateau/) footprints with measured heights, 27,029 of them. A map that looks wrong gets ignored, even when the trips on it are right.

## What it is not

A dashboard is where you notice something is off. Published margins are where you show it is right. trajectory-viz is the first of those, not the second. The Pseudo-PFLOW numbers that matter stay tied to source statistics, and anything unpublished stays off this blog.

If you have trajectories of your own, the repository ships a synthetic demo day around Kichijōji. `pip install -e .` and `trajectory-viz-demo --serve` gets you a map.
