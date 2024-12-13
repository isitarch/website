---
title: "Aggregates: An In-depth Examination"
image: /assets/images/posts/CV24-DDD-AI_overview.png
visit: https://youtu.be/m7SMk8VA7Bg
speaker: Thomas Coopman, Gien Verschatse
conference: Domain-Driven Design Europe 2024, Amsterdam
publishedAt: 2024-12-13
---
In their talk “Aggregates: An In-depth Examination,” Thomas Coopman and Gien Verschatse offer a comprehensive look into the modeling of aggregates within Domain-Driven Design. They explore the role of aggregates in maintaining consistency and managing concurrency, while addressing common pitfalls such as oversized or overly complex models. Using methods like “Event Storming light” and “Example Mapping,” they demonstrate how domain models can be iteratively refined to better align with real-world requirements.

The presentation balances technical depth with practical advice, making it valuable for both software architects and developers. Topics include optimizing and reducing aggregates, integrating them within bounded contexts, and documenting critical design decisions. Particularly noteworthy is their discussion on striking the right balance between consistency and flexibility, a key challenge in modern software development.

- **Foundations and pitfalls of aggregates**: Introduction to the role of aggregates in Domain-Driven Design, highlighting common issues such as oversized models and unnecessary complexity.
- **Practical domain modeling**: Leveraging techniques like "Event Storming light" and "Example Mapping" to iteratively capture and refine domain requirements.
- **Consistency and concurrency**: Exploring challenges in maintaining invariants and enforcing rules in distributed systems.
- **Optimization and refinement**: Insights on reducing aggregate size and evaluating consistency requirements to ensure flexibility and efficiency.
- **Integration within bounded contexts**: Examining transitions between configuration and rule enforcement in the domain and the importance of clear boundaries.
- **Documenting design decisions**: Practical approaches for making modeling decisions transparent and well-documented.