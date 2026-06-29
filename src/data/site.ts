// Single source of truth for the site's content.
// Facts only — drawn from the resume, public repos, and arXiv. No fabrication.

export const profile = {
  name: "Thang Duong",
  role: "PhD Candidate, Computer Science — University of Arizona",
  status:
    "Expected Dec 2026 · Advisor: Prof. Chicheng Zhang · Seeking industry research / applied-science roles",
  // Short, industry-framed value proposition (2–4 lines).
  tagline:
    "I build sample-efficient learning algorithms — reinforcement learning, multi-armed bandits, and LLM reasoning — that turn theory into real benchmark wins.",
  location: "Tucson, AZ (open to relocation, US)",
  headshot: "/images/profile.jpg",
  links: {
    email: "thangduong@arizona.edu",
    resume: "/pdfs/Thang_Duong_Resume.pdf",
    scholar: "https://scholar.google.com/citations?user=4UjiRMYAAAAJ&hl=en",
    github: "https://github.com/duongnhatthang",
    linkedin: "https://www.linkedin.com/in/duong-thang",
  },
};

export const badges = [
  "NeurIPS 2024 first author",
  "2× regret reduction on real mmWave benchmarks",
  "3× faster RL convergence via LLM warm-start",
];

export const about = [
  "I'm a final-year CS PhD candidate at the University of Arizona, advised by Prof. Chicheng Zhang. My research makes sequential decision-making more sample-efficient by injecting structure — shared representations, domain physics, or LLM priors — into reinforcement learning and bandit algorithms.",
  "I work across the full stack of research: provable guarantees (a NeurIPS 2024 first-author result), real-benchmark gains (2× regret reduction on mmWave beam alignment), and reproducible systems (modular evaluation suites, large-scale experiments on H100 GPUs). Before my PhD I did industry research at Qualcomm (formerly VinAI Research).",
  "I'm now looking for industry research and applied-science roles where this transfers directly — RL for LLMs (post-training, reasoning, RLHF), recommendation and personalization, and adaptive experimentation.",
];

export type ResearchStatus = "published" | "under-review";

export interface ResearchItem {
  title: string;
  venue: string;
  status: ResearchStatus;
  authorLine: string;
  /** Impact stated FIRST — industry-employer framing. */
  impact: string;
  blurb: string;
  links?: { label: string; url: string }[];
  /** Real result figures (public works only). */
  figures?: { src: string; caption: string }[];
}

export const research: ResearchItem[] = [
  {
    title:
      "Beyond Task Diversity: Provable Representation Transfer for Sequential Multi-Task Linear Bandits",
    venue: "NeurIPS 2024",
    status: "published",
    authorLine: "Thang Duong, Zhi Wang, Chicheng Zhang",
    impact:
      "First provable method to transfer a shared low-rank representation across a stream of bandit tasks WITHOUT the standard task-diversity assumption — making lifelong bandit transfer applicable to real-world task streams.",
    blurb:
      "We develop an algorithm (BOSS) that learns and transfers a low-rank representation on the fly and prove a regret guarantee under the ellipsoid action-set setting, where prior work required tasks to uniformly span the subspace.",
    links: [
      { label: "PDF", url: "/pdfs/neurips24.pdf" },
      { label: "arXiv", url: "https://arxiv.org/abs/2501.13390" },
      { label: "Code", url: "https://github.com/duongnhatthang/BOSS" },
      { label: "BibTeX", url: "#bibtex-neurips24" },
    ],
    figures: [
      {
        src: "/figures/neurips_regret_tasks.png",
        caption: "Meta-regret accumulated across the sequence of tasks.",
      },
      {
        src: "/figures/neurips_regret_T.png",
        caption: "Average regret over the horizon T, across tasks.",
      },
    ],
  },
  {
    title:
      "Physics-Informed Parametric Bandits for Beam Alignment in mmWave Communications",
    venue: "WiOpt 2026",
    status: "published",
    authorLine: "Hao Qin*, Thang Duong*, Ming F. Li, Chicheng Zhang",
    impact:
      "2× reduction in beam-alignment regret on the real-world DeepMIMO and DeepSense6G benchmarks — robust where unimodality/multimodality assumptions break.",
    blurb:
      "We cast mmWave beam alignment as a parametric bandit tied to the Phase-Retrieval structure of the channel and design two algorithms (PR-ETC, PR-GREEDY) that exploit sparse multipath structure without restrictive assumptions on the reward function.",
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2510.18299" }],
  },
  {
    title: "Sample-Efficient Reinforcement Learning by Warm-Starting with LLMs",
    venue: "Under review (UAI 2026)",
    status: "under-review",
    authorLine: "Thang Duong, et al.",
    impact:
      "Up to 3× faster convergence on OpenAI Gym by using an LLM's in-context decisions to collect warm-start data for any off-the-shelf RL algorithm.",
    blurb:
      "When no offline dataset exists, we use an LLM to collect a small dataset that covers a good policy, then warm-start RL — combining low cumulative regret with high sample efficiency. (Details and code available upon publication.)",
  },
  {
    title:
      "Efficient Algorithms for Lifelong Representation Learning in Linear Bandits Beyond Task Diversity",
    venue: "Under review (ICML)",
    status: "under-review",
    authorLine: "Thang Duong, et al.",
    impact:
      "A computationally efficient algorithm (BRESS) that drops the task-diversity assumption AND stays polynomial-time, via a black-box reduction to online PCA — with adversarial robustness.",
    blurb:
      "By reducing sequential multi-task linear bandits to online principal component analysis, any low-competitive-ratio online-PCA subroutine yields low meta-regret. (Details available upon publication.)",
  },
  {
    title:
      "Non-stationary Bandits and Meta-Learning with a Small Set of Optimal Arms",
    venue: "RLC 2024",
    status: "published",
    authorLine:
      "MJ Azizi, Thang Duong, Yasin Abbasi-Yadkori, András György, Claire Vernade, M. Ghavamzadeh",
    impact:
      "Meta-learns across a sequence of bandit tasks whose optimal arms lie in a small unknown subset, beating the naive Õ(√(KNT)) baseline.",
    blurb:
      "Via a reduction to bandit submodular maximization, the algorithm exploits shared optimal-arm structure across tasks in both the meta-learning and non-stationary settings.",
    links: [
      { label: "PDF", url: "/pdfs/Meta_Bandit.pdf" },
      { label: "arXiv", url: "https://arxiv.org/abs/2202.13001" },
      { label: "Code", url: "https://github.com/duongnhatthang/meta-bandit" },
    ],
    figures: [
      {
        src: "/figures/rlc_tasks.png",
        caption: "Regret on the task (meta-learning) experiment.",
      },
      {
        src: "/figures/rlc_subset.png",
        caption: "Regret on the optimal-arm subset experiment.",
      },
    ],
  },
];

export const bibtex = {
  neurips24: `@article{duong2024beyond,
  title   = {Beyond task diversity: provable representation transfer for sequential multitask linear bandits},
  author  = {Duong, Thang and Wang, Zhi and Zhang, Chicheng},
  journal = {Advances in Neural Information Processing Systems},
  volume  = {37},
  pages   = {37791--37822},
  year    = {2024}
}`,
};

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  location: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Graduate Research Assistant",
    org: "University of Arizona",
    period: "Aug 2022 – Present",
    location: "Tucson, AZ",
    points: [
      "Proved a regret guarantee that eliminates the task-diversity assumption for sequential multi-task representation transfer in bandits (NeurIPS 2024, first author).",
      "Cut beam-alignment regret 2× on the DeepMIMO and DeepSense6G benchmarks with physics-informed bandit algorithms (cross-team with Prof. Ming Li's ECE lab).",
      "Achieved 3× faster convergence on OpenAI Gym via a novel RL warm-start pipeline using LLM-collected demonstrations; built a modular evaluation suite + release scripts for large-scale H100 experiments; mentored one undergraduate.",
    ],
  },
  {
    role: "Visiting Student",
    org: "Toyota Technological Institute at Chicago (TTIC)",
    period: "May 2025 – Aug 2025",
    location: "Chicago, IL",
    points: [
      "Studied Process Reward Models (PRMs) for LLM reasoning by framing them within the Actor-Critic framework, toward provably improving PRM-guided search-based policies (with Prof. Chicheng Zhang et al.).",
    ],
  },
  {
    role: "Research Resident",
    org: "Qualcomm (formerly VinAI Research)",
    period: "Dec 2019 – Jun 2022",
    location: "Hanoi, Vietnam",
    points: [
      "Bandit meta-learning: built a modular multi-task bandit codebase leveraging shared structure, with improved sample efficiency across a full experiment suite (RLC 2024). Mentored by Yasin Abbasi-Yadkori, Dinh Phung, and Tung Pham.",
      "Prototyped active-learning strategies for domain adaptation and model warm-starting.",
      "Investigated Sim-to-Real transfer with a proof-of-concept domain-adaptation method in the CARLA simulator.",
    ],
  },
  {
    role: "AI Team Leader, Scrum Master",
    org: "NAL Vietnam JSC",
    period: "May 2018 – Jun 2019",
    location: "Hanoi, Vietnam",
    points: [
      "Integrated NLP models (intent classification, entity recognition) into Chatops, a commercial business chat interface.",
      "Led a team of six to deploy facial-recognition models for a parent–child matching product across six kindergarten locations.",
    ],
  },
];

export const education = [
  {
    degree: "Ph.D. in Computer Science",
    org: "University of Arizona",
    period: "2022 – exp. Dec 2026",
    note: "Advisor: Prof. Chicheng Zhang. Focus: high-dimensional interactive learning with domain-specific inductive biases.",
  },
  {
    degree: "B.Eng. in Mechatronics Engineering (Advanced Program)",
    org: "Hanoi University of Science and Technology",
    period: "2012 – 2018",
    note: "",
  },
];

export const skills = {
  Research: [
    "Reinforcement Learning",
    "Multi-armed Bandits",
    "Online Learning",
    "Representation / Transfer Learning",
    "Meta-learning",
    "LLM reasoning (RLHF / PRM)",
    "Statistics & Optimization",
  ],
  Engineering: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "HuggingFace / Transformers",
    "RLlib",
    "OpenAI Gym",
    "CUDA",
    "Docker / Linux / Git",
  ],
};
