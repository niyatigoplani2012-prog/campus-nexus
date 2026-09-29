// Shared frontend utilities & Canonical Campus Nexus Dataset — Production SaaS Grade

// ==========================================
// CANONICAL CAMPUS DATASET (Interconnected)
// ==========================================
window.CAMPUS_DATA = undefined;

// ==========================================
// CANONICAL CAMPUS DATASET (Interconnected)
// ==========================================
window.CAMPUS_DATA = {
    faculty: [
        { id: 101, name: "Prof. Aris Thorne", title: "Head of AI & Robotics", dept: "Computer Science", email: "athorne@university.edu", avatar: "AT" },
        { id: 102, name: "Dr. Meera Reddy", title: "Director, Quantum Computing Lab", dept: "Cyber Security", email: "mreddy@university.edu", avatar: "MR" },
        { id: 103, name: "Dr. Rajesh Kumar", title: "Professor of Cryptography", dept: "Cyber Security", email: "rkumar@university.edu", avatar: "RK" },
        { id: 104, name: "Prof. Elena Rostova", title: "Chair of BioData Analytics", dept: "BioTech & Data Science", email: "erostova@university.edu", avatar: "ER" },
        { id: 105, name: "Dr. Vikram Samant", title: "Director, Smart Energy Lab", dept: "Electrical Eng", email: "vsamant@university.edu", avatar: "VS" },
        { id: 106, name: "Prof. Sophia Lin", title: "Mechatronics Systems Lead", dept: "Robotics", email: "slin@university.edu", avatar: "SL" }
    ],
    students: [
        { id: 1, name: "Niyati Goplani", roll: "24CS0192", dept: "Computer Science", year: 4, email: "niyati.g@student.edu", avatar: "NG", bio: "Full-Stack Developer & Smart Infrastructure Enthusiast. Leading the Smart Campus Energy Micro-Grid project.", skills: ["React", "Node.js", "Python", "MQTT", "SQL"], github: "https://github.com/niyatigoplani", linkedin: "https://linkedin.com/in/niyatigoplani", gpa: 3.92, hackathonsWon: 3 },
        { id: 2, name: "Rohan Mehta", roll: "23AI0841", dept: "AI & Machine Learning", year: 3, email: "rohan.m@student.edu", avatar: "RM", bio: "Computer vision researcher focusing on autonomous flight systems and deep learning algorithms.", skills: ["PyTorch", "ROS2", "C++", "OpenCV", "Python"], github: "https://github.com/rohanmehta", linkedin: "https://linkedin.com/in/rohanmehta", gpa: 3.85, hackathonsWon: 2 },
        { id: 3, name: "Priya Patel", roll: "22CY0415", dept: "Cyber Security", year: 4, email: "priya.p@student.edu", avatar: "PP", bio: "Ethical hacker & cryptographic protocol designer. Researching zero-knowledge proofs.", skills: ["Rust", "Solidity", "Cryptography", "C++", "Linux"], github: "https://github.com/priyapatel", linkedin: "https://linkedin.com/in/priyapatel", gpa: 3.96, hackathonsWon: 4 },
        { id: 4, name: "Marcus Vance", roll: "24DS0112", dept: "Data Science & Analytics", year: 2, email: "marcus.v@student.edu", avatar: "MV", bio: "Data engineer working on automated code generation and neural compiler optimization.", skills: ["Python", "TensorFlow", "Pandas", "React", "Docker"], github: "https://github.com/marcusvance", linkedin: "https://linkedin.com/in/marcusvance", gpa: 3.78, hackathonsWon: 1 },
        { id: 5, name: "Aisha Khan", roll: "23BT0509", dept: "BioTech & Genetic Eng", year: 3, email: "aisha.k@student.edu", avatar: "AK", bio: "Bioinformatics specialist predicting protein structures using deep neural networks.", skills: ["Python", "Biopython", "R", "Machine Learning", "SQL"], github: "https://github.com/aishakhan", linkedin: "https://linkedin.com/in/aishakhan", gpa: 3.88, hackathonsWon: 2 },
        { id: 6, name: "David Miller", roll: "22RB0302", dept: "Robotics & Hardware", year: 4, email: "david.m@student.edu", avatar: "DM", bio: "Mechatronics engineer crafting myoelectric prosthetic limbs with tactile haptic sensors.", skills: ["Embedded C", "SolidWorks", "Arduino", "DSP", "Control Theory"], github: "https://github.com/davidmiller", linkedin: "https://linkedin.com/in/davidmiller", gpa: 3.81, hackathonsWon: 3 }
    ],
    projects: [
        {
            id: 101, title: "Autonomous Swarm Drone Navigation", category: "AI/ML", department: "Robotics & Hardware",
            owner_id: 2, owner_name: "Rohan Mehta", mentor: "Prof. Aris Thorne", team_size: 4, status: "Open",
            difficulty: "Advanced", duration: "12 Weeks", deadline: "2026-10-15",
            skills_required: "ROS2, PyTorch, C++, Computer Vision",
            description: "Designing a decentralized swarm flight controller using reinforcement learning to enable collaborative indoor search-and-rescue operations without GPS signals.",
            created_at: "2026-08-01T10:00:00Z", tags: ["AI", "Robotics", "Drones", "PyTorch"]
        },
        {
            id: 102, title: "Quantum-Resistant Cryptographic Vault", category: "Cyber Security", department: "Cyber Security",
            owner_id: 3, owner_name: "Priya Patel", mentor: "Dr. Rajesh Kumar", team_size: 3, status: "Open",
            difficulty: "Advanced", duration: "16 Weeks", deadline: "2026-11-01",
            skills_required: "Rust, Lattice Cryptography, C++, Assembly",
            description: "Implementing post-quantum lattice-based encryption algorithms (CRYSTALS-Kyber) inside a high-throughput key store for campus micro-services.",
            created_at: "2026-08-02T14:30:00Z", tags: ["Security", "Quantum", "Rust", "Crypto"]
        },
        {
            id: 103, title: "AI Cancer Biomarker Genomic Classifier", category: "BioTech", department: "BioTech & Genetic Eng",
            owner_id: 5, owner_name: "Aisha Khan", mentor: "Prof. Elena Rostova", team_size: 5, status: "Open",
            difficulty: "Intermediate", duration: "10 Weeks", deadline: "2026-09-30",
            skills_required: "Python, R, Biopython, TensorFlow, Pandas",
            description: "Building Transformer models trained on TCGA genomic sequences to identify novel circulating RNA biomarkers for early-stage oncology diagnostics.",
            created_at: "2026-08-03T09:15:00Z", tags: ["BioTech", "Genomics", "TensorFlow", "Python"]
        },
        {
            id: 104, title: "Smart Campus IoT Energy Micro-Grid", category: "IoT", department: "Computer Science",
            owner_id: 1, owner_name: "Niyati Goplani", mentor: "Dr. Vikram Samant", team_size: 4, status: "Open",
            difficulty: "Intermediate", duration: "14 Weeks", deadline: "2026-10-20",
            skills_required: "ESP32, MQTT, Node.js, React, InfluxDB",
            description: "Developing real-time power monitoring sensors across university buildings with dynamic solar balancing and peak-load shedding dashboards.",
            created_at: "2026-08-04T11:45:00Z", tags: ["IoT", "CleanEnergy", "React", "NodeJS"]
        },
        {
            id: 105, title: "Neural Code Debugger & Refactoring Agent", category: "AI/ML", department: "Data Science & Analytics",
            owner_id: 4, owner_name: "Marcus Vance", mentor: "Prof. Aris Thorne", team_size: 3, status: "Open",
            difficulty: "Advanced", duration: "8 Weeks", deadline: "2026-12-05",
            skills_required: "Python, LLMs, AST, React, Docker",
            description: "Constructing an IDE plugin that performs static analysis and AST transformations using fine-tuned LLaMA-3 models to patch memory leaks instantly.",
            created_at: "2026-08-05T16:20:00Z", tags: ["AI", "DeveloperTools", "LLM", "Python"]
        },
        {
            id: 106, title: "Bionic Prosthetic Hand with Haptic Feedback", category: "Robotics", department: "Robotics & Hardware",
            owner_id: 6, owner_name: "David Miller", mentor: "Prof. Sophia Lin", team_size: 4, status: "Open",
            difficulty: "Advanced", duration: "16 Weeks", deadline: "2026-11-20",
            skills_required: "SolidWorks, Embedded C, Arduino, Neural Interfaces",
            description: "Building 3D-printed modular prosthetic limbs with EMG sensory arrays and pressure transducer feedback motors for fine motor touch sensitivity.",
            created_at: "2026-08-06T08:00:00Z", tags: ["Robotics", "Hardware", "BioMedical", "C++"]
        },
        {
            id: 107, title: "Zero-Knowledge Proof Academic Transcript Registry", category: "Cyber Security", department: "Cyber Security",
            owner_id: 3, owner_name: "Priya Patel", mentor: "Dr. Rajesh Kumar", team_size: 3, status: "Open",
            difficulty: "Advanced", duration: "12 Weeks", deadline: "2026-10-30",
            skills_required: "Solidity, Circom, Rust, Web3.js, React",
            description: "Enabling tamper-proof verification of university degrees and course credits without exposing confidential personal grade logs to third parties.",
            created_at: "2026-08-06T13:10:00Z", tags: ["Blockchain", "ZKP", "Web3", "Solidity"]
        },
        {
            id: 108, title: "High-Frequency Satellite Flood Risk Predictor", category: "Data Science", department: "AI & Machine Learning",
            owner_id: 2, owner_name: "Rohan Mehta", mentor: "Prof. Aris Thorne", team_size: 4, status: "Open",
            difficulty: "Advanced", duration: "10 Weeks", deadline: "2026-11-15",
            skills_required: "PyTorch, GIS, Remote Sensing, Python",
            description: "Processing Sentinel-2 SAR radar imagery in real time to generate hyper-local inundation heatmaps for disaster relief coordinators.",
            created_at: "2026-08-07T09:00:00Z", tags: ["DataScience", "Satellite", "PyTorch", "GIS"]
        },
        {
            id: 109, title: "Campus EV Charging Station Intelligent Coordinator", category: "IoT", department: "Computer Science",
            owner_id: 1, owner_name: "Niyati Goplani", mentor: "Dr. Vikram Samant", team_size: 3, status: "In Progress",
            difficulty: "Intermediate", duration: "8 Weeks", deadline: "2026-10-05",
            skills_required: "Python, React, Bluetooth Low Energy, Node.js",
            description: "Queue management & automated reservation mobile app for campus electric vehicle chargers linked to solar generation output.",
            created_at: "2026-08-07T11:30:00Z", tags: ["IoT", "Mobile", "CleanTech", "React"]
        },
        {
            id: 110, title: "Microplastic Bio-Spectroscopy Sensor Network", category: "Research", department: "BioTech & Genetic Eng",
            owner_id: 5, owner_name: "Aisha Khan", mentor: "Prof. Elena Rostova", team_size: 4, status: "Open",
            difficulty: "Intermediate", duration: "14 Weeks", deadline: "2026-11-10",
            skills_required: "Spectroscopy, Arduino, Python, Data Analytics",
            description: "Portable optical water quality monitoring probes deploying Raman spectroscopy to measure microplastic density in campus drinking reservoirs.",
            created_at: "2026-08-07T14:45:00Z", tags: ["Research", "CleanWater", "Sensors", "BioTech"]
        },
        {
            id: 111, title: "Peer-to-Peer Academic Tutor & Study Group Hub", category: "Mobile", department: "Data Science & Analytics",
            owner_id: 4, owner_name: "Marcus Vance", mentor: "Prof. Aris Thorne", team_size: 3, status: "Open",
            difficulty: "Beginner", duration: "6 Weeks", deadline: "2026-09-15",
            skills_required: "Flutter, Firebase, Node.js, UX Design",
            description: "Matching students needing help in advanced STEM courses with qualified upperclassmen tutors based on schedule availability and location.",
            created_at: "2026-08-07T16:00:00Z", tags: ["Mobile", "Flutter", "Firebase", "EdTech"]
        },
        {
            id: 112, title: "AR Interactive Campus Map & Historical Tour", category: "Design", department: "Robotics & Hardware",
            owner_id: 6, owner_name: "David Miller", mentor: "Prof. Sophia Lin", team_size: 3, status: "Open",
            difficulty: "Intermediate", duration: "8 Weeks", deadline: "2026-10-28",
            skills_required: "Unity, ARKit, C#, Blender, UI/UX",
            description: "Augmented reality mobile application superimposing 3D architectural evolution timelines and indoor room navigation over physical university buildings.",
            created_at: "2026-08-07T17:15:00Z", tags: ["AR", "Unity", "3D", "Design"]
        },
        {
            id: 113, title: "Autonomous Solar Tracking Array Microcontroller", category: "IoT", department: "Electrical Eng",
            owner_id: 1, owner_name: "Niyati Goplani", mentor: "Dr. Vikram Samant", team_size: 3, status: "Closed",
            difficulty: "Intermediate", duration: "10 Weeks", deadline: "2026-08-01",
            skills_required: "STM32, Embedded C, Control Systems, Solar",
            description: "Dual-axis solar tracker achieving 34% higher efficiency through real-time astronomical calculation and light-dependent resistor calibration.",
            created_at: "2026-07-20T09:00:00Z", tags: ["Solar", "Embedded", "C++", "Hardware"]
        },
        {
            id: 114, title: "AI-Powered Personalized STEM Learning Coach", category: "AI/ML", department: "Computer Science",
            owner_id: 1, owner_name: "Niyati Goplani", mentor: "Prof. Aris Thorne", team_size: 4, status: "Open",
            difficulty: "Intermediate", duration: "12 Weeks", deadline: "2026-11-05",
            skills_required: "OpenAI API, React, Node.js, MongoDB",
            description: "Adaptive tutoring platform that analyzes student code submission bottlenecks and generates custom step-by-step diagnostic hints.",
            created_at: "2026-08-08T10:00:00Z", tags: ["AI", "EdTech", "React", "NodeJS"]
        },
        {
            id: 115, title: "High-Speed Autonomous Vehicle Platooning Network", category: "Robotics", department: "Robotics & Hardware",
            owner_id: 2, owner_name: "Rohan Mehta", mentor: "Prof. Sophia Lin", team_size: 4, status: "Open",
            difficulty: "Advanced", duration: "14 Weeks", deadline: "2026-11-30",
            skills_required: "V2X, C++, ROS2, Control Systems",
            description: "V2V communication protocols enabling sub-meter vehicle drafting and synchronized braking for energy-efficient automated highway logistics.",
            created_at: "2026-08-08T12:30:00Z", tags: ["Autonomous", "Robotics", "V2X", "C++"]
        }
    ],
    applications: [
        {
            id: 201, project_id: 104, project_title: "Smart Campus IoT Energy Micro-Grid", category: "IoT",
            applicant_id: 2, applicant_name: "Rohan Mehta", roll: "23AI0841", department: "AI & Machine Learning",
            mentor: "Dr. Vikram Samant", skills: "PyTorch, C++, Python, ROS2", status: "Pending",
            created_at: "2026-08-05T14:20:00Z",
            message: "I can contribute machine learning predictive models for forecasting building energy consumption peaks 24 hours in advance.",
            motivation: "I have published research on temporal energy forecasting and want to apply these neural models directly to our campus micro-grid.",
            resume: "Rohan_Mehta_Resume_2026.pdf"
        },
        {
            id: 202, project_id: 104, project_title: "Smart Campus IoT Energy Micro-Grid", category: "IoT",
            applicant_id: 4, applicant_name: "Marcus Vance", roll: "24DS0112", department: "Data Science & Analytics",
            mentor: "Dr. Vikram Samant", skills: "Python, TensorDB, React, Docker", status: "Accepted",
            created_at: "2026-08-06T10:15:00Z",
            message: "Excited to build the data ingestion pipeline and high-performance React dashboard visualization components.",
            motivation: "Building scalable real-time IoT telemetry pipelines is my core passion. I already built a small-scale MQTT broker demo.",
            resume: "Marcus_Vance_Resume_2026.pdf"
        },
        {
            id: 203, project_id: 101, project_title: "Autonomous Swarm Drone Navigation", category: "AI/ML",
            applicant_id: 1, applicant_name: "Niyati Goplani", roll: "24CS0192", department: "Computer Science",
            mentor: "Prof. Aris Thorne", skills: "React, Node.js, Python, MQTT", status: "Accepted",
            created_at: "2026-08-04T09:30:00Z",
            message: "I can design the telemetry control station UI and real-time WebSockets state synchronization server.",
            motivation: "Collaborating with Rohan on aerial robotics will integrate perfectly with ground sensor telemetry.",
            resume: "Niyati_Goplani_Resume_2026.pdf"
        },
        {
            id: 204, project_id: 102, project_title: "Quantum-Resistant Cryptographic Vault", category: "Cyber Security",
            applicant_id: 1, applicant_name: "Niyati Goplani", roll: "24CS0192", department: "Computer Science",
            mentor: "Dr. Rajesh Kumar", skills: "React, Node.js, Rust, SQL", status: "Pending",
            created_at: "2026-08-07T11:00:00Z",
            message: "Would love to assist with REST/gRPC API bindings and client SDK implementation in Rust/TypeScript.",
            motivation: "Securing campus REST APIs against future quantum threats is vital for our infrastructure.",
            resume: "Niyati_Goplani_Resume_2026.pdf"
        },
        {
            id: 205, project_id: 103, project_title: "AI Cancer Biomarker Genomic Classifier", category: "BioTech",
            applicant_id: 4, applicant_name: "Marcus Vance", roll: "24DS0112", department: "Data Science & Analytics",
            mentor: "Prof. Elena Rostova", skills: "Python, TensorFlow, R, Pandas", status: "Rejected",
            created_at: "2026-08-03T16:00:00Z",
            message: "I am experienced in genomic tabular data cleaning and cross-validation pipelines.",
            motivation: "Interested in bio-data analytics applications.",
            resume: "Marcus_Vance_Resume_2026.pdf"
        },
        {
            id: 206, project_id: 104, project_title: "Smart Campus IoT Energy Micro-Grid", category: "IoT",
            applicant_id: 3, applicant_name: "Priya Patel", roll: "22CY0415", department: "Cyber Security",
            mentor: "Dr. Vikram Samant", skills: "Rust, Cryptography, Linux", status: "Pending",
            created_at: "2026-08-08T08:45:00Z",
            message: "I can audit the hardware sensor firmware for TLS encryption and prevent spoofing attacks on MQTT topics.",
            motivation: "Industrial micro-grids are vulnerable to IoT botnet exploits. Security must be built into hardware node firmware.",
            resume: "Priya_Patel_Resume_2026.pdf"
        },
        {
            id: 207, project_id: 106, project_title: "Bionic Prosthetic Hand with Haptic Feedback", category: "Robotics",
            applicant_id: 5, applicant_name: "Aisha Khan", roll: "23BT0509", department: "BioTech & Genetic Eng",
            mentor: "Prof. Sophia Lin", skills: "Python, Biopython, Machine Learning", status: "Accepted",
            created_at: "2026-08-07T09:15:00Z",
            message: "I can lead the EMG myoelectric signal classification module to map muscle contractions to precise hand gestures.",
            motivation: "Translating neuromuscular signals into robotic movement is the exact intersection of bio-engineering and robotics.",
            resume: "Aisha_Khan_Resume_2026.pdf"
        }
    ],
    events: [
        {
            id: 301, title: "NexusHack 2026: AI & Clean Energy Hackathon", event_type: "Hackathon",
            event_date: "2026-09-10", time: "09:00 AM", location: "Main Innovation Hub Auditorium",
            organizer_id: 101, organizer_name: "Prof. Aris Thorne", host_club: "AI & Robotics Society",
            max_attendees: 250, attendee_count: 198, description: "36-hour flagship hackathon building intelligent software & hardware prototypes for climate resilience and sustainable smart cities.",
            banner_color: "linear-gradient(135deg, #6366f1, #06b6d4)", countdown_target: "2026-09-10T09:00:00"
        },
        {
            id: 302, title: "Quantum Cryptography & Post-Quantum Security Summit", event_type: "Seminar",
            event_date: "2026-09-18", time: "02:00 PM", location: "Cyber Lab Hall B",
            organizer_id: 103, organizer_name: "Dr. Rajesh Kumar", host_club: "CyberSecurity Guild",
            max_attendees: 120, attendee_count: 110, description: "Distinguished keynote on NIST post-quantum standardization, lattice cryptography primitives, and real-world deployment challenges.",
            banner_color: "linear-gradient(135deg, #f43f5e, #8b5cf6)", countdown_target: "2026-09-18T14:00:00"
        },
        {
            id: 303, title: "ROS2 & Autonomous Robotics Masterclass Workshop", event_type: "Workshop",
            event_date: "2026-09-22", time: "10:00 AM", location: "Mechatronics Robotics Bay 4",
            organizer_id: 106, organizer_name: "Prof. Sophia Lin", host_club: "Autonomous Systems Club",
            max_attendees: 60, attendee_count: 54, description: "Hands-on coding lab setting up ROS2 Humble nodes, Gazebo physical simulations, and LiDAR SLAM navigation stack.",
            banner_color: "linear-gradient(135deg, #10b981, #3b82f6)", countdown_target: "2026-09-22T10:00:00"
        },
        {
            id: 304, title: "Genomics AI & RNA Biomarker Discovery Symposium", event_type: "Seminar",
            event_date: "2026-09-28", time: "11:30 AM", location: "BioTech Center Auditorium 302",
            organizer_id: 104, organizer_name: "Prof. Elena Rostova", host_club: "BioInformatics Association",
            max_attendees: 80, attendee_count: 62, description: "Exploring deep generative models for biological sequence folding and targeted RNA therapeutic discovery.",
            banner_color: "linear-gradient(135deg, #f59e0b, #ec4899)", countdown_target: "2026-09-28T11:30:00"
        },
        {
            id: 305, title: "Smart Grid & Campus EV Charging Prototype Expo", event_type: "Competition",
            event_date: "2026-10-05", time: "01:00 PM", location: "Engineering Quadrangle Green",
            organizer_id: 105, organizer_name: "Dr. Vikram Samant", host_club: "IEEE Student Chapter",
            max_attendees: 150, attendee_count: 125, description: "Live demonstration and competition of student-built solar micro-grid microcontrollers, EV charging nodes, and load balancing algorithms.",
            banner_color: "linear-gradient(135deg, #06b6d4, #10b981)", countdown_target: "2026-10-05T13:00:00"
        },
        {
            id: 306, title: "Full-Stack Cloud Systems & Next.js Architecture Bootcamp", event_type: "Workshop",
            event_date: "2026-10-12", time: "04:00 PM", location: "CS Department Lab 4",
            organizer_id: 1, organizer_name: "Niyati Goplani", host_club: "Web Dev Developers Club",
            max_attendees: 75, attendee_count: 75, description: "Intensive 4-hour workshop covering Server Actions, microservices communication, REST/GraphQL APIs, and Docker deployments.",
            banner_color: "linear-gradient(135deg, #6366f1, #f43f5e)", countdown_target: "2026-10-12T16:00:00"
        },
        {
            id: 307, title: "FinTech & Zero-Knowledge Cryptography Meetup", event_type: "Meetup",
            event_date: "2026-10-19", time: "05:00 PM", location: "Student Union Innovation Lounge",
            organizer_id: 3, organizer_name: "Priya Patel", host_club: "FinTech & Web3 Network",
            max_attendees: 50, attendee_count: 38, description: "Casual round-table discussion on Circom ZK-circuits, decentralized identity proofs, and privacy-preserving smart contracts.",
            banner_color: "linear-gradient(135deg, #8b5cf6, #06b6d4)", countdown_target: "2026-10-19T17:00:00"
        },
        {
            id: 308, title: "Annual Campus Robotics BattleBot Arena Championship", event_type: "Competition",
            event_date: "2026-10-25", time: "10:00 AM", location: "Campus Sports Arena Center",
            organizer_id: 6, organizer_name: "David Miller", host_club: "Robotics Arena Society",
            max_attendees: 300, attendee_count: 240, description: "High-octane combat robotics tournament featuring 30lb and 60lb custom radio-controlled and autonomous fighting robots.",
            banner_color: "linear-gradient(135deg, #ef4444, #f59e0b)", countdown_target: "2026-10-25T10:00:00"
        }
    ],
    messages: [
        { id: 401, sender_id: 101, sender_name: "Prof. Aris Thorne", receiver_id: 1, content: "Hi Niyati! I reviewed your Smart Grid Micro-Grid architecture diagram. Excellent work. Let's discuss adding automated anomaly detection during office hours tomorrow.", created_at: "2026-08-08T09:30:00Z" },
        { id: 402, sender_id: 1, sender_name: "Niyati Goplani", receiver_id: 101, content: "Thank you Prof. Thorne! That sounds great. I'll prepare the telemetry data logs for our 2 PM meeting.", created_at: "2026-08-08T09:42:00Z" },
        { id: 403, sender_id: 2, sender_name: "Rohan Mehta", receiver_id: 1, content: "Hey Niyati, I submitted an application for your Smart Grid project! Would love to hook up my solar predictive neural net to your broker.", created_at: "2026-08-08T10:15:00Z" },
        { id: 404, sender_id: 1, sender_name: "Niyati Goplani", receiver_id: 2, content: "Awesome Rohan! Just saw your note. Your PyTorch models for solar forecasting are a perfect fit. I'm accepting your application now!", created_at: "2026-08-08T10:28:00Z" },
        { id: 405, sender_id: 3, sender_name: "Priya Patel", receiver_id: 1, content: "Niyati, are you attending Dr. Kumar's Quantum Cryptography summit next week? We could present a joint paper on IoT security.", created_at: "2026-08-08T11:05:00Z" },
        { id: 406, sender_id: 1, sender_name: "Niyati Goplani", receiver_id: 3, content: "Definitely Priya! Let's draft the abstract this weekend. TLS on micro-grid sensors will make a strong case study.", created_at: "2026-08-08T11:20:00Z" },
        { id: 407, sender_id: 4, sender_name: "Marcus Vance", receiver_id: 1, content: "Hi Niyati, the React dashboard components for power telemetry are ready for code review on GitHub!", created_at: "2026-08-08T14:10:00Z" }
    ],
    tasks: [
        { id: 501, title: "Deploy ESP32 MQTT Sensor Firmware", project: "Smart Campus IoT Energy Micro-Grid", assignee: "Niyati Goplani", status: "Done", priority: "High", due: "2026-08-10" },
        { id: 502, title: "Train Solar Peak Neural Forecast Model", project: "Smart Campus IoT Energy Micro-Grid", assignee: "Rohan Mehta", status: "In Progress", priority: "High", due: "2026-08-14" },
        { id: 503, title: "Build React Telemetry Analytics Dashboard", project: "Smart Campus IoT Energy Micro-Grid", assignee: "Marcus Vance", status: "In Progress", priority: "Medium", due: "2026-08-18" },
        { id: 504, title: "Conduct TLS Firmware Security Audit", project: "Smart Campus IoT Energy Micro-Grid", assignee: "Priya Patel", status: "To Do", priority: "High", due: "2026-08-22" },
        { id: 505, title: "Swarm ROS2 Gazebo Physics Simulation", project: "Autonomous Swarm Drone Navigation", assignee: "Rohan Mehta", status: "Done", priority: "High", due: "2026-08-12" },
        { id: 506, title: "CRYSTALS-Kyber Lattice Key Exchange Test", project: "Quantum-Resistant Cryptographic Vault", assignee: "Priya Patel", status: "In Progress", priority: "High", due: "2026-08-25" }
    ],
    activityStream: [
        { id: 601, user: "Rohan Mehta", action: "submitted an application to", target: "Smart Campus IoT Energy Micro-Grid", time: "15 mins ago", icon: "📋", color: "purple" },
        { id: 602, user: "Prof. Aris Thorne", action: "published a new event", target: "NexusHack 2026: AI & Clean Energy", time: "1 hour ago", icon: "🏆", color: "teal" },
        { id: 603, user: "Niyati Goplani", action: "accepted Marcus Vance into", target: "Smart Campus IoT Energy Micro-Grid", time: "3 hours ago", icon: "✅", color: "teal" },
        { id: 604, user: "Priya Patel", action: "updated project status to Open", target: "Zero-Knowledge Proof Transcript Registry", time: "5 hours ago", icon: "🔐", color: "rose" },
        { id: 605, user: "Dr. Vikram Samant", action: "approved research equipment for", target: "Smart Campus IoT Energy Micro-Grid", time: "Yesterday", icon: "⚡", color: "amber" }
    ],
        notifications: [
        { id: 701, title: "Application Accepted!", body: "Rohan Mehta accepted your application to Autonomous Swarm Drone Navigation.", time: "10 mins ago", type: "success", unread: true },
        { id: 702, title: "New Message from Faculty", body: "Prof. Aris Thorne sent you a message regarding telemetry anomaly detection.", time: "45 mins ago", type: "info", unread: true },
        { id: 703, title: "Upcoming Event Tomorrow", body: "Bootcamp: Full-Stack Cloud Systems starts at 4:00 PM in CS Lab 4.", time: "2 hours ago", type: "warning", unread: false },
        { id: 704, title: "Project Status Updated", body: "Smart Campus EV Charging Coordinator status set to In Progress.", time: "1 day ago", type: "info", unread: false }
    ],
    notes: [
        {
                "id": 801,
                "subject": "Professional Communication & Soft Skills",
                "department": "Information Technology (IT)",
                "semester": "Semester 1",
                "faculty_name": "Prof. Alan Turing",
                "uploaded_by": "Course Coordinator (Alan)",
                "upload_date": "2026-08-13",
                "file_type": "PPT",
                "file_size": "8.1 MB",
                "downloads": 665,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Professional Communication & Soft Skills. Verified by department faculty.",
                "tags": [
                        "Professional",
                        "Semester1",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 802,
                "subject": "Engineering Physics - I",
                "department": "Information Technology (IT)",
                "semester": "Semester 1",
                "faculty_name": "Prof. Alan Turing",
                "uploaded_by": "Course Coordinator (Alan)",
                "upload_date": "2026-08-17",
                "file_type": "PDF",
                "file_size": "2.4 MB",
                "downloads": 703,
                "rating": 4.5,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Engineering Physics - I. Verified by department faculty.",
                "tags": [
                        "Engineering",
                        "Semester1",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 803,
                "subject": "Problem Solving & C Programming",
                "department": "Information Technology (IT)",
                "semester": "Semester 2",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Senior Teaching Assistant (Sarah)",
                "upload_date": "2026-08-03",
                "file_type": "PPT",
                "file_size": "6.8 MB",
                "downloads": 239,
                "rating": 4.6,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Problem Solving & C Programming. Verified by department faculty.",
                "tags": [
                        "Problem",
                        "Semester2",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 804,
                "subject": "Basic Electrical & Electronics",
                "department": "Information Technology (IT)",
                "semester": "Semester 2",
                "faculty_name": "Prof. Aris Thorne",
                "uploaded_by": "Faculty (Aris)",
                "upload_date": "2026-08-22",
                "file_type": "PDF",
                "file_size": "3.1 MB",
                "downloads": 372,
                "rating": 4.8,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Basic Electrical & Electronics. Verified by department faculty.",
                "tags": [
                        "Basic",
                        "Semester2",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 805,
                "subject": "Data Structures & Algorithms",
                "department": "Information Technology (IT)",
                "semester": "Semester 3",
                "faculty_name": "Prof. Aris Thorne",
                "uploaded_by": "Course Coordinator (Aris)",
                "upload_date": "2026-08-25",
                "file_type": "DOCX",
                "file_size": "8.1 MB",
                "downloads": 644,
                "rating": 4.5,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Data Structures & Algorithms. Verified by department faculty.",
                "tags": [
                        "Data",
                        "Semester3",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 806,
                "subject": "Digital Logic Design",
                "department": "Information Technology (IT)",
                "semester": "Semester 3",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Senior Teaching Assistant (Sarah)",
                "upload_date": "2026-08-16",
                "file_type": "PPT",
                "file_size": "5.2 MB",
                "downloads": 406,
                "rating": 4.4,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Digital Logic Design. Verified by department faculty.",
                "tags": [
                        "Digital",
                        "Semester3",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 807,
                "subject": "Database Management Systems",
                "department": "Information Technology (IT)",
                "semester": "Semester 4",
                "faculty_name": "Prof. Aris Thorne",
                "uploaded_by": "Faculty (Aris)",
                "upload_date": "2026-08-04",
                "file_type": "PDF",
                "file_size": "3.1 MB",
                "downloads": 324,
                "rating": 4.6,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Database Management Systems. Verified by department faculty.",
                "tags": [
                        "Database",
                        "Semester4",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 808,
                "subject": "Computer Networks",
                "department": "Information Technology (IT)",
                "semester": "Semester 4",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Senior Teaching Assistant (Sarah)",
                "upload_date": "2026-08-13",
                "file_type": "PDF",
                "file_size": "2.4 MB",
                "downloads": 149,
                "rating": 4.4,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Computer Networks. Verified by department faculty.",
                "tags": [
                        "Computer",
                        "Semester4",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 809,
                "subject": "Theory of Computation",
                "department": "Information Technology (IT)",
                "semester": "Semester 4",
                "faculty_name": "Dr. Meera Reddy",
                "uploaded_by": "Head of Department (Meera)",
                "upload_date": "2026-08-17",
                "file_type": "PDF",
                "file_size": "3.1 MB",
                "downloads": 394,
                "rating": 4.8,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Theory of Computation. Verified by department faculty.",
                "tags": [
                        "Theory",
                        "Semester4",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 810,
                "subject": "Artificial Intelligence",
                "department": "Information Technology (IT)",
                "semester": "Semester 4",
                "faculty_name": "Prof. Alan Turing",
                "uploaded_by": "Course Coordinator (Alan)",
                "upload_date": "2026-08-09",
                "file_type": "PDF",
                "file_size": "6.8 MB",
                "downloads": 270,
                "rating": 4.6,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Artificial Intelligence. Verified by department faculty.",
                "tags": [
                        "Artificial",
                        "Semester4",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 811,
                "subject": "Data Mining & Machine Learning",
                "department": "Information Technology (IT)",
                "semester": "Semester 4",
                "faculty_name": "Prof. Aris Thorne",
                "uploaded_by": "Faculty (Aris)",
                "upload_date": "2026-08-21",
                "file_type": "PDF",
                "file_size": "5.2 MB",
                "downloads": 148,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Data Mining & Machine Learning. Verified by department faculty.",
                "tags": [
                        "Data",
                        "Semester4",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 812,
                "subject": "Cyber Security",
                "department": "Information Technology (IT)",
                "semester": "Semester 4",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Head of Department (Sarah)",
                "upload_date": "2026-08-25",
                "file_type": "DOCX",
                "file_size": "3.1 MB",
                "downloads": 229,
                "rating": 4.2,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Cyber Security. Verified by department faculty.",
                "tags": [
                        "Cyber",
                        "Semester4",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 813,
                "subject": "Operating Systems",
                "department": "Information Technology (IT)",
                "semester": "Semester 4",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Course Coordinator (Sarah)",
                "upload_date": "2026-08-15",
                "file_type": "PDF",
                "file_size": "3.1 MB",
                "downloads": 806,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Operating Systems. Verified by department faculty.",
                "tags": [
                        "Operating",
                        "Semester4",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 814,
                "subject": "Web Technologies",
                "department": "Information Technology (IT)",
                "semester": "Semester 5",
                "faculty_name": "Prof. Aris Thorne",
                "uploaded_by": "Senior Teaching Assistant (Aris)",
                "upload_date": "2026-08-14",
                "file_type": "PPT",
                "file_size": "1.8 MB",
                "downloads": 615,
                "rating": 4.3,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Web Technologies. Verified by department faculty.",
                "tags": [
                        "Web",
                        "Semester5",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 815,
                "subject": "Object-Oriented Software Engineering",
                "department": "Information Technology (IT)",
                "semester": "Semester 5",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Senior Teaching Assistant (Sarah)",
                "upload_date": "2026-08-19",
                "file_type": "PDF",
                "file_size": "2.4 MB",
                "downloads": 243,
                "rating": 4.4,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Object-Oriented Software Engineering. Verified by department faculty.",
                "tags": [
                        "ObjectOriented",
                        "Semester5",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 816,
                "subject": "Cloud Computing & Virtualization",
                "department": "Information Technology (IT)",
                "semester": "Semester 6",
                "faculty_name": "Prof. Aris Thorne",
                "uploaded_by": "Senior Teaching Assistant (Aris)",
                "upload_date": "2026-08-20",
                "file_type": "PDF",
                "file_size": "8.1 MB",
                "downloads": 174,
                "rating": 4.7,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Cloud Computing & Virtualization. Verified by department faculty.",
                "tags": [
                        "Cloud",
                        "Semester6",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 817,
                "subject": "Distributed Systems",
                "department": "Information Technology (IT)",
                "semester": "Semester 6",
                "faculty_name": "Prof. Alan Turing",
                "uploaded_by": "Senior Teaching Assistant (Alan)",
                "upload_date": "2026-08-04",
                "file_type": "DOCX",
                "file_size": "12.4 MB",
                "downloads": 740,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Distributed Systems. Verified by department faculty.",
                "tags": [
                        "Distributed",
                        "Semester6",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 818,
                "subject": "Information & Network Security",
                "department": "Information Technology (IT)",
                "semester": "Semester 7",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Senior Teaching Assistant (Sarah)",
                "upload_date": "2026-08-13",
                "file_type": "PPT",
                "file_size": "1.8 MB",
                "downloads": 133,
                "rating": 4.6,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Information & Network Security. Verified by department faculty.",
                "tags": [
                        "Information",
                        "Semester7",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 819,
                "subject": "Mobile Computing",
                "department": "Information Technology (IT)",
                "semester": "Semester 7",
                "faculty_name": "Prof. Aris Thorne",
                "uploaded_by": "Senior Teaching Assistant (Aris)",
                "upload_date": "2026-08-05",
                "file_type": "PPT",
                "file_size": "4.5 MB",
                "downloads": 658,
                "rating": 5,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Mobile Computing. Verified by department faculty.",
                "tags": [
                        "Mobile",
                        "Semester7",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 820,
                "subject": "Enterprise Resource Planning",
                "department": "Information Technology (IT)",
                "semester": "Semester 8",
                "faculty_name": "Dr. Meera Reddy",
                "uploaded_by": "Senior Teaching Assistant (Meera)",
                "upload_date": "2026-08-11",
                "file_type": "PDF",
                "file_size": "12.4 MB",
                "downloads": 209,
                "rating": 4.2,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Enterprise Resource Planning. Verified by department faculty.",
                "tags": [
                        "Enterprise",
                        "Semester8",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 821,
                "subject": "IT Infrastructure & DevOps",
                "department": "Information Technology (IT)",
                "semester": "Semester 8",
                "faculty_name": "Prof. Alan Turing",
                "uploaded_by": "Head of Department (Alan)",
                "upload_date": "2026-08-07",
                "file_type": "PDF",
                "file_size": "6.8 MB",
                "downloads": 621,
                "rating": 4.3,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for IT Infrastructure & DevOps. Verified by department faculty.",
                "tags": [
                        "IT",
                        "Semester8",
                        "IT",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 822,
                "subject": "Mathematics - I (Calculus & Linear Algebra)",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 1",
                "faculty_name": "Dr. Clara Oswald",
                "uploaded_by": "Senior Teaching Assistant (Clara)",
                "upload_date": "2026-08-21",
                "file_type": "DOCX",
                "file_size": "2.4 MB",
                "downloads": 118,
                "rating": 4.8,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Mathematics - I (Calculus & Linear Algebra). Verified by department faculty.",
                "tags": [
                        "Mathematics",
                        "Semester1",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 823,
                "subject": "Engineering Chemistry",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 1",
                "faculty_name": "Dr. Clara Oswald",
                "uploaded_by": "Faculty (Clara)",
                "upload_date": "2026-08-24",
                "file_type": "DOCX",
                "file_size": "12.4 MB",
                "downloads": 535,
                "rating": 4.3,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Engineering Chemistry. Verified by department faculty.",
                "tags": [
                        "Engineering",
                        "Semester1",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 824,
                "subject": "Object-Oriented Programming with C++",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 2",
                "faculty_name": "Dr. Clara Oswald",
                "uploaded_by": "Course Coordinator (Clara)",
                "upload_date": "2026-08-11",
                "file_type": "PDF",
                "file_size": "8.1 MB",
                "downloads": 725,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Object-Oriented Programming with C++. Verified by department faculty.",
                "tags": [
                        "ObjectOriented",
                        "Semester2",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 825,
                "subject": "Discrete Mathematics",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 2",
                "faculty_name": "Dr. Clara Oswald",
                "uploaded_by": "Senior Teaching Assistant (Clara)",
                "upload_date": "2026-08-25",
                "file_type": "PPT",
                "file_size": "6.8 MB",
                "downloads": 447,
                "rating": 4.8,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Discrete Mathematics. Verified by department faculty.",
                "tags": [
                        "Discrete",
                        "Semester2",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 826,
                "subject": "Advanced Data Structures",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 3",
                "faculty_name": "Prof. Robert Lang",
                "uploaded_by": "Faculty (Robert)",
                "upload_date": "2026-08-15",
                "file_type": "DOCX",
                "file_size": "12.4 MB",
                "downloads": 402,
                "rating": 4.3,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Advanced Data Structures. Verified by department faculty.",
                "tags": [
                        "Advanced",
                        "Semester3",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 827,
                "subject": "Computer Organization & Architecture",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 3",
                "faculty_name": "Prof. Aris Thorne",
                "uploaded_by": "Course Coordinator (Aris)",
                "upload_date": "2026-08-13",
                "file_type": "PDF",
                "file_size": "1.8 MB",
                "downloads": 905,
                "rating": 4.8,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Computer Organization & Architecture. Verified by department faculty.",
                "tags": [
                        "Computer",
                        "Semester3",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 828,
                "subject": "Operating Systems Concepts",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 4",
                "faculty_name": "Dr. Rajesh Kumar",
                "uploaded_by": "Faculty (Rajesh)",
                "upload_date": "2026-08-25",
                "file_type": "DOCX",
                "file_size": "3.1 MB",
                "downloads": 799,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Operating Systems Concepts. Verified by department faculty.",
                "tags": [
                        "Operating",
                        "Semester4",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 829,
                "subject": "Theory of Automata & Languages",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 4",
                "faculty_name": "Dr. Clara Oswald",
                "uploaded_by": "Course Coordinator (Clara)",
                "upload_date": "2026-08-06",
                "file_type": "PDF",
                "file_size": "1.8 MB",
                "downloads": 197,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Theory of Automata & Languages. Verified by department faculty.",
                "tags": [
                        "Theory",
                        "Semester4",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 830,
                "subject": "Design & Analysis of Algorithms",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 4",
                "faculty_name": "Prof. Robert Lang",
                "uploaded_by": "Senior Teaching Assistant (Robert)",
                "upload_date": "2026-08-25",
                "file_type": "PDF",
                "file_size": "5.2 MB",
                "downloads": 129,
                "rating": 4.3,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Design & Analysis of Algorithms. Verified by department faculty.",
                "tags": [
                        "Design",
                        "Semester4",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 831,
                "subject": "Compiler Design Principles",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 5",
                "faculty_name": "Prof. Aris Thorne",
                "uploaded_by": "Course Coordinator (Aris)",
                "upload_date": "2026-08-09",
                "file_type": "PDF",
                "file_size": "1.8 MB",
                "downloads": 475,
                "rating": 4.8,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Compiler Design Principles. Verified by department faculty.",
                "tags": [
                        "Compiler",
                        "Semester5",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 832,
                "subject": "Computer Networks Architecture",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 5",
                "faculty_name": "Prof. Aris Thorne",
                "uploaded_by": "Course Coordinator (Aris)",
                "upload_date": "2026-08-01",
                "file_type": "DOCX",
                "file_size": "5.2 MB",
                "downloads": 729,
                "rating": 4.2,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Computer Networks Architecture. Verified by department faculty.",
                "tags": [
                        "Computer",
                        "Semester5",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 833,
                "subject": "Software Engineering & Agile",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 6",
                "faculty_name": "Dr. Rajesh Kumar",
                "uploaded_by": "Course Coordinator (Rajesh)",
                "upload_date": "2026-08-06",
                "file_type": "PDF",
                "file_size": "1.8 MB",
                "downloads": 698,
                "rating": 4.2,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Software Engineering & Agile. Verified by department faculty.",
                "tags": [
                        "Software",
                        "Semester6",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 834,
                "subject": "Parallel & Distributed Computing",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 6",
                "faculty_name": "Dr. Clara Oswald",
                "uploaded_by": "Senior Teaching Assistant (Clara)",
                "upload_date": "2026-08-16",
                "file_type": "PDF",
                "file_size": "8.1 MB",
                "downloads": 237,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Parallel & Distributed Computing. Verified by department faculty.",
                "tags": [
                        "Parallel",
                        "Semester6",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 835,
                "subject": "Cryptography & Network Security",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 7",
                "faculty_name": "Prof. Aris Thorne",
                "uploaded_by": "Senior Teaching Assistant (Aris)",
                "upload_date": "2026-08-21",
                "file_type": "PPT",
                "file_size": "3.1 MB",
                "downloads": 600,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Cryptography & Network Security. Verified by department faculty.",
                "tags": [
                        "Cryptography",
                        "Semester7",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 836,
                "subject": "Blockchain Technology Primitives",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 7",
                "faculty_name": "Prof. Aris Thorne",
                "uploaded_by": "Course Coordinator (Aris)",
                "upload_date": "2026-08-08",
                "file_type": "PDF",
                "file_size": "2.4 MB",
                "downloads": 806,
                "rating": 4.7,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Blockchain Technology Primitives. Verified by department faculty.",
                "tags": [
                        "Blockchain",
                        "Semester7",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 837,
                "subject": "Quantum Computing Fundamentals",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 8",
                "faculty_name": "Prof. Robert Lang",
                "uploaded_by": "Senior Teaching Assistant (Robert)",
                "upload_date": "2026-08-04",
                "file_type": "PDF",
                "file_size": "2.4 MB",
                "downloads": 550,
                "rating": 4.3,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Quantum Computing Fundamentals. Verified by department faculty.",
                "tags": [
                        "Quantum",
                        "Semester8",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 838,
                "subject": "High-Performance Computing Systems",
                "department": "Computer Science Engineering (CSE)",
                "semester": "Semester 8",
                "faculty_name": "Prof. Aris Thorne",
                "uploaded_by": "Faculty (Aris)",
                "upload_date": "2026-08-09",
                "file_type": "DOCX",
                "file_size": "4.5 MB",
                "downloads": 79,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for High-Performance Computing Systems. Verified by department faculty.",
                "tags": [
                        "HighPerformance",
                        "Semester8",
                        "CSE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 839,
                "subject": "Applied Linear Algebra & Matrices",
                "department": "Artificial Intelligence & Data Science (AI & DS)",
                "semester": "Semester 1",
                "faculty_name": "Dr. Sanjay Mehta",
                "uploaded_by": "Senior Teaching Assistant (Sanjay)",
                "upload_date": "2026-08-06",
                "file_type": "DOCX",
                "file_size": "4.5 MB",
                "downloads": 634,
                "rating": 4.2,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Applied Linear Algebra & Matrices. Verified by department faculty.",
                "tags": [
                        "Applied",
                        "Semester1",
                        "AIDS",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 840,
                "subject": "Python Programming Fundamentals",
                "department": "Artificial Intelligence & Data Science (AI & DS)",
                "semester": "Semester 1",
                "faculty_name": "Prof. Elena Rostova",
                "uploaded_by": "Faculty (Elena)",
                "upload_date": "2026-08-16",
                "file_type": "PPT",
                "file_size": "12.4 MB",
                "downloads": 726,
                "rating": 4.7,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Python Programming Fundamentals. Verified by department faculty.",
                "tags": [
                        "Python",
                        "Semester1",
                        "AIDS",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 841,
                "subject": "Probability & Random Processes",
                "department": "Artificial Intelligence & Data Science (AI & DS)",
                "semester": "Semester 2",
                "faculty_name": "Prof. Elena Rostova",
                "uploaded_by": "Head of Department (Elena)",
                "upload_date": "2026-08-01",
                "file_type": "DOCX",
                "file_size": "6.8 MB",
                "downloads": 830,
                "rating": 4.7,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Probability & Random Processes. Verified by department faculty.",
                "tags": [
                        "Probability",
                        "Semester2",
                        "AIDS",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 842,
                "subject": "Data Visualization & EDA",
                "department": "Artificial Intelligence & Data Science (AI & DS)",
                "semester": "Semester 2",
                "faculty_name": "Dr. Sanjay Mehta",
                "uploaded_by": "Course Coordinator (Sanjay)",
                "upload_date": "2026-08-22",
                "file_type": "PDF",
                "file_size": "12.4 MB",
                "downloads": 127,
                "rating": 4.7,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Data Visualization & EDA. Verified by department faculty.",
                "tags": [
                        "Data",
                        "Semester2",
                        "AIDS",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 843,
                "subject": "Mathematical Foundations for AI",
                "department": "Artificial Intelligence & Data Science (AI & DS)",
                "semester": "Semester 3",
                "faculty_name": "Dr. Marcus Vance",
                "uploaded_by": "Faculty (Marcus)",
                "upload_date": "2026-08-22",
                "file_type": "DOCX",
                "file_size": "2.4 MB",
                "downloads": 735,
                "rating": 4.4,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Mathematical Foundations for AI. Verified by department faculty.",
                "tags": [
                        "Mathematical",
                        "Semester3",
                        "AIDS",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 844,
                "subject": "Data Structures in Python",
                "department": "Artificial Intelligence & Data Science (AI & DS)",
                "semester": "Semester 3",
                "faculty_name": "Prof. Aris Thorne",
                "uploaded_by": "Faculty (Aris)",
                "upload_date": "2026-08-03",
                "file_type": "DOCX",
                "file_size": "1.8 MB",
                "downloads": 408,
                "rating": 4.7,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Data Structures in Python. Verified by department faculty.",
                "tags": [
                        "Data",
                        "Semester3",
                        "AIDS",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 845,
                "subject": "Machine Learning Models & Optimization",
                "department": "Artificial Intelligence & Data Science (AI & DS)",
                "semester": "Semester 4",
                "faculty_name": "Dr. Marcus Vance",
                "uploaded_by": "Senior Teaching Assistant (Marcus)",
                "upload_date": "2026-08-03",
                "file_type": "DOCX",
                "file_size": "12.4 MB",
                "downloads": 873,
                "rating": 4.8,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Machine Learning Models & Optimization. Verified by department faculty.",
                "tags": [
                        "Machine",
                        "Semester4",
                        "AIDS",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 846,
                "subject": "Deep Learning Architectures",
                "department": "Artificial Intelligence & Data Science (AI & DS)",
                "semester": "Semester 4",
                "faculty_name": "Prof. Elena Rostova",
                "uploaded_by": "Head of Department (Elena)",
                "upload_date": "2026-08-07",
                "file_type": "DOCX",
                "file_size": "8.1 MB",
                "downloads": 667,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Deep Learning Architectures. Verified by department faculty.",
                "tags": [
                        "Deep",
                        "Semester4",
                        "AIDS",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 847,
                "subject": "Natural Language Processing",
                "department": "Artificial Intelligence & Data Science (AI & DS)",
                "semester": "Semester 5",
                "faculty_name": "Prof. Elena Rostova",
                "uploaded_by": "Head of Department (Elena)",
                "upload_date": "2026-08-11",
                "file_type": "PDF",
                "file_size": "2.4 MB",
                "downloads": 591,
                "rating": 4.5,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Natural Language Processing. Verified by department faculty.",
                "tags": [
                        "Natural",
                        "Semester5",
                        "AIDS",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 848,
                "subject": "Computer Vision & Pattern Recognition",
                "department": "Artificial Intelligence & Data Science (AI & DS)",
                "semester": "Semester 5",
                "faculty_name": "Dr. Marcus Vance",
                "uploaded_by": "Senior Teaching Assistant (Marcus)",
                "upload_date": "2026-08-08",
                "file_type": "PPT",
                "file_size": "4.5 MB",
                "downloads": 771,
                "rating": 4.6,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Computer Vision & Pattern Recognition. Verified by department faculty.",
                "tags": [
                        "Computer",
                        "Semester5",
                        "AIDS",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 849,
                "subject": "Big Data Analytics & Spark",
                "department": "Artificial Intelligence & Data Science (AI & DS)",
                "semester": "Semester 6",
                "faculty_name": "Dr. Sanjay Mehta",
                "uploaded_by": "Senior Teaching Assistant (Sanjay)",
                "upload_date": "2026-08-05",
                "file_type": "PPT",
                "file_size": "2.4 MB",
                "downloads": 356,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Big Data Analytics & Spark. Verified by department faculty.",
                "tags": [
                        "Big",
                        "Semester6",
                        "AIDS",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 850,
                "subject": "Neural Networks & PyTorch",
                "department": "Artificial Intelligence & Data Science (AI & DS)",
                "semester": "Semester 6",
                "faculty_name": "Dr. Marcus Vance",
                "uploaded_by": "Head of Department (Marcus)",
                "upload_date": "2026-08-05",
                "file_type": "PPT",
                "file_size": "2.4 MB",
                "downloads": 522,
                "rating": 4.3,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Neural Networks & PyTorch. Verified by department faculty.",
                "tags": [
                        "Neural",
                        "Semester6",
                        "AIDS",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 851,
                "subject": "Reinforcement Learning Agents",
                "department": "Artificial Intelligence & Data Science (AI & DS)",
                "semester": "Semester 7",
                "faculty_name": "Dr. Marcus Vance",
                "uploaded_by": "Head of Department (Marcus)",
                "upload_date": "2026-08-16",
                "file_type": "DOCX",
                "file_size": "2.4 MB",
                "downloads": 763,
                "rating": 4.2,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Reinforcement Learning Agents. Verified by department faculty.",
                "tags": [
                        "Reinforcement",
                        "Semester7",
                        "AIDS",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 852,
                "subject": "Generative AI & Transformer Models",
                "department": "Artificial Intelligence & Data Science (AI & DS)",
                "semester": "Semester 7",
                "faculty_name": "Dr. Marcus Vance",
                "uploaded_by": "Faculty (Marcus)",
                "upload_date": "2026-08-01",
                "file_type": "PDF",
                "file_size": "5.2 MB",
                "downloads": 856,
                "rating": 4.6,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Generative AI & Transformer Models. Verified by department faculty.",
                "tags": [
                        "Generative",
                        "Semester7",
                        "AIDS",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 853,
                "subject": "Ethics & Governance in AI",
                "department": "Artificial Intelligence & Data Science (AI & DS)",
                "semester": "Semester 8",
                "faculty_name": "Prof. Elena Rostova",
                "uploaded_by": "Course Coordinator (Elena)",
                "upload_date": "2026-08-06",
                "file_type": "PPT",
                "file_size": "8.1 MB",
                "downloads": 576,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Ethics & Governance in AI. Verified by department faculty.",
                "tags": [
                        "Ethics",
                        "Semester8",
                        "AIDS",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 854,
                "subject": "MLOps & Model Deployment",
                "department": "Artificial Intelligence & Data Science (AI & DS)",
                "semester": "Semester 8",
                "faculty_name": "Dr. Sanjay Mehta",
                "uploaded_by": "Head of Department (Sanjay)",
                "upload_date": "2026-08-01",
                "file_type": "PDF",
                "file_size": "1.8 MB",
                "downloads": 540,
                "rating": 4.6,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for MLOps & Model Deployment. Verified by department faculty.",
                "tags": [
                        "MLOps",
                        "Semester8",
                        "AIDS",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 855,
                "subject": "Engineering Physics & Optics",
                "department": "Electronics & Communication Engineering (ECE)",
                "semester": "Semester 1",
                "faculty_name": "Dr. Meera Reddy",
                "uploaded_by": "Head of Department (Meera)",
                "upload_date": "2026-08-25",
                "file_type": "PDF",
                "file_size": "3.1 MB",
                "downloads": 204,
                "rating": 4.8,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Engineering Physics & Optics. Verified by department faculty.",
                "tags": [
                        "Engineering",
                        "Semester1",
                        "ECE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 856,
                "subject": "Basic Circuit Analysis",
                "department": "Electronics & Communication Engineering (ECE)",
                "semester": "Semester 1",
                "faculty_name": "Prof. Sophia Lin",
                "uploaded_by": "Senior Teaching Assistant (Sophia)",
                "upload_date": "2026-08-25",
                "file_type": "PDF",
                "file_size": "4.5 MB",
                "downloads": 239,
                "rating": 4.3,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Basic Circuit Analysis. Verified by department faculty.",
                "tags": [
                        "Basic",
                        "Semester1",
                        "ECE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 857,
                "subject": "Electronic Devices & Semiconductors",
                "department": "Electronics & Communication Engineering (ECE)",
                "semester": "Semester 2",
                "faculty_name": "Prof. Alan Turing",
                "uploaded_by": "Senior Teaching Assistant (Alan)",
                "upload_date": "2026-08-25",
                "file_type": "PDF",
                "file_size": "1.8 MB",
                "downloads": 210,
                "rating": 4.4,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Electronic Devices & Semiconductors. Verified by department faculty.",
                "tags": [
                        "Electronic",
                        "Semester2",
                        "ECE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 858,
                "subject": "Differential Equations",
                "department": "Electronics & Communication Engineering (ECE)",
                "semester": "Semester 2",
                "faculty_name": "Dr. K. V. Raman",
                "uploaded_by": "Faculty (K.)",
                "upload_date": "2026-08-11",
                "file_type": "PPT",
                "file_size": "4.5 MB",
                "downloads": 806,
                "rating": 4.7,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Differential Equations. Verified by department faculty.",
                "tags": [
                        "Differential",
                        "Semester2",
                        "ECE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 859,
                "subject": "Analog Circuits & Op-Amps",
                "department": "Electronics & Communication Engineering (ECE)",
                "semester": "Semester 3",
                "faculty_name": "Prof. Sophia Lin",
                "uploaded_by": "Course Coordinator (Sophia)",
                "upload_date": "2026-08-07",
                "file_type": "PDF",
                "file_size": "5.2 MB",
                "downloads": 238,
                "rating": 4.8,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Analog Circuits & Op-Amps. Verified by department faculty.",
                "tags": [
                        "Analog",
                        "Semester3",
                        "ECE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 860,
                "subject": "Network Theory & Synthesis",
                "department": "Electronics & Communication Engineering (ECE)",
                "semester": "Semester 3",
                "faculty_name": "Dr. Meera Reddy",
                "uploaded_by": "Course Coordinator (Meera)",
                "upload_date": "2026-08-21",
                "file_type": "DOCX",
                "file_size": "2.4 MB",
                "downloads": 918,
                "rating": 4.7,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Network Theory & Synthesis. Verified by department faculty.",
                "tags": [
                        "Network",
                        "Semester3",
                        "ECE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 861,
                "subject": "Digital Signal Processing (DSP)",
                "department": "Electronics & Communication Engineering (ECE)",
                "semester": "Semester 4",
                "faculty_name": "Dr. K. V. Raman",
                "uploaded_by": "Head of Department (K.)",
                "upload_date": "2026-08-12",
                "file_type": "PDF",
                "file_size": "8.1 MB",
                "downloads": 137,
                "rating": 4.8,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Digital Signal Processing (DSP). Verified by department faculty.",
                "tags": [
                        "Digital",
                        "Semester4",
                        "ECE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 862,
                "subject": "Signals & Systems Analysis",
                "department": "Electronics & Communication Engineering (ECE)",
                "semester": "Semester 4",
                "faculty_name": "Dr. K. V. Raman",
                "uploaded_by": "Faculty (K.)",
                "upload_date": "2026-08-04",
                "file_type": "PDF",
                "file_size": "12.4 MB",
                "downloads": 556,
                "rating": 4.5,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Signals & Systems Analysis. Verified by department faculty.",
                "tags": [
                        "Signals",
                        "Semester4",
                        "ECE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 863,
                "subject": "Microprocessors & Microcontrollers",
                "department": "Electronics & Communication Engineering (ECE)",
                "semester": "Semester 5",
                "faculty_name": "Prof. Alan Turing",
                "uploaded_by": "Senior Teaching Assistant (Alan)",
                "upload_date": "2026-08-12",
                "file_type": "PDF",
                "file_size": "1.8 MB",
                "downloads": 389,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Microprocessors & Microcontrollers. Verified by department faculty.",
                "tags": [
                        "Microprocessors",
                        "Semester5",
                        "ECE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 864,
                "subject": "Electromagnetic Theory",
                "department": "Electronics & Communication Engineering (ECE)",
                "semester": "Semester 5",
                "faculty_name": "Dr. K. V. Raman",
                "uploaded_by": "Senior Teaching Assistant (K.)",
                "upload_date": "2026-08-09",
                "file_type": "PDF",
                "file_size": "12.4 MB",
                "downloads": 474,
                "rating": 4.5,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Electromagnetic Theory. Verified by department faculty.",
                "tags": [
                        "Electromagnetic",
                        "Semester5",
                        "ECE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 865,
                "subject": "VLSI Design & Verilog HDL",
                "department": "Electronics & Communication Engineering (ECE)",
                "semester": "Semester 6",
                "faculty_name": "Dr. K. V. Raman",
                "uploaded_by": "Course Coordinator (K.)",
                "upload_date": "2026-08-03",
                "file_type": "PDF",
                "file_size": "6.8 MB",
                "downloads": 594,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for VLSI Design & Verilog HDL. Verified by department faculty.",
                "tags": [
                        "VLSI",
                        "Semester6",
                        "ECE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 866,
                "subject": "Wireless Communication Systems",
                "department": "Electronics & Communication Engineering (ECE)",
                "semester": "Semester 6",
                "faculty_name": "Dr. K. V. Raman",
                "uploaded_by": "Senior Teaching Assistant (K.)",
                "upload_date": "2026-08-11",
                "file_type": "PDF",
                "file_size": "4.5 MB",
                "downloads": 266,
                "rating": 4.2,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Wireless Communication Systems. Verified by department faculty.",
                "tags": [
                        "Wireless",
                        "Semester6",
                        "ECE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 867,
                "subject": "Antenna Theory & Wave Propagation",
                "department": "Electronics & Communication Engineering (ECE)",
                "semester": "Semester 7",
                "faculty_name": "Dr. K. V. Raman",
                "uploaded_by": "Senior Teaching Assistant (K.)",
                "upload_date": "2026-08-22",
                "file_type": "PPT",
                "file_size": "12.4 MB",
                "downloads": 492,
                "rating": 4.5,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Antenna Theory & Wave Propagation. Verified by department faculty.",
                "tags": [
                        "Antenna",
                        "Semester7",
                        "ECE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 868,
                "subject": "Optical Fiber Communication",
                "department": "Electronics & Communication Engineering (ECE)",
                "semester": "Semester 7",
                "faculty_name": "Dr. K. V. Raman",
                "uploaded_by": "Senior Teaching Assistant (K.)",
                "upload_date": "2026-08-21",
                "file_type": "DOCX",
                "file_size": "6.8 MB",
                "downloads": 465,
                "rating": 4.3,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Optical Fiber Communication. Verified by department faculty.",
                "tags": [
                        "Optical",
                        "Semester7",
                        "ECE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 869,
                "subject": "Satellite & Radar Communication",
                "department": "Electronics & Communication Engineering (ECE)",
                "semester": "Semester 8",
                "faculty_name": "Dr. Meera Reddy",
                "uploaded_by": "Faculty (Meera)",
                "upload_date": "2026-08-22",
                "file_type": "PDF",
                "file_size": "1.8 MB",
                "downloads": 568,
                "rating": 4.2,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Satellite & Radar Communication. Verified by department faculty.",
                "tags": [
                        "Satellite",
                        "Semester8",
                        "ECE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 870,
                "subject": "Embedded Real-Time Systems",
                "department": "Electronics & Communication Engineering (ECE)",
                "semester": "Semester 8",
                "faculty_name": "Prof. Alan Turing",
                "uploaded_by": "Head of Department (Alan)",
                "upload_date": "2026-08-25",
                "file_type": "PDF",
                "file_size": "8.1 MB",
                "downloads": 641,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Embedded Real-Time Systems. Verified by department faculty.",
                "tags": [
                        "Embedded",
                        "Semester8",
                        "ECE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 871,
                "subject": "Electrical Circuit Analysis",
                "department": "Electrical Engineering (EE)",
                "semester": "Semester 1",
                "faculty_name": "Prof. Sophia Lin",
                "uploaded_by": "Faculty (Sophia)",
                "upload_date": "2026-08-20",
                "file_type": "PDF",
                "file_size": "2.4 MB",
                "downloads": 680,
                "rating": 4.2,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Electrical Circuit Analysis. Verified by department faculty.",
                "tags": [
                        "Electrical",
                        "Semester1",
                        "EE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 872,
                "subject": "Engineering Mathematics - I",
                "department": "Electrical Engineering (EE)",
                "semester": "Semester 1",
                "faculty_name": "Dr. Vikram Samant",
                "uploaded_by": "Senior Teaching Assistant (Vikram)",
                "upload_date": "2026-08-15",
                "file_type": "PPT",
                "file_size": "3.1 MB",
                "downloads": 533,
                "rating": 4.6,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Engineering Mathematics - I. Verified by department faculty.",
                "tags": [
                        "Engineering",
                        "Semester1",
                        "EE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 873,
                "subject": "Engineering Electromagnetics",
                "department": "Electrical Engineering (EE)",
                "semester": "Semester 2",
                "faculty_name": "Dr. Vikram Samant",
                "uploaded_by": "Head of Department (Vikram)",
                "upload_date": "2026-08-18",
                "file_type": "PDF",
                "file_size": "5.2 MB",
                "downloads": 800,
                "rating": 4.6,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Engineering Electromagnetics. Verified by department faculty.",
                "tags": [
                        "Engineering",
                        "Semester2",
                        "EE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 874,
                "subject": "Basic Electronics & Instrumentation",
                "department": "Electrical Engineering (EE)",
                "semester": "Semester 2",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Faculty (Sarah)",
                "upload_date": "2026-08-03",
                "file_type": "DOCX",
                "file_size": "3.1 MB",
                "downloads": 778,
                "rating": 4.3,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Basic Electronics & Instrumentation. Verified by department faculty.",
                "tags": [
                        "Basic",
                        "Semester2",
                        "EE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 875,
                "subject": "Electrical Machines - I (DC & Transformer)",
                "department": "Electrical Engineering (EE)",
                "semester": "Semester 3",
                "faculty_name": "Dr. K. V. Raman",
                "uploaded_by": "Faculty (K.)",
                "upload_date": "2026-08-03",
                "file_type": "PDF",
                "file_size": "12.4 MB",
                "downloads": 102,
                "rating": 4.3,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Electrical Machines - I (DC & Transformer). Verified by department faculty.",
                "tags": [
                        "Electrical",
                        "Semester3",
                        "EE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 876,
                "subject": "Field Theory & Waves",
                "department": "Electrical Engineering (EE)",
                "semester": "Semester 3",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Faculty (Sarah)",
                "upload_date": "2026-08-10",
                "file_type": "DOCX",
                "file_size": "12.4 MB",
                "downloads": 380,
                "rating": 4.4,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Field Theory & Waves. Verified by department faculty.",
                "tags": [
                        "Field",
                        "Semester3",
                        "EE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 877,
                "subject": "Control Systems Theory",
                "department": "Electrical Engineering (EE)",
                "semester": "Semester 4",
                "faculty_name": "Dr. Vikram Samant",
                "uploaded_by": "Faculty (Vikram)",
                "upload_date": "2026-08-19",
                "file_type": "PDF",
                "file_size": "4.5 MB",
                "downloads": 98,
                "rating": 5,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Control Systems Theory. Verified by department faculty.",
                "tags": [
                        "Control",
                        "Semester4",
                        "EE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 878,
                "subject": "Electrical Machines - II (AC Machines)",
                "department": "Electrical Engineering (EE)",
                "semester": "Semester 4",
                "faculty_name": "Dr. K. V. Raman",
                "uploaded_by": "Course Coordinator (K.)",
                "upload_date": "2026-08-05",
                "file_type": "PDF",
                "file_size": "2.4 MB",
                "downloads": 446,
                "rating": 4.3,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Electrical Machines - II (AC Machines). Verified by department faculty.",
                "tags": [
                        "Electrical",
                        "Semester4",
                        "EE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 879,
                "subject": "Power Electronics & Drives",
                "department": "Electrical Engineering (EE)",
                "semester": "Semester 5",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Senior Teaching Assistant (Sarah)",
                "upload_date": "2026-08-11",
                "file_type": "PPT",
                "file_size": "2.4 MB",
                "downloads": 105,
                "rating": 4.8,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Power Electronics & Drives. Verified by department faculty.",
                "tags": [
                        "Power",
                        "Semester5",
                        "EE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 880,
                "subject": "Power System Analysis - I",
                "department": "Electrical Engineering (EE)",
                "semester": "Semester 5",
                "faculty_name": "Dr. Vikram Samant",
                "uploaded_by": "Faculty (Vikram)",
                "upload_date": "2026-08-19",
                "file_type": "PPT",
                "file_size": "2.4 MB",
                "downloads": 280,
                "rating": 4.4,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Power System Analysis - I. Verified by department faculty.",
                "tags": [
                        "Power",
                        "Semester5",
                        "EE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 881,
                "subject": "High Voltage Engineering",
                "department": "Electrical Engineering (EE)",
                "semester": "Semester 6",
                "faculty_name": "Prof. Sophia Lin",
                "uploaded_by": "Senior Teaching Assistant (Sophia)",
                "upload_date": "2026-08-06",
                "file_type": "PPT",
                "file_size": "6.8 MB",
                "downloads": 765,
                "rating": 4.6,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for High Voltage Engineering. Verified by department faculty.",
                "tags": [
                        "High",
                        "Semester6",
                        "EE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 882,
                "subject": "Smart Grid Technologies",
                "department": "Electrical Engineering (EE)",
                "semester": "Semester 6",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Senior Teaching Assistant (Sarah)",
                "upload_date": "2026-08-16",
                "file_type": "PDF",
                "file_size": "6.8 MB",
                "downloads": 316,
                "rating": 4.6,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Smart Grid Technologies. Verified by department faculty.",
                "tags": [
                        "Smart",
                        "Semester6",
                        "EE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 883,
                "subject": "Switchgear & Protection Systems",
                "department": "Electrical Engineering (EE)",
                "semester": "Semester 7",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Faculty (Sarah)",
                "upload_date": "2026-08-24",
                "file_type": "PPT",
                "file_size": "4.5 MB",
                "downloads": 310,
                "rating": 4.4,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Switchgear & Protection Systems. Verified by department faculty.",
                "tags": [
                        "Switchgear",
                        "Semester7",
                        "EE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 884,
                "subject": "Electric & Hybrid Vehicles",
                "department": "Electrical Engineering (EE)",
                "semester": "Semester 7",
                "faculty_name": "Dr. Vikram Samant",
                "uploaded_by": "Senior Teaching Assistant (Vikram)",
                "upload_date": "2026-08-15",
                "file_type": "PDF",
                "file_size": "12.4 MB",
                "downloads": 733,
                "rating": 4.4,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Electric & Hybrid Vehicles. Verified by department faculty.",
                "tags": [
                        "Electric",
                        "Semester7",
                        "EE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 885,
                "subject": "Power Quality & Energy Audit",
                "department": "Electrical Engineering (EE)",
                "semester": "Semester 8",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Faculty (Sarah)",
                "upload_date": "2026-08-08",
                "file_type": "PDF",
                "file_size": "1.8 MB",
                "downloads": 849,
                "rating": 4.7,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Power Quality & Energy Audit. Verified by department faculty.",
                "tags": [
                        "Power",
                        "Semester8",
                        "EE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 886,
                "subject": "Microgrid Dynamics & Control",
                "department": "Electrical Engineering (EE)",
                "semester": "Semester 8",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Head of Department (Sarah)",
                "upload_date": "2026-08-21",
                "file_type": "PDF",
                "file_size": "5.2 MB",
                "downloads": 843,
                "rating": 4.7,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Microgrid Dynamics & Control. Verified by department faculty.",
                "tags": [
                        "Microgrid",
                        "Semester8",
                        "EE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 887,
                "subject": "Engineering Mechanics & Statics",
                "department": "Mechanical Engineering (ME)",
                "semester": "Semester 1",
                "faculty_name": "Dr. Vikram Samant",
                "uploaded_by": "Course Coordinator (Vikram)",
                "upload_date": "2026-08-19",
                "file_type": "PDF",
                "file_size": "6.8 MB",
                "downloads": 888,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Engineering Mechanics & Statics. Verified by department faculty.",
                "tags": [
                        "Engineering",
                        "Semester1",
                        "ME",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 888,
                "subject": "Engineering Graphics & CAD",
                "department": "Mechanical Engineering (ME)",
                "semester": "Semester 1",
                "faculty_name": "Prof. Sophia Lin",
                "uploaded_by": "Senior Teaching Assistant (Sophia)",
                "upload_date": "2026-08-21",
                "file_type": "PDF",
                "file_size": "5.2 MB",
                "downloads": 585,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Engineering Graphics & CAD. Verified by department faculty.",
                "tags": [
                        "Engineering",
                        "Semester1",
                        "ME",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 889,
                "subject": "Applied Thermodynamics",
                "department": "Mechanical Engineering (ME)",
                "semester": "Semester 2",
                "faculty_name": "Dr. Vikram Samant",
                "uploaded_by": "Senior Teaching Assistant (Vikram)",
                "upload_date": "2026-08-08",
                "file_type": "PPT",
                "file_size": "6.8 MB",
                "downloads": 286,
                "rating": 4.8,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Applied Thermodynamics. Verified by department faculty.",
                "tags": [
                        "Applied",
                        "Semester2",
                        "ME",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 890,
                "subject": "Material Science & Metallurgy",
                "department": "Mechanical Engineering (ME)",
                "semester": "Semester 2",
                "faculty_name": "Dr. Vikram Samant",
                "uploaded_by": "Head of Department (Vikram)",
                "upload_date": "2026-08-12",
                "file_type": "DOCX",
                "file_size": "4.5 MB",
                "downloads": 655,
                "rating": 4.3,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Material Science & Metallurgy. Verified by department faculty.",
                "tags": [
                        "Material",
                        "Semester2",
                        "ME",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 891,
                "subject": "Fluid Mechanics & Hydraulics",
                "department": "Mechanical Engineering (ME)",
                "semester": "Semester 3",
                "faculty_name": "Dr. Robert Lang",
                "uploaded_by": "Head of Department (Robert)",
                "upload_date": "2026-08-10",
                "file_type": "DOCX",
                "file_size": "1.8 MB",
                "downloads": 840,
                "rating": 4.6,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Fluid Mechanics & Hydraulics. Verified by department faculty.",
                "tags": [
                        "Fluid",
                        "Semester3",
                        "ME",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 892,
                "subject": "Strength of Materials",
                "department": "Mechanical Engineering (ME)",
                "semester": "Semester 3",
                "faculty_name": "Dr. Robert Lang",
                "uploaded_by": "Head of Department (Robert)",
                "upload_date": "2026-08-01",
                "file_type": "DOCX",
                "file_size": "1.8 MB",
                "downloads": 562,
                "rating": 4.7,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Strength of Materials. Verified by department faculty.",
                "tags": [
                        "Strength",
                        "Semester3",
                        "ME",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 893,
                "subject": "Kinematics of Machinery",
                "department": "Mechanical Engineering (ME)",
                "semester": "Semester 4",
                "faculty_name": "Prof. Clara Oswald",
                "uploaded_by": "Course Coordinator (Clara)",
                "upload_date": "2026-08-21",
                "file_type": "DOCX",
                "file_size": "8.1 MB",
                "downloads": 277,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Kinematics of Machinery. Verified by department faculty.",
                "tags": [
                        "Kinematics",
                        "Semester4",
                        "ME",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 894,
                "subject": "Manufacturing Processes & Tools",
                "department": "Mechanical Engineering (ME)",
                "semester": "Semester 4",
                "faculty_name": "Prof. Sophia Lin",
                "uploaded_by": "Faculty (Sophia)",
                "upload_date": "2026-08-18",
                "file_type": "PDF",
                "file_size": "4.5 MB",
                "downloads": 194,
                "rating": 4.7,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Manufacturing Processes & Tools. Verified by department faculty.",
                "tags": [
                        "Manufacturing",
                        "Semester4",
                        "ME",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 895,
                "subject": "Heat & Mass Transfer",
                "department": "Mechanical Engineering (ME)",
                "semester": "Semester 5",
                "faculty_name": "Dr. Robert Lang",
                "uploaded_by": "Head of Department (Robert)",
                "upload_date": "2026-08-19",
                "file_type": "PDF",
                "file_size": "2.4 MB",
                "downloads": 821,
                "rating": 4.3,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Heat & Mass Transfer. Verified by department faculty.",
                "tags": [
                        "Heat",
                        "Semester5",
                        "ME",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 896,
                "subject": "Dynamics of Machinery & Vibrations",
                "department": "Mechanical Engineering (ME)",
                "semester": "Semester 5",
                "faculty_name": "Prof. Sophia Lin",
                "uploaded_by": "Head of Department (Sophia)",
                "upload_date": "2026-08-16",
                "file_type": "DOCX",
                "file_size": "12.4 MB",
                "downloads": 748,
                "rating": 4.6,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Dynamics of Machinery & Vibrations. Verified by department faculty.",
                "tags": [
                        "Dynamics",
                        "Semester5",
                        "ME",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 897,
                "subject": "Machine Design & Analysis",
                "department": "Mechanical Engineering (ME)",
                "semester": "Semester 6",
                "faculty_name": "Dr. Vikram Samant",
                "uploaded_by": "Faculty (Vikram)",
                "upload_date": "2026-08-11",
                "file_type": "DOCX",
                "file_size": "3.1 MB",
                "downloads": 763,
                "rating": 4.8,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Machine Design & Analysis. Verified by department faculty.",
                "tags": [
                        "Machine",
                        "Semester6",
                        "ME",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 898,
                "subject": "CAM & CNC Technology",
                "department": "Mechanical Engineering (ME)",
                "semester": "Semester 6",
                "faculty_name": "Prof. Sophia Lin",
                "uploaded_by": "Course Coordinator (Sophia)",
                "upload_date": "2026-08-24",
                "file_type": "PDF",
                "file_size": "1.8 MB",
                "downloads": 354,
                "rating": 4.5,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for CAM & CNC Technology. Verified by department faculty.",
                "tags": [
                        "CAM",
                        "Semester6",
                        "ME",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 899,
                "subject": "Refrigeration & Air Conditioning",
                "department": "Mechanical Engineering (ME)",
                "semester": "Semester 7",
                "faculty_name": "Dr. Robert Lang",
                "uploaded_by": "Course Coordinator (Robert)",
                "upload_date": "2026-08-14",
                "file_type": "PDF",
                "file_size": "1.8 MB",
                "downloads": 857,
                "rating": 4.5,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Refrigeration & Air Conditioning. Verified by department faculty.",
                "tags": [
                        "Refrigeration",
                        "Semester7",
                        "ME",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 900,
                "subject": "Mechatronics & Automation",
                "department": "Mechanical Engineering (ME)",
                "semester": "Semester 7",
                "faculty_name": "Dr. Robert Lang",
                "uploaded_by": "Head of Department (Robert)",
                "upload_date": "2026-08-15",
                "file_type": "PDF",
                "file_size": "4.5 MB",
                "downloads": 832,
                "rating": 5,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Mechatronics & Automation. Verified by department faculty.",
                "tags": [
                        "Mechatronics",
                        "Semester7",
                        "ME",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 901,
                "subject": "Power Plant Engineering",
                "department": "Mechanical Engineering (ME)",
                "semester": "Semester 8",
                "faculty_name": "Dr. Robert Lang",
                "uploaded_by": "Senior Teaching Assistant (Robert)",
                "upload_date": "2026-08-01",
                "file_type": "PDF",
                "file_size": "1.8 MB",
                "downloads": 823,
                "rating": 4.6,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Power Plant Engineering. Verified by department faculty.",
                "tags": [
                        "Power",
                        "Semester8",
                        "ME",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 902,
                "subject": "Finite Element Analysis (FEA)",
                "department": "Mechanical Engineering (ME)",
                "semester": "Semester 8",
                "faculty_name": "Prof. Clara Oswald",
                "uploaded_by": "Senior Teaching Assistant (Clara)",
                "upload_date": "2026-08-08",
                "file_type": "PPT",
                "file_size": "12.4 MB",
                "downloads": 83,
                "rating": 4.8,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Finite Element Analysis (FEA). Verified by department faculty.",
                "tags": [
                        "Finite",
                        "Semester8",
                        "ME",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 903,
                "subject": "Engineering Geology & Mineralogy",
                "department": "Civil Engineering (CE)",
                "semester": "Semester 1",
                "faculty_name": "Dr. Sanjay Mehta",
                "uploaded_by": "Faculty (Sanjay)",
                "upload_date": "2026-08-06",
                "file_type": "PPT",
                "file_size": "5.2 MB",
                "downloads": 830,
                "rating": 4.3,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Engineering Geology & Mineralogy. Verified by department faculty.",
                "tags": [
                        "Engineering",
                        "Semester1",
                        "CE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 904,
                "subject": "Basic Surveying & Leveling",
                "department": "Civil Engineering (CE)",
                "semester": "Semester 1",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Course Coordinator (Sarah)",
                "upload_date": "2026-08-01",
                "file_type": "DOCX",
                "file_size": "5.2 MB",
                "downloads": 513,
                "rating": 4.4,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Basic Surveying & Leveling. Verified by department faculty.",
                "tags": [
                        "Basic",
                        "Semester1",
                        "CE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 905,
                "subject": "Building Materials & Technology",
                "department": "Civil Engineering (CE)",
                "semester": "Semester 2",
                "faculty_name": "Dr. Robert Lang",
                "uploaded_by": "Head of Department (Robert)",
                "upload_date": "2026-08-11",
                "file_type": "PPT",
                "file_size": "1.8 MB",
                "downloads": 322,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Building Materials & Technology. Verified by department faculty.",
                "tags": [
                        "Building",
                        "Semester2",
                        "CE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 906,
                "subject": "Mechanics of Solids",
                "department": "Civil Engineering (CE)",
                "semester": "Semester 2",
                "faculty_name": "Dr. Sanjay Mehta",
                "uploaded_by": "Faculty (Sanjay)",
                "upload_date": "2026-08-21",
                "file_type": "PDF",
                "file_size": "6.8 MB",
                "downloads": 491,
                "rating": 4.8,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Mechanics of Solids. Verified by department faculty.",
                "tags": [
                        "Mechanics",
                        "Semester2",
                        "CE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 907,
                "subject": "Fluid Mechanics & Hydraulics",
                "department": "Civil Engineering (CE)",
                "semester": "Semester 3",
                "faculty_name": "Dr. Robert Lang",
                "uploaded_by": "Head of Department (Robert)",
                "upload_date": "2026-08-01",
                "file_type": "DOCX",
                "file_size": "1.8 MB",
                "downloads": 113,
                "rating": 4.5,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Fluid Mechanics & Hydraulics. Verified by department faculty.",
                "tags": [
                        "Fluid",
                        "Semester3",
                        "CE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 908,
                "subject": "Advanced Surveying & GIS",
                "department": "Civil Engineering (CE)",
                "semester": "Semester 3",
                "faculty_name": "Dr. Sanjay Mehta",
                "uploaded_by": "Course Coordinator (Sanjay)",
                "upload_date": "2026-08-18",
                "file_type": "PDF",
                "file_size": "1.8 MB",
                "downloads": 705,
                "rating": 4.6,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Advanced Surveying & GIS. Verified by department faculty.",
                "tags": [
                        "Advanced",
                        "Semester3",
                        "CE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 909,
                "subject": "Structural Analysis - I",
                "department": "Civil Engineering (CE)",
                "semester": "Semester 4",
                "faculty_name": "Prof. Elena Rostova",
                "uploaded_by": "Course Coordinator (Elena)",
                "upload_date": "2026-08-01",
                "file_type": "PDF",
                "file_size": "6.8 MB",
                "downloads": 895,
                "rating": 5,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Structural Analysis - I. Verified by department faculty.",
                "tags": [
                        "Structural",
                        "Semester4",
                        "CE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 910,
                "subject": "Geotechnical Engineering & Soil Mechanics",
                "department": "Civil Engineering (CE)",
                "semester": "Semester 4",
                "faculty_name": "Prof. Elena Rostova",
                "uploaded_by": "Senior Teaching Assistant (Elena)",
                "upload_date": "2026-08-14",
                "file_type": "DOCX",
                "file_size": "6.8 MB",
                "downloads": 406,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Geotechnical Engineering & Soil Mechanics. Verified by department faculty.",
                "tags": [
                        "Geotechnical",
                        "Semester4",
                        "CE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 911,
                "subject": "Reinforced Concrete Design (RCC)",
                "department": "Civil Engineering (CE)",
                "semester": "Semester 5",
                "faculty_name": "Dr. Robert Lang",
                "uploaded_by": "Senior Teaching Assistant (Robert)",
                "upload_date": "2026-08-01",
                "file_type": "PPT",
                "file_size": "2.4 MB",
                "downloads": 486,
                "rating": 4.4,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Reinforced Concrete Design (RCC). Verified by department faculty.",
                "tags": [
                        "Reinforced",
                        "Semester5",
                        "CE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 912,
                "subject": "Transportation Engineering",
                "department": "Civil Engineering (CE)",
                "semester": "Semester 5",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Senior Teaching Assistant (Sarah)",
                "upload_date": "2026-08-05",
                "file_type": "PDF",
                "file_size": "3.1 MB",
                "downloads": 586,
                "rating": 4.5,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Transportation Engineering. Verified by department faculty.",
                "tags": [
                        "Transportation",
                        "Semester5",
                        "CE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 913,
                "subject": "Design of Steel Structures",
                "department": "Civil Engineering (CE)",
                "semester": "Semester 6",
                "faculty_name": "Prof. Elena Rostova",
                "uploaded_by": "Course Coordinator (Elena)",
                "upload_date": "2026-08-09",
                "file_type": "PDF",
                "file_size": "4.5 MB",
                "downloads": 840,
                "rating": 4.7,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Design of Steel Structures. Verified by department faculty.",
                "tags": [
                        "Design",
                        "Semester6",
                        "CE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 914,
                "subject": "Environmental Engineering",
                "department": "Civil Engineering (CE)",
                "semester": "Semester 6",
                "faculty_name": "Prof. Elena Rostova",
                "uploaded_by": "Course Coordinator (Elena)",
                "upload_date": "2026-08-22",
                "file_type": "PDF",
                "file_size": "2.4 MB",
                "downloads": 422,
                "rating": 4.8,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Environmental Engineering. Verified by department faculty.",
                "tags": [
                        "Environmental",
                        "Semester6",
                        "CE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 915,
                "subject": "Hydrology & Water Resources",
                "department": "Civil Engineering (CE)",
                "semester": "Semester 7",
                "faculty_name": "Dr. Sarah Jenkins",
                "uploaded_by": "Senior Teaching Assistant (Sarah)",
                "upload_date": "2026-08-10",
                "file_type": "PDF",
                "file_size": "8.1 MB",
                "downloads": 828,
                "rating": 4.6,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Hydrology & Water Resources. Verified by department faculty.",
                "tags": [
                        "Hydrology",
                        "Semester7",
                        "CE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 916,
                "subject": "Construction Project Management",
                "department": "Civil Engineering (CE)",
                "semester": "Semester 7",
                "faculty_name": "Prof. Elena Rostova",
                "uploaded_by": "Course Coordinator (Elena)",
                "upload_date": "2026-08-24",
                "file_type": "PDF",
                "file_size": "8.1 MB",
                "downloads": 248,
                "rating": 4.5,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Construction Project Management. Verified by department faculty.",
                "tags": [
                        "Construction",
                        "Semester7",
                        "CE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 917,
                "subject": "Earthquake Engineering & Seismology",
                "department": "Civil Engineering (CE)",
                "semester": "Semester 8",
                "faculty_name": "Dr. Sanjay Mehta",
                "uploaded_by": "Faculty (Sanjay)",
                "upload_date": "2026-08-01",
                "file_type": "PDF",
                "file_size": "1.8 MB",
                "downloads": 229,
                "rating": 4.9,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Earthquake Engineering & Seismology. Verified by department faculty.",
                "tags": [
                        "Earthquake",
                        "Semester8",
                        "CE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        },
        {
                "id": 918,
                "subject": "Bridge Engineering & Infrastructure",
                "department": "Civil Engineering (CE)",
                "semester": "Semester 8",
                "faculty_name": "Dr. Robert Lang",
                "uploaded_by": "Head of Department (Robert)",
                "upload_date": "2026-08-12",
                "file_type": "PDF",
                "file_size": "2.4 MB",
                "downloads": 99,
                "rating": 4.4,
                "description": "Comprehensive lecture notes, unit-wise solved numerical problems, previous exam revision guides, and core theoretical concepts for Bridge Engineering & Infrastructure. Verified by department faculty.",
                "tags": [
                        "Bridge",
                        "Semester8",
                        "CE",
                        "UniversityExams",
                        "CompleteNotes"
                ]
        }
]
};

// ==========================================
// CORE AUTH & NAVBAR LOGIC (Preserved 100%)
// ==========================================
const checkAuth = async () => {
    try {
        const res = await fetch('/api/me');
        if (!res.ok) { window.location.href = '/login.html'; return null; }
        return await res.json();
    } catch { window.location.href = '/login.html'; return null; }
};

const logout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = '/index.html';
};

const loadCommonNavbar = () => {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    const currentPath = window.location.pathname;
    fetch('/api/me')
        .then(r => r.json())
        .then(user => {
            if (!user?.id) throw new Error();
            nav.innerHTML = `
                <a href="/index.html" class="nav-brand">🎓 Campus Nexus</a>
                <ul class="nav-links">
                    <li><a href="/dashboard.html" ${currentPath.includes('dashboard') ? 'class="active"' : ''}>Dashboard</a></li>
                    <li class="dropdown">
                        <a href="#">Explore ▾</a>
                        <div class="dropdown-content">
                            <a href="/projects.html">🔬 Projects</a>
                            <a href="/applications.html">📋 Applications</a>
                            <a href="/events.html">📅 Events</a>
                            <a href="/messages.html">💬 Messages</a>

                            <a href="/management.html">🏗️ My Management</a>
                        </div>
                    </li>
                    <li><a href="/profile.html" ${currentPath.includes('profile') ? 'class="active"' : ''}>👤 ${user.name ? user.name.split(' ')[0] : 'Profile'}</a></li>
                    <li><a href="#" onclick="logout();return false;" style="color:var(--accent-rose);font-weight:600;">Sign Out</a></li>
                </ul>`;
        })
        .catch(() => {
            nav.innerHTML = `
                <a href="/index.html" class="nav-brand">🎓 Campus Nexus</a>
                <ul class="nav-links">
                    <li><a href="/index.html" ${currentPath === '/' || currentPath.includes('index') ? 'class="active"' : ''}>Home</a></li>
                    <li><a href="/about.html" ${currentPath.includes('about') ? 'class="active"' : ''}>About</a></li>
                    <li><a href="/login.html">Sign In</a></li>
                    <li><a href="/register.html" class="btn btn-primary btn-sm">Get Started</a></li>
                </ul>`;
        });
};

function showMessage(id, msg, isError = false) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = msg;
    el.style.color = isError ? 'var(--accent-rose)' : 'var(--accent-teal)';
    el.style.fontWeight = '600';
    setTimeout(() => { el.textContent = ''; }, 4000);
}

// Tab switching utility
function switchTab(tabGroupId, tabName) {
    document.querySelectorAll(`[data-tab-group="${tabGroupId}"] .tab-btn`).forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    document.querySelectorAll(`[data-tab-content="${tabGroupId}"]`).forEach(panel => {
        panel.classList.toggle('active', panel.dataset.tab === tabName);
    });
}

// ==========================================
// DATA MERGING & ENRICHMENT UTILITIES
// ==========================================
function getEnrichedProjects(serverProjects = []) {
    // Combine server projects with seed projects so site is always full and rich
    const combined = [...serverProjects];
    const serverIds = new Set(serverProjects.map(p => p.id));
    window.CAMPUS_DATA.projects.forEach(p => {
        if (!serverIds.has(p.id)) combined.push(p);
    });
    return combined;
}

function getEnrichedEvents(serverEvents = []) {
    const combined = [...serverEvents];
    const serverIds = new Set(serverEvents.map(e => e.id));
    window.CAMPUS_DATA.events.forEach(e => {
        if (!serverIds.has(e.id)) combined.push(e);
    });
    return combined;
}

function getEnrichedApplications(serverReceived = [], serverSent = []) {
    const rcvCombined = [...serverReceived];
    const rcvIds = new Set(serverReceived.map(a => a.id));
    
    // Seed applications where user (Niyati) is project owner or applicant
    window.CAMPUS_DATA.applications.forEach(a => {
        if (!rcvIds.has(a.id)) {
            rcvCombined.push({
                ...a,
                applicant_name: a.applicant_name,
                project_title: a.project_title,
                applicant_skills: a.skills
            });
        }
    });

    const sentCombined = [...serverSent];
    const sentIds = new Set(serverSent.map(a => a.id));
    window.CAMPUS_DATA.applications.filter(a => a.applicant_id === 1).forEach(a => {
        if (!sentIds.has(a.id)) {
            sentCombined.push({
                ...a,
                owner_name: a.mentor,
                project_title: a.project_title,
                category: a.category
            });
        }
    });

    return { received: rcvCombined, sent: sentCombined };
}

function getEnrichedMessages(serverMessages = []) {
    const combined = [...serverMessages];
    const serverIds = new Set(serverMessages.map(m => m.id));
    window.CAMPUS_DATA.messages.forEach(m => {
        if (!serverIds.has(m.id)) combined.push(m);
    });
    return combined;
}

document.addEventListener('DOMContentLoaded', loadCommonNavbar);



