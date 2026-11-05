---
layout: post
title: A solver, an assistant, and a flag that says simulated
date: 2026-12-19
description: An MCP server for Ansys Rocky. 25 tools, two backends, and why every response says whether its numbers came from the solver.
tags: coding open-source
categories: research-notes
featured: false
---

The Model Context Protocol (MCP) is how an AI assistant gets tools: a server describes what it can do, and the assistant calls it. Ansys ships MCP servers for Fluent, Mechanical, MAPDL, AEDT, CFX and Lumerical. It does not ship one for Rocky, its discrete element method (DEM) solver. DEM is how granular material gets simulated: bulk solids, powders and, if you work on railways, ballast.

Rocky does have a Python client, [`ansys-rocky-core`](https://pypi.org/project/ansys-rocky-core/). But a client is an API, not a tool an assistant can pick up. Without a server, someone writes the PyRocky boilerplate by hand every time. So I wrote [ansys-rocky-mcp]({{ '/projects/16_project/' | relative_url }}). It is an independent project under MIT, built on [`ansys-common-mcp`](https://common-mcp.docs.pyansys.com/) so it follows the same pattern as the PyAnsys servers.

## What it can do

There are 25 tools. They open and save projects, import walls, and define particles, inlets, outlets, the domain and solver settings. They apply motion, start a run and wait for it. Then they read curves, grid-function statistics and selections. One more tool runs arbitrary Python in a persistent session, for everything the other 25 do not cover.

## The part I care about

There are two backends. `pyrocky` drives a real, licensed Rocky. `mock` is an in-memory stand-in. It tracks the whole study setup and returns time series that are physically consistent and completely made up. The mock is useful: you can try the server, write a workflow, and test a client with no licence at all.

It is also dangerous, for the same reason. An assistant that quietly falls back to the mock produces a clean mass-flow curve that no solver ever computed. It looks like a result. It will be pasted into a slide as a result.

So three rules:

1. **Every response carries `backend` and `simulated` fields.** Whatever the assistant sees, it also sees where the numbers came from.
2. **The server tells the assistant to say so.** If `simulated` is true, the instructions require it to tell the user that the numbers did not come from Ansys Rocky.
3. **The default never substitutes.** `auto` uses the real Rocky when it is installed. When it is not, it fails with an error that says what to install. It never switches to mock numbers on its own.

This is the same rule this blog keeps applying. Pseudo-PFLOW does not show an unpublished fit. BKK/FLOW leaves flood depth empty rather than map a noise field. A tool that hands an assistant numbers should be at least as honest about where they came from as I try to be.

## Status

The full workflow has been tested end to end over a real MCP stdio connection, with 42 automated tests. It runs over stdio or HTTP and needs Python 3.12 or newer. The real backend needs Rocky 2024 R2 or newer. Setup for Claude, Codex, Cursor, MiniMax and Kimi is in the [repository](https://github.com/wattwong103/ansys-rocky-mcp).
