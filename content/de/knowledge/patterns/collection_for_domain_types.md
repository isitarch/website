---
title: "Mustersammlung: Domänenarten"
createdAt: 2024-10-11
image: "/assets/images/banner.png"
categories: [ Muster, DDD, Domäne ]
---

Diese Mustersammlung bietet eine Möglichkeit, Domänen auf hoher Ebene zu kategorisieren. Die Art der Domäne gibt wertvolle Hinweise darauf, wie sie in kleinere Subdomänen aufgeteilt werden kann, was wiederum die Struktur und Modularität eines Systems verbessert.

Carola Lilienthal beschreibt in ihrem Vortrag [„Der Einfluss der Domäne auf die Architektur“](/posts/li24-how_the_domain_influences_the_architecture), dass es bei einigen Domänen relativ einfach ist, klare Subdomänen zu identifizieren. Bei anderen hingegen führen unklare Strukturen häufig zu langwierigen Diskussionen und erschweren die Aufteilung erheblich. Gemeinsam mit ihrem Team hat sie verschiedene Muster definiert, die dabei helfen, Domänen einzuordnen und zu strukturieren. Besonders das **Blackboard-Domänen-Muster** zeigt, warum bei unklaren Prozessen oft Herausforderungen auftreten, während die Aufteilung in anderen Mustern, wie der **Pipeline-Domäne**, leichter fällt.

---

## Domänen-Muster

### Pipeline-Domänen-Muster
- **Beschreibung**: Prozesse folgen einer klaren, zeitlichen Abfolge mit eindeutigen Übergängen zwischen den einzelnen Schritten.
- **Typische Merkmale**:
  - Schritt-für-Schritt-Abläufe, oft in der Prozessautomatisierung.
  - Klare zeitliche Sequenzen und Übergänge.
  - Häufig gibt es regulatorische Rahmenbedingungen, die den Ablauf strukturieren.
- **Aufteilung**: Entlang der Prozessschritte, wobei jeder Schritt als Subdomäne modelliert werden kann.

---

### Blackboard-Domänen-Muster
- **Beschreibung**: Unstrukturierte, unvorhersehbare Abläufe, bei denen verschiedene Akteure gleichzeitig oder unabhängig voneinander agieren.
- **Typische Szenarien**:
  - Mehrere Personen arbeiten gleichzeitig an einem Produkt oder dessen Design.
  - Systeme, die beobachtet werden, wobei Ereignisse in ungeordneter Reihenfolge eintreten.
  - Planungsprozesse mit kontinuierlicher Optimierung.
  - Komplexe Berechnungssoftware, z. B. für technische Geräte.
- **Herausforderung**: Die Aufteilung der Domäne ist oft unklar und führt zu hoher Komplexität.
- **Empfehlung**: Falls möglich, die Blackboard-Domäne in eine **Dialog-Domäne** überführen, um Struktur und Ordnung zu schaffen.

---

### Dialog-Domänen-Muster
- **Beschreibung**: Verschiedene Akteure oder Rollen arbeiten unabhängig an ihren eigenen Aufgaben, jedoch gibt es Verhandlungen und Abstimmungen über Ergebnisse und Übergaben.
- **Typische Merkmale**:
  - Zusammenarbeit zwischen Unternehmen oder Abteilungen, die ein gemeinsames Ziel verfolgen.
  - Keine direkten Übergaben von Arbeitsergebnissen, aber eine gemeinsame Planung.
  - Klare Aushandlungspunkte wie:
    - Wann und wo soll etwas übergeben werden?
    - Welche Eigenschaften oder Anforderungen müssen erfüllt sein?
- **Aufteilung**: Entlang der Aushandlungspunkte, um die Rollen und Prozesse klar zu trennen und zu modellieren.
