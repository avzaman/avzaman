---
layout: base.njk
title: Project
---
## <ins>Minimal Quantum Grover's Algorithm Simulator </ins>
[***Github Repo***]()
In my first semester \(Spring 2026\) at Rutgers I studied Quantum Computers under Dr.Yipeng Huang. This project was completed over the course of that semester. I explored Grover's algroithm implications on cybersecurity and implemented a small version of AES to simulate Grover's itterations on. The simulator uses qiskit in python and the mini AES was designed to use 4 bit keys instead of 128. 

## <ins>BeamCannon a Beamcraft Extension</ins>
[***Github Repo***](https://github.com/avzaman/BeamCannon)
[***Beamcraft Paper***](https://dl.acm.org/doi/10.1145/3636534.3690669)<br>
This project was to explore a vulnerability in the beamforming protocol used to establish MIMO connections in comodity WiFi routers. Due to the protocol being in plaintext it is easy for an attacker to inject packets with false channel information causing APs to steer beams in the opposite direction of a client device causeing severly hindered throughput. I successfully reimplemented SU-MIMO attack, the MU-MIMO attack is still being explored. The goal is to create a software that can generalize the attack to be "plug and play" and hardware agnostic.

## <ins>Networking Home Lab</ins>
[***Blog Post***](/pages/blog/)<br>
Fueled by my curiosity of how other layers of the network handle the information I'm transferring in my applications, I've been crafting a home lab with a few old refurbished switches, a firewall, and a few endpoints.  
Experimenting with security features and scalability, I've been learning a lot in preparation for the CCNA exam.

## <ins>"V" Social Media Site Clone of X (Formerly Twitter)</ins>
[***GitHub Repo***](https://github.com/avzaman/AvzamanSocial)<br>
For an independent study on NoSQL databases, I decided to create a project to back (and track haha) my knowledge.  
With the focus being on getting used to CRUD and system design, I used a web scripting language I am mostly familiar with: PHP.  
Contrary to popular belief, PHP is still quite powerful and bridges web-based languages from Java better than JavaScript does (which is weird — it's in the name, isn't it?).  
Either way, I made a Twitter clone; the main missing core feature is the ability to follow and unfollow people, tailoring the user experience.  
However, throughout the project I got to learn about web design, NoSQL, and AWS deployments.

## <ins>Tumor Ultrasound Semi-Supervised Segmentation</ins>
[***GitHub Repo***](https://github.com/avzaman/UltrasoundDiffusion)<br>
For my graduating project in my last semester at Kean University, I worked with my professor Kuan Huang to develop a more efficient method for segmenting tumors in ultrasound images.  
Tumors need to be segmented because the shape and size of tumors can expedite diagnosis!  
The problem is there is so little labeled data. So what we did to resolve this was use the Mean Teacher training method.  
This method is semi-supervised instead of fully supervised, meaning not all the images need labels. It uses two models, a student and a teacher, where the teacher is trained with labeled data and guides the learning of the student model.  
Now, where do we get our unlabeled images? Diffusion. I used the Medifusion project (found in the GitHub summary of this project) to create synthetic ultrasound data!

## <ins>Utility Disparity Analysis</ins>
[***GitHub Repo***](https://github.com/avzaman/UtilityRateDisparity)<br>
This is a National Science Foundation (NSF) funded research project I worked on and presented at the Great Minds in STEM (GMiS) conference, where I won 3rd place in the Math Sciences Research competition.  
It is a detailed analysis of not only the most recent (and albeit thin) utility rate data, but also how it compares to U.S. Census data such as income and demographics.  
I worked to uncover unusual patterns by normalizing, visualizing, and correlating the datasets using Python-based tools.

## <ins>Parallelized Sorting Algorithms</ins>
[***GitHub Repo***](https://github.com/avzaman/ParallelSorting)<br>
My first independent research endeavor at Kean University was to supply an initial project on the new HPC system the school had purchased.  
I worked on parallelizing algorithms familiar to me and other students for demonstration purposes.  
Sorting algorithms are well known and covered early in the curriculum, so seeing merge-sort and quick-sort implemented in parallel would be a handy tool to showcase what the CPU clusters could do.  
Using the C programming language kept performance tight and close to the hardware, and the divide-and-conquer approach to the algorithms made for seamless integration.  
Using cron jobs, I generated benchmarks of sorting different sized arrays with different allocated cores, then supplied visualizations (viewable on the GitHub page).

## <ins>Advent of Code</ins>
[***GitHub Repo***](https://github.com/avzaman/AdventOfCode)<br>
[***Website***](https://adventofcode.com/)<br>
Advent of Code comes about every year in December. From December 1st to the 25th, there are 2 coding challenges (similar to a LeetCode problem) every day that ask you to compute an output for a given input.  
Usually the inputs are far too large to solve by hand, but as long as you get your unique generated output, you pass!  
I use this time to learn a new technology and just have fun with a different format of programming challenges that isn't LeetCode or HackerRank.  
Sometimes I optimize algorithms, sometimes I "optimize" by overclocking my computer, or forcing GPU operations with CUDA.  
Either way, it's a fun time of year for programmers and I *implore others to join*!
