---
layout: page
title: Eki-dle (駅dle)
description: A daily Japanese railway-station puzzle. Six modes, about 9,000 stations, new puzzles at midnight Japan time
img: assets/img/eki-dle.jpg
importance: 1
category: software
github: https://github.com/wattwong103/Eki-dle
---

Play: [wattwong103.github.io/Eki-dle](https://wattwong103.github.io/Eki-dle/). Code: [github.com/wattwong103/Eki-dle](https://github.com/wattwong103/Eki-dle) (MIT).

A side project. Every guess returns a distance, a compass direction, the prefecture and any shared lines, so each round is a small lesson in the shape of Japan's railway network.

{% include figure.liquid loading="eager" path="assets/img/eki-dle.jpg" title="Eki-dle Station mode" class="img-fluid rounded z-depth-1" %}

<div class="caption">
    Station mode in practice: three numbered guesses on the map, each with distance, direction, prefecture and line hints.
</div>

### Six modes

| Mode                 | How it works                                                                                       |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| **駅 · Station**     | Find the station in six tries, with distance, direction, prefecture, region and shared-line hints. |
| **文字 · Kana**      | Wordle for station names written in five kana.                                                     |
| **路線 · Line**      | Guess the day's railway line from operator, region, prefecture overlap and station-count hints.    |
| **地図 · Map**       | Guess from a fixed map with no labels, place icons, panning or zoom.                               |
| **コード · Code**    | Guess from station numbering codes. One code to start, one more for each miss.                     |
| **路線図 · Diagram** | Guess from a schematic of the station's nearby stops, without names.                               |

Each mode has its own daily puzzle, also by area: region, city, operator, Shinkansen or JR. Practice is unlimited. Eighteen cities have their own pools, from Sapporo to Naha. There is a guided first game, English and Japanese, a night theme and colour-blind-friendly labels. Progress stays in the browser.

### Data and build

- Stations and lines come from [station_database](https://github.com/Seo-4d696b75/station_database) (CC BY 4.0): about 9,000 operating stations to guess from, and about 1,100 transfer, Shinkansen and well-known stations as daily answers.
- Maps use [OpenFreeMap](https://openfreemap.org/) with Leaflet and MapLibre. Map clues have every label removed before they render, and no map view is ever framed around the hidden answer.
- Version 1.0 was released on 14 September 2026, with 101 automated tests. Loading the maps only when they are needed cut the JavaScript loaded at startup from about 237 kB to 82 kB.
