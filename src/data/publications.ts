export type Publication = {
  authors: string;
  title: string;
  venue: string;
  note?: string;
  links?: { label: string; href: string }[];
};

export const publications: Publication[] = [
  {
    authors:
      "Sang-Woo Son, Hyeong-seob Kim*, Hyeonsang Kim, Hyun-woo Cho, Jinmo Kim",
    title:
      "Retrieval-Conditional Parsing Score (RCPS): Choosing Document Parsers by Retrieval, Not by Appearance",
    venue: "Accepted to EMNLP 2026 Industry Track.",
    note: "* Corresponding author",
  },
  {
    authors:
      "Hyeong-seob Kim, Sang-Woo Son, Hyun-woo Cho, Hyeonsang Kim, Jinmo Kim",
    title:
      "WIGVO: Real-Time Bidirectional Speech Translation over Legacy PSTN Calls via Dual-Session Echo Gating",
    venue: "In Proceedings of ACL 2026 System Demonstrations.",
    links: [
      { label: "Paper", href: "https://aclanthology.org/2026.acl-demo.33/" },
      { label: "Video", href: "https://youtu.be/jK1CDOQExLw" },
    ],
  },
];
