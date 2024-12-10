---
title: "Pattern Collection: Bounded Context"
createdAt: 2024-10-11
image: "/assets/images/banner.png"
categories: [ Patterns, Context Mapping, Teams, Collaboration, Bounded Context ]
---

This collection of patterns describes the relationships between **teams** and **Bounded Contexts** within a software landscape.

For a more detailed explanation of these patterns, refer to the [video by Michael Plöd](/posts/pl22-context_mapping) or the [DDD Crew's documentation on GitHub](https://github.com/ddd-crew/context-mapping).

---

## Patterns

### Partnership
- **Description**: Teams work collaboratively, often through shared planning and execution.
- **Use Case**: Suitable when teams are working on similar concepts and need tight integration.

### Shared Kernel
- **Description**: A shared model is collaboratively maintained by multiple teams.
- **Use Case**: Helps when a common understanding is needed across teams or services.

### Customer-Supplier
- **Description**: Consumers (customers) of a service influence the provider’s (supplier’s) priorities and tasks within a defined scope.
- **Use Case**: Suitable for teams or services with a clear producer-consumer relationship.

### Conformist
- **Description**: The service consumer adopts the service provider's model directly, meaning changes in the provider's model cascade to the consumers.
- **Use Case**: Common when a consumer team has no capacity or desire to build its own abstractions.

### Anticorruption Layer
- **Description**: Translates the service provider's model into the consumer’s internal language.
- **Use Case**: Often implemented at the entry point of an application, aligning with principles of hexagonal architecture.

### Separate Ways
- **Description**: Teams or contexts operate independently of each other.
- **Use Case**: Suitable for loosely coupled or unrelated systems, but any support or shared dependencies must be documented.

### Open/Host Service
- **Description**: A service provider offers a public API for a large number of consumers and retains full control over the service’s evolution.
- **Use Case**: Best for widely used services where the provider requires independence in decision-making.

### Published Language
- **Description**: Teams agree on and use a shared language or standard.
- **Use Case**: Examples include industry standards like iCalendar or vCard for interoperability.

### Big Ball of Mud (Anti-Pattern)
- **Description**: Unclear boundaries and ambiguous language between contexts lead to disorganized and fragile systems.
- **Mitigation**: Use an Anticorruption Layer to isolate such systems and gradually improve modularity.

### Vetoing Customer (Anti-Pattern)
- **Description**: Consumers can veto provider decisions without limitation, potentially blocking progress.
- **Mitigation**: Establish governance policies to avoid deadlocks and ensure a balanced relationship.

---

## Selection Criteria

### Domain Categories of Services
- Determine the category of each domain and its dependencies on other teams:
  - **Core or Supporting Subdomains**
  - **Supporting Domains**
  - **Generic Domains**

### Team Relationships
- Define the nature of relationships between teams:
  - **Mutual Dependency**:
    - Partnership
    - Shared Kernel
  - **Independent**:
    - Separate Ways
    - Published Language
  - **Service Provider to Consumer**:
    - Customer-Supplier
    - Anticorruption Layer
    - Conformist
    - Open/Host Service

### Communication Frequency Between Teams
- **High Communication**:
  - Shared Kernel
  - Customer-Supplier
  - Conformist
- **Low to Minimal Communication**:
  - Anticorruption Layer
  - Separate Ways
  - Open/Host Service
  - Published Language
