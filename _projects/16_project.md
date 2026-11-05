---
layout: page
title: ansys-rocky-mcp
description: An MCP server for Ansys Rocky, the DEM solver, so AI assistants can set up, run and post-process Rocky studies
importance: 3
category: software
github: https://github.com/wattwong103/ansys-rocky-mcp
---

Code: [github.com/wattwong103/ansys-rocky-mcp](https://github.com/wattwong103/ansys-rocky-mcp) (MIT). This is an independent project.

[Ansys Rocky](https://www.ansys.com/products/fluids/ansys-rocky) is a discrete element method (DEM) solver. Ansys publishes MCP servers for Fluent, Mechanical, MAPDL and other products, but not for Rocky. The only Rocky automation is the Python client [`ansys-rocky-core`](https://pypi.org/project/ansys-rocky-core/), so an AI assistant can't drive Rocky unless someone writes the PyRocky code by hand each time. This server fills that gap. It follows the same pattern as the PyAnsys MCP servers and is built on [`ansys-common-mcp`](https://common-mcp.docs.pyansys.com/), so Claude, Codex, Cursor, MiniMax, Kimi or any other MCP client can build a study, run it and read the results.

### Tools

25 tools in six groups:

- **Session:** status, connect, disconnect.
- **Project:** create, open, save, close, and a full snapshot of the study.
- **Study setup:** walls from geometry files, surfaces, particles, inlets, outlets, domain limits, solver settings and motion.
- **Run control:** start, check progress, wait for completion.
- **Results:** time-series curves, grid-function statistics, selections and processes.
- **Python escape hatch:** run arbitrary code in a persistent PyRocky session.

### Real numbers versus simulated numbers

The server has two backends. `pyrocky` drives a real, licensed Ansys Rocky (2024 R2 or newer). `mock` is a built-in, in-memory stand-in that tracks the study setup and returns physically consistent but **simulated** time series, so the server can be tried without Rocky installed.

Every response carries `backend` and `simulated` fields, and the server instructions tell the assistant to say when numbers are simulated. The default `auto` backend uses Rocky when it is installed and fails with a clear error when it is not. It never quietly swaps in mock numbers for solver output.

### Status

The full workflow has been checked end to end over a real MCP stdio connection, with 42 automated tests. It runs over stdio by default or over HTTP, and needs Python 3.12 or newer.
