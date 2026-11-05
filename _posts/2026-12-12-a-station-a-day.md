---
layout: post
title: A station a day
date: 2026-12-12
description: Eki-dle, a daily puzzle on Japan's 9,000 stations, and two rules it does not break. Never frame the map on the answer. Never let a label flash.
tags: japan railways open-source
categories: mobility-innovation
featured: false
---

[Eki-dle]({{ '/projects/15_project/' | relative_url }}) is a side project. It is also the cheapest way I know to learn a rail network: guess a station, get a distance and a direction, guess again. Play it at [wattwong103.github.io/Eki-dle](https://wattwong103.github.io/Eki-dle/). The code is on [GitHub](https://github.com/wattwong103/Eki-dle).

There are six modes. **Station** gives you six tries, with distance, compass direction, prefecture, region and shared-line hints. **Kana** is Wordle for five-kana station names. **Line** asks for the day's railway line. **Map** shows a fixed, unlabelled map. **Code** gives station numbering codes, one more per miss. **Diagram** shows a schematic of the nearby stops with no names. Puzzles change at midnight Japan time, with separate dailies by region, city, operator, Shinkansen or JR.

## The hints are a geography lesson

Station mode's hints are a small model of how people actually place a station. Same prefecture or neighbouring prefecture. A shared line, or at least the same operator. Kilometres and a bearing. After a few rounds the useful move is to stop guessing famous names and think in corridors: which way the bearing points, and which operator would explain that yellow square.

## Choosing the answers is a design decision

There are about 9,000 operating stations, and every one is a valid guess. Only about 1,100 can be a daily answer: transfer stations, Shinkansen stops and a handful of famous terminals. A daily puzzle has to be fair to someone who has never left Tokyo. A one-platform halt in rural Hokkaido is a fine practice round and a miserable daily.

Line mode uses the same logic. About 490 lines have enough stations to be guessable. A city's line pool only includes lines with at least three stops in that city. If an area has no possible answers for a mode, the game says so instead of quietly using all of Japan.

The data comes from [station_database](https://github.com/Seo-4d696b75/station_database), CC BY 4.0. The maps are [OpenFreeMap](https://openfreemap.org/) tiles drawn with Leaflet and MapLibre.

## Two rules it does not break

**Never frame the map on the answer.** If the opening view is centred on the hidden station, the map has already told you. The opening bounds always use the whole selected area, never the answer. Tests guard this, along with the next rule.

**Never let a label flash.** Map mode removes labels and place icons before drawing. When you switch modes or languages, the old frame stays covered until the new style has finished rendering. Otherwise a station name can show for one frame, which is exactly long enough to spoil the puzzle.

## Small enough to load on a train

The map engine is about 1.06 MB before compression, so it now loads only when a map is on screen. That cut the JavaScript loaded at startup from about 237 kB to 82 kB. The build now fails if startup JavaScript goes over 110 kB. Without a connection or WebGL you still get a bundled outline of Japan and an honest error message, not a blank page.

Version 1.0 went out on 14 September with 101 automated tests. If it teaches you one new transfer station, it has done its job.
