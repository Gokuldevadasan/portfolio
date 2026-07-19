import {
  SiPython,
  SiC,
  SiCplusplus,
  SiRust,
  SiTypescript,
  SiArduino,
  SiEspressif,
  SiRaspberrypi,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiDocker,
  SiLinux,
  SiGit,
  SiFlutter,
  SiFirebase,
  SiMqtt,
  SiPostman,
  SiFigma,
} from 'react-icons/si'
import { FaAws, FaCode } from 'react-icons/fa'
import { DiRasberryPi } from 'react-icons/di'
import { IconType } from 'react-icons'

interface Skill {
  name: string
  icon: IconType
  level: number
  color: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
}
export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Embedded C', icon: SiC, level: 95, color: '#FF0000' },
      { name: 'C++', icon: SiCplusplus, level: 90, color: '#FF1A1A' },
      { name: 'Python', icon: SiPython, level: 88, color: '#FF3333' },
      { name: 'Dart', icon: SiFlutter, level: 90, color: '#FF4D4D' },
      { name: 'Java', icon: FaCode, level: 75, color: '#FF6666' },
      { name: 'JavaScript', icon: SiTypescript, level: 80, color: '#FF8080' },
    ],
  },

  {
    title: 'Embedded Systems & Microcontrollers',
    skills: [
      { name: 'ESP32', icon: SiEspressif, level: 95, color: '#FF0000' },
      { name: 'Arduino', icon: SiArduino, level: 95, color: '#FF1A1A' },
      { name: 'STM32', icon: DiRasberryPi, level: 80, color: '#FF3333' },
      { name: 'Raspberry Pi', icon: SiRaspberrypi, level: 85, color: '#FF4D4D' },
      { name: 'Embedded Firmware', icon: SiC, level: 92, color: '#FF6666' },
    ],
  },

  {
    title: 'Communication Protocols',
    skills: [
      { name: 'UART', icon: SiC, level: 95, color: '#FF0000' },
      { name: 'SPI', icon: SiC, level: 90, color: '#FF1A1A' },
      { name: 'I2C', icon: SiC, level: 95, color: '#FF3333' },
      { name: 'CAN', icon: SiC, level: 75, color: '#FF4D4D' },
      { name: 'Bluetooth Low Energy', icon: SiEspressif, level: 90, color: '#FF6666' },
      { name: 'Wi-Fi', icon: SiEspressif, level: 95, color: '#FF8080' },
      { name: 'MQTT', icon: SiMqtt, level: 85, color: '#FF9999' },
    ],
  },

  {
    title: 'IoT & Cloud',
    skills: [
      { name: 'Firebase', icon: SiFirebase, level: 95, color: '#FF0000' },
      { name: 'MQTT', icon: SiMqtt, level: 85, color: '#FF1A1A' },
      { name: 'REST API', icon: FaCode, level: 90, color: '#FF3333' },
      { name: 'Flask', icon: SiPython, level: 85, color: '#FF4D4D' },
      { name: 'JSON', icon: FaCode, level: 95, color: '#FF6666' },
    ],
  },

  {
    title: 'Artificial Intelligence',
    skills: [
      { name: 'OpenCV', icon: SiOpencv, level: 90, color: '#FF0000' },
      { name: 'TensorFlow', icon: SiTensorflow, level: 75, color: '#FF1A1A' },
      { name: 'YOLO', icon: SiTensorflow, level: 75, color: '#FF3333' },
      { name: 'OpenRouter API', icon: FaCode, level: 90, color: '#FF4D4D' },
      { name: 'Computer Vision', icon: SiOpencv, level: 90, color: '#FF6666' },
      { name: 'LLM Integration', icon: FaCode, level: 88, color: '#FF8080' },
    ],
  },

  {
    title: 'Mobile Development',
    skills: [
      { name: 'Flutter', icon: SiFlutter, level: 92, color: '#FF0000' },
      { name: 'Android Studio', icon: SiFlutter, level: 85, color: '#FF1A1A' },
      { name: 'Shared Preferences', icon: SiFlutter, level: 90, color: '#FF3333' },
    ],
  },

  {
    title: 'Electronics & Hardware',
    skills: [
      { name: 'PCB Design', icon: FaCode, level: 75, color: '#FF0000' },
      { name: 'Sensor Interfacing', icon: SiArduino, level: 95, color: '#FF1A1A' },
      { name: 'Circuit Debugging', icon: SiC, level: 90, color: '#FF3333' },
      { name: 'Control Panel Wiring', icon: FaCode, level: 80, color: '#FF4D4D' },
      { name: 'Marine Electronics', icon: FaCode, level: 75, color: '#FF6666' },
    ],
  },

  {
    title: 'Software & Development Tools',
    skills: [
      { name: 'Arduino IDE', icon: SiArduino, level: 95, color: '#FF0000' },
      { name: 'VS Code', icon: FaCode, level: 98, color: '#FF1A1A' },
      { name: 'Git', icon: SiGit, level: 90, color: '#FF3333' },
      { name: 'GitHub', icon: SiGit, level: 90, color: '#FF4D4D' },
      { name: 'Postman', icon: SiPostman, level: 85, color: '#FF6666' },
      { name: 'Figma', icon: SiFigma, level: 80, color: '#FF8080' },
    ],
  },

  {
    title: 'Operating Systems',
    skills: [
      { name: 'Windows', icon: FaCode, level: 98, color: '#FF0000' },
      { name: 'Linux', icon: SiLinux, level: 85, color: '#FF1A1A' },
      { name: 'Ubuntu', icon: SiLinux, level: 82, color: '#FF3333' },
    ],
  },
]