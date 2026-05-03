---
layout: page
title: Trajectory Visualization
description: Interactive visualization tool for Pseudo-PFLOW pedestrian and vehicle trajectory data
importance: 3
category: projects
github: https://github.com/wattwong103/trajectory-viz
---

## Pseudo-PFLOW Trajectory Visualization

An interactive web-based tool for visualizing large-scale pedestrian and vehicle trajectory data from the Pseudo-PFLOW simulation framework.

### Overview

This project provides a visual interface for exploring synthetic population flow data, enabling researchers to understand movement patterns, identify congestion points, and validate simulation outputs. The tool handles large trajectory datasets and renders them in real-time on interactive maps.

### Key Features

- **Real-time trajectory rendering** — Animate thousands of agents moving through urban networks
- **Temporal filtering** — Explore movement patterns by time of day, day of week, or custom intervals
- **Mode-specific views** — Filter by transportation mode (walk, car, transit, bicycle)
- **Spatial aggregation** — Heat maps and flow diagrams for high-level pattern analysis

### Technical Stack

- TypeScript with modern web frameworks
- MapLibre GL / Deck.gl for map rendering
- Efficient data streaming for large trajectory files
