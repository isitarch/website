---
title: "Der Modularity Maturity Index (MMI)"
createdAt: 2024-10-11
permalink: "/metrics/modularity-maturity-index.html"
image: "/assets/images/banner.png"
---

Der **Modularity Maturity Index (MMI)** ist eine Kennzahl, die die Qualität eines Softwaresystems anhand seines Modularitätsgrades bewertet. Entwickelt wurde der Index von **Workplace Solutions (WPS)**, um die Transformationswege von monolithischen oder schlecht strukturierten Systemen hin zu modularen, wartbaren Architekturen datenbasiert zu unterstützen. Modularität ist ein Schlüsselfaktor für langfristige Wartbarkeit, Skalierbarkeit und Kosteneffizienz in der Softwareentwicklung.

Eine Einführung zum MMI gibt Carola Lilienthal, eine führende Expertin von WPS, sowohl in ihrem [Vortrag über Domänenmuster](/posts/li24-how_the_domain_influences_the_architecture) als auch im [Podcast des Unternehmens](https://www.wps.de/en/wps/computing-time/software-architecture-assessment-with-the-help-of-metrics--1).

## Was ist der Modularity Maturity Index?

Der MMI misst die **Modularität und Strukturqualität** eines Systems und bewertet, wie gut es den Prinzipien moderner Softwarearchitektur entspricht. Die Skala reicht von **0 bis 10**, wobei:
- **8–10**: Sehr gute Systeme mit klarer Modularität, loser Kopplung und sauberer Schichtung.
- **4–8**: Mittelmäßige Systeme mit Verbesserungspotenzial, oft durch gezielte Refaktorierung.
- **< 4**: Systeme mit unklarer Struktur und hoher Kopplung, oft sogenannte "Big Ball of Mud"-Architekturen.

## Berechnung des MMI

Zur Berechnung des MMI werden folgende Indikatoren analysiert:
1. **Kopplung der Bausteine**: Wie viele Abhängigkeiten bestehen zwischen Modulen? Sind diese zyklisch?
2. **Hierarchie der Bausteine**: Entspricht die Architektur einem klaren Schichtenmodell?
3. **Verwendung von Softwaremustern**: Werden etablierte Patterns wie Value Objects oder Schichtenarchitektur eingesetzt?

Das Ergebnis wird durch Tools wie **Structure101**, **TeamScale**, **Sonargraph** oder **Lattix** unterstützt. Diese Werkzeuge ermöglichen es, Abhängigkeitsgraphen zu analysieren, zyklische Abhängigkeiten zu erkennen und die Einhaltung von Architekturregeln zu überprüfen.

---

## Praxisbeispiel: Transformation mit dem MMI

Der MMI dient als Grundlage für die Planung und Umsetzung von Architekturtransformationen. Carola Lilienthal beschreibt in ihrem [Vortrag](/posts/li24-how_the_domain_influences_the_architecture) zwei typische Szenarien:

### 1. Big Ball of Mud (MMI < 4)

Ein "Big Ball of Mud" ist ein chaotisches System mit hoher Kopplung und fehlender Modularität. Hier sind die wichtigsten Schritte:
- **Technische Stabilisierung**:
  - Automatisierung von Build- und Testprozessen.
  - Aktualisierung von Frameworks und Bibliotheken.
  - Einführung von Fehlerresilienz durch Logging und Monitoring.
- **Taktische Domain-Driven Transformation**:
  - Identifikation von Domänen und Einführung von klaren Modellen.
  - Auflösung zyklischer Abhängigkeiten.
  - Einsatz von Value Objects zur Datenkapselung.
  - Reduzierung von Vererbung und Einführung von Design-by-Contract-Prinzipien.

### 2. Technisch geschichtetes System (MMI 4–8)

Geschichtete Systeme weisen oft bereits eine gewisse Modularität auf, leiden jedoch an übergroßen Domänenmodellen oder unklaren Abgrenzungen. Zwei Transformationswege sind hier möglich:
- **Weg 1: Taktische vor strategischer Transformation**
  - Geeignet für Systeme mit großen, komplexen Klassen in zentralen Modulen.
  - Ziel: Erst Domänenlogik optimieren, dann die Architektur strategisch verbessern.
- **Weg 2: Strategische vor taktischer Transformation**
  - Für Systeme mit guter Trennung der Domänen und wenigen Abhängigkeiten.
  - Ziel: Modularisierung der Architektur auf strategischer Ebene, gefolgt von Optimierungen der Details.

---

## Tools zur Unterstützung

Die Berechnung des MMI und die Transformation von Architekturen werden durch spezialisierte Tools unterstützt. Hier einige Beispiele:

- **[Structure101](https://www.sonarsource.com/structure101/)**: Visualisiert komplexe Abhängigkeitsgraphen und hilft, zyklische Kopplungen zu eliminieren.
- **[TeamScale](https://teamscale.com/)**: Überwacht die Einhaltung von Architekturregeln und erkennt Verletzungen frühzeitig.
- **[Sonargraph](https://www.hello2morrow.com/products/sonargraph)**: Bietet detaillierte Analysen zu Kopplung und Schichtung.
- **[Lattix](https://www.lattix.com/)**: Unterstützt die kontinuierliche Verbesserung der Architektur durch Metrik-basierte Visualisierungen.

---

## Fazit

Der Modularity Maturity Index (MMI) ist ein wertvolles Werkzeug zur Bewertung und Transformation von Softwarearchitekturen. Durch seine Verbindung mit Tools und klar definierten Indikatoren hilft er Architekten und Entwicklungsteams, gezielte Maßnahmen zur Verbesserung der Modularität zu ergreifen.

Die objektive Bewertung durch Tools ermöglicht es, Architekturentscheidungen auf eine visuelle und messbare Grundlage zu stellen, wodurch Diskussionen produktiver und fundierter werden.
