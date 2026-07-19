export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  fullDescription: string
  image: string
  techStack: string[]
  features: string[]
  challenges: string[]
  achievements: string[]
  timeline: string
  role: string
  github: string
  liveDemo?: string
  category: string
}

export const projects: Project[] = [
  {
    id: 'air',
    title: 'AIR',
    tagline: 'Intelligent Classroom Assistant Using IoT and Cloud Technology',
    description:
      'An IoT-based smart classroom assistant that automates attendance, timetable management, announcements, and classroom interactions using ESP32-CAM and Firebase.',
    fullDescription:
      'AIR is an intelligent classroom automation system built using ESP32-CAM, Firebase, and IoT technologies. It automates attendance using barcode scanning, displays live timetable updates on an LCD, provides voice announcements using DFPlayer Mini, and synchronizes classroom data with a cloud dashboard in real time. The project integrates hardware, embedded firmware, cloud databases, and web technologies to create a scalable smart classroom solution.',
    image: '/projects/air.jpg',
    techStack: [
      'ESP32-CAM',
      'Arduino IDE',
      'Embedded C/C++',
      'Firebase Firestore',
      'HTML',
      'CSS',
      'JavaScript',
      'HC-SR04 Ultrasonic Sensor',
      'Barcode Scanner',
      'I2C LCD',
      'DFPlayer Mini',
      'Wi-Fi',
      'IoT',
      'Cloud Computing',
    ],
    features: [
      'Automated barcode-based attendance system',
      'Real-time Firebase timetable synchronization',
      'Cloud-connected classroom dashboard',
      'Voice announcements using DFPlayer Mini',
      'LCD display for classroom information',
    ],
    challenges: [
      'Real-time synchronization between ESP32 and Firebase',
      'Reliable barcode scanning and attendance logging',
      'Hardware integration of multiple IoT peripherals',
    ],
    achievements: [
      'Reduced manual attendance time through automation',
      'Developed a centralized cloud-based classroom management platform',
      'Enabled real-time announcements and timetable updates',
      'Designed a scalable smart classroom prototype',
      'Strengthened expertise in IoT, Embedded Systems, Cloud Databases, and Web Development',
    ],
    timeline: 'May 2025 - Jul 2025',
    role: 'Project Leader & Embedded Systems Developer',
    github: 'https://github.com/Gokuldevadasan?tab=repositories',
    category: 'IoT & Embedded Systems',
  },
  {
    id: 'ampet',
    title: 'AMPET',
    tagline: 'AI-Based IoT Smart Energy Theft Detection and Real-Time Consumer–Feeder Power Monitoring System',
    description:
      'A dual-ESP32 smart energy monitoring system that detects electricity theft by comparing feeder and consumer power data in real time.',
    fullDescription:
      'AMPET is an IoT-based smart energy monitoring solution designed to detect electricity theft through real-time comparison of feeder and consumer electrical parameters. The system uses multiple sensors connected to ESP32 controllers, communicates wirelessly with a Flask web server, and visualizes live data through an interactive dashboard for smart grid monitoring.',
    image: '/projects/ampet.jpg',
    techStack: [
      'ESP32',
      'Embedded C',
      'Arduino IDE',
      'Python',
      'Flask',
      'HTML',
      'CSS',
      'JavaScript',
      'Wi-Fi',
      'REST API',
      'ACS712',
      'ZMPT101B',
      'SCT-013',
      'I2C LCD',
      'JSON',
    ],
    features: [
      'Dual ESP32 real-time monitoring system',
      'Voltage, current, power, and energy measurement',
      'Live web dashboard with Flask',
      'Power comparison algorithm for theft detection',
      'Wireless IoT communication',
    ],
    challenges: [
      'Accurate calibration of electrical sensors',
      'Reliable wireless communication between ESP32 devices',
      'Developing an efficient power comparison algorithm',
    ],
    achievements: [
      'Successfully developed a real-time energy monitoring prototype',
      'Implemented reliable electricity theft detection',
      'Built a responsive live monitoring dashboard',
      'Designed a scalable IoT solution for smart grids',
      'Enhanced expertise in Embedded Systems, IoT, Hardware Integration, and Full-Stack Development',
    ],
    timeline: 'May 2026 - Present',
    role: 'Project Leader & Embedded Systems Developer',
    github: 'https://github.com/Gokuldevadasan?tab=repositories',
    category: 'IoT',
  },
  {
    id: 'sensafe',
    title: 'SenSafe',
    tagline: 'Smart Wearable Women Safety System',
    description:
      'A wearable safety solution with BLE connectivity and intelligent emergency response using Flutter and ESP32.',
    fullDescription:
      'SenSafe is a smart wearable personal safety system designed for women and vulnerable users. It combines an ESP32-based wearable with a Flutter mobile application using Bluetooth Low Energy communication. The system supports manual emergency triggers, automatic danger detection using smartphone sensors, and intelligent SOS escalation.',
    image: '/projects/sensafe.jpg',
    techStack: [
      'ESP32',
      'Flutter',
      'Dart',
      'Bluetooth Low Energy (BLE)',
      'Arduino IDE',
      'Android Studio',
      'Shared Preferences',
      'Embedded C',
    ],
    features: [
      'BLE communication between wearable and mobile app',
      'Single-click Safe mode',
      'Double-click Danger mode',
      'Automatic SOS after inactivity',
      'Emergency contact management',
    ],
    challenges: [
      'Reliable BLE communication',
      'Accurate motion detection using smartphone sensors',
      'Minimizing emergency response delay',
    ],
    achievements: [
      'Developed a complete wearable-to-mobile safety prototype',
      'Reduced emergency response time using automatic SOS',
      'Created a scalable and affordable wearable safety solution',
      'Strengthened Flutter, BLE, Embedded Systems, and IoT skills',
      'Presented the project during technical innovation events',
    ],
    timeline: 'Jan 2026 - Feb 2026',
    role: 'Project Leader & Embedded Systems Developer',
    github: 'https://github.com/Gokuldevadasan?tab=repositories',
    category: 'Embedded Systems',
  },
  {
    id: 'sera',
    title: 'SERA',
    tagline: 'Smart Electronics Research Assistant (AI-Powered ECE Learning Assistant)',
    description:
      'An AI-powered Flutter application that assists Electronics and Communication Engineering students with technical learning and embedded systems development.',
    fullDescription:
      'SERA is an intelligent AI learning assistant built specifically for ECE students. It integrates modern large language models through OpenRouter APIs, providing instant explanations, embedded systems guidance, programming assistance, and circuit analysis inside a futuristic Flutter application with animations and customizable themes.',
    image: '/projects/sera.jpg',
    techStack: [
      'Flutter',
      'Dart',
      'OpenRouter API',
      'NVIDIA AI Models',
      'REST API',
      'JSON',
      'Shared Preferences',
      'HTTP',
      'Material UI',
    ],
    features: [
      'AI-powered technical assistant',
      'Modern animated Flutter interface',
      'Camera integration',
      'Chat history management',
      'Multiple AI model support',
    ],
    challenges: [
      'Integrating large language models efficiently',
      'Optimizing Flutter performance',
      'Designing an intuitive AI user experience',
    ],
    achievements: [
      'Developed a real-time AI learning assistant',
      'Created a scalable multi-model AI architecture',
      'Improved technical learning accessibility',
      'Strengthened Flutter, API Integration, and AI application development skills',
    ],
    timeline: 'Jul 2026 - Present',
    role: 'Project Leader & Embedded Systems Developer',
    github: 'https://github.com/Gokuldevadasan?tab=repositories',
    category: 'Artificial Intelligence',
  },
  {
    id: 'venom',
    title: 'VENOM',
    tagline: 'AI-Powered Intelligent Robotic Assistant',
    description:
      'An intelligent robotic assistant integrating embedded systems, AI, computer vision, and robotics for interactive automation.',
    fullDescription:
      'VENOM is an AI-powered robotic assistant capable of recognizing people and objects while responding through synchronized robotic movements. The robot combines embedded hardware, servo control, computer vision, and artificial intelligence to create an interactive platform suitable for education, healthcare, and smart service applications.',
    image: '/projects/venom.jpg',
    techStack: [
      'Arduino Uno',
      'Embedded C/C++',
      'Python',
      'Servo Motors',
      'PCA9685 Servo Driver',
      'Artificial Intelligence',
      'Computer Vision',
      'OpenCV',
      'TensorFlow',
      'YOLO',
      'Bluetooth',
      'Wi-Fi',
      'IoT',
    ],
    features: [
      'AI-based human and object recognition',
      'Multi-servo robotic movement',
      'Embedded real-time control system',
      'Computer vision interaction',
      'Scalable architecture for future autonomous navigation',
    ],
    challenges: [
      'Precise synchronization of multiple servo motors',
      'Real-time communication between AI and embedded hardware',
      'Integrating robotics with computer vision',
    ],
    achievements: [
      'Successfully developed a functional robotic prototype',
      'Demonstrated AI-assisted interaction and synchronized robotic movement',
      'Strengthened expertise in Robotics, Embedded Systems, AI, and Hardware Integration',
    ],
    timeline: 'Sep 2025 - Nov 2025',
    role: 'Hardware Engineer',
    github: 'https://github.com/Gokuldevadasan?tab=repositories',
    category: 'Robotics',
  },
  {
    id: 'spms',
    title: 'Smart Parcel Management System',
    tagline: 'Automated Parcel Registration & Verification',
    description:
      'A cloud-connected parcel management platform that digitizes parcel registration, verification, and secure collection for educational institutions.',
    fullDescription:
      'The Smart Parcel Management System is a Windows-based application that replaces manual parcel registers through barcode scanning, Firebase synchronization, and secure parcel verification. It also proposes an AI-enabled smart parcel box capable of future OCR-based automatic parcel registration and remote parcel availability monitoring.',
    image: '/projects/spms.jpg',
    techStack: [
      'Python',
      'PyQt5',
      'Firebase Firestore',
      'Firebase Storage',
      'OpenCV',
      'pyzbar',
      'REST API',
      'Computer Vision',
    ],
    features: [
      'Barcode and QR code parcel registration',
      'Cloud synchronization with Firebase',
      'Photo-based delivery verification',
      'Student parcel availability portal',
      'Future AI-powered OCR parcel registration',
    ],
    challenges: [
      'Real-time cloud synchronization',
      'Secure parcel verification workflow',
      'Designing scalable parcel automation architecture',
    ],
    achievements: [
      'Developed a scalable parcel management prototype',
      'Reduced manual parcel handling effort',
      'Improved parcel traceability using cloud technologies',
      'Established the foundation for a fully automated AI-enabled parcel management system',
    ],
    timeline: 'Dec 2025 - Jan 2026',
    role: 'Project Leader & Embedded Systems Developer',
    github: 'https://github.com/Gokuldevadasan?tab=repositories',
    category: 'IoT',
  },
]
