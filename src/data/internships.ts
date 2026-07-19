export interface Internship {
  id: string
  company: string
  logo: string
  role: string
  duration: string
  location: string
  responsibilities: string[]
  technologies: string[]
  certificate?: string
}

export const internships: Internship[] = [
  {
    id: 'internship-1',
    company: 'SMEC Automation Pvt. Ltd',
    logo: 'https://drive.google.com/file/d/1z-9Hmk7lGChc_FDT-ur7AyXwe-5d10Yn/view?usp=sharing',
    role: 'Industrial Trainee – Control Panel Building (Marine Automation)',
    duration: '05 June 2025 – 20 June 2025 (2 Weeks)',
    location: 'Kochi,kerala,india',
    responsibilities: [
      'Assisted in assembling and wiring marine automation control panels.',
      'Supported electrical component installation and panel testing.',
      'Helped read and understand electrical diagrams and wiring layouts.',
      'Participated in inspection and quality verification of completed panels.',
      'Followed standard operating procedures and workplace safety guidelines.'

    ],
    technologies: ['PLC Control Panels', 'Electrical Wiring', 'Marine Automation', 'Control Panel Assembly', 'Electrical Drawings', 'Industrial Automation', 'Electrical Components'],
    certificate: 'https://drive.google.com/file/d/1do0QjDGbac4iBTCOuDhFkUQRBxA5E825/view?usp=sharing'
  },
  {
    id: 'internship-2',
    company: 'Navicom Technologies Pvt. Ltd',
    logo: 'https://drive.google.com/file/d/1daodRh6INnmCG42bnXQqa0-hpDNn6TaF/view?usp=sharing',
    role: 'Industrial Trainee / Assistant to Senior Service Engineer',
    duration: '25 May 2026 to 05 June 2026 (2 Weeks)',
    location: 'KARWAR',
    responsibilities: [
      '	Assisted Senior Service Engineers during maintenance and servicing activities.',
       ' Participated in routine inspection and troubleshooting of navigation and communication equipment. ',
      'Supported testing, calibration, and verification of electronic systems. ',
    	'Followed industrial safety standards and maintenance procedures. ',
       'Assisted in preparing equipment for operational readiness and maintenance documentation. '

    ],
    technologies: ['Navigation Systems', 'Marine Communication Systems', 'Electronic Test Equipment', 'Embedded Electronics', 'Electrical & Electronic Maintenance', 'Marine Automation'],
    certificate: 'https://drive.google.com/file/d/1nnL3Oqf-kRPgtD3Q4ZjB59fHJdVL8JhF/view?usp=sharing'
  },
]
