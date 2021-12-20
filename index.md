---
layout: default
usemathjax: true
---

I'm a Research Resident at [VinAI Research](https://www.vinai.io/). I was mentored by [Dr. Yasin Abbasi-Yadkori](https://yasin-abbasi.github.io/), [Prof. Dinh Phung](https://research.monash.edu/en/persons/dinh-phung), and [Dr. Tung Pham](https://scholar.google.com.au/citations?user=KcUuEKsAAAAJ&hl=en). I received my B.Eng from [Hanoi University of Science and Technology](https://en.hust.edu.vn/), working with [Prof. Mai Nguyen Thi Phuong](https://sme.hust.edu.vn/en/officer/pgs-ts-nguyen-thi-phuong-mai.html)

My research interests lie between Reinforcement Learning (RL) and Transfer Learning. I want to advance our understanding of how to incorporate either humans’ knowledge or pre-discovered statistics to solve Sequential Decision Problems effectively. To realize this goal, I approach the problem on multiple fronts: Active Learning and Domain Adaptation to find and transfer necessary information, and Bandit Meta-Learning to plan adaptively. Then, I want to apply what I learn to solve practical problems such as increasing the data efficiency of RL to solve complex Robotics tasks.

# Biography

{% 
assign biography = "
Jul. 2019 – Present | Research Resident at VinAI Research
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

Bandit Meta-Learning with a Small Set of Optimal Arms |
Yasin Abbasi Yadkori, __Thang Duong__, Claire Vernade, András György|
*Under submission for ICML 2022* |
pdfs/Meta_Bandit.pdf
---
Deep regression for precise geometric dimension measurement |
__Thang Duong Nhat__, Binh Nguyen Duc, Phuong Le Khac, Ngoc Tu Nguyen, Mai Nguyen Thi Phuong |
*J. Korean Soc. Precis. Eng., Vol. 36, No. 8, pp. 683-690, 2019. [DOI](https://doi.org/10.7736/KSPE.2019.36.8.683)* |
pdfs/PRISM19.pdf
---
Analyzing seismic signal using Support Vector Machine for vehicle motion detection |
__Duong Nhat Thang__, Nguyen Thi Phuong Mai |
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
