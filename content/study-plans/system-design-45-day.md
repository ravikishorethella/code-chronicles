# 45-Day System Design Master Plan
> 1.5 hours/day | Design Gurus | Complete LLD + HLD Coverage

---

## Course Coverage
1. **Grokking SOLID Design Principles** (Days 1–5)
2. **Grokking the Object Oriented Design Interview** (Days 6–18)
3. **Grokking System Design Fundamentals** (Days 19–32)
4. **Grokking the System Design Interview** (Days 33–45)

---

## Time Distribution
| Phase | Days | Focus |
|---|---|---|
| SOLID Principles | 5 | Foundation for clean design |
| OOD Interview | 13 | LLD patterns + problems |
| HLD Fundamentals | 14 | Building blocks in depth |
| HLD Interview Problems | 13 | Real systems from scratch |

---

## Daily Structure (1.5 hours)
- **25 min** → Learn concept / read material
- **45 min** → Practice / design / solve
- **15 min** → Write notes / summary
- **5 min** → Quick revision of previous topic

---

---

# PHASE 1: SOLID Design Principles (Days 1–5)
> Goal: Master the foundation of clean object-oriented design

---

## Day 1 — Single Responsibility Principle (SRP)
### Topics
- What is SOLID and why interviewers care
- **Single Responsibility Principle (SRP)**
  - Definition: One class should have one reason to change
  - Problem it solves: tight coupling, hard to test, hard to maintain
  - Real-world violations: God classes, manager classes doing too much
  - How to identify SRP violations
  - Refactoring techniques: extract class, extract interface

### Practice
- Take a bloated `Invoice` class that handles calculation, persistence, and printing
- Refactor it into `Invoice`, `InvoiceCalculator`, `InvoiceRepository`, `InvoicePrinter`
- Justify why each class now has a single responsibility

### Notes to Write
- One-line SRP definition
- 3 real-world examples of SRP violations
- Refactoring checklist for SRP

---

## Day 2 — Open/Closed Principle (OCP)
### Topics
- **Open/Closed Principle (OCP)**
  - Definition: Open for extension, closed for modification
  - Why it matters: avoid breaking existing code when adding features
  - Techniques: inheritance, composition, interfaces, abstract classes
  - Strategy pattern as OCP implementation
  - Real examples: payment systems, notification systems

### Practice
- Design a discount calculator that supports percentage, fixed, and seasonal discounts
- Use Strategy pattern to make it extensible without modifying base code
- Add a new discount type without changing existing classes

### Notes to Write
- OCP definition + why it prevents bugs
- Strategy pattern structure
- When to apply OCP (not always needed for simple code)

---

## Day 3 — Liskov Substitution Principle (LSP)
### Topics
- **Liskov Substitution Principle (LSP)**
  - Definition: Subclasses must be substitutable for their parent class
  - Common violation: Rectangle → Square breaking width/height expectations
  - Another violation: overriding methods to throw exceptions or do nothing
  - How to fix: use composition instead of inheritance where behavior differs
  - Designing contracts correctly

### Practice
- Examine the classic Square-Rectangle problem
- Explain why `Square extends Rectangle` violates LSP
- Refactor using interface `Shape` with both implementing it independently
- Write test cases that break when LSP is violated

### Notes to Write
- LSP definition in simple words
- 2–3 common LSP violations
- Decision tree: when to use inheritance vs composition

---

## Day 4 — Interface Segregation Principle (ISP)
### Topics
- **Interface Segregation Principle (ISP)**
  - Definition: Clients should not depend on interfaces they don't use
  - Anti-pattern: fat interfaces forcing empty implementations
  - Real example: `Printer` interface with `print()`, `scan()`, `fax()` — not all printers fax
  - Solution: split into `Printable`, `Scannable`, `Faxable`
  - Benefits: cleaner code, easier testing, better flexibility

### Practice
- Design a `Worker` interface with `work()`, `eat()`, `sleep()`
- Show why a `Robot` implementing it is problematic (robots don't eat)
- Refactor into `Workable`, `Feedable`, `Restable` interfaces
- Use multiple interface implementation

### Notes to Write
- ISP definition
- Signs of fat interface: many empty method bodies
- How to split interfaces correctly

---

## Day 5 — Dependency Inversion Principle (DIP) + SOLID Revision
### Topics
- **Dependency Inversion Principle (DIP)**
  - Definition: Depend on abstractions, not concrete implementations
  - High-level modules should not depend on low-level modules
  - Both should depend on abstractions (interfaces)
  - Dependency Injection as a technique
  - Real example: service layer depending on `IRepository` interface, not `MySQLRepository` class

### Practice
- Refactor a service that directly instantiates database classes
- Introduce `IDatabase` interface and inject it via constructor
- Show how you can now swap MySQL for PostgreSQL without changing service code

### Revision (30 min)
- Review all 5 SOLID principles
- For each, write one real-world example from your work experience
- Explain all 5 principles out loud without notes for 10 minutes

### Notes to Write
- DIP definition + dependency injection basics
- Complete SOLID cheat sheet (one page, all 5 principles)
- Personal examples from past projects

---

---

# PHASE 2: Object Oriented Design Interview (Days 6–18)
> Goal: Confidently design LLD systems in interviews with clean class structure

---

## Day 6 — OOD Interview Framework
### Topics
- How OOD interviews are structured
- Step-by-step framework:
  1. **Clarify requirements** — ask about users, features, constraints
  2. **Identify actors** — who interacts with the system?
  3. **Identify use cases** — what do actors do?
  4. **Identify core entities/objects** — nouns from requirements
  5. **Define relationships** — how objects interact
  6. **Apply design patterns** — only when needed, not forced
  7. **Walk through flows** — explain key scenarios
- UML basics for interviews:
  - Class diagram: attributes, methods
  - Relationships: association, aggregation, composition, inheritance
  - Cardinality: 1-to-1, 1-to-many, many-to-many

### Practice
- Draw class diagram for a basic **Library Management System**
- Identify: Library, Book, Member, Librarian, Catalog, Loan
- Define relationships: Member borrows Book, Library has Catalog
- No code yet, just boxes and arrows

### Notes to Write
- 7-step OOD interview framework
- UML relationship cheat sheet with examples
- Common mistakes to avoid in OOD interviews

---

## Day 7 — Design Patterns Part 1: Creational
### Topics
- **Factory Pattern**
  - Create objects without specifying exact class
  - Use case: shape factory, vehicle factory
  - Structure: factory interface, concrete factories, product interface
- **Singleton Pattern**
  - Ensure only one instance exists
  - Use case: Logger, ConfigManager, DatabaseConnection
  - Thread-safe implementation considerations
- **Builder Pattern**
  - Construct complex objects step by step
  - Use case: building User, Order, Query objects with many optional fields
  - Avoids constructor with 10+ parameters

### Practice
- Implement Factory for shapes: Circle, Rectangle, Triangle
- Implement thread-safe Singleton for Logger
- Implement Builder for User object with 8 optional fields

### Notes to Write
- Pattern summary card: problem → solution → structure → when to use
- Code skeleton for each pattern

---

## Day 8 — Design Patterns Part 2: Behavioral
### Topics
- **Strategy Pattern**
  - Encapsulate algorithms and make them interchangeable
  - Use case: payment methods, sorting algorithms, compression types
  - Structure: strategy interface, concrete strategies, context
- **Observer Pattern**
  - One-to-many dependency: when one object changes, notify all dependents
  - Use case: event systems, stock price alerts, UI updates
  - Structure: subject, observers, notify mechanism
- **Command Pattern**
  - Encapsulate a request as an object
  - Use case: undo/redo, transaction logs, remote controls
  - Structure: command interface, concrete commands, invoker, receiver

### Practice
- Implement Strategy for payment: CreditCard, PayPal, UPI
- Implement Observer for stock price notification system
- Implement Command for text editor with undo/redo

### Notes to Write
- Pattern summary card for Strategy, Observer, Command
- Real-world use cases for each

---

## Day 9 — Design Patterns Part 3: Structural
### Topics
- **Decorator Pattern**
  - Add behavior to objects dynamically without changing their code
  - Use case: coffee shop (Espresso + Milk + Sugar), text formatting
  - Structure: component interface, concrete component, decorators
- **Adapter Pattern**
  - Convert interface of a class into another interface clients expect
  - Use case: integrating third-party libraries, legacy code
- **Facade Pattern**
  - Provide simplified interface to complex subsystem
  - Use case: simplifying complex APIs

### Practice
- Implement Decorator for coffee shop order system
- Add Milk, Sugar, Whipped Cream decorators to base Espresso
- Calculate total cost dynamically

### Notes to Write
- Decorator vs Inheritance comparison
- When to use Adapter, when to use Facade
- Pattern summary cards

---

## Day 10 — Parking Lot System Design
### Topics
- **Requirements**
  - Multiple floors, multiple spot sizes (compact, large, handicapped)
  - Vehicles: car, truck, motorcycle
  - Entry/exit gates, ticket generation, fee calculation
  - Payment methods
- **Core classes**
  - ParkingLot (Singleton), ParkingFloor, ParkingSpot, Vehicle, Ticket, Payment, Gate
- **Relationships**
  - ParkingLot has many ParkingFloors
  - ParkingFloor has many ParkingSpots
  - ParkingSpot assigned to one Vehicle
  - Ticket links Vehicle to ParkingSpot
- **Patterns used**
  - Singleton for ParkingLot
  - Factory for Vehicle creation
  - Strategy for fee calculation

### Practice
- Draw full class diagram with attributes and methods
- Write class definitions (pseudo-code level)
- Walk through flows: vehicle entry, parking, exit, payment
- Explain design out loud for 15 minutes

### Notes to Write
- Parking lot class list with responsibilities
- Entry and exit flow diagrams
- Edge cases: no spots available, lost ticket

---

## Day 11 — Elevator System Design
### Topics
- **Requirements**
  - Multiple elevators, multiple floors
  - Up/down buttons on each floor, floor buttons inside elevator
  - Request dispatching algorithm
  - States: idle, moving up, moving down, door open, door closed
- **Core classes**
  - Elevator, ElevatorController, Floor, Button, Request, Door, Display
- **Algorithms**
  - Simple: nearest elevator
  - Advanced: direction-based (favor same-direction requests)
- **Patterns used**
  - State pattern for elevator states
  - Strategy for dispatching algorithm

### Practice
- Draw class diagram
- Define state transitions: idle → moving up → door open → idle
- Write dispatcher logic
- Walk through request flow: user on floor 3 presses up → which elevator responds?

### Notes to Write
- Elevator class list
- State transition diagram
- Dispatching algorithm comparison

---

## Day 12 — Library Management System Design
### Topics
- **Requirements**
  - Books, members, librarians
  - Search catalog, borrow, return, renew, reserve
  - Late fees, notifications
  - Book status: available, borrowed, reserved
- **Core classes**
  - Library, Book, BookItem, Member, Librarian, Catalog, Loan, Fine, Notification
- **Relationships**
  - Library has Catalog (composition)
  - Catalog has many Books
  - Book has many BookItems (copies)
  - Member borrows BookItem via Loan
  - Loan tracks due date and fines
- **Patterns used**
  - Factory for creating members, loans
  - Observer for notifications

### Practice
- Draw class diagram
- Write borrow and return flows
- Handle edge cases: book already borrowed, member has fines
- Explain out loud for 15 minutes

### Notes to Write
- Library class list with responsibilities
- Borrow/return flow
- How to handle multiple copies of same book

---

## Day 13 — Hotel Management / Movie Ticket Booking System
### Topics
- **Requirements (Hotel or Movie — pick one)**
  - Hotel: rooms, booking, check-in, check-out, payment, cancellation
  - Movie: theaters, screens, shows, seats, booking, payment, cancellation
- **Core classes (Hotel)**
  - Hotel, Room, Booking, Guest, Payment, Notification
  - RoomType: single, double, suite
- **Core classes (Movie)**
  - Theater, Screen, Movie, Show, Seat, Booking, User, Payment
- **Patterns used**
  - Builder for creating complex booking objects
  - Strategy for pricing (weekday, weekend, holidays)
  - State for booking status: pending, confirmed, cancelled

### Practice
- Draw class diagram for one system
- Write booking flow: search availability → select → confirm → pay
- Handle edge cases: double booking, cancellation before show
- Explain concurrency: two users booking same seat simultaneously

### Notes to Write
- Class list + booking flow
- Concurrency handling strategy (locks, optimistic/pessimistic locking)

---

## Day 14 — ATM System Design
### Topics
- **Requirements**
  - Insert card, enter PIN, check balance, withdraw, deposit, transfer
  - States: idle, card inserted, PIN entered, transaction in progress
  - Handle cash dispensing, receipt printing
- **Core classes**
  - ATM, Card, Account, Bank, Transaction, CashDispenser, CardReader, Screen, Keypad
- **State management**
  - Idle → CardInserted → PINVerified → TransactionInProgress → Idle
- **Patterns used**
  - State pattern for ATM states
  - Command pattern for transactions (withdraw, deposit commands)

### Practice
- Draw state diagram
- Draw class diagram
- Write withdrawal flow step by step
- Handle edge cases: insufficient balance, wrong PIN, ATM out of cash

### Notes to Write
- ATM state diagram
- Class list
- Transaction flow

---

## Day 15 — Online Shopping System (Amazon-style)
### Topics
- **Requirements**
  - Product catalog, categories, search, filters
  - Shopping cart, wishlist
  - Checkout, payment, order tracking
  - Reviews and ratings
  - User accounts, addresses
- **Core classes**
  - Product, Category, Cart, CartItem, Order, OrderItem, Payment, Shipment, User, Address, Review
- **Relationships**
  - User has Cart (one-to-one)
  - Cart has many CartItems
  - Order has many OrderItems
  - Product has many Reviews
- **Patterns used**
  - Observer for order status notifications
  - Strategy for payment methods
  - Composite for category hierarchy

### Practice
- Draw class diagram
- Write checkout flow: cart → order → payment → confirmation
- Handle inventory management: decrement stock on order
- Explain out loud for 20 minutes

### Notes to Write
- Class list + checkout flow
- Inventory concurrency handling

---

## Day 16 — Vending Machine Design
### Topics
- **Requirements**
  - Display products, select product, insert money, dispense product, return change
  - Handle cash and card payments
  - States: idle, product selected, payment pending, dispensing, out of stock
- **Core classes**
  - VendingMachine, Product, Inventory, Payment, CashReceiver, Dispenser, State
- **State management**
  - Idle → ProductSelected → PaymentPending → Dispensing → Idle
- **Patterns used**
  - State pattern for vending machine states
  - Strategy for payment types

### Practice
- Draw state diagram
- Draw class diagram
- Write purchase flow step by step
- Handle edge cases: insufficient payment, product out of stock, change not available

### Notes to Write
- State diagram
- Class list
- Purchase flow

---

## Day 17 — Splitwise / Expense Sharing System
### Topics
- **Requirements**
  - Users, groups, expenses
  - Split types: equal, exact, percentage
  - Balances between users
  - Settle up, simplify debts
- **Core classes**
  - User, Group, Expense, Split, Balance, Transaction
- **Relationships**
  - Group has many Users
  - Expense has many Splits (one per user involved)
  - Balance tracks net amount between two users
- **Patterns used**
  - Strategy for different split types
  - Factory for creating splits

### Practice
- Draw class diagram
- Write flow: add expense → calculate splits → update balances
- Implement debt simplification algorithm
- Explain out loud

### Notes to Write
- Class list
- Split calculation logic
- Debt simplification algorithm

---

## Day 18 — OOD Revision + Mock Interview Day
### Topics
- Revisit all design patterns from Days 7–9
- Revisit all LLD problems from Days 10–17
- Review common mistakes: over-engineering, missing edge cases, unclear responsibilities

### Practice (Full Mock)
- Pick any **two** LLD problems from Days 10–17
- Design each completely from scratch without notes
- Time yourself: 30 minutes per problem
- Speak out loud as if interviewer is listening
- After each, self-critique: what did I miss? What could be cleaner?

### Notes to Write
- Personal weak areas in LLD
- Patterns I'm most comfortable with
- Patterns I need more practice on
- Summary table: all LLD problems with core classes

---

---

# PHASE 3: System Design Fundamentals (Days 19–32)
> Goal: Master all HLD building blocks with depth and real-world understanding

---

## Day 19 — Scalability Basics
### Topics
- What is scalability: ability to handle growth
- **Vertical scaling** (scale up): add more CPU, RAM to one machine
  - Pros: simple, no code changes
  - Cons: hardware limits, single point of failure, expensive
- **Horizontal scaling** (scale out): add more machines
  - Pros: no hardware limit, fault tolerant
  - Cons: complexity, data consistency challenges
- **Stateless vs stateful services**
  - Stateless: any server can handle any request (easy to scale)
  - Stateful: server remembers session (harder to scale, need sticky sessions or shared state)
- When to use each

### Practice
- Sketch architecture for e-commerce website
- Show before scaling (1 server) and after horizontal scaling (load balancer + 3 servers)
- Identify which services should be stateless vs stateful
- Answer: what happens when one server crashes?

### Notes to Write
- Vertical vs horizontal scaling comparison table
- Stateless vs stateful services with examples

---

## Day 20 — Load Balancing
### Topics
- What is a load balancer: distributes traffic across multiple servers
- **Types**
  - Hardware load balancer vs software load balancer
  - Layer 4 (transport) vs Layer 7 (application)
- **Algorithms**
  - Round robin: distribute evenly
  - Least connections: send to server with fewest active connections
  - IP hash: same client always goes to same server
  - Least response time
- **Health checks**: detect and avoid unhealthy servers
- **Session persistence** (sticky sessions): route same user to same server
- **Failover**: reroute traffic when server fails

### Practice
- Draw architecture with load balancer in front of 4 web servers
- Choose algorithm for each scenario:
  - All servers equal → round robin
  - Variable server capacity → least connections
  - Stateful sessions → IP hash or sticky sessions
- What happens if load balancer itself fails? → use redundant load balancers

### Notes to Write
- Load balancer algorithms cheat sheet
- Layer 4 vs Layer 7 comparison
- Health check mechanisms

---

## Day 21 — Databases Part 1: SQL vs NoSQL
### Topics
- **Relational (SQL) databases**
  - Structure: tables, rows, columns, primary/foreign keys
  - ACID properties: Atomicity, Consistency, Isolation, Durability
  - Joins, indexes, transactions
  - Use cases: structured data, complex queries, strong consistency
  - Examples: PostgreSQL, MySQL
- **NoSQL databases**
  - Types: document (MongoDB), key-value (Redis), column (Cassandra), graph (Neo4j)
  - BASE properties: Basically Available, Soft state, Eventually consistent
  - No joins, denormalized data
  - Use cases: flexible schema, massive scale, high write throughput
- **Decision framework**: when to use SQL vs NoSQL

### Practice
- Decide SQL vs NoSQL for 10 systems:
  - Banking transactions → SQL (ACID)
  - Social media feed → NoSQL (scale, eventual consistency OK)
  - E-commerce orders → SQL (transactions, consistency)
  - Session store → NoSQL key-value (fast, simple)
  - Analytics / logs → NoSQL column store (write-heavy)
- Justify each decision

### Notes to Write
- SQL vs NoSQL comparison table
- ACID vs BASE explanation
- Decision tree: which database to choose?

---

## Day 22 — Databases Part 2: Indexes and Query Optimization
### Topics
- **Indexes**
  - What: data structure to speed up reads
  - B-tree indexes, hash indexes
  - Tradeoffs: faster reads, slower writes, more storage
  - When to index: columns used in WHERE, JOIN, ORDER BY
  - When not to index: high write workload, small tables
- **Query optimization**
  - Avoid SELECT *, only fetch needed columns
  - Use LIMIT for pagination
  - Avoid N+1 queries: use joins or batch fetch
  - Use EXPLAIN to analyze query plan
- **Normalization vs denormalization**
  - Normalization: reduce redundancy (good for writes, complex for reads)
  - Denormalization: duplicate data for fast reads (common in NoSQL)

### Practice
- Given slow query on `users` table, add appropriate index
- Explain why indexing `email` helps login query
- Identify N+1 query in ORM code and fix it
- Decide: should you denormalize for this read-heavy system?

### Notes to Write
- Index types and use cases
- Query optimization checklist
- Normalization vs denormalization decision guide

---

## Day 23 — Caching Strategies
### Topics
- **Why caching**: reduce latency, reduce database load, save cost
- **Where to cache**: client-side, CDN, application-side, database query cache
- **Caching patterns**
  - **Cache-aside (lazy loading)**: app checks cache first, if miss → fetch from DB → store in cache
  - **Write-through**: write to cache and DB simultaneously (slower writes, consistent)
  - **Write-back (write-behind)**: write to cache first, async write to DB later (fast writes, risk of data loss)
  - **Refresh-ahead**: proactively refresh cache before expiration
- **Cache eviction policies**
  - LRU (Least Recently Used)
  - LFU (Least Frequently Used)
  - FIFO, TTL (Time To Live)
- **Cache invalidation**: the hard problem
  - TTL-based expiration
  - Event-driven invalidation

### Practice
- Design cache layer for product catalog
- Choose caching pattern: read-heavy → cache-aside
- Choose eviction policy: limited memory → LRU
- What happens when cache is cold (empty)? → thundering herd problem → use locks or refresh-ahead
- What happens when data becomes stale? → invalidate cache when product updated

### Notes to Write
- Caching patterns comparison table
- Eviction policies cheat sheet
- Cache invalidation strategies

---

## Day 24 — Database Replication
### Topics
- **Why replication**: high availability, durability, read scalability
- **Primary-replica (master-slave) replication**
  - All writes go to primary
  - Replicas copy data from primary
  - Reads can go to replicas (read scaling)
- **Synchronous vs asynchronous replication**
  - Synchronous: replicas updated immediately (slower writes, strong consistency)
  - Asynchronous: replicas updated eventually (faster writes, eventual consistency, replication lag)
- **Failover**
  - If primary fails, promote replica to primary
  - Manual vs automatic failover
  - Split-brain problem
- **Multi-primary replication**
  - Multiple primaries, conflicts possible
  - Use conflict resolution strategies

### Practice
- Draw architecture: 1 primary DB + 2 read replicas
- Answer: how do you handle primary failure?
- Answer: what happens if replication lag is 5 seconds and user reads stale data?
- Decide: synchronous or asynchronous for banking vs social media?

### Notes to Write
- Replication types comparison
- Failover process
- Replication lag consequences

---

## Day 25 — Database Sharding (Partitioning)
### Topics
- **Why sharding**: scale beyond single database capacity
- **Horizontal partitioning (sharding)**: split rows across multiple databases
- **Sharding strategies**
  - **Range-based**: user_id 1-1M → shard1, 1M-2M → shard2
    - Pros: simple
    - Cons: uneven distribution, hotspots
  - **Hash-based**: hash(user_id) % num_shards
    - Pros: uniform distribution
    - Cons: hard to add shards (resharding), no range queries
  - **Directory-based / lookup service**: maintain shard mapping in separate service
    - Pros: flexible
    - Cons: extra lookup, single point of failure for directory
- **Challenges**
  - Joins across shards: expensive, avoid or denormalize
  - Resharding: when shard becomes too large, split it
  - Celebrity/hotspot problem: one shard gets too much traffic
- **Consistent hashing**: technique to minimize resharding

### Practice
- Shard user database with 1 billion users using hash-based sharding
- Explain what happens when you add a new shard
- Handle celebrity user problem: use dedicated shard or cache heavily
- Decide sharding strategy for time-series data (logs): range-based by timestamp

### Notes to Write
- Sharding strategies comparison table
- Consistent hashing explanation
- When to shard vs when to optimize single DB

---

## Day 26 — Message Queues and Asynchronous Processing
### Topics
- **Why queues**: decouple producers and consumers, handle traffic spikes, retry failed tasks
- **Use cases**
  - Send email/SMS notifications asynchronously
  - Process image uploads in background
  - Order processing pipeline
  - Analytics event collection
- **Popular queues**: Kafka, RabbitMQ, AWS SQS, Google Pub/Sub
- **Delivery guarantees**
  - **At-most-once**: message may be lost (fast, not reliable)
  - **At-least-once**: message may be delivered multiple times (need idempotency)
  - **Exactly-once**: delivered once (hard to achieve, requires coordination)
- **Idempotency**: operation can be applied multiple times without changing result
- **Dead letter queue (DLQ)**: failed messages go here for inspection
- **Message ordering**: FIFO queues vs unordered

### Practice
- Design notification system using queue
- Flow: user action → publish event to queue → worker consumes → send email
- Handle: worker crashes mid-processing → at-least-once delivery → ensure email send is idempotent (don't send duplicate)
- Answer: how to handle 1 million notifications/second? → partition queue, multiple workers

### Notes to Write
- Queue use cases cheat sheet
- At-most, at-least, exactly-once delivery comparison
- Idempotency strategies

---

## Day 27 — CDN and File Storage
### Topics
- **Content Delivery Network (CDN)**
  - Purpose: serve static assets (images, videos, CSS, JS) with low latency
  - How: cache content at edge locations near users
  - Examples: Cloudflare, Akamai, AWS CloudFront
  - Benefits: faster load times, reduced origin server load
- **Object storage**
  - Store large files: images, videos, backups
  - Examples: AWS S3, Google Cloud Storage
  - Features: cheap, durable, scalable, versioning
- **File upload flow**
  - Client → app server → S3 → return URL
  - Or: pre-signed URL → client uploads directly to S3
- **File download flow**
  - Client → CDN (cache hit) → fast
  - Client → CDN (cache miss) → CDN fetches from S3 → caches → returns to client

### Practice
- Design image upload system for photo sharing app
- Upload: client → get pre-signed URL → upload to S3 → save metadata in DB
- Download: client requests image → CDN serves if cached → else fetch from S3
- Optimization: thumbnails, lazy loading, compression

### Notes to Write
- CDN benefits and use cases
- Object storage vs file system
- Upload/download flow diagrams

---

## Day 28 — Rate Limiting and API Gateway
### Topics
- **Rate limiting**
  - Purpose: prevent abuse, ensure fair usage, protect backend from overload
  - Where: API gateway, application layer
- **Algorithms**
  - **Token bucket**: tokens added at fixed rate, request consumes token
  - **Leaky bucket**: requests added to queue, processed at fixed rate
  - **Fixed window counter**: allow N requests per time window (e.g. 100 requests/minute)
  - **Sliding window log**: track timestamp of each request, remove old ones
  - **Sliding window counter**: hybrid, approximate sliding window with less memory
- **Distributed rate limiting**: use Redis to store counters across servers
- **Response**: return HTTP 429 (Too Many Requests), include Retry-After header

### Practice
- Design rate limiter for API: 1000 requests/hour per user
- Choose algorithm: token bucket (smooth traffic) or sliding window (accurate)
- Implement using Redis: key = user_id, value = counter, TTL = 1 hour
- What if user uses multiple API keys? → rate limit by IP or account

### Notes to Write
- Rate limiting algorithms comparison
- When to use each algorithm
- Distributed rate limiting architecture

---

## Day 29 — Search Systems and Full-Text Search
### Topics
- **Full-text search**
  - Search documents by keywords, not exact match
  - Use cases: product search, log search, document search
  - Tools: Elasticsearch, Solr, Algolia
- **How it works**
  - Indexing: tokenize text, build inverted index (word → document IDs)
  - Query: search index for keywords, rank results by relevance
- **Features**
  - Fuzzy matching, typo tolerance
  - Autocomplete / typeahead
  - Faceted search (filters)
  - Ranking and relevance scoring (TF-IDF, BM25)
- **Autocomplete**
  - Trie data structure
  - Prefix matching
  - Top K suggestions by popularity

### Practice
- Design product search for e-commerce
- Flow: user types query → search Elasticsearch index → return ranked results
- Add filters: category, price range, brand
- Implement autocomplete: store popular queries in Trie or cache top results

### Notes to Write
- Full-text search vs database LIKE query
- Inverted index explanation
- Autocomplete implementation strategies

---

## Day 30 — Observability: Logging, Metrics, Tracing
### Topics
- **Why observability**: detect issues, debug problems, monitor performance
- **Three pillars**
  - **Logging**: record events (errors, warnings, info)
    - Centralized logging: ELK stack (Elasticsearch, Logstash, Kibana), Splunk
  - **Metrics**: numerical data over time (CPU usage, request rate, latency)
    - Tools: Prometheus, Grafana, Datadog
  - **Tracing**: track request flow across services (distributed tracing)
    - Tools: Jaeger, Zipkin, OpenTelemetry
- **Alerting**: set thresholds, send alerts via PagerDuty, Slack
- **SLA, SLO, SLI**
  - SLA (Service Level Agreement): contract with customer (99.9% uptime)
  - SLO (Service Level Objective): internal target (99.95% uptime)
  - SLI (Service Level Indicator): actual measurement (99.93% uptime last month)

### Practice
- Design observability for microservices architecture
- Log: centralized logging with ELK
- Metrics: Prometheus scrapes metrics, Grafana dashboards
- Tracing: Jaeger traces request across 5 services
- Alert: if error rate > 1%, send alert to Slack

### Notes to Write
- Logging, metrics, tracing comparison
- Tools for each pillar
- SLA/SLO/SLI definitions with examples

---

## Day 31 — CAP Theorem and Consistency Models
### Topics
- **CAP theorem**
  - Consistency: all nodes see same data at same time
  - Availability: every request gets response (success or failure)
  - Partition tolerance: system works despite network partition
  - **Trade-off**: you can have at most 2 of 3
  - In practice, partition tolerance is mandatory → choose between CP or AP
- **CP systems** (Consistency + Partition tolerance)
  - Sacrifice availability during partition
  - Examples: banking, HBase, MongoDB (strong consistency mode)
- **AP systems** (Availability + Partition tolerance)
  - Sacrifice consistency, accept eventual consistency
  - Examples: social media, Cassandra, DynamoDB
- **Consistency models**
  - **Strong consistency**: reads always return latest write
  - **Eventual consistency**: reads may be stale, but will converge
  - **Read-your-writes consistency**: user sees their own writes immediately
  - **Monotonic reads**: if user sees version N, they won't see older version

### Practice
- Classify 10 systems as CP or AP:
  - Banking → CP
  - Social media feed → AP
  - DNS → AP
  - Shopping cart → AP (eventually consistent is fine)
  - Inventory management → CP (avoid double-selling)
- Explain why each decision

### Notes to Write
- CAP theorem with real examples
- CP vs AP decision guide
- Consistency models cheat sheet

---

## Day 32 — HLD Fundamentals Revision + Mock
### Topics
- Revisit all building blocks from Days 19–31
- Review cheat sheets and notes

### Practice (Full Mock)
- Design a medium-scale system from scratch using all building blocks:
  - Example: **Design Twitter**
  - Requirements: post tweets, follow users, timeline, trending topics
  - Use: load balancer, web servers, app servers, databases (sharded), cache (Redis), CDN (media), queues (fanout), search (Elasticsearch)
  - Time yourself: 40 minutes
  - Speak out loud, explain every decision
  - After completion, self-critique: did I miss any building block? Was my explanation clear?

### Revision Checklist
- [ ] Can I explain load balancing algorithms?
- [ ] Can I decide SQL vs NoSQL?
- [ ] Can I design caching layer with right pattern?
- [ ] Can I explain sharding strategies?
- [ ] Can I design async processing with queues?
- [ ] Can I add CDN and object storage?
- [ ] Can I apply rate limiting?
- [ ] Can I add search with Elasticsearch?
- [ ] Can I explain observability?
- [ ] Can I apply CAP theorem?

### Notes to Write
- Full building blocks summary (one page)
- Personal weak areas to revisit

---

---

# PHASE 4: System Design Interview (Days 33–45)
> Goal: Solve real interview problems end-to-end with confidence and clarity

---

## Day 33 — HLD Interview Framework
### Topics
- **8-step framework for HLD interviews**
  1. **Clarify requirements**
     - Functional: what features exactly?
     - Non-functional: scale, latency, availability, consistency
  2. **Estimate scale**
     - DAU (daily active users), requests/second, storage, bandwidth
     - Back-of-envelope calculations
  3. **Define APIs**
     - REST or gRPC
     - Key endpoints and payloads
  4. **Design data model**
     - Tables/collections and relationships
     - SQL or NoSQL decision
  5. **High-level architecture**
     - Draw boxes: client, load balancer, servers, databases, cache, queues, etc.
  6. **Deep dive on bottlenecks**
     - Where will system fail at scale?
     - How to fix: replication, sharding, caching, queuing
  7. **Scaling and optimization**
     - Read-heavy: add cache, read replicas, CDN
     - Write-heavy: sharding, queues
  8. **Failure handling and tradeoffs**
     - What happens when server crashes? Database fails? Network partition?
     - Tradeoffs: consistency vs availability, latency vs cost

### Practice
- Apply framework to **URL shortener** (simple, good for practicing framework)
- Time: 35 minutes
- Speak out loud, follow all 8 steps

### Notes to Write
- HLD interview framework as checklist
- Common interview mistakes to avoid: jumping to solution, missing scale estimation, not explaining tradeoffs

---

## Day 34 — URL Shortener
### Topics
- **Requirements**
  - Functional: shorten URL, redirect, analytics (click count)
  - Non-functional: low latency, high availability, durable storage
- **Scale estimate**
  - 100M new URLs per month → ~40 URLs/second (write)
  - 10B redirects per month → ~4K redirects/second (read)
  - Read-heavy system (100:1 read:write ratio)
  - Storage: 100M URLs/month × 500 bytes × 10 years = ~600GB
- **APIs**
  - POST /shorten → { original_url } → { short_url }
  - GET /:short_code → redirect to original_url
- **Data model**
  - Table: URLs (id, short_code, original_url, created_at, expires_at, click_count)
  - Index on short_code for fast lookup
- **Short code generation**
  - Base62 encoding (a-z, A-Z, 0-9) → 62^7 = 3.5 trillion combinations
  - Hash original URL (MD5) → take first 7 characters
  - Handle collisions: append counter or regenerate
- **Architecture**
  - Client → Load Balancer → App Servers → Cache (Redis) → Database (SQL or NoSQL)
  - Cache hot URLs (80/20 rule: 20% URLs get 80% traffic)
- **Scaling**
  - Cache layer to reduce DB load
  - Read replicas for high read traffic
  - Sharding if storage grows beyond single DB
  - CDN not needed (redirects are dynamic)

### Practice
- Design full system using 8-step framework
- Speak for 35–40 minutes
- Handle edge cases: malicious URLs, rate limiting, expiration

### Notes to Write
- URL shortener architecture diagram
- Base62 encoding explanation
- Collision handling strategies

---

## Day 35 — Rate Limiter (revisited as full system)
### Topics
- **Requirements**
  - Functional: limit API requests per user/IP per time window
  - Non-functional: accurate, low latency, distributed
- **Scale estimate**
  - 10M users, 1000 requests/hour per user limit
  - Need to handle 100K requests/second
- **APIs**
  - Not standalone service, but middleware in API gateway
  - Check if request allowed → proceed or return 429
- **Algorithms** (revisit Day 28)
  - Token bucket, sliding window counter
- **Architecture**
  - API Gateway → Rate Limiter (middleware) → Backend Services
  - Rate limiter uses Redis: key = user_id, value = counter/timestamp
  - Redis cluster for distributed rate limiting
- **Edge cases**
  - User has multiple API keys → rate limit by account
  - Clock skew across servers → use centralized Redis
  - Handling race conditions → Lua script in Redis for atomic operations
- **Scaling**
  - Redis cluster with partitioning
  - Handle Redis failure → allow requests (fail open) or deny (fail closed)?

### Practice
- Design distributed rate limiter
- Explain token bucket algorithm in detail
- Walk through request flow: check Redis → decrement token → allow/deny
- Speak for 30 minutes

### Notes to Write
- Distributed rate limiter architecture
- Redis data structure for rate limiting
- Fail open vs fail closed decision

---

## Day 36 — Notification System
### Topics
- **Requirements**
  - Functional: send push, email, SMS notifications
  - Support priority: urgent vs batch
  - User preferences: opt-in/opt-out per channel
  - Analytics: sent, delivered, opened
  - Non-functional: reliable, scalable, no duplicates
- **Scale estimate**
  - 100M users, 10 notifications/day per user → 1B notifications/day → ~12K/second
- **APIs**
  - POST /notify → { user_id, type, channel, message, priority }
  - POST /preferences → { user_id, email_enabled, push_enabled }
- **Data model**
  - Users (id, email, phone, push_token)
  - Preferences (user_id, email_enabled, sms_enabled, push_enabled)
  - Notifications (id, user_id, type, channel, status, sent_at)
- **Architecture**
  - Service A (trigger) → Message Queue (Kafka/SQS) → Notification Service (workers) → Third-party providers (FCM, Twilio, SendGrid)
  - Queue-based: decouple trigger from sending
  - Workers consume from queue, check user preferences, send via appropriate channel
  - Dead letter queue for failed notifications
  - Retry mechanism with exponential backoff
- **Channels**
  - Push: use FCM (Android), APNs (iOS)
  - Email: use SendGrid, Mailgun
  - SMS: use Twilio
- **Priority**
  - Urgent: separate high-priority queue, process immediately
  - Batch: low-priority queue, batch and send (e.g. daily digest)
- **Avoiding duplicates**
  - Idempotency: track notification ID, don't send if already sent

### Practice
- Design full notification system
- Walk through flow: order placed → publish event → worker consumes → check preferences → send via FCM → log status
- Handle: FCM fails → retry with backoff → after N retries → move to DLQ
- Speak for 35 minutes

### Notes to Write
- Notification system architecture
- Priority queue handling
- Retry and DLQ strategy

---

## Day 37 — Chat Application (WhatsApp / Messenger)
### Topics
- **Requirements**
  - Functional: 1-on-1 chat, group chat, online status, read receipts, media sharing
  - Non-functional: real-time, low latency, high availability, eventual consistency OK
- **Scale estimate**
  - 1B users, 100M DAU, 50 messages/day per user → 5B messages/day → ~60K messages/second
  - Storage: 5B messages/day × 100 bytes × 5 years = ~180TB
- **APIs**
  - WebSocket: /ws/connect (persistent connection)
  - POST /send → { sender_id, receiver_id, message, timestamp }
  - GET /messages → { user_id, chat_id, limit, offset }
- **Data model**
  - Users (id, name, phone, last_seen)
  - Messages (id, sender_id, receiver_id, group_id, message, timestamp, status)
  - Groups (id, name, members)
- **Architecture**
  - Client ↔ WebSocket Gateway (maintains connections) ↔ Chat Service ↔ Message DB (Cassandra) + Message Queue (Kafka)
  - Real-time: WebSocket for persistent connection
  - Offline users: store messages in queue, deliver when online, or push notification
  - Group chat: fanout to all members (publisher → Kafka → fanout workers → WebSocket gateways → clients)
- **Message delivery**
  - Sender → WebSocket gateway → Chat service → store in DB → publish to Kafka → route to receiver's gateway → deliver via WebSocket
  - Acknowledgements: sent, delivered, read
- **Online presence**
  - Heartbeat: client sends ping every 30 seconds
  - Server marks user online if heartbeat received recently
  - Publish presence updates to subscribers
- **Scaling**
  - Shard users across multiple WebSocket gateways
  - Shard messages by chat_id or user_id
  - Use CDN for media (images, videos)

### Practice
- Design full chat system
- Walk through 1-on-1 message flow
- Walk through group message flow (10K members)
- Handle: receiver offline → store in queue → send push notification → deliver when online
- Speak for 40 minutes

### Notes to Write
- Chat system architecture
- Message delivery flow for 1-on-1 and group
- Online presence mechanism

---

## Day 38 — News Feed / Social Feed (Facebook / Twitter / Instagram)
### Topics
- **Requirements**
  - Functional: post content, follow users, view personalized feed, like/comment
  - Non-functional: low latency for feed, high availability, eventual consistency OK
- **Scale estimate**
  - 1B users, 500M DAU, 100 followers per user, 2 posts/day → 1B posts/day
  - Feed generation: 500M users × 100 posts in feed → 50B feed entries/day
- **APIs**
  - POST /post → { user_id, content, media }
  - GET /feed → { user_id, limit, offset }
  - POST /follow → { follower_id, followee_id }
- **Data model**
  - Users (id, name, followers_count, following_count)
  - Posts (id, user_id, content, created_at, likes, comments)
  - Follows (follower_id, followee_id)
  - Feed (user_id, post_id, timestamp) — cached feed
- **Feed generation approaches**
  - **Fanout on write (push model)**: when user posts, immediately write to all followers' feeds
    - Pros: fast read (feed pre-computed)
    - Cons: slow write (celebrity with 100M followers → 100M writes)
  - **Fanout on read (pull model)**: when user requests feed, fetch posts from all followees
    - Pros: fast write
    - Cons: slow read (fetch and merge many users' posts)
  - **Hybrid**: for normal users use fanout on write, for celebrities use fanout on read
- **Architecture**
  - Client → Load Balancer → App Servers → Feed Service → Feed DB (Cassandra) + Cache (Redis)
  - Post service: user posts → store in Posts DB → publish to Kafka → fanout service → write to followers' feeds
  - Feed service: user requests feed → check cache → if miss, compute and cache
  - Celebrity posts: don't fanout, fetch at read time and merge with cached feed
- **Feed ranking**
  - Chronological (simple)
  - ML-ranked (engagement prediction)
- **Scaling**
  - Shard feeds by user_id
  - Cache hot feeds
  - CDN for media

### Practice
- Design full news feed system
- Explain fanout on write vs fanout on read with tradeoffs
- Handle celebrity problem: use hybrid approach
- Walk through post flow and feed retrieval flow
- Speak for 40 minutes

### Notes to Write
- Feed generation approaches comparison
- Hybrid fanout strategy
- Feed architecture diagram

---

## Day 39 — File Storage System (Dropbox / Google Drive)
### Topics
- **Requirements**
  - Functional: upload, download, sync across devices, share files, versioning
  - Non-functional: reliable, durable, fast sync, handle large files
- **Scale estimate**
  - 100M users, 1GB storage per user → 100PB total
  - Uploads: 10M files/day
- **APIs**
  - POST /upload → { file, metadata }
  - GET /download → { file_id }
  - POST /sync → { device_id, changed_files }
- **Data model**
  - Users (id, email, storage_used)
  - Files (id, user_id, name, path, size, version, chunk_ids, created_at)
  - Chunks (id, hash, storage_location) — deduplicate by hash
  - Devices (id, user_id, last_sync)
- **Chunking**
  - Split large files into chunks (4MB each)
  - Benefits: resume upload, deduplicate, parallel upload
  - Hash each chunk for deduplication
- **Upload flow**
  - Client → split file into chunks → compute hash for each chunk → upload to app server → app server stores in S3 → save metadata in DB
  - Deduplication: if chunk hash exists, reuse existing chunk
- **Download flow**
  - Client requests file → fetch metadata → get chunk locations → download chunks from S3 via CDN → reassemble file
- **Sync**
  - Client polls or server pushes changes
  - Use WebSocket for real-time sync
  - Detect changes: compare file hash, modification timestamp
  - Delta sync: only upload/download changed chunks
- **Conflict resolution**
  - Last-write-wins, or both versions kept (Dropbox conflicted copy)
- **Architecture**
  - Client ↔ Sync Service (WebSocket) → Metadata DB (MySQL) + Object Storage (S3) + Cache (Redis) + CDN
- **Scaling**
  - Shard metadata by user_id
  - Use S3 for durable file storage
  - CDN for fast downloads
  - Compress files before upload

### Practice
- Design full file storage system
- Walk through upload flow with chunking and deduplication
- Walk through sync flow for 3 devices
- Handle conflict: two devices edit same file offline → both versions kept
- Speak for 40 minutes

### Notes to Write
- Chunking and deduplication strategy
- Upload/download/sync flow diagrams
- Conflict resolution approaches

---

## Day 40 — Video Streaming Platform (YouTube / Netflix)
### Topics
- **Requirements**
  - Functional: upload video, transcode, watch video, recommendations, comments
  - Non-functional: low latency, high availability, handle large files, adaptive bitrate
- **Scale estimate**
  - 1B users, 500M DAU, 1 hour watch time/day → 500M hours/day
  - Uploads: 500 hours of video uploaded per minute
  - Storage: petabytes
- **APIs**
  - POST /upload → { video_file, metadata }
  - GET /watch → { video_id } → stream video
  - GET /recommendations → { user_id }
- **Data model**
  - Users (id, name, subscriptions)
  - Videos (id, title, description, uploader_id, views, likes, created_at)
  - Comments (id, video_id, user_id, comment, timestamp)
- **Upload flow**
  - User uploads video → app server → store in S3
  - Trigger transcoding job → queue (Kafka)
  - Transcoding workers: convert video to multiple resolutions (1080p, 720p, 480p, 360p) and formats (MP4, HLS)
  - Store transcoded videos in S3
  - Update metadata DB with video URLs
- **Video streaming**
  - Client requests video → app server returns video URLs → client streams from CDN
  - CDN caches popular videos at edge locations
  - Adaptive bitrate streaming (HLS, DASH): client switches quality based on bandwidth
- **Recommendations**
  - ML service: analyze user history, generate recommendations
  - Pre-compute and cache recommendations
- **Architecture**
  - Client → Load Balancer → App Servers → Metadata DB (MySQL/Cassandra) + Object Storage (S3) + CDN (Cloudflare) + Transcoding Queue (Kafka) + Transcoding Workers + ML Service
- **Scaling**
  - CDN for video delivery
  - Shard metadata by video_id
  - Use multiple transcoding workers in parallel
  - Cache metadata and recommendations

### Practice
- Design full video streaming platform
- Walk through upload and transcoding flow
- Walk through watch flow with adaptive bitrate
- Handle: popular video (viral) → CDN caches at edge → reduced origin load
- Speak for 40 minutes

### Notes to Write
- Upload/transcode/streaming flow
- Adaptive bitrate streaming explanation
- Video platform architecture

---

## Day 41 — Ride-Sharing System (Uber / Lyft)
### Topics
- **Requirements**
  - Functional: rider requests ride, match with nearby driver, track ride, payment, ratings
  - Non-functional: low latency for matching, high availability, accurate location
- **Scale estimate**
  - 100M users, 10M DAU, 2 rides/day → 20M rides/day → ~230 rides/second
  - 1M active drivers
- **APIs**
  - POST /request_ride → { rider_id, pickup_location, destination }
  - POST /accept_ride → { driver_id, ride_id }
  - GET /track_ride → { ride_id }
- **Data model**
  - Users (id, name, phone, type: rider/driver)
  - Rides (id, rider_id, driver_id, pickup_location, destination, status, fare, created_at)
  - Drivers (id, location, status: available/busy)
- **Matching algorithm**
  - Find nearby available drivers using geospatial index (Quadtree, Geohash, or PostGIS)
  - Select closest driver, send ride request
  - If driver declines, try next closest
- **Location tracking**
  - Drivers send location updates every 5 seconds → Location Service → update in-memory store (Redis)
  - Riders poll driver location during ride
- **Pricing**
  - Dynamic pricing (surge): increase fare when demand > supply
  - Pricing service calculates fare based on distance, time, demand
- **Architecture**
  - Client → Load Balancer → App Servers → Ride Service → Matching Service (Quadtree) + Location Service (Redis) + Payment Service + Notification Service + Ride DB (MySQL/Cassandra)
- **Scaling**
  - Partition map into regions (city-level sharding)
  - Use Quadtree or Geohash for efficient geospatial queries
  - In-memory store for active driver locations (Redis)
  - WebSocket for real-time location updates

### Practice
- Design full ride-sharing system
- Walk through ride request and matching flow
- Explain geospatial indexing: Quadtree or Geohash
- Handle: surge pricing logic
- Speak for 40 minutes

### Notes to Write
- Matching algorithm with geospatial index
- Location tracking architecture
- Surge pricing basics

---

## Day 42 — E-commerce Platform (Amazon)
### Topics
- **Requirements**
  - Functional: product catalog, search, cart, checkout, order processing, inventory, payments, reviews
  - Non-functional: high availability, consistent inventory, secure payments
- **Scale estimate**
  - 100M products, 500M users, 1M orders/day
- **APIs**
  - GET /products → search and filters
  - POST /cart/add → { user_id, product_id, quantity }
  - POST /checkout → { user_id, cart_id, payment_info, address }
- **Data model**
  - Products (id, name, description, price, category, inventory)
  - Users (id, name, email, addresses)
  - Cart (user_id, product_id, quantity)
  - Orders (id, user_id, products, total, status, created_at)
  - Payments (id, order_id, amount, status)
- **Checkout flow**
  - User adds to cart → clicks checkout → payment service charges card → inventory service reserves stock → order service creates order → notification service sends confirmation
  - Use distributed transaction or saga pattern
- **Inventory management**
  - Check availability before checkout
  - Reserve inventory during checkout (pessimistic locking)
  - Release if payment fails
  - Handle race condition: two users buying last item → use database locks or optimistic locking
- **Search**
  - Elasticsearch for product search with filters (category, price, brand)
- **Architecture**
  - Client → Load Balancer → App Servers → Product Service, Cart Service, Order Service, Payment Service, Inventory Service, Notification Service
  - Product DB (Cassandra), Order DB (MySQL), Inventory DB (MySQL), Search (Elasticsearch), Cache (Redis), Queue (Kafka)
- **Scaling**
  - Shard products by product_id
  - Shard orders by user_id
  - Cache product catalog
  - CDN for product images

### Practice
- Design full e-commerce platform
- Walk through checkout flow with inventory reservation
- Handle: two users buying last item → pessimistic lock on inventory
- Explain saga pattern for distributed transactions
- Speak for 40 minutes

### Notes to Write
- Checkout flow with inventory locking
- Distributed transaction strategies
- E-commerce architecture

---

## Day 43 — Distributed Key-Value Store (Redis / Memcached style)
### Topics
- **Requirements**
  - Functional: get(key), put(key, value), delete(key)
  - Non-functional: low latency, high availability, scalable, durable (optional)
- **Scale estimate**
  - 1B keys, 1KB per value → 1TB storage
  - 100K QPS
- **Architecture**
  - In-memory store on multiple nodes
  - Partition data using consistent hashing
  - Replication for high availability
- **Consistent hashing**
  - Distributes keys uniformly across nodes
  - Minimal reshuffling when nodes added/removed
  - Virtual nodes for better distribution
- **Replication**
  - Each key stored on N replicas (e.g. N=3)
  - Primary-replica or peer-to-peer (Dynamo-style)
- **Consistency**
  - Quorum: W + R > N ensures strong consistency
  - Eventual consistency for better availability
- **Handling failures**
  - Gossip protocol for membership and failure detection
  - Hinted handoff: if replica down, write to another node temporarily
  - Merkle trees for efficient sync
- **Scaling**
  - Add nodes, consistent hashing redistributes keys
  - Virtual nodes balance load

### Practice
- Design distributed key-value store
- Explain consistent hashing with diagram
- Walk through put and get operations
- Handle node failure with replication
- Speak for 35 minutes

### Notes to Write
- Consistent hashing explanation
- Replication and quorum
- Failure handling strategies

---

## Day 44 — Design Pastebin / Code Sharing Service
### Topics
- **Requirements**
  - Functional: upload text/code, get unique URL, view paste, expiration, syntax highlighting
  - Non-functional: low latency, high availability, durable storage
- **Scale estimate**
  - 10M pastes/month, 100M reads/month
  - Read-heavy (10:1)
  - Storage: 10M pastes/month × 10KB × 10 years = ~1.2TB
- **APIs**
  - POST /paste → { content, expiration } → { paste_url }
  - GET /:paste_id → return content
- **Data model**
  - Pastes (id, content, created_at, expires_at, views)
- **Short code generation**
  - Base62 encoding, 7 characters → 3.5T combinations
- **Architecture**
  - Similar to URL shortener
  - Client → Load Balancer → App Servers → Cache (Redis) → DB (MySQL/Cassandra)
  - Cache popular pastes
  - CDN for static assets (syntax highlighter JS)
- **Expiration**
  - Lazy deletion: delete when accessed and expired
  - Background job: periodically clean up expired pastes
- **Scaling**
  - Cache layer for hot pastes
  - Read replicas for high read traffic
  - Object storage (S3) for large pastes

### Practice
- Design full pastebin system
- Walk through upload and view flows
- Handle expiration strategy
- Speak for 30 minutes

### Notes to Write
- Pastebin architecture
- Expiration handling strategies

---

## Day 45 — Full Mock Interview Day + Final Revision
### Topics
- Today is full mock mode
- Revisit all 12 systems from Days 34–44
- Review all building blocks from Days 19–32

### Morning Practice (1 hour)
- Pick any **3 systems** randomly from Days 34–44
- For each, write down from memory:
  - Requirements
  - APIs
  - Data model
  - Architecture diagram (in text)
  - Key scaling decisions
  - Tradeoffs
- Do not look at notes

### Afternoon Practice (1.5 hours)
- **Full mock interview**
- Pick **one complex system**: design Twitter, Uber, or YouTube
- Time yourself: 45 minutes
- Speak out loud as if interviewer is present
- Follow 8-step framework strictly
- Cover:
  - Requirements gathering
  - Scale estimation
  - API design
  - Data model
  - High-level architecture with all components
  - Bottlenecks and scaling strategies
  - Failure handling
  - Tradeoffs and alternatives
- After completion, self-critique:
  - Did I cover all 8 steps?
  - Did I explain tradeoffs clearly?
  - Did I miss any key component?
  - Was I structured or all over the place?

### Evening (30 min)
- Final revision checklist
- Review all cheat sheets and summary notes

### Final Self-Assessment
Rate yourself 1-5 on each:
- [ ] SOLID principles — can explain and apply
- [ ] Design patterns — know when to use which
- [ ] LLD problems — can design class structure confidently
- [ ] Load balancing, caching, sharding, replication
- [ ] SQL vs NoSQL decision-making
- [ ] Message queues and async processing
- [ ] Rate limiting, CDN, search
- [ ] CAP theorem and consistency models
- [ ] HLD interview framework — can follow all 8 steps
- [ ] URL shortener, rate limiter, notification, chat, feed, file storage
- [ ] Can speak for 40 minutes on any system design
- [ ] Can explain tradeoffs clearly

### Notes to Write
- Final confidence level: what am I strong at? What needs more practice?
- Top 3 weak areas to revisit before interviews
- Personal system design template for quick reference

---

---

# Summary: 45-Day Breakdown

| Days | Phase | Focus |
|---|---|---|
| 1–5 | SOLID Principles | SRP, OCP, LSP, ISP, DIP in depth |
| 6–18 | OOD Interview | Patterns + 9 LLD problems + revision |
| 19–32 | HLD Fundamentals | All building blocks in depth + mock |
| 33–45 | HLD Interview | Framework + 12 systems + final mock |

---

# Weekly Milestones

| Week | Milestone |
|---|---|
| Week 1 (Days 1–7) | SOLID + OOD framework + creational patterns |
| Week 2 (Days 8–14) | Behavioral/structural patterns + 5 LLD problems |
| Week 3 (Days 15–21) | Finish LLD + start HLD fundamentals (scalability, DB, cache, sharding) |
| Week 4 (Days 22–28) | Complete HLD fundamentals (queues, CDN, rate limiting, search, observability, CAP) |
| Week 5 (Days 29–35) | HLD fundamentals mock + start HLD problems (URL, rate limiter, notification) |
| Week 6 (Days 36–42) | Continue HLD problems (chat, feed, file storage, video, Uber, e-commerce) |
| Week 7 (Days 43–45) | Finish remaining HLD problems + full mock interview day |

---

# Interview-Ready Checklist (End of Day 45)

By the end of 45 days, you should be able to:

### LLD
- [ ] Explain all 5 SOLID principles with real examples
- [ ] Know when to use Factory, Strategy, Observer, Singleton, Builder, Decorator patterns
- [ ] Design parking lot, elevator, library, hotel booking, ATM, vending machine, online shopping, Splitwise from scratch
- [ ] Draw class diagrams with correct relationships
- [ ] Apply patterns appropriately, not forcefully

### HLD Fundamentals
- [ ] Explain vertical vs horizontal scaling
- [ ] Design load balancing layer with appropriate algorithm
- [ ] Decide SQL vs NoSQL with clear reasoning
- [ ] Design caching layer with appropriate pattern and eviction policy
- [ ] Explain replication (primary-replica, failover)
- [ ] Explain sharding strategies and consistent hashing
- [ ] Design async processing with message queues
- [ ] Add CDN and object storage
- [ ] Design rate limiting with appropriate algorithm
- [ ] Add search with full-text index
- [ ] Explain observability (logging, metrics, tracing)
- [ ] Apply CAP theorem and choose CP vs AP

### HLD Interview
- [ ] Follow 8-step framework for any system design question
- [ ] Do back-of-envelope calculations for scale estimation
- [ ] Design API endpoints clearly
- [ ] Design data model (tables/collections) with relationships
- [ ] Draw high-level architecture with all components
- [ ] Identify bottlenecks and propose scaling solutions
- [ ] Explain failure handling (server crash, DB failure, network partition)
- [ ] Discuss tradeoffs for every design decision
- [ ] Speak confidently for 35-45 minutes on any system
- [ ] Design URL shortener, rate limiter, notification, chat, news feed, file storage, video streaming, ride-sharing, e-commerce, key-value store, pastebin

---

# Study Tips

1. **Read actively**: Don't just read, take notes in your own words
2. **Practice out loud**: Speak your designs as if in an interview
3. **Draw diagrams**: Visualize architecture, don't just memorize text
4. **Focus on tradeoffs**: Don't just say "use cache", explain why and what's the downside
5. **Revise regularly**: Review previous days' notes every week
6. **Mock interviews**: Practice with friends or use platforms like Pramp, interviewing.io
7. **Time yourself**: Real interviews are time-boxed, so practice under time pressure
8. **Self-critique**: After each practice, ask "what could I have explained better?"

---

# Resources

## Primary (Design Gurus)
- Grokking SOLID Design Principles
- Grokking the Object Oriented Design Interview
- Grokking System Design Fundamentals
- Grokking the System Design Interview

## Supplementary (Free)
- **System Design Primer** (GitHub): comprehensive reference for HLD topics
- **Refactoring Guru**: best free resource for design patterns with examples
- **Gaurav Sen** (YouTube): intuitive system design explanations
- **Hussein Nasser** (YouTube): deep dives on databases, networking, backend
- **ByteByteGo** (YouTube/blog): concise system design interview-style videos

---

# What Comes After Day 45?

- Continue practicing with mock interviews (3+ per week)
- Revisit weak areas identified on Day 45
- Deep dive into specific topics if needed (Kafka internals, Cassandra, etc.)
- Practice behavioral questions and project deep dives
- Stay sharp by reviewing notes weekly until interviews

---

Good luck with your preparation! 🚀
