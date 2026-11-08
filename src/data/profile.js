// All portfolio content lives here, so updating the site means editing this file.

import infotechImg from '../assets/images/ctf/infotech26-runner-up.webp';
import packetRankImg from '../assets/images/ctf/packet-capture-rank16.webp';
import packetCertImg from '../assets/images/ctf/packet-capture-participation.webp';
import introCyberImg from '../assets/images/certs/cisco-intro-cybersecurity.webp';
import packetTracerImg from '../assets/images/certs/cisco-packet-tracer.webp';
import networkingBasicsImg from '../assets/images/certs/cisco-networking-basics.webp';
import networkDefenseImg from '../assets/images/certs/cisco-network-defense.webp';
import cyberConvergenceImg from '../assets/images/certs/cyberconvergence-2026.webp';
import preprImg from '../assets/images/projects/prepr.webp';
import laundrifyImg from '../assets/images/projects/laundrify.png';
import strandmatchImg from '../assets/images/projects/strandmatch.png';

export const person = {
  name: 'Rafael Jr. Canalda',
  fullName: 'Rafael Jr. R. Canalda',
  initials: 'RJC',
  location: 'Taguig City, Philippines',
  school: 'University of Makati',
  degree: 'BS Information Technology, major in Information Network Security',
  github: 'https://github.com/raflearns',
  linkedin: 'https://www.linkedin.com/in/raf-jrrc/',
  email: 'rafael.canaldajr@gmail.com',
  // Lives in public/. Regenerate it from resume/resume.html (see README).
  resume: '/Rafael-Canalda-Resume.pdf',
};

export const about = [
  'I’m an Information Technology student at the University of Makati, majoring in Information Network Security. My goal is to work as a penetration tester and, longer term, a cybersecurity engineer.',
  'Most of my practice happens in capture-the-flag competitions, where I’ve placed 1st runner-up in INFOTECH ’26 and finished 16th in the Packet Capture CTF. I back that up with Cisco Networking Academy training in networking and network defense.',
  'Before IT, I studied data analytics in senior high, and I still repair phones and electronics on the side. Both taught me the habit every tester needs: take a system apart until you understand exactly how it fails.',
];

export const competitions = [
  {
    id: 'infotech26',
    placement: '1st runner-up',
    event: 'INFOTECH ’26 Cybersecurity',
    host: 'College of Computing and Information Sciences, University of Makati',
    date: '2026',
    team: 'Sudo RFAM',
    summary: 'Second place overall in the cybersecurity competition of UMak’s annual IT week.',
    stats: [],
    images: [{ src: infotechImg, alt: 'INFOTECH ’26 Cybersecurity poster announcing the 1st runner-up team' }],
  },
  {
    id: 'packet-capture',
    placement: 'Rank 16',
    event: 'Packet Capture: Beneath the Network CTF',
    host: 'Packet Capture × CyberPH',
    date: 'October 2026',
    team: 'Sudo RFAM v1',
    summary: 'Online networking and cybersecurity CTF hosted by Packet Capture and CyberPH.',
    stats: [
      { value: '2,229', label: 'points' },
      { value: '24', label: 'flags captured' },
      { value: '5', label: 'person team' },
    ],
    images: [
      { src: packetRankImg, alt: 'Packet Capture results card: rank 16, 2,229 points, 24 flags solved' },
      { src: packetCertImg, alt: 'Certificate of participation, Packet Capture: Beneath the Network CTF' },
    ],
  },
];

export const certifications = [
  {
    id: 'network-defense',
    title: 'Network Defense',
    issuer: 'Cisco Networking Academy',
    issued: 'Sep 2026',
    image: networkDefenseImg,
    covered: [
      'Documenting a network’s security posture',
      'Hardening network devices and Linux and Windows endpoints',
      'Configuring a simulated network firewall',
      'Identity lifecycle management',
      'Data protection in transit and at rest, and PKI',
      'Cloud security and virtualization',
    ],
  },
  {
    id: 'networking-basics',
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    issued: 'Sep 2026',
    image: networkingBasicsImg,
    covered: [
      'Network types, components, standards and protocols',
      'Ethernet, IPv4 and IPv6 addressing',
      'How routers connect networks',
      'Testing and troubleshooting connectivity',
      'Securing a wireless router and client',
    ],
  },
  {
    id: 'intro-cybersecurity',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    issued: 'Aug 2026',
    image: introCyberImg,
    covered: [
      'Common threats, attacks and vulnerabilities',
      'Personal and organizational defenses',
      'Cybersecurity career paths',
    ],
  },
  {
    id: 'packet-tracer',
    title: 'Introduction to Packet Tracer',
    issuer: 'Cisco Networking Academy',
    issued: 'Aug 2026',
    image: packetTracerImg,
    covered: [
      'Building networks in Cisco Packet Tracer',
      'Network controllers',
      'Simulated IoT and smart home networks',
    ],
  },
];

export const events = [
  {
    id: 'cyberconvergence',
    title: 'CyberConvergence 2026',
    detail: 'Next-generation cyber defenders summit by UMak CCIS and the Philippine Institute of Cybersecurity Professionals.',
    date: 'Oct 2026',
    image: cyberConvergenceImg,
    imageAlt: 'Certificate of participation, CyberConvergence 2026',
  },
  {
    id: 'packet-capture-participation',
    title: 'Packet Capture: Beneath the Network',
    detail: 'Participation certificate, presented at the online awarding ceremony on October 26, 2026.',
    date: 'Oct 2026',
    image: packetCertImg,
    imageAlt: 'Certificate of participation, Packet Capture: Beneath the Network CTF',
  },
];

// Every skill points to where it was proven. "verified" = backed by a certificate,
// "applied" = used in a competition, project or job.
export const skills = [
  { skill: 'Threats, attacks and vulnerabilities', state: 'verified', source: 'Cisco Intro to Cybersecurity' },
  { skill: 'Firewall configuration', state: 'verified', source: 'Cisco Network Defense' },
  { skill: 'Endpoint hardening (Linux, Windows)', state: 'verified', source: 'Cisco Network Defense' },
  { skill: 'PKI and data protection', state: 'verified', source: 'Cisco Network Defense' },
  { skill: 'Identity lifecycle management', state: 'verified', source: 'Cisco Network Defense' },
  { skill: 'IPv4 / IPv6 addressing and routing', state: 'verified', source: 'Cisco Networking Basics' },
  { skill: 'Connectivity troubleshooting', state: 'verified', source: 'Cisco Networking Basics' },
  { skill: 'Network simulation (Packet Tracer)', state: 'verified', source: 'Cisco Intro to Packet Tracer' },
  { skill: 'CTF problem solving under time pressure', state: 'applied', source: 'INFOTECH ’26, Packet Capture CTF' },
  { skill: 'Java (OOP) and MySQL', state: 'applied', source: 'Laundrify POS' },
  { skill: 'Python and data analysis', state: 'applied', source: 'StrandMatch, STEM-DA strand' },
  { skill: 'Offline-first web apps (React, TypeScript)', state: 'applied', source: 'PrepR' },
  { skill: 'JavaScript, HTML, CSS', state: 'applied', source: 'PrepR, BSIT coursework' },
  { skill: 'Hardware diagnostics and repair', state: 'applied', source: 'Electronics technician work' },
];

export const projects = [
  {
    id: 'prepr',
    title: 'PrepR',
    featured: true,
    description:
      'A free disaster preparedness app for Philippine households that keeps working with no signal. Open it once, add it to the home screen, and every tool runs offline: go-bag checklist, hazard guides for eight calamities (including cyber-attack outages), a one-text status SMS, rescue siren and SOS light, a medical QR card and emergency hotlines.',
    tech: ['React', 'TypeScript', 'PWA', 'Tailwind CSS'],
    image: preprImg,
    imageAlt: 'PrepR on a phone: hazard picker, field comms and rescue tools screens',
    link: 'https://prepr-xi.vercel.app',
    linkLabel: 'prepr-xi.vercel.app',
  },
  {
    id: 'laundrify',
    title: 'Laundrify POS',
    description:
      'Standalone point-of-sale system for local laundry shops, with cashier logins, a queue manager and cash or QR payments.',
    tech: ['Java', 'MySQL'],
    image: laundrifyImg,
    imageAlt: 'Laundrify POS cashier screen',
  },
  {
    id: 'strandmatch',
    title: 'StrandMatch',
    description:
      'A predictive model for senior high students moving into college. It forecasts course feasibility and future enrollment so students can see where their strand leads and map out a career path, using rule-based logic for discrete data instead of interpolation.',
    tech: ['Python', 'Excel', 'MySQL'],
    image: strandmatchImg,
    imageAlt: 'StrandMatch logo',
  },
];
