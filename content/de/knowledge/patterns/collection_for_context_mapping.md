---
title: "Mustersammlung: Bounded Context"
createdAt: 2024-10-11
image: "/assets/images/banner.png"
categories: [ Patterns, Context Mapping, Teams, Collaboration, Bounded Context ]
---

Diese Mustersammlung beschreibt die Beziehungen zwischen **Teams** und **Bounded Contexts** innerhalb einer Softwarelandschaft.

Für ausführlichere Beschreibungen dieser Muster empfehlen sich das [Video von Michael Plöd](/posts/pl22-context_mapping) oder die [Dokumentation der DDD-Crew auf GitHub](https://github.com/ddd-crew/context-mapping).

---

## Muster

### Partnership
- **Beschreibung**: Teams arbeiten kooperativ zusammen, z. B. durch gemeinsame Planung und Umsetzung.
- **Einsatzgebiet**: Geeignet, wenn Teams an ähnlichen Konzepten arbeiten und eine enge Integration erforderlich ist.

### Shared Kernel
- **Beschreibung**: Ein gemeinsames Modell wird von mehreren Teams gemeinsam gepflegt.
- **Einsatzgebiet**: Hilfreich, wenn eine einheitliche Grundlage zwischen Teams oder Services benötigt wird.

### Customer-Supplier
- **Beschreibung**: Konsumenten (Kunden) eines Services beeinflussen die Prioritäten und Aufgaben des Anbieters in definiertem Rahmen.
- **Einsatzgebiet**: Geeignet für Teams oder Services mit einer klaren Produzenten-Konsumenten-Beziehung.

### Conformist
- **Beschreibung**: Der Konsument übernimmt direkt das Modell des Anbieters, sodass Änderungen beim Anbieter auch direkt die Konsumenten betreffen.
- **Einsatzgebiet**: Häufig anzutreffen, wenn das Konsumententeam keine Kapazität oder Notwendigkeit sieht, eigene Abstraktionen zu entwickeln.

### Anticorruption Layer
- **Beschreibung**: Übersetzt das Modell des Anbieters in die interne Sprache des Konsumenten.
- **Einsatzgebiet**: Oft an den Eintrittspunkten einer Anwendung implementiert, im Einklang mit Prinzipien der hexagonalen Architektur.

### Separate Ways
- **Beschreibung**: Teams oder Kontexte arbeiten unabhängig voneinander.
- **Einsatzgebiet**: Geeignet für lose gekoppelte oder unabhängige Systeme. Dokumentation ist jedoch wichtig, falls z. B. Supportabhängigkeiten bestehen.

### Open/Host Service
- **Beschreibung**: Ein Anbieter bietet eine öffentliche API für eine Vielzahl von Konsumenten an und behält die volle Kontrolle über die Weiterentwicklung.
- **Einsatzgebiet**: Optimal für weit verbreitete Services, bei denen der Anbieter unabhängig entscheiden muss.

### Published Language
- **Beschreibung**: Teams nutzen eine gemeinsame Sprache oder einen Standard.
- **Einsatzgebiet**: Beispiele sind Industriestandards wie iCalendar oder vCard zur Interoperabilität.

### Big Ball of Mud (Anti-Pattern)
- **Beschreibung**: Unklare Grenzen und eine mehrdeutige Sprache zwischen Kontexten führen zu unorganisierten und fehleranfälligen Systemen.
- **Gegenmaßnahme**: Einsatz eines Anticorruption Layers, um solche Systeme abzugrenzen und schrittweise zu modularisieren.

### Vetoing Customer (Anti-Pattern)
- **Beschreibung**: Konsumenten können unbegrenzt Veto gegen Entscheidungen des Anbieters einlegen, was potenziell den Fortschritt blockiert.
- **Gegenmaßnahme**: Einführung von Governance-Richtlinien, um Deadlocks zu vermeiden und die Beziehung auszugleichen.

---

## Auswahlkriterien

### Domänenkategorien der Services
- Welche Kategorie hat die Domäne, und wie hängt sie von anderen Teams ab?
  - **Kerndomäne oder Subdomäne**
  - **Unterstützende Domäne**
  - **Generische Domäne**

### Team-Beziehungen
- Welche Beziehung besteht zwischen den Teams?
  - **Gegenseitige Abhängigkeit**:
    - Partnership
    - Shared Kernel
  - **Unabhängig**:
    - Separate Ways
    - Published Language
  - **Serviceanbieter zu Konsument**:
    - Customer-Supplier
    - Anticorruption Layer
    - Conformist
    - Open/Host Service

### Kommunikationshäufigkeit zwischen Teams
- **Häufige Kommunikation**:
  - Shared Kernel
  - Customer-Supplier
  - Conformist
- **Wenig bis keine Kommunikation**:
  - Anticorruption Layer
  - Separate Ways
  - Open/Host Service
  - Published Language