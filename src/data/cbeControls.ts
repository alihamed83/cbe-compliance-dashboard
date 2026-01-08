import { CBEControls } from '@/types/compliance';

export const cbeControls: CBEControls = {
    governance: {
        name: "Governance",
        icon: "🏛️",
        subdomains: [
            {
                name: "Strategy & Organizational Structure",
                controls: [
                    {
                        id: "1.1.4.a",
                        title: "Leadership Advocacy",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A program is in place where C-suite leadership engages in initiatives and champions efforts that showcase visible involvement and support for the overall Cybersecurity program."
                    },
                    {
                        id: "1.1.4.b",
                        title: "Defined Roles and Responsibilities",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A formal, documented matrix exists that maps specific job roles and responsibilities to individuals. This matrix is accessible to the workforce and accounts for minimum knowledge, skills, and abilities required."
                    },
                    {
                        id: "1.1.4.c",
                        title: "Documented Strategic Objectives",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented roadmap exists that identifies strategic objectives for the Cybersecurity program and measures efforts towards attaining those objectives."
                    },
                    {
                        id: "1.1.4.d",
                        title: "Mission, Vision, and Goals",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process exists that documents the organization's mission statement, vision, and goals. This should be stored centrally and articulated during onboarding."
                    },
                    {
                        id: "1.1.4.e",
                        title: "Operations & Execution Validation",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process exists to review program roles and skill sets on a recurring basis to ensure the program is capable of fulfilling cybersecurity needs."
                    }
                ]
            },
            {
                name: "Policy",
                controls: [
                    {
                        id: "1.2.4.a",
                        title: "Policy Management",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process exists to approve, change, and periodically review existing policies. Policy owners must be aware of their responsibility for policy maintenance."
                    },
                    {
                        id: "1.2.4.b",
                        title: "Critical Policy Coverage",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "Organizational policies cover critical areas including acceptable use, access control, auditing, business continuity, change management, data privacy, HR, physical security, incident management, and more."
                    },
                    {
                        id: "1.2.4.c",
                        title: "Policy Training & Acceptance",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process requires employees and contractors to receive training on critical policies during onboarding and at least annually, with certification of understanding."
                    },
                    {
                        id: "1.2.5.a",
                        title: "Policy Management System",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A centralized system maintains organizational policies with effective dates, owners, change logs, and records recurring acknowledgement and acceptance."
                    }
                ]
            },
            {
                name: "Compliance",
                controls: [
                    {
                        id: "1.3.4.a",
                        title: "Audit and Compliance Program",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process exists to programmatically monitor and assess organizational compliance with internal policies, national directives, and regulatory guidance."
                    },
                    {
                        id: "1.3.4.b",
                        title: "Self-Assessment",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard exists to conduct self-assessment of cybersecurity capabilities using a questionnaire and framework provided by the regulator."
                    },
                    {
                        id: "1.3.4.c",
                        title: "Reporting Requirements",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process ensures that lapses in compliance and policy are documented and reported to proper authorities, including CBE EG-FINCIRT for cyber security incidents."
                    },
                    {
                        id: "1.3.4.d",
                        title: "Regulatory Alignment",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process ensures that compliance and enforcement activities are aligned with regulatory requirements with explicit references to specific regulations or laws."
                    },
                    {
                        id: "1.3.5.a",
                        title: "GRC System",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool deployed to identify technical compliance with official policies, interacting with compliance agents and reporting results for audit management and compliance tracking."
                    }
                ]
            },
            {
                name: "Security Awareness & Training",
                controls: [
                    {
                        id: "1.4.4.a",
                        title: "Formalized Security Awareness Program",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard exists to support a centralized Cybersecurity Awareness program with training to help employees understand their responsibility for protecting organizational assets."
                    },
                    {
                        id: "1.4.4.b",
                        title: "Role-Based Training Plan",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented standard identifies training requirements based on employee or contractor job role and level of access, determining core skills and suggested training."
                    },
                    {
                        id: "1.4.4.c",
                        title: "Metrics",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard helps evaluate effectiveness of policies, programs, and training by benchmarking user performance in complying with cybersecurity awareness concepts."
                    },
                    {
                        id: "1.4.5.a",
                        title: "Learning Management System (LMS)",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool deployed to centralize security awareness and training administration, storage, tracking, reporting, and delivery to employees and contractors."
                    },
                    {
                        id: "1.4.5.b",
                        title: "Phishing Awareness",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool used to administer immersive phishing training simulations to employees and contractors to improve workforce security awareness and detect phishing emails."
                    }
                ]
            }
        ]
    },
    riskManagement: {
        name: "Cyber Risk Management",
        icon: "⚠️",
        subdomains: [
            {
                name: "Risk Management Operations",
                controls: [
                    {
                        id: "2.1.4.a",
                        title: "Risk Committee",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented standard defines the role, responsibilities, and members of the organization's risk committee to advise the Board on risk appetite, profile, and tolerance."
                    },
                    {
                        id: "2.1.4.b",
                        title: "Formal Risk Management Program",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented program exists to catalogue, quantify, qualify, and mitigate specific risks. Includes risk register updated and reviewed periodically."
                    },
                    {
                        id: "2.1.4.c",
                        title: "Risk Monitoring and Risk Register",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard exists to catalogue, monitor, and periodically review identified risks and corresponding mitigating controls via a comprehensive risk register."
                    },
                    {
                        id: "2.1.4.d",
                        title: "Risk Classification",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A standard defines classifications for risks into overarching categories (political, environmental, economic, geopolitical, social, technological) with criticality levels."
                    },
                    {
                        id: "2.1.5.a",
                        title: "GRC System",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool deployed to identify, document, and address risks; maintain compliance; and streamline analysis through risk visualization and automated reporting."
                    }
                ]
            },
            {
                name: "Asset Management",
                controls: [
                    {
                        id: "2.2.4.a",
                        title: "Asset Management Process",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process identifies organizational assets, their lifecycle, handling, and classification with criteria for self-assessment including ownership, location, description, threats, and mitigating measures."
                    },
                    {
                        id: "2.2.4.b",
                        title: "Media Handling & Information Asset Classification",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process ensures information is handled and classified according to sensitivity including classification standards, approved transit/storage methods, data disposal, retention, and custodians."
                    },
                    {
                        id: "2.2.5.a",
                        title: "Configuration Management Database (CMDB)",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A system deployed to track and store configuration information for software and hardware assets including ownership, location, configuration, dependencies, and criticality."
                    },
                    {
                        id: "2.2.5.b",
                        title: "Asset Management Database",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A system tracks all hardware and software assets permitted to access and communicate in the organization's environment with technical identifiers for lifecycle management."
                    }
                ]
            },
            {
                name: "Business Resilience",
                controls: [
                    {
                        id: "2.3.4.a",
                        title: "Change Management Program",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard identifies risks to business operations ensuring resilience when introducing new technology. Includes formal approval chain, testing requirements, and change tracking."
                    },
                    {
                        id: "2.3.4.b",
                        title: "Backup & Retention Strategy",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard defines frequency, scope, and methods for backing up data and storage length accounting for data criticality."
                    },
                    {
                        id: "2.3.4.c",
                        title: "Recovery Strategy",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process incorporates recovery-level objectives from BIA to prioritize resumption of business-critical processes, systems, and services."
                    },
                    {
                        id: "2.3.4.d",
                        title: "Disaster Recovery Plan (DRP)",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented plan defines steps to restore critical systems and functionality to resume delivery of products and services after an incident."
                    },
                    {
                        id: "2.3.4.e",
                        title: "Business Continuity Plan (BCP)",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented plan documents how to minimize disruption to delivery of products and services consistent with acceptable business operations cadence."
                    },
                    {
                        id: "2.3.4.f",
                        title: "Business Impact Analysis (BIA)",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process identifies potential impact from incidents affecting critical assets. Determines MAO, RPO, and RTO for acceptable disruption and required continuity speed."
                    },
                    {
                        id: "2.3.4.g",
                        title: "Exercise Schedule",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard holds incident simulation exercises at least annually to test incident response, business continuity, and disaster recovery plans across all organizational levels."
                    },
                    {
                        id: "2.3.5.a",
                        title: "High Availability System",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A system ensures agreed operational performance (uptime) for higher-than-normal periods including UPS, server clustering, load balancing, virtualization, and DR automation."
                    },
                    {
                        id: "2.3.5.b",
                        title: "Backup System",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A system creates exact copies of files, databases, or entire systems for restoration in the event of data loss."
                    }
                ]
            },
            {
                name: "Insider Threat Management",
                controls: [
                    {
                        id: "2.4.4.a",
                        title: "Legal/HR Collaboration",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented process defines how HR and Legal engage when suspected insider threat is identified, stored in a playbook accounting for legal and forensic requirements."
                    },
                    {
                        id: "2.4.4.b",
                        title: "Employee Risk Profiling",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process authorizes monitoring, tracking, and developing risk profiles for authorized users with access to sensitive systems accounting for job role, access level, baseline activity, and background."
                    },
                    {
                        id: "2.4.4.c",
                        title: "Need-to-Know RBAC",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process restricts employee/contractor access to minimum required systems and physical workspace considering separation of duties and job rotation."
                    },
                    {
                        id: "2.4.5.a",
                        title: "User Behavior Analytics (UBA)",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool aggregates, stores, indexes, and correlates abnormal behaviors for specific user accounts, creating baselines and determining changes in trends for investigation."
                    },
                    {
                        id: "2.4.5.b",
                        title: "Advanced Forensics",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool collects and preserves sources of potential evidence to support legal or HR efforts associated with insider threats."
                    },
                    {
                        id: "2.4.5.c",
                        title: "Isolated Case Management System",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool stores sensitive information about suspected and confirmed insider threat activity with need-to-know access control in a distinct security enclave."
                    },
                    {
                        id: "2.4.5.d",
                        title: "Honeypot",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool detects unauthorized user access to organizational assets designed never to be accessed legitimately, including fake files, credentials, network shares, or applications."
                    }
                ]
            }
        ]
    },
    cyberDefence: {
        name: "Cyber Defence",
        icon: "🛡️",
        subdomains: [
            {
                name: "Incident Management",
                controls: [
                    {
                        id: "3.1.4.a",
                        title: "Incident Classification",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process provides clear guidance on classifying events and their responses, with sliding scale of engagement needs based on incident severity (P1, P2, P3)."
                    },
                    {
                        id: "3.1.4.b",
                        title: "Incident Categorization",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented matrix categorizes incidents after event information collection (abusive content, malicious code, information gathering, intrusion attempts, intrusions)."
                    },
                    {
                        id: "3.1.4.c",
                        title: "Communications Plan",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process accounts for potential communications limitations during events, specifying primary, secondary, and tertiary methods of voice, video, and data communications."
                    },
                    {
                        id: "3.1.4.d",
                        title: "Escalation Matrix",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process documents, manages, and publishes clearly defined escalation pathway with associated authority for execution during incidents."
                    },
                    {
                        id: "3.1.5.a",
                        title: "Communications System",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool functions independent of organizational technology providing central communication source with SMS/email broadcast, video conferencing, and offline capability."
                    },
                    {
                        id: "3.1.5.b",
                        title: "Knowledge Management System",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool provides central source independent of organizational technology stack to store and retrieve information during incidents with role-based access."
                    }
                ]
            },
            {
                name: "Incident Response",
                controls: [
                    {
                        id: "3.2.4.a",
                        title: "Malware Analysis",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented process exists to forensically analyze suspicious files discovered during investigation, identifying how to handle evidence and determine malware functionality and IOCs."
                    },
                    {
                        id: "3.2.4.b",
                        title: "Communications Plan",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard defines how Incident Response findings are communicated to organizational stakeholders, in what modality, frequency, and escalation pathway."
                    },
                    {
                        id: "3.2.4.c",
                        title: "Exercise Schedule",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard requires security personnel to test Incident Response Plan through simulated cyber incident exercises at least annually against relevant threats."
                    },
                    {
                        id: "3.2.4.d",
                        title: "Incident Response Plan",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented plan outlines organization's procedures, steps, roles, and responsibilities in Incident Response program and activities required during each investigation phase."
                    },
                    {
                        id: "3.2.5.a",
                        title: "Case Management System",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool captures relevant information discovered through incident investigations including scope, scale, affected accounts/systems, and attacker TTPs with need-to-know access."
                    },
                    {
                        id: "3.2.5.b",
                        title: "Digital Forensics",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool acquires, maintains, inventories, tracks, stores, and handles evidentiary artifacts during investigations with chain-of-custody procedures adhering to data classification standards."
                    }
                ]
            },
            {
                name: "Security Operations",
                controls: [
                    {
                        id: "3.3.4.a",
                        title: "24x7x365 Staffing",
                        type: "People",
                        criticality: "Mandatory",
                        description: "A documented standard ensures SOC is staffed for continuous monitoring 24x7x365 with staff capable of detecting and escalating alerts within documented OLAs."
                    },
                    {
                        id: "3.3.4.b",
                        title: "Verbose Logging Standard",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard ensures logs with relevant security information are directed to central console ensuring SOC has complete insight into technical security occurrences."
                    },
                    {
                        id: "3.3.4.c",
                        title: "Log Retention Standard",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard ensures security logs are retained for 12 months providing critical visibility to identify intrusion scope, scale, and attacker TTPs."
                    },
                    {
                        id: "3.3.4.d",
                        title: "Operational Level Agreement (OLA)",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard identifies maximum agreed time to respond to SOC requests supporting investigations across cross-functional IT and Cybersecurity teams."
                    },
                    {
                        id: "3.3.4.e",
                        title: "Penetration Testing",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process tests existing security controls against weaponized vulnerabilities and methods used by cyber threat actors informed by threat intelligence."
                    },
                    {
                        id: "3.3.4.f",
                        title: "Playbooks",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process develops playbooks allowing all Cybersecurity team members to understand roles, responsibilities, escalations, and pre-defined actions for specific incident types."
                    },
                    {
                        id: "3.3.4.g",
                        title: "Threat Hunting",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process authorizes SOC to proactively investigate endpoints, networks, and applications exhibiting characteristics of intrusion activities."
                    },
                    {
                        id: "3.3.4.h",
                        title: "Exercise Schedule",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented process defines how frequently cybersecurity controls should be tested with cyber incident simulations to determine coverage gaps."
                    },
                    {
                        id: "3.3.5.a",
                        title: "SIEM",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool aggregates, normalizes, parses, correlates, and indexes logs, security events, and alerts into centralized location allowing detection of intrusion activities."
                    },
                    {
                        id: "3.3.5.b",
                        title: "Centralized Log Management",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool processes, flattens, parses, and stores collected log data from endpoints, applications, and networks transforming data into standardized template for indexing."
                    },
                    {
                        id: "3.3.5.c",
                        title: "Correlation Rules & Use Cases",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool allows SOC personnel to develop signatures drawing connections between multiple log events generating alerts for additional investigation."
                    },
                    {
                        id: "3.3.5.d",
                        title: "EDR Integration",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool enables SOC to take corrective action on suspicious endpoint activities including file containment, endpoint isolation, and blocking IP addresses or domains."
                    },
                    {
                        id: "3.3.5.e",
                        title: "SOAR",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A system comprised of security software, tools, and scripts helping SOC define, prioritize, and focus resources during investigations using automation and machine learning."
                    }
                ]
            },
            {
                name: "Cyber Threat Intelligence",
                controls: [
                    {
                        id: "3.4.4.a",
                        title: "Cyber Threat Profile",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard creates and maintains register of cyber risks to organizational assets with actor motivations, likelihood, impact rating, and corresponding TTPs."
                    },
                    {
                        id: "3.4.4.b",
                        title: "Priority Intelligence Requirements (PIRs)",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented process identifies key CTI focus areas based on organizational stakeholder needs and frequency for PIR re-evaluation to determine relevance and alignment."
                    },
                    {
                        id: "3.4.4.c",
                        title: "Key Intelligence Questions (KIQs)",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented standard translates PIRs into measurable parts as KIQs used to quantify metrics associated with threat intelligence relevance."
                    },
                    {
                        id: "3.4.4.d",
                        title: "Analysis and Reporting",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process develops intelligence products supporting business operations and driving resource decisions using both internal and external data sources."
                    },
                    {
                        id: "3.4.4.e",
                        title: "Operational Integration",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process integrates findings from analytic products into routine cyber defence operations and leadership workflows."
                    },
                    {
                        id: "3.4.5.a",
                        title: "Threat Intelligence Feed",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "Data feeds containing suspected IOCs from commercial and open-source intelligence including IP addresses, domains, and malware file hash values."
                    },
                    {
                        id: "3.4.5.b",
                        title: "Threat Intelligence Platform (TIP)",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool deployed as central repository to catalogue CTI analytic assessments regarding incidents and threat actor capabilities with need-to-know access controls."
                    }
                ]
            }
        ]
    },
    technology: {
        name: "Technology & Operations",
        icon: "💻",
        subdomains: [
            {
                name: "Identity & Access Management",
                controls: [
                    {
                        id: "4.1.4.a",
                        title: "Onboarding/Offboarding",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process for account provisioning/deprovisioning with required approval chain based on access level and risk, integrated into personnel management processes."
                    },
                    {
                        id: "4.1.4.b",
                        title: "Hardening",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process ensures authentication systems are configured for least privilege, data encryption, disabled unnecessary services, enhanced logging, and disabled unnecessary protocols."
                    },
                    {
                        id: "4.1.4.c",
                        title: "Access Compliance",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process requires audit of privileged access and continued validation that business requirements exist for access with varying time requirements and automatic disabling."
                    },
                    {
                        id: "4.1.4.d",
                        title: "Identity Federation",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented process identifies approved federated authentication services and instances where federation is obligatory, optional, or prohibited incorporating digital identity risk model."
                    },
                    {
                        id: "4.1.4.e",
                        title: "IAM Standards",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process identifies and documents standards for identity and access management including credential standards, least privilege, RBAC, and privileged access assurance levels."
                    },
                    {
                        id: "4.1.5.a",
                        title: "Multi-Factor Authentication",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A system requires something user knows and has for authentication, standardized for privileged or remote access and sensitive data access, not permitting SMS OTPs."
                    },
                    {
                        id: "4.1.5.b",
                        title: "Authentication Logging",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A feature employed in software and hardware solutions to log all authentication requests integrated into central console for analysis, correlation, and alerting."
                    },
                    {
                        id: "4.1.5.c",
                        title: "Identity & Privileged Access Management Tools",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "Tools provide heightened visibility and security for identity and privileged access including credential management, entitlement provisioning, MFA, posture check, and behavior analytics."
                    },
                    {
                        id: "4.1.5.d",
                        title: "Session Recording",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool records all activity associated with high-risk, highly sensitive, or privileged activity maintained in immutable format and reviewed by auditors at least annually."
                    },
                    {
                        id: "4.1.5.e",
                        title: "Password Vaulting",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool stores and manages access to passwords across the organization, leveraged to randomize local passwords preventing re-use across multiple systems."
                    },
                    {
                        id: "4.1.5.f",
                        title: "Service Account Management",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A system manages service accounts ensuring regular password rotation complying with password-aging requirements ensuring passwords aren't stored in source code."
                    },
                    {
                        id: "4.1.5.g",
                        title: "Centralized Access Management",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A system federates access across organization to eliminate local accounts and shared credentials, particularly for infrastructure and network devices."
                    },
                    {
                        id: "4.1.5.h",
                        title: "Public Key Cryptography",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A system manages trusted digital certificates empowering SOC to detect installation and unauthorized use of digital identity certificates with changes logged."
                    }
                ]
            },
            {
                name: "Data Protection & Privacy",
                controls: [
                    {
                        id: "4.2.4.a",
                        title: "Data Classification",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process defines categories for data assignment dictating security level to be applied through identify, classify, protect, monitor, and improve phases."
                    },
                    {
                        id: "4.2.4.b",
                        title: "Cryptographic Standards",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard identifies requirements for data encryption accounting for data type and classification determining acceptable encryption algorithms."
                    },
                    {
                        id: "4.2.4.c",
                        title: "Removable Storage Standards",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process identifies approved methods and technologies for data storage on removable media accounting for data classification."
                    },
                    {
                        id: "4.2.4.d",
                        title: "Reporting Requirements",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process identifies data breach reporting requirements containing reporting timelines, communication methods, and penalties for non-compliance."
                    },
                    {
                        id: "4.2.5.a",
                        title: "Brand & Reputation Management",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A service employed to scour internet and dark web for potential leaked data or system access for sale by criminals."
                    },
                    {
                        id: "4.2.5.b",
                        title: "Data Loss Prevention (DLP)",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool detects and blocks data from exiting organizational network, correlating suspicious file activity and alerting across network, endpoint, and email DLP systems."
                    },
                    {
                        id: "4.2.5.c",
                        title: "Data Integrity Monitoring",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool detects and blocks changes to data integrity when activity is above acceptable threshold, focusing on most sensitive assets, source code, and data vaults."
                    },
                    {
                        id: "4.2.5.d",
                        title: "Secure File Sharing",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A tool provides secure data transfers to external personnel validating recipient and preventing sharing beyond intended recipient."
                    },
                    {
                        id: "4.2.5.e",
                        title: "Data Storage System",
                        type: "Technology",
                        criticality: "Mandatory",
                        description: "A system stores data electronically in readable format making data storage and access easy, reliable, and secure with encryption capabilities."
                    }
                ]
            }
        ]
    },
    outsourcing: {
        name: "Outsourcing & Vendor",
        icon: "🤝",
        subdomains: [
            {
                name: "Third-Party & Vendor Management",
                controls: [
                    {
                        id: "5.1.4.a",
                        title: "Approved Vendor Standards",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard identifies specific requirements for vendors using risk-based approach including governance, monitoring, nationality/residency, geographic restrictions, and connectivity requirements."
                    },
                    {
                        id: "5.1.4.b",
                        title: "Supply-Chain Assessment",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard assesses potential purchases and vendors for risk exposure at least annually for each vendor, product line, and contract evaluating unintended cybersecurity consequences."
                    },
                    {
                        id: "5.1.4.c",
                        title: "Vendor Non-Disclosure Agreement (NDA)",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard ensures all vendors and contractors are legally bound by NDA precluding public acknowledgement or discussion about contracts, projects, or services."
                    },
                    {
                        id: "5.1.4.d",
                        title: "Vendor Compliance & Auditing Program",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process ensures vendors comply with standards set forth in organizational policy incorporated into contractual process with right to audit."
                    },
                    {
                        id: "5.1.4.e",
                        title: "Security Vetting",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process ensures security vetting is conducted in risk-based manner with increasingly frequent vetting based on vendor's access requirements."
                    },
                    {
                        id: "5.1.4.f",
                        title: "Onboarding/Offboarding",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process for onboarding and offboarding vendors and contractors accounting for relevant standards tied to asset issuing/recovery, account provisioning/deprovisioning, and physical access."
                    }
                ]
            },
            {
                name: "Cloud Security",
                controls: [
                    {
                        id: "5.2.4.a",
                        title: "Cloud Security Requirements",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard defines security requirements for cloud computing including approved CSPs, multi-tenancy, MFA, geolocation, connectivity, logging, backup, exit plans, and communication matrix."
                    },
                    {
                        id: "5.2.4.b",
                        title: "Approved Supply Chain",
                        type: "Process",
                        criticality: "Advisable",
                        description: "A documented standard identifies list of approved CSPs for IaaS, PaaS, and SaaS in accordance with Third-Party and Vendor Management requirements."
                    },
                    {
                        id: "5.2.4.c",
                        title: "Geographic Boundary Requirements",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard identifies what data must reside only within specific geography and which vendors offer such service varying based on data sensitivity and legal compliance."
                    },
                    {
                        id: "5.2.4.d",
                        title: "Hardening",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard ensures cloud services are configured for least privilege, system hardening including disabled unused services, enhanced logging, and changed default passwords."
                    },
                    {
                        id: "5.2.4.e",
                        title: "Privilege Management",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented process manages and logs activity for users with privileged accounts on IaaS, PaaS, or SaaS CSP services integrated into onboarding/offboarding processes."
                    },
                    {
                        id: "5.2.4.f",
                        title: "Data Flow/Connectivity Requirements",
                        type: "Process",
                        criticality: "Mandatory",
                        description: "A documented standard identifies specific connectivity and data flow requirements for off-premises and cloud-based systems accounting for dedicated private, semi-private, or public transmission."
                    },
                    {
                        id: "5.2.5.a",
                        title: "Cloud Access Security Broker (CASB)",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "An on-prem tool manages and enforces security requirements for cloud integrated into central console for analysis, correlation, and alerting."
                    },
                    {
                        id: "5.2.5.b",
                        title: "Cloud Security Posture Management (CSPM)",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A tool continuously monitors and identifies risks from intentional or unintentional misconfigurations within cloud environment."
                    },
                    {
                        id: "5.2.5.c",
                        title: "Verbose Logging",
                        type: "Technology",
                        criticality: "Advisable",
                        description: "A function provides detailed logging at infrastructure, platform, and application level providing granular visibility of all user and customer cloud activity."
                    }
                ]
            }
        ]
    }
};
