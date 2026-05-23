# ARIHANT KUMAR JAIN
**Email:** arihantjainn04@gmail.com | **Phone:** +91 8939258516  
**LinkedIn:** [linkedin.com/in/arihant-jain-ai](https://linkedin.com/in/arihant-jain-ai) | **GitHub:** [github.com/techwizAJ](https://github.com/techwizAJ) | **Portfolio:** [arihant-tech.info](https://arihant-tech.info)  

---

### **PROFILE SUMMARY**
High-performance **Senior / Staff Software Engineer (L6 equivalent)** with **7+ years** of hands-on experience architecting, scaling, and securing distributed ledger, transactional, and next-generation AI platforms. Recognized expert in optimizing p99 latency in ultra-high throughput environments, resolving complex distributed state challenges, and integrating autonomous multi-agent workflows as high-scale system capabilities. Proven track record of spearheading zero-downtime microservice migrations, designing resilient transactional workflows ($10B+ daily volume), and cutting operational latency by up to 99%. Expert in Java/Spring ecosystem, Kafka event-driven backbones, caching topologies, and robust system-level consistency models.

---

### **CORE SKILLS**
* **Languages:** Java (Core, Concurrency, Multithreading), Python, C++, Node.js, SQL
* **Backend Frameworks:** Spring Boot, Spring Cloud, Spring Security, Spring WebFlux (Reactive Stack)
* **Distributed Systems & Storage:** Apache Kafka, Redis (Cache-Aside, Distributed Locks), MongoDB, MySQL, Elasticsearch, Azure Service Bus
* **Systems Architecture:** Distributed Transactions (Saga Orchestration, Event Sourcing, ACID), Consistency Models (Eventual/Strong Consistency, Linearizability), High Availability, Idempotency Engineering, Fault Isolation (Resilience4j Circuit Breakers, Bulkheads, Rate Limiters), Observability (OpenTelemetry, Prometheus, ELK Stack, Zipkin, JProfiler)
* **AI & Next-Gen Systems:** Multi-Agent Systems, LangGraph (Orchestration & State Management), Retrieval-Augmented Generation (RAG) Pipelines, Knowledge Graphs, Semantic Vector Search, Claude / OpenAI LLM Integration
* **Cloud & DevOps:** AWS, Azure, Docker, Kubernetes, Terraform, Jenkins, CI/CD, Liquibase Schema Migration

---

### **PROFESSIONAL EXPERIENCE**

#### **WISSEN TECHNOLOGY | Client: MORGAN STANLEY** | Mumbai, India
*Senior Software Engineer* | *June 2025 – Present*
* **Agentic Flow Accelerator Platform:** Architected and deployed an enterprise-grade meta-orchestration platform utilizing autonomous multi-agent networks (via LangGraph and custom semantic state trees) to automate institutional-grade market onboarding (legal entities, depositories, agent accounts). Built event-driven compilation engines that dynamically generate schema migrations (Liquibase) and pull requests, compressing the onboarding pipeline from **3 weeks to ~10 minutes (a 99.9% operational efficiency gain)** with zero schema drift.
* **Agentic Reconciliation Intelligence System:** Engineered a distributed data-aggregation and log-analysis engine to index heterogeneous, multi-system database and legacy mainframe ledger streams (processing billions of events). Integrated a custom RAG pipeline and dynamic Knowledge Graphs into a hierarchical, multi-agent diagnostic framework. Automated break detection and root-cause analysis, compressing cross-border trade desk investigations from **weeks to <5 minutes**.
* **Global Market Scoping Engine:** Redesigned Morgan Stanley’s legacy trade-scoping rules system, migrating from a brittle, rules-based structure prone to validation failures to a market-driven policy matrix. Reduced overall rule-base complexity by **85%**, eliminating edge cases that previously exposed the firm to millions in transactional settlement risk.
* **High-Availability Settlement Pipelines:** Led the distributed systems design for the Asia-Pacific trade settlement infrastructure, safely processing **1.5M+ transactions daily ($10B+ transactional volume)**. Implemented distributed transactional consensus, Saga orchestration patterns, and idempotent ingestion filters to guarantee strict 'exactly-once' processing under extreme market volatility.

#### **TATA CONSULTANCY SERVICES (TCS) | Client: ERICSSON** | Pune, India
*Systems Engineer* | *April 2022 – June 2025*
* **Core Microservice Refactoring & Latency Optimization:** Spearheaded the architectural redesign of a highly degraded core telecommunications provisioning microservice. Replaced synchronous, blocking HTTP polling with a high-throughput, event-driven data ingestion pipeline using **Apache Kafka** and a distributed **Redis cache-aside topology**. Slashed **p99 latency by 99.6% (from 12 seconds to 40 milliseconds)** while enforcing strict eventual consistency models between MongoDB and relational datastores.
* **High-Throughput Messaging & Scaling:** Designed and deployed a highly scalable, partitioned event-driven messaging backbone using Kafka, configured with custom partitioners, consumer group scaling, and backpressure handling. Achieved throughput scaling of **100k+ RPS** during peak telemetry traffic bursts without message loss.
* **Asynchronous Execution & Concurrency:** Re-engineered legacy synchronous APIs into non-blocking, reactive asynchronous streams (using Spring WebFlux/CompletableFuture), improving concurrent connection handling by **5x** under peak telecommunication workloads.
* **Fault Isolation & Resilience:** Implemented system resilience patterns utilizing Resilience4j (Circuit Breakers, Bulkheads, and Rate Limiters) to prevent cascading failures across downstream provisioning networks. Integrated Azure Active Directory (AD) with OIDC/OAuth 2.0 and Spring Security to enforce enterprise-grade API security.

#### **HIGHRADIUS TECHNOLOGIES** | Hyderabad, India
*Technical Consultant (Growth Path: Intern to TC)* | *January 2019 – March 2022*
* **Promotion Timeline:** Promoted 4 times within a 3-year tenure, progressing from:
  * *Technical Consultant* (Oct 2021 – Mar 2022)
  * *Associate Technical Consultant* (Jul 2020 – Nov 2021)
  * *Associate Software Engineer* (May 2019 – Jun 2020)
  * *Software Development Intern* (Jan 2019 – Apr 2019)
* **Configurable Rule-Engine Framework:** Architected and built a highly configurable, high-performance rule-engine framework to parse and match incoming accounts receivable data. Elevated straight-through payment reconciliation automation from **20% to 80%** for Fortune 500 enterprise clients, reducing manual accounts-receivable aging cycles by **70%**.
* **Financial File Ingestion Pipeline:** Engineered a robust, high-volume financial parsing and ingestion pipeline supporting standard global banking formats (**BAI2 and MT940**). Designed streaming parsers that processed **500MB+ banking statement files** containing millions of transactions with strict transactional isolation and duplicate detection (idempotent ledger writes).
* **Distributed Observability & Performance Tuning:** Designed and established an enterprise-wide observability framework integrating distributed tracing (ELK Stack, Prometheus, Zipkin) and structured logging. Enabled proactive performance bottleneck identification, reducing mean-time-to-detection (MTTD) of production anomalies from **4 hours to under 5 minutes** across multi-tenant SaaS environments.
* **Technical Leadership:** Mentored a cross-functional team of **10+ junior software engineers**, standardizing code quality metrics, CI/CD automated test suites (JUnit/Mockito), and robust system design best practices.

---

### **KEY PROJECTS**

#### **BoardroomIQ AI | Solo-Built AI Strategy Platform**
* *System Overview:* A high-performance strategy simulation platform featuring autonomous multi-agent boardrooms.
* *Distributed & AI Architecture:* Engineered using a hierarchical agent architecture (orchestrated via **LangGraph** and powered by Claude LLM API) where individual personas (CFO, Bear, Bull, Activist) debate corporate actions using deep **Retrieval-Augmented Generation (RAG)** context.
* *Systems Engineering:* Leveraged Redis for distributed state management and session caching, ensuring low-latency agent turn-taking and context window compression. Designed an asynchronous job queue using Node.js to manage concurrency spikes during heavy simulated debates. Built dynamic evaluation nodes that calculate, track, and score user strategy performance across 8 dimensions in real-time.
* *Link:* Live Demo available at [boardroomiq-ai.com](https://boardroomiq-ai.com)

#### **Treasury Infrastructure Platform | Open-Source Distributed Financial Infrastructure**
* *System Overview:* A high-throughput, enterprise-grade financial ledger and cash-visibility engine.
* *Architecture:* Engineered with **Spring Boot** and **MySQL** to handle distributed transactional integrity across multi-region accounting ledgers.
* *Systems Engineering:* Implemented strict transactional auditing, double-entry bookkeeping constraints, Saga orchestration to handle multi-step payment settlements, and idempotent API endpoints to guarantee zero double-spend or duplicate billing events under network failures.
* *Link:* Source available at [github.com/techwizAJ/TreasuryApplication](https://github.com/techwizAJ/TreasuryApplication)

---

### **EDUCATION**
* **SRM University, Chennai**  
  *Bachelor of Technology (B.Tech.) in Computer Science and Engineering* (Graduated: 2019)  
  *Performance:* **85.09%** (First Class with Distinction)
* **Sri Chaitanya Junior College, Hyderabad**  
  *Higher Secondary Certificate (12th Grade)* (Graduated: 2015)  
  *Performance:* **90.3%**
* **Slate The School, Hyderabad**  
  *Secondary School Certificate (10th Grade)* (Graduated: 2013)  
  *Performance:* **9.3 GPA**
