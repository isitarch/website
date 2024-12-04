---
title: "Was sind Architecture Decision Records (ADR)?"
createdAt: 2024-10-11
image: "/assets/images/banner.png"
---

**Architecture Decision Records (ADRs)** sind Dokumente, die zentrale architektonische Entscheidungen festhalten. Sie fördern die transparente Kommunikation zwischen Architekten und Entwicklern und dokumentieren nicht nur, *was* entschieden wurde, sondern vor allem *warum*. Dieses "Warum" hilft Teams, die Entscheidungen besser zu verstehen, stärkt die Zusammenarbeit und sorgt dafür, dass alle Beteiligten die Architekturziele im Blick behalten.

Mark Richards gibt in seinem [Vortrag „The Intersection of Architecture and Implementation“](/posts/ri24-the_intersection_of_arch_and_impl) eine [kurze Einführung in das Thema](https://youtube.com/watch?v=n6G5qtJHmgw&t=2420s).

---

## Der Zweck von ADRs

ADRs dienen nicht nur der Dokumentation, sondern sind ein **Werkzeug zur Zusammenarbeit**. Sie schaffen eine Grundlage für Diskussionen und fördern das Verständnis der Architekturentscheidungen. Indem sie die Hintergründe erklären, stellen ADRs sicher, dass die Entscheidungen nachvollziehbar bleiben und zukünftige Diskussionen effizienter geführt werden können.

> **„Why is more important than how.“**  
> — [Mark Richards](https://youtube.com/watch?v=n6G5qtJHmgw&t=2430s)

---

## Aufbau eines ADRs

Ein typisches ADR besteht aus den folgenden Abschnitten:

- **Titel**: Ein kurzer und prägnanter Titel, der die Entscheidung zusammenfasst.
- **Status**: Der aktuelle Status der Entscheidung, z. B. „vorgeschlagen“, „akzeptiert“ oder „veraltet“.
- **Kontext**: Eine Beschreibung des Kontexts, der zur Entscheidung geführt hat, einschließlich Anforderungen und Herausforderungen.
- **Entscheidung**: Die eigentliche Entscheidung, oft mit einer kurzen Begründung.
- **Konsequenzen**: Die Auswirkungen der Entscheidung, einschließlich möglicher Kompromisse und Alternativen.

---

### Beispiel für ein ADR

**ADR 001: Verwenden von Request-Reply-Messaging zwischen Diensten**

- **Status**: Akzeptiert  
- **Kontext**: Das System benötigt hohe Skalierbarkeit und schnelle Antwortzeiten. Bisherige RESTful-Schnittstellen verursachten Performanceprobleme bei hoher Last.  
- **Entscheidung**: Statt REST wird Request-Reply-Messaging verwendet, da es in unserer Umgebung bessere Performance und Skalierbarkeit bietet.  
- **Konsequenzen**: Diese Entscheidung erhöht die Implementierungskomplexität und erfordert zusätzliche Messaging-Tools. Sie bietet jedoch erhebliche Vorteile in Bezug auf Performance und Skalierbarkeit.

---

## Vorteile von ADRs

1. **Nachvollziehbarkeit**: ADRs dokumentieren nicht nur Entscheidungen, sondern auch ihre Gründe. Dies erleichtert es neuen Teammitgliedern, sich schnell einzuarbeiten.  
2. **Kollaboration**: ADRs bieten eine Grundlage für Diskussionen und fördern die Zusammenarbeit zwischen Architekten und Entwicklern.  
3. **Kontinuität**: Selbst bei Teamwechseln bleiben die Entscheidungen und deren Hintergründe dokumentiert und nachvollziehbar.  

> **„If developers don't know why you made a decision, they're less likely to agree with it.“**  
> — [Mark Richards](https://youtube.com/watch?v=n6G5qtJHmgw&t=2290s)

---

## Einsatz von ADRs in der Praxis

ADRs sollten in einem leicht zugänglichen Repository gespeichert werden, z. B. in einem Git-Repository oder einer Wiki-Seite, damit sie allen Teammitgliedern jederzeit zur Verfügung stehen. 

Mark Richards empfiehlt in seinem [Vortrag](/posts/ri24-the_intersection_of_arch_and_impl), ADRs zunächst **temporär einzuführen**, um ihre Effektivität als Kommunikationsmittel zu testen. Dies ermöglicht es Teams, den Nutzen zu evaluieren, bevor ADRs vollständig in den Entwicklungsprozess integriert werden.

> **„Demonstration defeats discussion.“**  
> — [Mark Richards](https://youtube.com/watch?v=n6G5qtJHmgw&t=3320s)