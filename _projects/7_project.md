---
layout: page
title: Machine Learning Approach to Predict Railway Track Buckling
description: Our first project with my Prof. Chayut
img: assets/img/4.jpg
importance: 4
category: railways
related_publications: true
---

## Project Summary

This research develops and implements advanced machine learning models to predict buckling failure modes in ballasted railway tracks, addressing a critical safety concern in railway infrastructure. As climate change increases the frequency of extreme temperatures, the risk of track buckling grows - particularly in continuous welded rail (CWR) systems that are susceptible to heat-induced expansion and lateral instability.

### Research Highlights

- **Novel Approach**: Utilizes machine learning techniques to analyze track parameters and predict buckling failures before they occur
- **High Accuracy**: Achieves 97% prediction accuracy using optimized XGBoost models
- **Multiple Buckling Modes**: Distinguishes between snap-through and progressive buckling modes
- **Comprehensive Modeling**: Incorporates temperature effects, track geometry, and mechanical properties
- **Practical Application**: Validated through real-world case study from Thailand's railway system

### Technical Implementation

The research employed various machine learning algorithms including Logistic Regression, k-Nearest Neighbor, Decision Trees, Random Forest, and gradient boosting techniques (XGBoost, LightGBM). After comprehensive testing and optimization, XGBoost emerged as the most effective model with outstanding performance metrics (F1 score: 0.97).

#### Key Model Features:

- **Input Parameters**: Lateral stiffness, displacement limits, torsional resistance, unconstrained length, and initial misalignment
- **Prediction Outputs**: Non-buckling, snap-through buckling, or progressive buckling modes
- **Feature Importance Analysis**: Identified lateral misalignment, torsional resistance, and lateral displacement limit as the most significant factors

#### Data Processing:

- 8,000 simulated track scenarios from advanced finite element modeling
- Synthetic Minority Over-Sampling Technique (SMOTE) to address class imbalance
- K-Fold Cross Validation for robust model evaluation

### Key Findings

1. Different track parameters significantly influence the temperature at which buckling occurs
2. Progressive buckling typically occurs at lower lateral stiffness and lower temperatures
3. Snap-through buckling becomes more prominent with increased lateral resistance
4. The model successfully predicted both the buckling temperature and mode in a real-world case study with high accuracy

### Practical Implications

This machine learning approach offers significant potential for:

- Early warning systems for railway operators
- Optimized maintenance scheduling based on predicted risk
- Improved safety protocols during extreme temperature conditions
- Enhanced understanding of track buckling physics
- Better railway asset management and investment planning

### Future Research Directions

The researchers acknowledge limitations including the simplification of track misalignments using sine waves rather than actual track geometry data. Future work could focus on:

- Incorporating real-world track alignment measurements
- Developing more sophisticated models with additional parameters
- Creating user-friendly tools for railway engineers and operators
- Expanding the approach to other types of railway infrastructure

This research represents a significant advancement in railway engineering by integrating machine learning with structural analysis, potentially leading to safer and more efficient railway systems worldwide.

This project builds to our work {% cite DiscovApplSci.6.212 %}.

[Download Poster (PDF)](/assets/pdf/PosterBuckling2.pdf){: .btn}
