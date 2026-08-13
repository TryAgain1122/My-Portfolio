export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  category: "Networking" | "Programming" | "Cybersecurity" | "DevOps" | "Award";
  file: string;
  /** Featured certificates get a highlighted treatment. */
  featured?: boolean;
}

export const certificates: Certificate[] = [
  {
    title: "DevNet Associate",
    issuer: "Cisco Networking Academy",
    date: "Apr 2023",
    category: "DevOps",
    file: "/certificates/devnet-associate.pdf",
    featured: true,
  },
  {
    title: "Academy Excellence Award — Model Driven Programmability",
    issuer: "Cisco Networking Academy",
    date: "Aug 2023",
    category: "Award",
    file: "/certificates/academy-excellence-award.pdf",
    featured: true,
  },
  {
    title: "CCNAv7: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    date: "Dec 2022",
    category: "Networking",
    file: "/certificates/ccna-enterprise-networking-security-automation.pdf",
  },
  {
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "Jul 2022",
    category: "Networking",
    file: "/certificates/ccna-switching-routing-wireless-essentials.pdf",
  },
  {
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "Apr 2022",
    category: "Networking",
    file: "/certificates/ccna-introduction-to-networks.pdf",
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "Apr 2023",
    category: "Cybersecurity",
    file: "/certificates/cybersecurity-essentials.pdf",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Nov 2022",
    category: "Cybersecurity",
    file: "/certificates/introduction-to-cybersecurity.pdf",
  },
  {
    title: "PCAP — Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    date: "Aug 2023",
    category: "Programming",
    file: "/certificates/pcap-programming-essentials-python.pdf",
  },
  {
    title: "JavaScript Essentials 1 (JSE)",
    issuer: "Cisco Networking Academy",
    date: "Aug 2023",
    category: "Programming",
    file: "/certificates/javascript-essentials-1.pdf",
  },
  {
    title: "CPP — Advanced Programming in C++",
    issuer: "Cisco Networking Academy",
    date: "Apr 2022",
    category: "Programming",
    file: "/certificates/cpp-advanced-programming-cpp.pdf",
  },
  {
    title: "CPA — Programming Essentials in C++",
    issuer: "Cisco Networking Academy",
    date: "Dec 2021",
    category: "Programming",
    file: "/certificates/cpa-programming-essentials-cpp.pdf",
  },
  {
    title: "Java Programming NC III",
    issuer: "TESDA / Joysis Training Center",
    date: "2025",
    category: "Programming",
    file: "/certificates/joysis/java_programming_nc3.pdf",
    featured: true,
  },
  {
    title: "SIL Alpha — Certificate of Completion",
    issuer: "TESDA / Joysis Training Center",
    date: "2025",
    category: "Programming",
    file: "/certificates/joysis/LUIS SIL ALPHA.pdf",
  },
  {
    title: "Best in Attendance",
    issuer: "Joysis Training Center",
    date: "2025",
    category: "Award",
    file: "/certificates/joysis/Best in attendance.png",
  },
  {
    title: "Best in Participation",
    issuer: "Joysis Training Center",
    date: "2025",
    category: "Award",
    file: "/certificates/joysis/Best in participation.png",
  },
  {
    title: "Top 2 — Java Programming NC III",
    issuer: "Joysis Training Center",
    date: "2025",
    category: "Award",
    file: "/certificates/joysis/top 2.png",
  },
];
