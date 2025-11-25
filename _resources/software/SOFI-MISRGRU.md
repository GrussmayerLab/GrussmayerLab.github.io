---
layout: archive
title: "SOFI-MISRGRU"
permalink: /resources/software/sofi-misrgru/
author_profile: false
header: 
    overlay_image: "/banner/SOFI_MISRGRU.jpg"
    overlay_filter: 0.5
    teaser: "/resources/SOFI_MISRGRU.jpg"

collection: resources
tag: software
---


## Introduction
SOFI-MISGRU is a supervised deep learning model designed to accelerate second-order Super-resolution Optical Fluctuation Imaging (SOFI). Our model can reconstruct super-resolved SOFI images using just 20 frames while maintaining a two-fold improvement in spatial resolution. This reduces the usual requirement of hundreds of frames, enabling real-time temporal resolution of up to 4.85 fps for dynamic live-cell imaging. This project has been driven by Miyase Tekpinar and Jelle Komen. 

## Description
Live-cell imaging captures dynamic cellular processes, but many structures remain beyond the diffraction limit. Fluctuation based super-resolution techniques reach beyond the diffraction limit by exploiting correlations in fluorescence blinking. However, existing methods require the acquisition of hundreds of frames and involve computationally intensive post-processing, which can take tens of seconds, thereby limiting the suitability for real-time sub-diffraction imaging of fast cellular events. To address this, we use a recurrent neural network model, which integrates sequential low-resolution  frames to extract spatio-temporally correlated signals. Using super-resolution optical fluctuation imaging (SOFI) as a target, we developed a deep-learning based real-time super-resolution fluctuation imaging method (RESURF) which significantly improves temporal resolution by reducing the required number of frames down to only 8 frames and also doubles the spatial resolution. We demonstrate a 400-fold reduction in computational latency compared to SOFI, highlighting its promise both as an efficient high-throughput imaging and real-time solution for live-cell super-resolution imaging.

## Resources 
Find the github repository of the model [here](https://github.com/GrussmayerLab/SOFI-MISRGRU "Github link"). <br /> 
The associated pre-print from june 2025 is published [here](https://doi.org/10.1101/2025.06.05.658028 "Arxiv link").  
