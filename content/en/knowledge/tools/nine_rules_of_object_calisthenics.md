---
title: "9 rules of Object Calisthenics"
createdAt: 2024-12-06
image: "/assets/images/banner.png"
---
[Jeff Bay introduced the 9 rules in a chapter of the book "The ThoughtWorks Anthology: Essays on Software Technology and Innovation"](https://isbnsearch.org/isbn/9781934356142) as practical training exercises. These rules are applied in the context of calisthenics as exercises within a small project of around 1000 lines of code to help developers internalize the principles effectively. Bay emphasizes that while the rules may not always be universally applicable, their use encourages deeper reflection on key topics. These exercises are designed to help in everyday practice, particularly by prompting a closer examination and refinement of domain concepts.

Dorra Bartaguiz explains the 9 rules in her [talk at DDD Europe 24](/posts/ba24-elevating_tactical_ddd_patterns_through_object_calisthenics).

## The 9 Rules

### Wrap All Primitives And Strings

Replace primitive data types and strings with domain-specific concepts. A variable's name often hints at the underlying concept.

### First Class Collections

Use domain-specific concepts for collections, such as **Herd** instead of **Cows** or **Fleet** instead of **Ships**. These new concepts allow you to add specific methods or actions to the collection (e.g., "split the fleet").

### Don't Abbreviate

Avoid abbreviations, as they are often ambiguous and may have different meanings in various contexts. This can make onboarding new developers more challenging. For example, use `timeOfArrival` instead of `ETA` (estimated time of arrival).

### No Getters/Setters/Properties

Translate domain language directly into code, avoiding getters, setters, or properties. For instance, use `rate.applyOn(value)` instead of `new Amount(value * rate.getValue())`.

### One Dot Per Line

Having multiple dots in a single line often indicates a missing domain concept. Introduce a concept to make the code clearer. For example, use `amount.hasSameCurrencyAs(anotherAmount)` instead of `amount.Currency.isEqualTo(anotherAmount.Currency)`.

### Don't Use The ELSE Keyword

Refactor your code using "early returns" to avoid ELSE blocks. ELSE often reduces readability, especially when the IF condition is distant or complex.

```java
if (color == RED) {
    //do red stuff
    return
}
if (color == BLUE) {
    //do blue stuff
    return
}
//do other stuff
```

instead of

```java
if (color == RED) {
    //do red stuff
} else if (color == BLUE) {
    //do blue stuff
} else {
    //do other stuff
}
return
```

### Only One Level Of Indentation Per Method

Keep methods simple enough to be understood at a glance. This approach also encourages identifying and introducing new domain concepts with each method. A common warning sign is the **Arrow Anti-Pattern**, where excessive indentation creates arrow-like structures.

### Keep All Entities Small

Domain entities, including aggregates, should be kept small and focused.

**Example**

Context: Boarding a subway  
Aggregate: Family (all parents and children)

_Is the aggregate size appropriate? Can parents board without children?_  
**Yes!** The aggregate can be reduced in size, but it requires a constraint: children cannot board alone.

New Aggregate: Parents and Children  
New Constraint: Children must be accompanied by parents when boarding.

### No Classes With More Than Two Instance Variables

Keep classes small and focused. More than two instance variables often suggest hidden domain concepts.

```java
Period(start, end)
RatedPeriod(Period, rating)
```

instead of

```java
Period(start, end, value)
```