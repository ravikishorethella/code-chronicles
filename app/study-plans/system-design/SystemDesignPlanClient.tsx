"use client";

import { useEffect, useState } from "react";
import styles from "./system-design-plan.module.css";

interface Day {
  day: number;
  title: string;
  topics: string;
  practice: string;
  notes: string;
}

interface Phase {
  id: number;
  title: string;
  subtitle: string;
  days: Day[];
}

const studyPlan: { phases: Phase[] } = {
  phases: [
    {
      id: 1,
      title: "PHASE 1: SOLID Design Principles",
      subtitle: "Goal: Master the foundation of clean object-oriented design",
      days: [
        {
          day: 1,
          title: "Single Responsibility Principle (SRP)",
          topics:
            "What is SOLID and why interviewers care; SRP definition and examples; Identifying violations; Refactoring techniques",
          practice: "Refactor bloated Invoice class into separate responsibilities",
          notes: "SRP definition, 3 violations, refactoring checklist",
        },
        {
          day: 2,
          title: "Open/Closed Principle (OCP)",
          topics:
            "OCP definition; Strategy pattern; Extending without modifying",
          practice: "Design discount calculator using Strategy pattern",
          notes: "OCP definition, Strategy pattern structure, when to apply",
        },
        {
          day: 3,
          title: "Liskov Substitution Principle (LSP)",
          topics:
            "LSP definition; Square-Rectangle problem; When to use composition vs inheritance",
          practice: "Fix Square-Rectangle LSP violation using interfaces",
          notes: "LSP definition, common violations, inheritance vs composition",
        },
        {
          day: 4,
          title: "Interface Segregation Principle (ISP)",
          topics:
            "ISP definition; Fat interface anti-pattern; Multiple interface implementation",
          practice: "Split Worker interface for Robot compatibility",
          notes: "ISP definition, signs of fat interface, how to split",
        },
        {
          day: 5,
          title: "Dependency Inversion + SOLID Revision",
          topics:
            "DIP definition; Dependency injection; Review all 5 SOLID principles",
          practice:
            "Refactor service with dependency injection; Explain all SOLID out loud",
          notes:
            "DIP definition, complete SOLID cheat sheet, personal examples",
        },
      ],
    },
    {
      id: 2,
      title: "PHASE 2: Object Oriented Design Interview",
      subtitle: "Goal: Confidently design LLD systems with clean class structure",
      days: [
        {
          day: 6,
          title: "OOD Interview Framework",
          topics:
            "7-step OOD framework; UML basics; Relationships and cardinality",
          practice: "Draw class diagram for Library Management System",
          notes: "OOD framework, UML cheat sheet, common mistakes",
        },
        {
          day: 7,
          title: "Design Patterns Part 1: Creational",
          topics: "Factory, Singleton, Builder patterns",
          practice: "Implement Factory, Singleton, Builder",
          notes: "Pattern summary cards with use cases",
        },
        {
          day: 8,
          title: "Design Patterns Part 2: Behavioral",
          topics: "Strategy, Observer, Command patterns",
          practice:
            "Implement Strategy for payments, Observer for notifications, Command for undo/redo",
          notes: "Pattern summary cards, real-world use cases",
        },
        {
          day: 9,
          title: "Design Patterns Part 3: Structural",
          topics: "Decorator, Adapter, Facade patterns",
          practice: "Implement Decorator for coffee shop",
          notes: "Decorator vs Inheritance, pattern summary",
        },
        {
          day: 10,
          title: "Parking Lot System Design",
          topics:
            "Requirements, core classes, relationships, Singleton + Factory + Strategy",
          practice: "Full class diagram and flows",
          notes: "Class list, entry/exit flows, edge cases",
        },
        {
          day: 11,
          title: "Elevator System Design",
          topics:
            "Requirements, state management, dispatching algorithm, State + Strategy patterns",
          practice: "Class diagram, state transitions, dispatcher logic",
          notes: "Class list, state diagram, algorithm comparison",
        },
        {
          day: 12,
          title: "Library Management System",
          topics:
            "Books, members, borrow/return, fines, Factory + Observer",
          practice: "Class diagram and borrow/return flows",
          notes: "Class list, key flows, multiple copies handling",
        },
        {
          day: 13,
          title: "Hotel / Movie Ticket Booking",
          topics:
            "Bookings, payments, cancellation, Builder + Strategy + State",
          practice: "Class diagram, booking flow, concurrency handling",
          notes: "Class list, booking flow, concurrency strategy",
        },
        {
          day: 14,
          title: "ATM System Design",
          topics: "Card, PIN, transactions, State + Command patterns",
          practice: "State diagram, class diagram, withdrawal flow",
          notes: "State diagram, class list, transaction flow",
        },
        {
          day: 15,
          title: "Online Shopping System",
          topics: "Catalog, cart, checkout, Observer + Strategy + Composite",
          practice: "Class diagram, checkout flow, inventory management",
          notes: "Class list, checkout flow, inventory handling",
        },
        {
          day: 16,
          title: "Vending Machine Design",
          topics: "Products, payments, State pattern for machine states",
          practice: "State diagram, class diagram, purchase flow",
          notes: "State diagram, class list, purchase flow",
        },
        {
          day: 17,
          title: "Splitwise / Expense Sharing",
          topics:
            "Users, groups, split types, balances, Strategy + Factory",
          practice: "Class diagram, split calculation, debt simplification",
          notes: "Class list, split logic, simplification algorithm",
        },
        {
          day: 18,
          title: "OOD Revision + Mock Interview",
          topics: "Review all patterns; Review all LLD problems",
          practice:
            "Design 2 LLD problems from scratch, 30 min each, speak out loud",
          notes: "Weak areas, comfortable patterns, summary table",
        },
      ],
    },
    {
      id: 3,
      title: "PHASE 3: System Design Fundamentals",
      subtitle: "Goal: Master all HLD building blocks with depth",
      days: [
        {
          day: 19,
          title: "Scalability Basics",
          topics:
            "Vertical vs horizontal scaling; Stateless vs stateful services",
          practice: "Sketch architecture before and after horizontal scaling",
          notes: "Scaling comparison table, stateless vs stateful examples",
        },
        {
          day: 20,
          title: "Load Balancing",
          topics:
            "Types, algorithms (round robin, least connections, IP hash), health checks, failover",
          practice:
            "Design load balancing layer, choose algorithms for scenarios",
          notes: "Algorithm cheat sheet, Layer 4 vs 7, health checks",
        },
        {
          day: 21,
          title: "Databases Part 1: SQL vs NoSQL",
          topics:
            "ACID vs BASE, relational vs document/key-value/column/graph, decision framework",
          practice: "Decide SQL vs NoSQL for 10 systems with justification",
          notes: "Comparison table, ACID vs BASE, decision tree",
        },
        {
          day: 22,
          title: "Databases Part 2: Indexes & Optimization",
          topics:
            "B-tree/hash indexes, query optimization, N+1 problem, normalization vs denormalization",
          practice: "Add indexes to slow queries, fix N+1 query",
          notes: "Index types, optimization checklist, normalization guide",
        },
        {
          day: 23,
          title: "Caching Strategies",
          topics:
            "Cache-aside, write-through, write-back, LRU/LFU eviction, invalidation",
          practice: "Design cache layer for product catalog",
          notes:
            "Caching patterns comparison, eviction policies, invalidation strategies",
        },
        {
          day: 24,
          title: "Database Replication",
          topics:
            "Primary-replica, sync vs async, failover, multi-primary, replication lag",
          practice: "Design replication architecture, handle primary failure",
          notes: "Replication types, failover process, lag consequences",
        },
        {
          day: 25,
          title: "Database Sharding",
          topics:
            "Range/hash/directory sharding, consistent hashing, resharding, hotspots",
          practice:
            "Shard user database with 1B users, handle celebrity problem",
          notes: "Sharding strategies comparison, consistent hashing, when to shard",
        },
        {
          day: 26,
          title: "Message Queues & Async Processing",
          topics:
            "Kafka/RabbitMQ, at-most/at-least/exactly-once delivery, idempotency, DLQ",
          practice:
            "Design notification system with queue, handle worker crash",
          notes: "Queue use cases, delivery guarantees, idempotency strategies",
        },
        {
          day: 27,
          title: "CDN & File Storage",
          topics:
            "CDN edge caching, object storage (S3), upload/download flows, pre-signed URLs",
          practice: "Design image upload system with CDN",
          notes: "CDN benefits, object storage vs file system, flow diagrams",
        },
        {
          day: 28,
          title: "Rate Limiting & API Gateway",
          topics:
            "Token bucket, leaky bucket, sliding window, distributed rate limiting with Redis",
          practice: "Design rate limiter for 1000 req/hour per user",
          notes:
            "Algorithms comparison, when to use each, distributed architecture",
        },
        {
          day: 29,
          title: "Search & Full-Text Search",
          topics:
            "Elasticsearch, inverted index, autocomplete with Trie, fuzzy matching, ranking",
          practice: "Design product search with filters and autocomplete",
          notes: "Full-text vs LIKE, inverted index, autocomplete strategies",
        },
        {
          day: 30,
          title: "Observability: Logging, Metrics, Tracing",
          topics:
            "ELK stack, Prometheus/Grafana, Jaeger, alerting, SLA/SLO/SLI",
          practice: "Design observability for microservices",
          notes: "Three pillars comparison, tools, SLA/SLO/SLI definitions",
        },
        {
          day: 31,
          title: "CAP Theorem & Consistency",
          topics:
            "CAP theorem, CP vs AP systems, strong/eventual consistency, consistency models",
          practice: "Classify 10 systems as CP or AP with justification",
          notes: "CAP with examples, CP vs AP guide, consistency models",
        },
        {
          day: 32,
          title: "HLD Fundamentals Revision + Mock",
          topics: "Review all building blocks from Days 19-31",
          practice:
            "Design Twitter using all building blocks, 40 min, speak out loud",
          notes: "Building blocks summary, personal weak areas",
        },
      ],
    },
    {
      id: 4,
      title: "PHASE 4: System Design Interview",
      subtitle: "Goal: Solve real interview problems end-to-end with confidence",
      days: [
        {
          day: 33,
          title: "HLD Interview Framework",
          topics:
            "8-step framework: requirements, scale estimation, APIs, data model, architecture, bottlenecks, scaling, failure handling",
          practice: "Apply framework to URL shortener, 35 min",
          notes: "Framework checklist, common mistakes",
        },
        {
          day: 34,
          title: "URL Shortener",
          topics:
            "Requirements, scale (100M URLs, 10B redirects), Base62 encoding, caching, sharding",
          practice: "Full design with 8-step framework, 35-40 min",
          notes: "Architecture diagram, Base62, collision handling",
        },
        {
          day: 35,
          title: "Rate Limiter (Full System)",
          topics:
            "Distributed rate limiter with Redis, token bucket, Lua scripts for atomicity",
          practice: "Design distributed rate limiter, explain algorithm, 30 min",
          notes: "Distributed architecture, Redis structure, fail open vs closed",
        },
        {
          day: 36,
          title: "Notification System",
          topics:
            "Push/email/SMS, priority queues, user preferences, retry with backoff, DLQ",
          practice: "Full notification system with queue, 35 min",
          notes: "Architecture, priority handling, retry strategy",
        },
        {
          day: 37,
          title: "Chat Application",
          topics:
            "WebSocket, 1-on-1 and group chat, online presence, offline messages, Cassandra + Kafka",
          practice: "Full chat system, message flows, 40 min",
          notes: "Architecture, 1-on-1 and group flows, presence mechanism",
        },
        {
          day: 38,
          title: "News Feed / Social Feed",
          topics:
            "Fanout on write vs read, hybrid approach for celebrities, Redis caching, feed ranking",
          practice: "Full feed system with fanout decisions, 40 min",
          notes: "Fanout comparison, hybrid strategy, architecture",
        },
        {
          day: 39,
          title: "File Storage System",
          topics:
            "Chunking, deduplication, sync, versioning, conflict resolution, S3 + CDN",
          practice:
            "Full file storage with upload/download/sync flows, 40 min",
          notes: "Chunking strategy, sync flow, conflict resolution",
        },
        {
          day: 40,
          title: "Video Streaming Platform",
          topics:
            "Transcoding, adaptive bitrate (HLS), CDN, recommendations, massive storage",
          practice: "Full YouTube-style platform, 40 min",
          notes: "Upload/transcode/stream flows, adaptive bitrate",
        },
        {
          day: 41,
          title: "Ride-Sharing System",
          topics:
            "Geospatial indexing (Quadtree, Geohash), matching algorithm, location tracking, surge pricing",
          practice: "Full Uber-style system, 40 min",
          notes: "Matching with geospatial index, location tracking, surge",
        },
        {
          day: 42,
          title: "E-commerce Platform",
          topics:
            "Catalog, search (Elasticsearch), cart, checkout, inventory locking, saga pattern",
          practice: "Full e-commerce with checkout flow, 40 min",
          notes: "Checkout with inventory locking, distributed transactions",
        },
        {
          day: 43,
          title: "Distributed Key-Value Store",
          topics:
            "Consistent hashing, replication, quorum, gossip protocol, hinted handoff",
          practice: "Design Redis-style KV store, 35 min",
          notes: "Consistent hashing, replication and quorum, failure handling",
        },
        {
          day: 44,
          title: "Pastebin / Code Sharing",
          topics:
            "Similar to URL shortener with expiration, syntax highlighting, S3 for large pastes",
          practice: "Full pastebin system, 30 min",
          notes: "Architecture, expiration strategies",
        },
        {
          day: 45,
          title: "Full Mock Interview + Final Revision",
          topics:
            "Revisit all 12 systems; Practice 3 random systems from memory; Full 45-min mock on complex system",
          practice:
            "Design Twitter/Uber/YouTube without notes; Self-critique; Final checklist",
          notes: "Confidence level, top 3 weak areas, personal template",
        },
      ],
    },
  ],
};

export default function StudyPlanClient() {
  const [progress, setProgress] = useState<Record<number, string>>({});
  const [collapsedPhases, setCollapsedPhases] = useState<Set<number>>(new Set());

  useEffect(() => {
    const saved = localStorage.getItem("studyPlanProgress");
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  const toggleDay = (day: number) => {
    const newProgress = { ...progress };
    if (newProgress[day]) {
      delete newProgress[day];
    } else {
      newProgress[day] = new Date().toISOString();
    }
    setProgress(newProgress);
    localStorage.setItem("studyPlanProgress", JSON.stringify(newProgress));
  };

  const togglePhase = (phaseId: number) => {
    const newCollapsed = new Set(collapsedPhases);
    if (newCollapsed.has(phaseId)) {
      newCollapsed.delete(phaseId);
    } else {
      newCollapsed.add(phaseId);
    }
    setCollapsedPhases(newCollapsed);
  };

  const expandAll = () => setCollapsedPhases(new Set());
  const collapseAll = () =>
    setCollapsedPhases(new Set(studyPlan.phases.map((p) => p.id)));

  const resetProgress = () => {
    if (confirm("Reset all progress? This cannot be undone.")) {
      setProgress({});
      localStorage.setItem("studyPlanProgress", JSON.stringify({}));
    }
  };

  const exportProgress = () => {
    const completed = Object.keys(progress).map((day) => ({
      day: parseInt(day),
      completedAt: progress[parseInt(day)],
    }));

    const data = JSON.stringify(
      {
        exportDate: new Date().toISOString(),
        totalDays: 45,
        completedCount: completed.length,
        completedDays: completed,
      },
      null,
      2
    );

    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `study-plan-progress-${
      new Date().toISOString().split("T")[0]
    }.json`;
    link.click();
  };

  const completedCount = Object.keys(progress).length;
  const totalDays = 45;
  const remainingDays = totalDays - completedCount;
  const percent = Math.round((completedCount / totalDays) * 100);

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <div style={{ marginBottom: '20px' }}>
        <a
          href="/study-plans"
          style={{
            color: '#667eea',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500',
          }}
          className={styles.breadcrumb}
        >
          ← All Study Plans
        </a>
      </div>

      <div className={styles.header}>
        <h1>📚 45-Day System Design Master Plan</h1>
        <p>1.5 hours/day | Design Gurus | Complete LLD + HLD Coverage</p>
      </div>

      <div className={styles.progressSection}>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar} style={{ width: `${percent}%` }}>
            {percent}%
          </div>
        </div>
        <div className={styles.progressStats}>
          <div className={styles.statCard}>
            <div className={styles.number}>{completedCount}</div>
            <div className={styles.label}>Days Completed</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.number}>{remainingDays}</div>
            <div className={styles.label}>Days Remaining</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.number}>{percent}%</div>
            <div className={styles.label}>Progress</div>
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={expandAll}>
          📖 Expand All
        </button>
        <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={collapseAll}>
          📕 Collapse All
        </button>
        <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={exportProgress}>
          💾 Export Progress
        </button>
        <button className={`${styles.btn} ${styles.btnDanger}`} onClick={resetProgress}>
          🔄 Reset All
        </button>
      </div>

      <div className={styles.content}>
        {studyPlan.phases.map((phase) => (
          <div key={phase.id} className={styles.phase}>
            <div
              className={styles.phaseHeader}
              onClick={() => togglePhase(phase.id)}
            >
              <div>
                <h2>{phase.title}</h2>
                <p style={{ marginTop: "5px", opacity: 0.9 }}>{phase.subtitle}</p>
              </div>
              <span
                className={`${styles.toggle} ${
                  collapsedPhases.has(phase.id) ? styles.collapsed : ""
                }`}
              >
                ▼
              </span>
            </div>
            <div
              className={`${styles.phaseContent} ${
                collapsedPhases.has(phase.id) ? styles.phaseCollapsed : ""
              }`}
            >
              {phase.days.map((day) => (
                <div
                  key={day.day}
                  className={`${styles.dayCard} ${
                    progress[day.day] ? styles.completed : ""
                  }`}
                >
                  <div className={styles.dayHeader}>
                    <input
                      type="checkbox"
                      className={styles.dayCheckbox}
                      checked={!!progress[day.day]}
                      onChange={() => toggleDay(day.day)}
                    />
                    <div className={styles.dayTitle}>
                      Day {day.day} — {day.title}
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <a
                        href={`/study-plans/system-design/${day.day}`}
                        className={styles.notesLink}
                        title="View detailed notes"
                      >
                        📝 Notes
                      </a>
                      <span className={styles.dayBadge}>Day {day.day}</span>
                    </div>
                  </div>
                  <div className={styles.dayTopics}>
                    <h4>📋 Topics</h4>
                    <p>{day.topics}</p>
                    <h4>💻 Practice</h4>
                    <p>{day.practice}</p>
                    <h4>📝 Notes to Write</h4>
                    <p>{day.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
