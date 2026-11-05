---
layout: page
title: Shibuya Station Atlas
description: Interactive 3D model and 2D floor plan of Shibuya Station's levels, exits and connected buildings
img: assets/img/transit-layout.jpg
importance: 2
category: software
github: https://github.com/wattwong103/transit-layout
---

Open the atlas: [wattwong103.github.io/transit-layout](https://wattwong103.github.io/transit-layout/). Code: [github.com/wattwong103/transit-layout](https://github.com/wattwong103/transit-layout) (MIT).

Shibuya Station stacks several railway operators across eight levels, from the Ginza Line on 3F to platforms five floors underground. A flat map hides most of that. This atlas shows the station as a rotatable 3D model and a matching 2D floor plan. The two views share the same geometry and selection, so a platform or exit picked in one is highlighted in the other.

{% include figure.liquid loading="eager" path="assets/img/transit-layout.jpg" title="Exploded 3D view of Shibuya Station" class="img-fluid rounded z-depth-1" %}

<div class="caption">
    The exploded station view: eight levels, platforms, passages, stairs, escalators, lifts and numbered exits.
</div>

### What it does

- **3D model.** An orthographic reference view, shaped floor slabs and platforms, stairs, escalators and lift shafts. Floor spacing can be adjusted and single floors isolated.
- **2D plan.** The same polygons and connector openings, with pan, zoom and readable exit badges.
- **Station, Buildings or Both.** Switch between the station interior and eight schematic envelopes of the surrounding buildings.
- **Exit connections.** Select a building or exit to see its documented links. Solid lines are direct building connections, dashed lines are exits toward a destination. Every link carries its source and date.

### Scope

Version 1.0.0 was released on 14 September 2026, with 11 regression tests and desktop and mobile checks. All shapes, elevations and connector positions are **schematic**. The diagram covers 20 selected exits, not the whole station. Exit links are not walking routes, and building interiors, step-free routes and current closures are not mapped. A measured station model and complete exit coverage are later work.

Built with Next.js as a static site, using React Three Fiber for the 3D view.
