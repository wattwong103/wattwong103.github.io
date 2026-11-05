---
layout: page
title: trajectory-viz
description: Open-source map dashboard for agent-based mobility output. FastAPI and DuckDB backend, React, deck.gl and MapLibre frontend
importance: 3
category: tokyo
github: https://github.com/wattwong103/trajectory-viz
---

trajectory-viz is the dashboard I built to look at [Pseudo-PFLOW]({{ '/projects/11_project/' | relative_url }}) output. The truck and taxi ABMs produce about 4.43 million trips and 233 million waypoints, too many to read as CSV or plot in a notebook. It started as a two-source viewer for those runs and is now a general tool for any trajectory data that can be written as trips and waypoints.

Code: [github.com/wattwong103/trajectory-viz](https://github.com/wattwong103/trajectory-viz). MIT licence, version 0.2.0a1 (alpha), with a [`CITATION.cff`](https://github.com/wattwong103/trajectory-viz/blob/main/CITATION.cff) if you use it in academic work. The repository does not include Pseudo-PFLOW output. Its demo data is synthetic.

### How it works

- **Declarative sources.** A block in `sources.yaml` adds a dataset without any backend code changes. A new ABM shows up in the interface as a new vehicle-type button.
- **Five input formats.** GPX tracks, GeoJSON lines and points, NDJSON pings, Parquet extracts and ABM trip CSVs, plus static POI layers. Sources with only timestamped points get trips built at ingest, split by time gap, by day, or kept as a single trip.
- **Storage and API.** Trips and waypoints go into DuckDB, with 12 indexes on the columns used for filtering. FastAPI serves about 30 endpoints.
- **Map.** React, deck.gl and MapLibre, with about 25 overlays: trails, OD arcs, heatmaps, link density, clusters, speed gradients, dwell markers, POIs, zones and A/B grid differences.

### What you can ask it

- Trip filters: hour, distance, average speed, dwell time, route detour ratio.
- Trip-chain queries: chain length, round trips, multi-stop chains, trips that pass through a chosen box.
- Per-segment speed and dwell for one trajectory, and clustering by route similarity (Jaccard overlap of link sets).
- Shareable views: every filter is kept in the URL hash.

Unreleased work since v0.2 adds transport mode as a filter and colour, a pedestrian footfall layer, real PLATEAU building footprints, and a "pedestrianise this zone" scenario that removes car trips entering a box and reports the change in trips and vehicle-kilometres. These came out of a pedestrian-superblock analysis around Kichijōji.

### One rule worth repeating

Taxi `vehicle_id`s restart from 1 in every city, so Tokyo taxi #47 and Osaka taxi #47 are different vehicles. The database stores a globally unique `vehicle_key` (`taxi:tokyo:47`), and every grouping and distinct count uses it. Bugs like this don't crash. They silently merge two fleets into one.

### Try it

The repository includes a synthetic day of bike couriers, buses and POIs around Kichijōji, Tokyo, so it runs without any PFLOW data:

```bash
pip install -e .
trajectory-viz-demo --serve
```

Docker and native setups are in the [quickstart](https://github.com/wattwong103/trajectory-viz/blob/main/docs/QUICKSTART.md).

Blog: [Looking at 233 million waypoints]({{ '/blog/2026/looking-at-233-million-waypoints/' | relative_url }}).
