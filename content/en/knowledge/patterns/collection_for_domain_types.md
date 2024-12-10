---
title: "Pattern Collection: Domain Types"
createdAt: 2024-10-11
image: "/assets/images/banner.png"
categories: [ Patterns, DDD, Domain ]
---

This pattern collection provides a framework for categorizing domains at a high level. The type of domain offers valuable insights into how it can be divided into smaller subdomains, improving the overall structure and modularity of the system.

In her talk [“The Influence of Domains on Architecture”](/posts/li24-how_the_domain_influences_the_architecture), Carola Lilienthal explains how some domains are relatively easy to split into subdomains, while others lead to prolonged discussions and unclear boundaries. Together with her team, she identified several patterns to help classify and structure domains. For instance, the **Blackboard Domain Pattern** highlights why some domains resist clear partitioning, whereas splitting domains like those in the **Pipeline Domain Pattern** tends to be more straightforward.

---

## Domain Patterns

### Pipeline Domain Pattern
- **Description**: Processes follow a clear, sequential order with distinct transitions between steps.
- **Key Characteristics**:
  - Step-by-step workflows, often found in process automation.
  - Clear temporal sequences and transitions.
  - Often governed by regulatory requirements that structure the flow.
- **Partitioning**: Split the domain along the process steps, with each step modeled as a subdomain.

---

### Blackboard Domain Pattern
- **Description**: Unstructured, unpredictable workflows where multiple actors operate simultaneously or independently.
- **Typical Scenarios**:
  - Multiple individuals working concurrently on a product or its design.
  - Systems that observe and react to events in no particular order.
  - Planning processes involving continuous optimization.
  - Complex computational software, e.g., for technical devices.
- **Challenge**: Partitioning the domain is often unclear, leading to increased complexity.
- **Recommendation**: If possible, transform the Blackboard Domain into a **Dialog Domain** to introduce structure and clarity.

---

### Dialog Domain Pattern
- **Description**: Different actors or roles work independently on their own tasks, but there are negotiations and agreements regarding outcomes and handovers.
- **Key Characteristics**:
  - Collaboration between companies or departments working towards a common goal.
  - No direct handover of work results, but joint planning and coordination.
  - Clear negotiation points, such as:
    - When and where should something be delivered?
    - What characteristics or requirements must be met?
- **Partitioning**: Split the domain along the negotiation points to clearly separate roles and processes for modeling.
