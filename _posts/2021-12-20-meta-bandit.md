---
title: Bandit Meta-Learning with a Small Set of Optimal Arms
layout: post
usemathjax: true
type: article
status: Under submission for ICML 2022
categories: 
    - bandit
    - meta-learning
    - reinforcement learning
---

We study a meta-learning problem where the learner faces a sequence of N multiarmed bandit tasks. Each task is a K-armed bandit problem of horizon T that may
be designed by an adversary, but the adversary is constrained to choose the optimal
arm of each task in a smaller (but unknown) subset of M arms. An effective
strategy is expected to learn the common structure and exploit this knowledge in
solving the future tasks. We show an algorithm with a worst-case regret bounded
as Oe(NpMT + T pKMN). We also show that at the cost of an extra O(log(N))
term, the problem can be solved in a computationally efficient way.

Read more: [here]({{ site.baseurl }}/pdfs/Meta_Bandit.pdf)