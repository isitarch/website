---
title: "9 Regeln der Object Calisthenics"
createdAt: 2024-12-06
image: "/assets/images/banner.png"
---
[Jeff Bay stellte die 9 Regeln in einem Kapitel des Buchs "The ThoughtWorks Anthology: Essays on Software Technology and Innovation"](https://isbnsearch.org/isbn/9781934356142) als praktische Trainingsaufgaben vor. Die Regeln werden im Sinne von Calisthenics als Übung in einem kleinen Projekt mit rund 1000 Zeilen Code angewendet, um die Prinzipien effektiv zu verinnerlichen. Jeff Bay betont, dass die Regeln nicht immer universell anwendbar sind, ihre Anwendung jedoch dazu dient, ein tieferes Bewusstsein für wichtige Themen zu entwickeln. Die Übungen sollen im Alltag helfen, Domänenkonzepte genauer zu hinterfragen und weiterzuentwickeln.

Dorra Bartaguiz erläutert die 9 Regeln in ihrem [Talk auf der DDD Europe 24](/posts/ba24-elevating_tactical_ddd_patterns_through_object_calisthenics).

## Die 9 Regeln

### Wrap All Primitives And Strings

Verwende Domänenkonzepte anstelle von primitiven Datentypen und Strings. Der Variablenname kann oft ein guter Hinweis auf das zugrunde liegende Konzept sein.

### First Class Collections

Ersetze Mengen durch Domänenkonzepte, wie zum Beispiel **Herde** statt **Kühe** oder **Flotte** statt **Schiffe**. Diese Konzepte ermöglichen es, spezifische Methoden oder Aktionen für die Sammlung hinzuzufügen (z. B. "Flotte teilen").

### Don't Abbreviate

Vermeide Abkürzungen, da sie oft uneindeutig sind und in unterschiedlichen Kontexten unterschiedlich interpretiert werden können. Neue Entwickler*innen könnten dadurch erschwerten Zugang finden. Schreibe daher z. B. `timeOfArrival` statt `ETA` (estimated time of arrival).

### No Getters/Setters/Properties

Nutze die Sprache der Domäne im Quellcode und vermeide Getter, Setter oder Eigenschaften. Zum Beispiel `rate.applyOn(value)` anstelle von `new Amount(value * rate.getValue())`.

### One Dot Per Line

Mehr als ein Punkt in einer Zeile kann darauf hindeuten, dass ein Domänenkonzept fehlt. Führe ein neues Konzept ein, um den Code klarer zu gestalten. Beispiel: Verwende `amount.hasSameCurrencyAs(anotherAmount)` anstelle von `amount.Currency.isEqualTo(anotherAmount.Currency)`.

### Don't Use The ELSE Keyword

Strukturiere den Code mit "early returns", um ELSE-Blöcke zu vermeiden. ELSE erschwert oft die Lesbarkeit, insbesondere wenn es weit von der ursprünglichen Bedingung entfernt ist.

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

statt

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

Halte die Methodenkomplexität gering, sodass sie auf einen Blick verstanden werden können. Dies fördert auch die Möglichkeit, neue Domänenkonzepte zu identifizieren und zu integrieren. Ein Warnsignal für zu komplexe Methoden ist das **Arrow Anti-Pattern**, bei dem viele Einrückungen Pfeilstrukturen erzeugen.

### Keep All Entities Small

Domänen-Entitäten, einschließlich Aggregate, sollten überschaubar bleiben.

**Beispiel**

Kontext: Einstieg in eine U-Bahn  
Aggregat: Familie (alle Eltern und Kinder)

_Ist die Größe des Aggregats sinnvoll gewählt? Können Eltern auch ohne Kinder einsteigen?_  
**Ja!** Das Aggregat kann verkleinert werden, aber es braucht eine Einschränkung: Kinder dürfen nicht ohne Eltern einsteigen.

Neues Aggregat: Eltern und Kinder  
Neue Randbedingung: Kinder müssen beim Einstieg bei den Eltern sein.

### No Classes With More Than Two Instance Variables

Klassen sollten klein und fokussiert bleiben. Mehr als zwei Instanzvariablen weisen oft auf verborgene Domänenkonzepte hin.

```java
Period(start, end)
RatedPeriod(Period, rating)
```

statt

```java
Period(start, end, value)
```