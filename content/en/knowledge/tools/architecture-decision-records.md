---
title: "Architecture Decision Records (ADR)"
createdAt: 2024-10-11
image: "/assets/images/banner.png"
---
Architecture Decision Records (ADRs) are documents that record important architectural decisions. They enable transparent communication between architects and developers. With ADRs, not only *what* was decided is documented, but also *why* the decision was made. This fosters better understanding and increases the likelihood that everyone involved is on the same page and keeps the architectural goals in mind.

Mark Richards provides a [brief introduction to the topic](https://youtube.com/watch?v=n6G5qtJHmgw&t=2420s) in his [talk "The Intersection of Architecture and Implementation"](/posts/ri24-the_intersection_of_arch_and_impl).

## The Purpose of ADRs

ADRs should not be viewed merely as documentation, but as a **collaboration tool** between architects and development teams. By explaining the background of a decision, it ensures that the "why" behind the decision is understood and that the architecture can be better comprehended.

> **"Why is more important than how."**, [Mark Richards](https://youtube.com/watch?v=n6G5qtJHmgw&t=2430s)

## Structure of an ADR

An ADR is typically divided into the following sections:

- **Title**: A concise title of the decision.
- **Status**: The current status of the decision (e.g., “proposed,” “accepted,” or “deprecated”).
- **Context**: A brief description of the context and the requirements that led to the decision.
- **Decision**: The chosen decision, often accompanied by a brief justification.
- **Consequences**: The consequences and possible impacts of this decision, including the trade-offs and alternatives.

### Example of an ADR

**ADR 001: Using Request-Reply Messaging Between Services**

- **Status**: Accepted
- **Context**: The system must ensure high scalability and fast response times. Previous attempts to use RESTful interfaces led to performance degradation under high load.
- **Decision**: Request-reply messaging will be used, as it is faster and more scalable in our production environment than REST.
- **Consequences**: This decision means the implementation becomes more complex and requires additional messaging tools, but it offers better performance and scalability.

## Benefits of ADRs

1. **Traceability**: Decisions and their reasons are documented, making it easier for new team members to understand the reasoning.
2. **Collaboration**: They provide a basis for discussion and encourage teamwork.
3. **Continuity**: Even if team members change, ADRs remain as a knowledge resource.

> **"If developers don't know why you made a decision, they're less likely to agree with it."**, [Mark Richards](https://youtube.com/watch?v=n6G5qtJHmgw&t=2290s)

## Using ADRs in Practice

ADRs should be stored in an easily accessible repository, such as a Git repo or a wiki page, so that all team members can access them at any time. [Richards recommends in his talk](/posts/ri24-the_intersection_of_arch_and_impl) initially introducing ADRs on a trial basis to test their effectiveness as a communication tool.

> **"Demonstration defeats discussion."**, [Mark Richards](https://youtube.com/watch?v=n6G5qtJHmgw&t=3320s)