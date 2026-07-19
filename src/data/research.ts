export interface ResearchPaper {
  id: string
  title: string
  authors: string
  journal: string
  year: string
  doi?: string
  abstract: string
  fullText?: string
  image: string
}

export const researchPapers: ResearchPaper[] = [
  {
    id: 'paper-1',
    title:
      'Exploring the Synergy of Automation, Machine Learning, and Embedded Systems: Components, Applications, and Future Trends',
    authors: 'Gokul D',
    journal: 'IJPREMS – International Journal of Progressive Research in Engineering Management and Science',
    year: '2025',
    abstract:
      'This research explores the convergence of Automation, Machine Learning, and Embedded Systems and their role in developing intelligent engineering solutions. The paper discusses the core components of embedded platforms, modern automation technologies, AI-driven decision-making, and machine learning techniques that enable smart devices across industrial automation, healthcare, transportation, smart cities, robotics, and IoT applications. It also highlights the growing importance of edge computing, real-time embedded intelligence, and cloud-integrated systems while examining current challenges such as computational limitations, cybersecurity, scalability, and power efficiency. Finally, the paper presents future trends including TinyML, autonomous embedded systems, Industry 5.0, AI-powered robotics, and next-generation intelligent devices, providing insights into how these technologies are shaping the future of engineering and embedded innovation.',

    fullText:
      'Published in IJPREMS (2025). The complete research paper is available through the journal publication.',

    image: '/research/automation-ml-embedded.jpg',
  },
]