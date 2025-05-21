---
layout: page
title: Railway Flood Risk Mapping
description: Development of flood risk maps for railway tracks in nationwide floodplain areas using digital surface models and machine learning
img: assets/img/flood-risk-map.jpg
importance: 3
category: work
---

## The Challenge: When Railways Meet Monsoons

In Thailand's monsoon-prone regions, railways face a perpetual battle against nature. Heavy rainfall events frequently lead to flooding, disrupting critical transportation infrastructure and causing significant economic losses. Add human activities like railway embankments that obstruct natural water flow, and you've got a perfect storm of flood risk factors.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/flooded-railway.jpg" title="Flooded railway tracks in Thailand" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/flood-simulation.png" title="Flood simulation model" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Flooded railway tracks during monsoon season. Right: Flood simulation and modeling.
</div>

<div class="row mt-3">
    <div class="col-12 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/flood-lev.png" title="Flood level analysis" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Flood Level Analysis.
</div>

## Our Innovative Approach

Our research tackles this complex challenge by combining advanced computer vision techniques with machine learning to create a comprehensive flood risk assessment system for railway infrastructure. We integrated:

- **Digital Surface Models (DSM)** for precise topographical mapping
- **Historical climate data** spanning 12 years (2005-2016)
- **Machine learning classification** to predict flood risk levels
- **Operation-based Flood Risk Index (FRI)** to translate predictions into actionable guidance

## Methodology: From Data to Decisions

### 1. Data Collection & Oversampling

We collected data on four major risk factors in railway track flooding:
- Historical climate conditions
- Drainage basin characteristics 
- Slope gradient analysis
- Elevation mapping

Due to the natural imbalance in our dataset (most locations don't flood most years), we implemented **Adaptive Synthetic Minority Oversampling Technique (ADASYN)** to ensure our models weren't biased toward predicting "no flood" as the default outcome.

### 2. Operation-based Flood Risk Index

We developed a practical Flood Risk Index (FRI) based on real-world railway operations during floods:

| FRI | Range | Level of flood | Interpretation |
|-----|-------|---------------|----------------|
| 0 | No flood | No risk | Normal operations |
| 1 | 0-30 cm | Ballast level - Sleeper bottom | Caution advised |
| 2 | 31-60 cm | Sleeper bottom - Railhead | Reduced speed required |
| 3 | 61-70 cm | Over railhead | Minimal operations only |
| 4 | >70 cm | Severe flooding | No operations permitted |

### 3. Machine Learning Magic

We tested several machine learning models and found that the **Extra Trees classifier** performed best, achieving:
- 98% accuracy on training data
- 71% F1-score on test data (2015-2016)
- Excellent performance in identifying areas at risk of flooding

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/model-perf.png" title="Model performance comparison" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/feature-imp.png" title="Feature importance graph" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Performance comparison of various machine learning models. Right: Feature importance analysis showing rainfall metrics as the most influential factors.
</div>

## Results: From Prediction to Prevention

Our model successfully:
- Generated detailed flood risk maps for railway tracks across Thailand
- Identified the three most influential flooding factors:
  1. Average rainfall
  2. Average rainfall per day
  3. Maximum rainfall per day
- Provided actionable insights for railway operators to make evidence-based decisions

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/flood-risk-viz.png" title="Full visualization of railway flood risk mapping" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Visualization of predicted flood risk levels along railway tracks from North to South Thailand. Ground level (green) and rail level (brown) are shown with various flood depths indicated by blue shading.
</div>

## Real-World Impact

This research has profound implications for:
- **Infrastructure planning**: Identifying high-risk areas for prioritized flood mitigation
- **Operational protocols**: Setting evidence-based speed restrictions during flood events
- **Disaster prevention**: Enabling proactive measures before flooding occurs
- **Climate resilience**: Building railway systems that can withstand increasingly extreme weather events

## The Team

This project represents collaborative work across multiple disciplines and institutions:

- **Watcharapong Wongkaew** - Chulalongkorn University Transportation Institute
- **Kittipat Phunjanna** - The Chinese University of Hong Kong, Department of Electronic Engineering
- **Wachira Muanyoksakul** - Advanced Railway Infrastructure, Innovation and Systems Engineering (ARIISE) Research Unit
- **Tanawat Tangjarusritanatorn** - Department of Water Resources Engineering, Chulalongkorn University
- **Chayut Ngamkhanong** - ARIISE Research Unit, Department of Civil Engineering

## Looking Forward

The methodologies developed in this project can be applied to other regions facing similar challenges, helping create more resilient railway infrastructure worldwide. As climate change continues to increase the frequency and severity of extreme weather events, these predictive tools will only become more valuable.

Would you like to learn more about this research or explore potential applications? [Contact us](#) for more information!
