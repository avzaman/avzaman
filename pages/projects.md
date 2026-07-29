---
layout: base.njk
title: Project
---
## <ins>Minimal Quantum Grover's Algorithm Simulator </ins>
[***Github Repo***](https://github.com/avzaman/Grover_Over_AES)<br>
[***LinkedIn Post with Paper***](https://www.linkedin.com/posts/avzaman_quantum-cryptography-grovers-search-on-ugcPost-7487522799453028352-gNI6/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF4kOP0BP6SbfPW_A43AkzKMEBHclWuWKfs)<br>
In my first semester at Rutgers \(Spring 2026\) I studied 
Quantum Computing under Dr.Yipeng Huang. This project was 
completed over the course of that semester. I explored 
Grover's algroithm implications on cybersecurity and implemented 
a small version of AES to simulate Grover's itterations on. 
The simulator uses qiskit in python and the mini AES was designed 
to use 4 bit keys instead of 128. 

## <ins>BeamCannon a Beamcraft Extension</ins>
[***Github Repo***](https://github.com/avzaman/BeamCannon)<br>
This project was to explore a vulnerability in the beamforming 
protocol used to establish MIMO connections in comodity WiFi routers. 
Due to the protocol being in plaintext it is easy for an attacker 
to inject packets with false channel information causing APs to steer 
beams in the opposite direction of a client device causeing severly 
hindered throughput. I successfully reimplemented SU-MIMO attack, 
the MU-MIMO attack is still being explored. The goal is to create 
a software that can generalize the attack to be "plug and play" and 
hardware agnostic.

## <ins>Graduate Class: Operating Systems Theory</ins>
[***Github Repo***](https://github.com/avzaman/cs519-sp26)<br>
I put this class under the "Projects" because the whole semester
was structured around a few big projects, all of which involved
modifying the Linux kernel. During this course I became familiar
with the Completely Fair Scheduler (CFS), memory management,
cache coherency, EBPF programming, and optimizing programs across
these low level Linux axioms. I wrote several kernel modules,
compiled the custom kernels, and benchmarked the results.

## <ins>"V" Social Media Site Clone of X (Formerly Twitter)</ins>
[***GitHub Repo***](https://github.com/avzaman/AvzamanSocial)<br>
For an independent study at Kean University I worked with my
advisor 1 on 1 to learn NoSQL database programming. I structured
the project around making a social media website where users
can:
- create an account with username and password
- login/logout to the account
- create/delete text and image posts
- comment on posts
- delete comments
- like/unlike posts
- view a feed of new posts via pagination
- view their own and other's profiles

The frontend was made with HTML and CSS. The backend was made
in PHP. I used MongoDB as the NoSQL database. The website and 
database were hosted on an AWS EC2 instance and deployed via 
AWS Cloudfront CDN. I demonstrated the usage of the CRUD
system with around 10 users using the site regularly over
1 month.

## <ins>Tumor Ultrasound Semi-Supervised Segmentation</ins>
[***GitHub Repo***](https://github.com/avzaman/UltrasoundDiffusion)<br>
This was my senior capstone project to graduate from Kean University
for my bachelor's degree in computer science. I created a computer
vision pipeline under the advisement of Doctor Kuan Huang. The
project plugged 3 major machine learning components together:
1. Diffusion model trained to generate tumor ultrasounds.
2. Image segmentation model trained using real and generated tumor 
    ultrasounds via the "mean teacher method" to locate tumors.
3. Classification model to detect if tumors are cancerous or not.

The crux of the project was to improve image segmentation using 
the synthetic ultrasounds. To increase performance I used different
optimizers and tuned hyperparameter across 1000s of runs. All training
and benchmarking was automated using python scripts optimized for
NVIDIA GPU hardware. I benchmarked against different pre-trained
models using IOU and F1 scores.

## <ins>Utility Disparity Analysis</ins>
[***GitHub Repo***](https://github.com/avzaman/UtilityRateDisparity)<br>
Through high acedemic standing I was afforded the opportunity to
conduct National Science Foundation (NSF) grant funded research
under my professor, Doctor Chin-Yu Huang. Over the course of several
month I performed data analysis on US Census data and US Utility Rates
data to uncover any patterns across millions of records. I used statistical 
discovery methods such as z-score normalization, Chi-square tests, 
and correlation. I also used machine learning methods such as clustering 
(k-nearest neighbor) and linear regression classification. All tests were 
conducted using popular python libraries such as sklearn, numpy, 
and pandas. Additionally, I used python to create impactful visualizations 
like geoplots, heatmaps, and scatterplots.

With this project I won 3rd place in the Math and Science Research poster
presentation competition at the Great Minds in STEM conference 2024.


## <ins>Parallelized Sorting Algorithms</ins>
[***GitHub Repo***](https://github.com/avzaman/ParallelSorting)<br>
My first independent research endeavor at Kean University was 
to coonduct a simple research project on the new HPC system the school 
had purchased. I chose to work on parallelizing algorithms familiar 
to me and other students for demonstration purposes. Sorting algorithms 
are well known and covered early in the curriculum, so seeing 
merge-sort and quick-sort implemented in parallel would be a handy 
tool to showcase what the CPU clusters could do. Using the C programming 
language kept performance tight and close to the hardware, and the 
divide-and-conquer approach to the algorithms made for seamless 
integration. Using cron jobs and bash scripts I generated benchmarks 
of sorting different sized arrays with different allocated cores, 
then supplied visualizations.
