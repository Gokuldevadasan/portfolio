export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  year: string
}

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Datascape HackathonTop 23/1200 Hackathon Finalist',
    description:
      'Ranked among the top 23 teams out of 1200+ participants in a Indias first Data science national-level hackathon, demonstrating innovative problem-solving and technical excellence at panimalar college ,chennai',
    icon: '🏆',
    year: 'Jan 2026',
  },
  {
    id: 'ach-2',
    title: 'Young High Flier Award',
    description:
      'Recognized for outstanding academic performance and leadership potential in the field of electronics and communication engineering.',
    icon: '⭐',
    year: 'Mar 2025',
  },
  {
    id: 'ach-3',
    title: 'Research Publication',
    description:
      'IJPREMS Journal (2025): Exploring the Synergy of Automation, Machine Learning, and Embedded Systems: Components, Applications, and Future Trends',
    icon: '📄',
    year: '2025',
  },
  {
    id: 'ach-4',
    title: 'PCB Design Workshop (3-Day)',
    description:
      'Participated in a 3-day workshop on PCB design, gaining hands-on experience with design tools and manufacturing processes.',
    icon: '💻',
    year: '2025',
  },
  {
    id: 'ach-4',
    title: 'Turtle BOT3 ROS Workshop (3-Day)',
    description:
      'Participated in a 3-day workshop on Turtle BOT3 ROS, gaining hands-on experience with robotics development and programming.',
    icon: '💻',
    year: '2024',
  }
]

export const leadershipPoints = [
  {
    title: 'Project Leadership',
    description:
      'Led 6+ technical projects from conception to deployment, managing teams of 3-5 members across embedded systems, IoT, and AI domains.',
  },
  {
    title: 'Hardware Engineering',
    description:
      'Designed and prototyped custom PCBs, sensor arrays, and embedded hardware for real-world applications.',
  },
  {
    title: 'Team Management',
    description:
      'Coordinated cross-functional teams, managed project timelines, and ensured successful delivery of milestones.',
  },
  {
    title: 'Problem Solving',
    description:
      'Consistently solved complex technical challenges in embedded systems, firmware optimization, and system integration.',
  },
]
