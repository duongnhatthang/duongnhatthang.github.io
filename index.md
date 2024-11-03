---
layout: default
usemathjax: true
---

Hello! I'm a PhD student at the [Computer Science Department, the University of Arizona](https://www.cs.arizona.edu/) From 2019 to 2022, I was a Research Resident at [VinAI Research](https://www.vinai.io/), mentored by [Dr. Yasin Abbasi-Yadkori](https://yasin-abbasi.github.io/), [Prof. Dinh Phung](https://research.monash.edu/en/persons/dinh-phung), and [Dr. Tung Pham](https://scholar.google.com.au/citations?user=KcUuEKsAAAAJ&hl=en). I received my B.Eng from [Hanoi University of Science and Technology](https://en.hust.edu.vn/), working with [Prof. Mai Nguyen Thi Phuong](https://sme.hust.edu.vn/en/officer/pgs-ts-nguyen-thi-phuong-mai.html)

You can reach me by email at thangduong (at) arizona dot edu.

My research interests lie in Reinforcement Learning (RL), Representation Learning, and Meta Learning. I want to advance our understanding of how to incorporate either human knowledge or pre-discovered statistics to solve Sequential Decision Problems more effectively. To realize this goal, I approach the problem on multiple fronts: finding and transferring shared information (found by Active Learning, Domain Adaptation, or shared representation) and Bandit Meta-Learning to plan adaptively. Then, I want to apply what I have learned to solve practical problems, such as increasing the data efficiency of RL to solve complex robotics tasks.

# Biography

{% 
assign biography = "
Aug. 2022 – Present | PhD student at the University of Arizona
---
Jul. 2019 – Jun. 2022 | Research Resident at VinAI Research
---
May. 2018 – Jun. 2019 | AI Team leader & Scrum master at NAL Vietnam JSC
---
Aug. 2015 – Jun. 2018 | Undergraduate at Hanoi University of Science and Technology
---
Jun. 2016 – Aug. 2016 | Research internship at National Chung Cheng University
---
Jun. 2015 – Aug. 2015 | Research internship at Sun Moon University

" | split: '---' 
%}

{% for milestone in biography %}
{% assign milestone_arr = milestone | strip | split: "|" %}
__<span> {{ milestone_arr[0] | strip }} </span>__ : *{{ milestone_arr[1] | strip}}*
{% endfor %}

# Publications

{% 
assign publications = "

Beyond task diversity: Provable representation transfer for sequential multi-task linear bandits |
__Thang Duong__, Zhi Wang, Chicheng Zhang|
[NeuRIPS 2024](https://neurips.cc/virtual/2024/poster/96798)|
pdfs/neurips24.pdf
---
Non-stationary Bandits and Meta-Learning with a Small Set of Optimal Arms |
MJ Azizi, __Thang Duong__, Yasin Abbasi-Yadkori, András György, Claire Vernade, M. Ghavamzadeh|
[RLC 2024 Conference](https://arxiv.org/abs/2202.13001)|
pdfs/Meta_Bandit.pdf
---
Association Of Mri-defined Structure Features At Baseline With Knee Pain Trajectories |
S. Liu, X. Sun, Y. Ge, __Thang Duong__, C.K. Kwoh|
[ACR Convergence 2024](https://www.sciencedirect.com/science/article/pii/S2772654124000151)|
pdfs/arc24.pdf
---
Deep regression for precise geometric dimension measurement |
__Thang Duong__, Binh Nguyen Duc, Phuong Le Khac, Ngoc Tu Nguyen, Mai Nguyen Thi Phuong |
*J. Korean Soc. Precis. Eng., Vol. 36, No. 8, pp. 683-690, 2019. [DOI](https://doi.org/10.7736/KSPE.2019.36.8.683)* |
pdfs/PRISM19.pdf
---
Analyzing seismic signal using Support Vector Machine for vehicle motion detection |
__Thang Duong__, Nguyen Thi Phuong Mai |
*J. Industrial networks and intelligent systems; 2019* |
pdfs/INISCOM18.pdf

" | split: '---' 
%}


{% for pub in publications %}
{% assign pub_arr = pub | strip | split: "|" %}
__<span style='font-size: 20px'> {{ pub_arr[0] | strip }} </span>__ <br> *{{ pub_arr[1] | strip}}* <br> {{ pub_arr[2] | strip}} - [PDF]({{ pub_arr[3] | strip }})<br>
{% endfor %}


<!-- 
# Awards

__Excellence scholarship for the academic year of 2018 − 2019__ <br>
*Granted for top 1% students with highest CPA of School of Information and Communication Technology, HUST*

# Mentors
- [Viet-Anh Nguyen](https://vietanhnguyen.net)
- [Toan Tran](https://researchers.adelaide.edu.au/profile/toan.m.tran)
- [Khoat Than](https://scholar.google.com.vn/citations?user=z2_6ZRYAAAAJ) 


# Collaborators
- [Man-Chung Yue](https://manchungyue.com/)
- [Gustavo Carneiro](https://cs.adelaide.edu.au/~carneiro/)
- [Xuan Bui](https://scholar.google.com.vn/citations?user=DSLkmeUAAAAJ) -->
