---
layout: page
title: Transit Layout
description: Automated transit network map design and schematic layout generation
importance: 3
category: projects
github: https://github.com/wattwong103/transit-layout
---

## Transit Layout: Schematic Transit Map Generator

A tool for generating clean, readable schematic transit network maps from geographic route data, similar in style to official metro/rail system maps.

### Overview

Transit network maps are essential for rider comprehension, but creating legible schematic maps from complex geographic data is a non-trivial design challenge. This project automates the process of transforming geographic transit routes into aesthetically clear schematic layouts that prioritize readability and wayfinding.

### Key Features

- **Automatic schematization** — Convert geographic coordinates to clean angular layouts
- **Multi-line support** — Handle overlapping routes and transfer stations
- **Label placement** — Intelligent station name positioning to minimize overlap
- **Export formats** — Generate SVG and PNG outputs for print and digital use

### Technical Stack

- TypeScript
- Computational geometry algorithms for line simplification
- Force-directed layout optimization
