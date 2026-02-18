
import { Domain } from './types';

export const DOMAINS: Domain[] = [
  {
    id: 'software-dev',
    name: 'Software Development (Programming)',
    overview: 'The process of designing, writing, testing, and maintaining source code of computer programs.',
    problemsSolved: [
      'Automating repetitive manual tasks',
      'Creating digital interfaces for businesses',
      'Scaling services to millions of users'
    ],
    sectors: ['Tech', 'Finance', 'Health', 'E-commerce', 'Entertainment'],
    icon: '💻',
    subdomains: [
      {
        id: 'frontend',
        name: 'Frontend Development',
        description: 'Building the visual elements and user interface of websites.',
        courses: ['HTML & CSS Basics', 'Modern JavaScript (ES6+)', 'React.js Fundamentals', 'Tailwind CSS Mastery'],
        roadmap: [
          { id: '1', title: 'Internet Fundamentals', type: 'core' },
          { id: '2', title: 'HTML & Semantic Web', type: 'core' },
          { id: '3', title: 'CSS Layouts (Flex/Grid)', type: 'core' },
          { id: '4', title: 'JavaScript Basics', type: 'core' },
          { id: '5', title: 'Frameworks (React/Vue/Angular)', type: 'specialization' },
          { id: '6', title: 'Build Tooling (Vite/Webpack)', type: 'ecosystem' }
        ]
      },
      {
        id: 'backend',
        name: 'Backend Development',
        description: 'Managing servers, databases, and application logic.',
        courses: ['Node.js & Express', 'Python for Web', 'Relational Databases (SQL)', 'API Design'],
        roadmap: [
          { id: '1', title: 'Programming Language (Python/Java/JS)', type: 'core' },
          { id: '2', title: 'Databases (SQL/NoSQL)', type: 'core' },
          { id: '3', title: 'Authentication & Security', type: 'core' },
          { id: '4', title: 'APIs (REST/GraphQL)', type: 'specialization' },
          { id: '5', title: 'Caching & Message Queues', type: 'ecosystem' }
        ]
      },
      {
        id: 'fullstack',
        name: 'Full-Stack Development',
        description: 'Combining both frontend and backend expertise.',
        courses: ['MERN Stack', 'Next.js 14 Fullstack', 'PostgreSQL Deep Dive'],
        roadmap: [
          { id: '1', title: 'Frontend Core', type: 'core' },
          { id: '2', title: 'Backend Core', type: 'core' },
          { id: '3', title: 'Database Integration', type: 'core' },
          { id: '4', title: 'CI/CD Pipelines', type: 'specialization' }
        ]
      },
      {
        id: 'mobile',
        name: 'Mobile App Development',
        description: 'Creating applications for handheld devices like smartphones.',
        courses: ['Swift for iOS', 'Kotlin for Android', 'React Native Essentials', 'Flutter Mastery'],
        roadmap: [
          { id: '1', title: 'Native vs Hybrid Logic', type: 'core' },
          { id: '2', title: 'OS Specific SDKs', type: 'core' },
          { id: '3', title: 'Mobile UI Patterns', type: 'specialization' },
          { id: '4', title: 'App Store Publishing', type: 'terminal' }
        ]
      },
      { id: 'desktop', name: 'Desktop Application Development', description: 'Software for PCs and Laptops.', courses: ['C# & .NET', 'Electron.js', 'PyQt'], roadmap: [] },
      { id: 'game-dev', name: 'Game Development', description: 'Creating interactive entertainment.', courses: ['Unity (C#)', 'Unreal Engine (C++)', 'Blender'], roadmap: [] }
    ]
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    overview: 'The science of analyzing raw data to make conclusions about that information.',
    problemsSolved: [
      'Predicting market trends',
      'Identifying operational inefficiencies',
      'Understanding user behavior'
    ],
    sectors: ['Retail', 'Finance', 'Logistics', 'Marketing', 'Sports'],
    icon: '📊',
    subdomains: [
      { id: 'da', name: 'Data Analysis', description: 'Extracting insights from datasets.', courses: ['Excel for Data', 'SQL Mastery', 'Power BI'], roadmap: [] },
      { id: 'ds', name: 'Data Science', description: 'Using algorithms for prediction.', courses: ['Python for DS', 'Statistics 101', 'Machine Learning'], roadmap: [] },
      { id: 'de', name: 'Data Engineering', description: 'Building the data infrastructure.', courses: ['Apache Spark', 'Airflow', 'BigQuery'], roadmap: [] },
      { id: 'bi', name: 'Business Intelligence', description: 'Strategic data visualization.', courses: ['Tableau', 'Looker', 'Business Strategy'], roadmap: [] },
      { id: 'bigdata', name: 'Big Data', description: 'Managing massive volumes of data.', courses: ['Hadoop', 'Distributed Systems'], roadmap: [] }
    ]
  },
  {
    id: 'ai-ml',
    name: 'Artificial Intelligence & Machine Learning',
    overview: 'Simulating human intelligence processes by machines, especially computer systems.',
    problemsSolved: [
      'Language translation in real-time',
      'Automated medical diagnosis',
      'Self-driving car navigation'
    ],
    sectors: ['Automotive', 'Healthcare', 'Customer Service', 'Security'],
    icon: '🤖',
    subdomains: [
      { id: 'ml', name: 'Machine Learning', description: 'Algorithms that improve through experience.', courses: ['Scikit-learn', 'Linear Algebra'], roadmap: [] },
      { id: 'dl', name: 'Deep Learning', description: 'Neural networks inspired by the brain.', courses: ['TensorFlow', 'PyTorch'], roadmap: [] },
      { id: 'nlp', name: 'Natural Language Processing', description: 'Understanding human speech and text.', courses: ['HuggingFace', 'Transformers'], roadmap: [] },
      { id: 'cv', name: 'Computer Vision', description: 'Interpreting visual input.', courses: ['OpenCV', 'Image Recognition'], roadmap: [] },
      { id: 'prompt-eng', name: 'Prompt Engineering', description: 'Optimizing LLM interactions.', courses: ['LLM Fundamentals', 'System Prompts'], roadmap: [] },
      { id: 'robotics-ml', name: 'Robotics ML', description: 'AI for physical machines.', courses: ['ROS', 'Kinematics'], roadmap: [] }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    overview: 'The practice of protecting systems, networks, and programs from digital attacks.',
    problemsSolved: ['Preventing data breaches', 'Stopping ransomware attacks', 'Securing sensitive financial transactions'],
    sectors: ['Government', 'Banking', 'Defense', 'Infrastructure'],
    icon: '🛡️',
    subdomains: [
      { id: 'hacking', name: 'Ethical Hacking', description: 'Authorized simulated attacks.', courses: ['CompTIA PenTest+', 'Metasploit'], roadmap: [] },
      { id: 'netsec', name: 'Network Security', description: 'Defending internal networks.', courses: ['Cisco Security', 'Firewalls'], roadmap: [] },
      { id: 'cloudsec', name: 'Cloud Security', description: 'Securing cloud resources.', courses: ['AWS Security', 'Zero Trust'], roadmap: [] },
      { id: 'forensics', name: 'Digital Forensics', description: 'Investigating digital crimes.', courses: ['EnCase', 'Evidence Handling'], roadmap: [] },
      { id: 'soc', name: 'Security Operations (SOC)', description: 'Real-time threat monitoring.', courses: ['SIEM', 'Splunk'], roadmap: [] }
    ]
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Computing & DevOps',
    overview: 'Managing cloud infrastructure and streamlining the development lifecycle.',
    problemsSolved: ['Frequent software downtime', 'Slow deployment cycles', 'Inefficient server resource usage'],
    sectors: ['SaaS', 'Telecom', 'Finance', 'Streaming'],
    icon: '☁️',
    subdomains: [
      { id: 'cloudeng', name: 'Cloud Engineering', description: 'Building on AWS/Azure/GCP.', courses: ['Cloud Practitioner', 'Terraform'], roadmap: [] },
      { id: 'devops', name: 'DevOps Engineering', description: 'Bridging Dev and Ops.', courses: ['Jenkins', 'GitHub Actions'], roadmap: [] },
      { id: 'sre', name: 'Site Reliability Engineering', description: 'System availability focus.', courses: ['Monitoring', 'Incident Response'], roadmap: [] },
      { id: 'containers', name: 'Containerization', description: 'Docker & Kubernetes mastery.', courses: ['Kubernetes Intro', 'Helm Charts'], roadmap: [] }
    ]
  },
  {
    id: 'networking-sys',
    name: 'Networking & Systems',
    overview: 'The backbone of tech, ensuring connectivity and operating environment stability.',
    problemsSolved: ['Disconnected global offices', 'Unstable server operating systems', 'Slow internal file sharing'],
    sectors: ['ISP', 'Data Centers', 'Corporate Offices'],
    icon: '🔌',
    subdomains: [
      { id: 'compnet', name: 'Computer Networking', description: 'Routing and switching.', courses: ['CCNA', 'OSI Model'], roadmap: [] },
      { id: 'sysadmin', name: 'System Administration', description: 'Managing multi-user computers.', courses: ['Linux CLI', 'Active Directory'], roadmap: [] },
      { id: 'telecom', name: 'Telecommunications', description: 'Voice and data transmission.', courses: ['VoIP', '5G Networks'], roadmap: [] }
    ]
  },
  {
    id: 'web-design',
    name: 'Web & Digital Design',
    overview: 'Combining creativity with technology to build user-centric digital experiences.',
    problemsSolved: ['Confusing app navigation', 'Poor visual branding', 'Low conversion rates'],
    sectors: ['Marketing', 'Product Design', 'E-commerce', 'Entertainment'],
    icon: '🎨',
    subdomains: [
      { id: 'uiux', name: 'UI/UX Design', description: 'User interfaces and experiences.', courses: ['Figma Design', 'User Research'], roadmap: [] },
      { id: 'webdes', name: 'Web Design', description: 'Layout and aesthetic focus.', courses: ['Webflow', 'Typography'], roadmap: [] },
      { id: 'prod-des', name: 'Product Design', description: 'End-to-end product vision.', courses: ['Interaction Design', 'Strategy'], roadmap: [] },
      { id: 'graph-tech', name: 'Graphic Design (Tech)', description: 'Visual assets for tech products.', courses: ['Illustrator', 'Branding'], roadmap: [] }
    ]
  },
  {
    id: 'hardware-embedded',
    name: 'Hardware & Embedded Systems',
    overview: 'Engineering physical components and low-level software that runs directly on them.',
    problemsSolved: ['Hardware component failure', 'Inefficient device power usage', 'Smart device connectivity'],
    sectors: ['Manufacturing', 'Consumer Electronics', 'IoT', 'Aerospace'],
    icon: '⚙️',
    subdomains: [
      { id: 'hware', name: 'Hardware Engineering', description: 'PCB and circuit design.', courses: ['Circuit Theory', 'CAD Tools'], roadmap: [] },
      { id: 'embed', name: 'Embedded Systems', description: 'Software for specific hardware.', courses: ['Embedded C', 'Real-time OS'], roadmap: [] },
      { id: 'iot', name: 'Internet of Things (IoT)', description: 'Connected smart devices.', courses: ['MQTT', 'Sensor Integration'], roadmap: [] },
      { id: 'micro', name: 'Microcontrollers', description: 'Arduino and Raspberry Pi.', courses: ['GPIO Control', 'Python Hardware'], roadmap: [] }
    ]
  },
  {
    id: 'qa-testing',
    name: 'Quality Assurance & Testing',
    overview: 'Validating software to ensure it meets requirements and is bug-free.',
    problemsSolved: ['App crashes in production', 'Security vulnerabilities', 'Slow user interface performance'],
    sectors: ['Every tech sector'],
    icon: '🧪',
    subdomains: [
      { id: 'manual', name: 'Manual Testing', description: 'Human-driven bug finding.', courses: ['Test Case Writing', 'STLC'], roadmap: [] },
      { id: 'auto', name: 'Automated Testing', description: 'Writing code to test code.', courses: ['Selenium', 'Cypress', 'Playwright'], roadmap: [] },
      { id: 'perf', name: 'Performance Testing', description: 'Load and stress tests.', courses: ['JMeter', 'LoadRunner'], roadmap: [] }
    ]
  },
  {
    id: 'it-support',
    name: 'IT Support & Enterprise Tech',
    overview: 'Maintaining the daily technical operations and tools of a large organization.',
    problemsSolved: ['Employee technical downtime', 'Software license mismanagement', 'Database access issues'],
    sectors: ['Global Enterprises', 'Consulting'],
    icon: '📞',
    subdomains: [
      { id: 'helpdesk', name: 'IT Help Desk', description: 'First-line technical support.', courses: ['ITIL', 'Ticketing Systems'], roadmap: [] },
      { id: 'erp', name: 'ERP Systems (SAP/Oracle)', description: 'Business process software.', courses: ['SAP ABAP', 'Oracle Apps'], roadmap: [] },
      { id: 'techsupport', name: 'Tech Support Eng', description: 'Advanced troubleshooting.', courses: ['Network Debugging', 'Log Analysis'], roadmap: [] }
    ]
  },
  {
    id: 'tech-mgmt',
    name: 'Product, Project & Tech Management',
    overview: 'Strategic roles that guide technical teams and product development.',
    problemsSolved: ['Lack of product vision', 'Missed project deadlines', 'Poor team communication'],
    sectors: ['Agile Tech Teams', 'Finance', 'Startups'],
    icon: '👔',
    subdomains: [
      { id: 'prodmgmt', name: 'Product Management', description: 'Product lifecycle strategy.', courses: ['Product Strategy', 'Agile'], roadmap: [] },
      { id: 'projmgmt', name: 'Project Management', description: 'Execution and timelines.', courses: ['PMP', 'Scrum Master'], roadmap: [] },
      { id: 'bizanalyst', name: 'Business Analysis', description: 'Bridging tech and business.', courses: ['BPMN', 'Stakeholder Mgmt'], roadmap: [] }
    ]
  },
  {
    id: 'emerging',
    name: 'Emerging & Specialized Fields',
    overview: 'Cutting-edge domains that are reshaping the technological landscape.',
    problemsSolved: ['Lack of digital scarcity (Blockchain)', 'Limited immersive experiences (AR/VR)', 'Classical computing limits'],
    sectors: ['Research', 'Investment', 'Specialized Tech'],
    icon: '🚀',
    subdomains: [
      { id: 'web3', name: 'Blockchain & Web3', description: 'Decentralized technologies.', courses: ['Solidity', 'DApp Dev'], roadmap: [] },
      { id: 'arvr', name: 'AR/VR', description: 'Immersive reality.', courses: ['Unity AR', 'XR Design'], roadmap: [] },
      { id: 'fintech', name: 'FinTech', description: 'Tech for financial services.', courses: ['Banking APIs', 'Payments'], roadmap: [] },
      { id: 'quantum', name: 'Quantum Computing', description: 'Next-gen processing.', courses: ['Qiskit', 'Quantum Algos'], roadmap: [] }
    ]
  }
];
