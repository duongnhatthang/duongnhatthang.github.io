---
title: Non-stationary Bandits and Meta-Learning with a Small Set of Optimal Arms
layout: post
usemathjax: true
type: article
status: RLC 2024 Conference
categories: 
    - bandit
    - meta-learning
    - reinforcement learning
---

We study a meta-learning problem where the learner faces a sequence of _N_ multi-armed bandit tasks. Each task is a _K_-armed bandit problem of horizon _T_ that may be designed by an adversary, but the adversary is constrained to choose the optimal arm of each task in a smaller (but unknown) subset of _M_ arms. An effective strategy is expected to learn the common structure and exploit this knowledge in solving the future tasks. We show an algorithm with a worst-case regret bounded as $$\widetilde O(N\sqrt{MT} + T\sqrt{K M N})$$. We also show that at the cost of an extra $$O(\log(N))$$ term, the problem can be solved in a computationally efficient way. 

Read more: [here]({{ site.baseurl }}/pdfs/Meta_Bandit.pdf)
