// All portfolio content lives here, so updating the site means editing this file.

import infotechImg from '../assets/images/ctf/infotech26-runner-up.webp';
import packetRankImg from '../assets/images/ctf/packet-capture-rank16.webp';
import packetCertImg from '../assets/images/ctf/packet-capture-participation.webp';
import introCyberImg from '../assets/images/certs/cisco-intro-cybersecurity.webp';
import packetTracerImg from '../assets/images/certs/cisco-packet-tracer.webp';
import networkingBasicsImg from '../assets/images/certs/cisco-networking-basics.webp';
import networkDefenseImg from '../assets/images/certs/cisco-network-defense.webp';
import cyberConvergenceImg from '../assets/images/certs/cyberconvergence-2026.webp';
import laundrifyImg from '../assets/images/projects/laundrify.png';
import strandmatchImg from '../assets/images/projects/strandmatch.png';

export const person = {
  name: 'Rafael Jr. Canalda',
  fullName: 'Rafael Jr. R. Canalda',
  goal: 'Penetration tester & cybersecurity engineer in training',
  school: 'University of Makati',
  github: 'https://github.com/raflearns',
  linkedin: 'https://linkedin.com/in/rafaelcanalda',
  // Add your real address to show the email button everywhere, e.g. 'rafael@gmail.com'.
  email: '',
  team: 'Sudo RFAM',
};

export const competitions = [
  {
    id: 'infotech26',
    placement: '1st runner-up',
    event: 'INFOTECH ’26 Cybersecurity',
    host: 'College of Computing and Information Sciences, University of Makati',
    year: '2026',
    team: 'Sudo RFAM',
    summary:
      'Took second place overall in the cybersecurity competition of the university’s annual IT week.',
    stats: [],
    images: [{ src: infotechImg, alt: 'INFOTECH ’26 Cybersecurity poster announcing team Sudo RFAM as 1st runner-up' }],
  },
  {
    id: 'packet-capture',
    placement: 'Rank 16',
    event: 'Packet Capture: Beneath the Network CTF',
    host: 'Packet Capture × CyberPH',
    year: 'Oct 2026',
    team: 'Sudo RFAM v1',
    summary:
      'Online, jeopardy-style networking and cybersecurity CTF. Awarded during the online ceremony on October 26, 2026.',
    stats: [
      { value: '2,229', label: 'final score' },
      { value: '24', label: 'flags solved' },
      { value: '5', label: 'team members' },
    ],
    images: [
      { src: packetRankImg, alt: 'Packet Capture results card: team Sudo RFAM v1, rank 16, 2229 points, 24 flags' },
      { src: packetCertImg, alt: 'Certificate of participation in Packet Capture: Beneath the Network CTF' },
    ],
  },
];

export const certifications = [
  {
    id: 'network-defense',
    title: 'Network Defense',
    issuer: 'Cisco Networking Academy',
    issued: 'Sep 27, 2026',
    image: networkDefenseImg,
    covered: [
      'Documenting a network’s security posture',
      'Hardening network devices and Linux and Windows endpoints',
      'Identity lifecycle management',
      'Configuring a simulated network firewall',
      'Cloud security recommendations',
      'Data protection for transport and storage, and how PKI secures data',
      'Building virtual computing environments',
    ],
  },
  {
    id: 'networking-basics',
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    issued: 'Sep 27, 2026',
    image: networkingBasicsImg,
    covered: [
      'Network types, components, standards and protocols',
      'How Ethernet communication works',
      'IPv4 and IPv6 addressing',
      'How routers connect networks',
      'Testing and troubleshooting connectivity',
      'Securing an integrated wireless router and client',
    ],
  },
  {
    id: 'intro-cybersecurity',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    issued: 'Aug 31, 2026',
    image: introCyberImg,
    covered: [
      'Common threats, attacks and vulnerabilities',
      'Personal and organizational defenses',
      'Career paths in cybersecurity',
    ],
  },
  {
    id: 'packet-tracer',
    title: 'Introduction to Packet Tracer',
    issuer: 'Cisco Networking Academy',
    issued: 'Aug 31, 2026',
    image: packetTracerImg,
    covered: [
      'Building simple networks in Cisco Packet Tracer',
      'Using network controllers',
      'Simulating IoT devices in a smart home network',
    ],
  },
];

export const events = [
  {
    id: 'cyberconvergence',
    title: 'CyberConvergence 2026',
    detail:
      'Building the Next Generation of Cyber Defenders summit, held by UMak CCIS with the Philippine Institute of Cybersecurity Professionals.',
    date: 'Oct 20, 2026',
    image: cyberConvergenceImg,
    imageAlt: 'Certificate of participation for CyberConvergence 2026',
  },
  {
    id: 'packet-capture-participation',
    title: 'Packet Capture: Beneath the Network',
    detail: 'Certificate of participation for the Packet Capture × CyberPH CTF.',
    date: 'Oct 26, 2026',
    image: packetCertImg,
    imageAlt: 'Certificate of participation in Packet Capture: Beneath the Network CTF',
  },
];

export const skills = [
  {
    group: 'Network security',
    items: [
      'Firewall configuration',
      'Endpoint hardening (Linux, Windows)',
      'PKI and data protection',
      'Identity lifecycle management',
      'Cloud security basics',
      'Virtualization',
    ],
  },
  {
    group: 'Networking',
    items: [
      'IPv4 and IPv6 addressing',
      'Ethernet and routing fundamentals',
      'Connectivity troubleshooting',
      'Wireless security setup',
      'Cisco Packet Tracer',
      'BPO-style LAN topologies',
    ],
  },
  {
    group: 'Programming',
    items: ['Java (OOP)', 'Python', 'PHP', 'MySQL', 'HTML', 'CSS'],
  },
  {
    group: 'Analysis and tools',
    items: ['Data analytics', 'Excel', 'Microsoft 365', 'Google Workspace', 'Hardware troubleshooting'],
  },
];

export const projects = [
  {
    id: 'laundrify',
    title: 'Laundrify POS',
    description:
      'A standalone point-of-sale system for local laundry shops, built for reliable transaction processing and local data management.',
    tech: ['Java', 'OOP', 'MySQL'],
    image: laundrifyImg,
    imageAlt: 'Laundrify POS interface',
  },
  {
    id: 'predictive-modeling',
    title: 'Predictive Modeling',
    description:
      'Statistical models that forecast trends from discrete data sets, using rule-based logic instead of interpolation for more accurate results.',
    tech: ['Python', 'Excel', 'MySQL'],
    image: strandmatchImg,
    imageAlt: 'StrandMatch landing page',
  },
];

export const askMeAbout = [
  'What competing in CTFs with team Sudo RFAM has taught me',
  'Applying network defense coursework to real topologies',
  'My path from network administration toward penetration testing',
  'Using data analytics to spot patterns in network traffic',
];
