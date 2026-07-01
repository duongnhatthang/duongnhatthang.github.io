// Full publications list (reverse chronological). Facts only.

export interface Publication {
  title: string;
  authors: string; // **Thang Duong** is bolded by the component
  venue: string;
  year: number;
  status?: "under-review";
  links?: { label: string; url: string }[];
}

export const publications: Publication[] = [
  {
    title:
      "Beyond Task Diversity: Provable Representation Transfer for Sequential Multi-Task Linear Bandits",
    authors: "Thang Duong, Zhi Wang, Chicheng Zhang",
    venue: "NeurIPS",
    year: 2024,
    links: [
      { label: "PDF", url: "/pdfs/neurips24.pdf" },
      { label: "arXiv", url: "https://arxiv.org/abs/2501.13390" },
      { label: "Code", url: "https://github.com/duongnhatthang/BOSS" },
    ],
  },
  {
    title:
      "Physics-Informed Parametric Bandits for Beam Alignment in mmWave Communications",
    authors: "Hao Qin*, Thang Duong*, Ming F. Li, Chicheng Zhang",
    venue: "WiOpt",
    year: 2026,
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2510.18299" }],
  },
  {
    title: "Sample-Efficient Reinforcement Learning by Warm-Starting with LLMs",
    authors: "Thang Duong, et al.",
    venue: "",
    year: 2026,
    status: "under-review",
  },
  {
    title:
      "Efficient Algorithms for Lifelong Representation Learning in Linear Bandits Beyond Task Diversity",
    authors: "Thang Duong, et al.",
    venue: "",
    year: 2026,
    status: "under-review",
  },
  {
    title:
      "Non-stationary Bandits and Meta-Learning with a Small Set of Optimal Arms",
    authors:
      "MJ Azizi, Thang Duong, Yasin Abbasi-Yadkori, András György, Claire Vernade, M. Ghavamzadeh",
    venue: "RLC",
    year: 2024,
    links: [
      { label: "PDF", url: "/pdfs/Meta_Bandit.pdf" },
      { label: "arXiv", url: "https://arxiv.org/abs/2202.13001" },
      { label: "Code", url: "https://github.com/duongnhatthang/meta-bandit" },
    ],
  },
  {
    title:
      "Association of MRI-defined Structure Features at Baseline with Knee Pain Trajectories",
    authors: "S. Liu, X. Sun, Y. Ge, Thang Duong, C.K. Kwoh",
    venue: "ACR Convergence",
    year: 2024,
    links: [
      {
        label: "Link",
        url: "https://www.sciencedirect.com/science/article/pii/S2772654124000151",
      },
    ],
  },
  {
    title: "Deep Regression for Precise Geometric Dimension Measurement",
    authors:
      "Thang Duong, Binh Nguyen Duc, Phuong Le Khac, Ngoc Tu Nguyen, Mai Nguyen Thi Phuong",
    venue: "J. Korean Soc. Precis. Eng.",
    year: 2019,
    links: [
      { label: "PDF", url: "/pdfs/PRISM19.pdf" },
      { label: "DOI", url: "https://doi.org/10.7736/KSPE.2019.36.8.683" },
    ],
  },
  {
    title:
      "Analyzing Seismic Signal using Support Vector Machine for Vehicle Motion Detection",
    authors: "Thang Duong, Nguyen Thi Phuong Mai",
    venue: "J. Industrial Networks and Intelligent Systems",
    year: 2019,
    links: [{ label: "PDF", url: "/pdfs/INISCOM18.pdf" }],
  },
];
