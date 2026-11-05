---
layout: post
title: Shibuya has no denominator
date: 2026-12-05
description: Building a 3D atlas of an eight-level station from public sources, and why every shape in it is still labelled schematic.
tags: tokyo railways open-source
categories: mobility-innovation
featured: false
---

In a four-step model a station is a node. In Shibuya it is eight levels, from the Ginza Line on 3F to platforms five floors underground, run by several operators. Which exit you take decides which street gets the crowd. I wanted to see that, so I built the [Shibuya Station Atlas]({{ '/projects/14_project/' | relative_url }}): a rotatable 3D model and a 2D floor plan that share the same geometry and selection. It is live at [wattwong103.github.io/transit-layout](https://wattwong103.github.io/transit-layout/).

Version 1.0.0 covers the eight levels, eight surrounding building envelopes and 20 selected exits. Every shape in it is labelled schematic. This post is about why.

## The prototype looked finished

The first version drew nicely. Then I audited it. The coordinates were authored on a 1400 × 900 drawing with no geographic reference, no scale and no measured elevations. Comments like "OSM/Google" sat next to shapes, which is not provenance anyone can reproduce. Floor heights were display indices, not metres. Because 1F was 1 and B1 was −1, that one gap was drawn twice as tall as every other.

The walking graph checked out: 86 nodes, 113 edges, 44 regions, 8 floors, no duplicate IDs, fully connected. That proves the data agrees with itself, and nothing more. The step-free subgraph split into four disconnected pieces. That does not show Shibuya has no step-free route between those floors. It shows the dataset has none.

## Public sources, and their dates

The best public source is MLIT's PLATEAU model of the underground passages by the west exit. I downloaded it and opened the archive: 59 tiles, 343 feature IDs, four room IDs, one building. It is a real start for one small area, not the station, and its geometry still has to be decoded and checked.

The dates disagree. The PLATEAU catalogue gives a reference date of December 2024. The operator floor guides I compared against are from 2026, and Shibuya has kept changing in between. The atlas keeps those conflicts visible instead of choosing one quietly.

## No denominator

The audit has one line I keep coming back to: the denominator is unknown. I have not found a complete list of Shibuya's exits, connections and public passages across all the operators and buildings. Without one, "covers 80% of exits" is a number I would be making up. So the atlas claims none. It shows 20 selected exits, each link carries its source and date, and a dashed line means "an exit toward a destination", not a route you can walk.

What it does not map is just as explicit: measured geometry, building interiors, step-free routes and current closures.

## What measured would take

Metric polygons with their original coordinate transforms. Level IDs per facility, with unknown elevations allowed. Checkpoints held out of the alignment so the error can actually be measured. Dated records of closures and access. And someone standing at the exits, checking sign text and which landings a lift actually serves.

That is a lot of work for one station. It is also the honest price of saying "here is how you get from the Hanzomon platform to the street". Until it is paid, the atlas is a way to understand the station's shape, not a way to navigate it.
