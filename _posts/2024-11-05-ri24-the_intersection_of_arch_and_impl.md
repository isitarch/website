---
title: "The Intersection of Architecture and Implementation"
metadate: "hide"
categories: [ Software Architektur, Architektur-Ausrichtung, Zusammenarbeit, Governance, Fitnessfunktionen]
image: /assets/images/posts/Ri24-DDD-IAI_overview.png
visit: https://www.youtube.com/watch?v=n6G5qtJHmgw
speaker: Mark Richards
conference: Domain-Driven Design Europe 2024, Amsterdam
publicationdate: 07.10.2024
---
**Sprecher**: {{page.speaker}}

**Konferenz**: {{page.conference}}

**Datum**: {{page.publicationdate}}

Mark Richard plädiert für eine enge Zusammenarbeit zwischen Architekten und Entwicklern. Er geht an Hand von Beispielen auf Probleme ein, wenn Softwarearchitektur und Implementierung voneinander abweichen und betont die Notwendigkeit von operativer, struktureller und restriktionsbasierter Architektur-Ausrichtung. Als Hilfsmittel stellt er [Architecture Decision Records (ADRs)](/tools/architecture/decision-records.html), Fitnessfunktionen und statischen Analysetools vor.

- Problem: Architektur und Implementierung passen nicht zueinander -> schlechte Software, bspw. inperformant
- Drei Typen von Architekturausrichtung als Schlüssel für erfolgreiche SW-Architektur: Ausrichtung an operativen Eigenschaften, logischer Struktur oder äußeren Bedingungen
- Werkzeuge zur Durchsetzung von Entwurfsentscheidungen: Fitnessfunktionen, ArchUnit, PyArch, ...
- Zur Umsetzung von Entwurfsentscheidungen ist die Zusammenarbeit von Architekten und Entwicklern essentiell
- [Architecture Decision Records (ADR)](/tools/architecture/decision-records.html) werden als Werkzeug zur Kommunikation und Dokumentation vorgestellt.

## Roter Faden

* [00:16](https://youtube.com/watch?v=n6G5qtJHmgw&t=16s): Einführung in das Thema „Schnittstelle zwischen Architektur und Implementierung“.
* [01:10](https://youtube.com/watch?v=n6G5qtJHmgw&t=70s): Szenario einer Architektur zur Unterstützung hoher Benutzerzahlen.
* [03:20](https://youtube.com/watch?v=n6G5qtJHmgw&t=200s): Vorstellung der drei Arten der Architektur-Ausrichtung: operativ, strukturell und durch Einschränkungen.
* [04:24](https://youtube.com/watch?v=n6G5qtJHmgw&t=264s): Erklärung der operativen Ausrichtung.
* [06:30](https://youtube.com/watch?v=n6G5qtJHmgw&t=390s): Diskussion zur Entkopplung von Diensten durch Caching.
* [08:37](https://youtube.com/watch?v=n6G5qtJHmgw&t=517s): Beispiel für eine Fehlanpassung durch den Fokus auf Performance.
* [10:17](https://youtube.com/watch?v=n6G5qtJHmgw&t=617s): Strukturelle Ausrichtung mithilfe der logischen Architektur als Bausteine.
* [12:00](https://youtube.com/watch?v=n6G5qtJHmgw&t=720s): Bedeutung der Struktur in logischen Komponenten.
* [15:40](https://youtube.com/watch?v=n6G5qtJHmgw&t=940s): Beispiel eines Ticketsystems für eine bessere strukturelle Ausrichtung.
* [18:03](https://youtube.com/watch?v=n6G5qtJHmgw&t=1083s): Einführung in die Ausrichtung durch Einschränkungen.
* [20:10](https://youtube.com/watch?v=n6G5qtJHmgw&t=1210s): Vorteile der Schichtenarchitektur beim Management von Einschränkungen.
* [23:20](https://youtube.com/watch?v=n6G5qtJHmgw&t=1400s): Produktionsprobleme durch fehlende Beachtung von Einschränkungen.
* [25:50](https://youtube.com/watch?v=n6G5qtJHmgw&t=1550s): Erklärung von Fitnessfunktionen als Governance-Tools.
* [28:30](https://youtube.com/watch?v=n6G5qtJHmgw&t=1710s): Beispiel für Fitnessfunktionen für operative Metriken.
* [30:30](https://youtube.com/watch?v=n6G5qtJHmgw&t=1830s): Strukturelle Fitnessfunktionen mit ArchUnit und ähnlichen Tools.
* [33:00](https://youtube.com/watch?v=n6G5qtJHmgw&t=1980s): Bedeutung von Kommunikation in der Governance jenseits bloßer Regelsetzung.
* [35:00](https://youtube.com/watch?v=n6G5qtJHmgw&t=2100s): Kluft zwischen Architektur und Design und die Notwendigkeit einer bidirektionalen Beziehung.
* [37:20](https://youtube.com/watch?v=n6G5qtJHmgw&t=2240s): Goldene Regeln der Zusammenarbeit.
* [40:20](https://youtube.com/watch?v=n6G5qtJHmgw&t=2420s): Einführung in [Architecture Decision Records (ADRs)](/tools/architecture/decision-records.html).
* [44:40](https://youtube.com/watch?v=n6G5qtJHmgw&t=2680s): Demonstration von Entscheidungen mit Metriken zur Förderung der Zusammenarbeit.

## Zitate

> Most of these cases are because the architecture is not lined up and aligned with the implementation and vice versa. [02:55](https://youtu.be/n6G5qtJHmgw?t=175)

> The logical architecture of a system shows how that system will work and how it’s coupled, the dependencies between these pieces of functionality. [14:21](https://youtu.be/n6G5qtJHmgw?t=861)

Goldene Regel der Zusammenarbeit:

> If developers don’t know why you made a decision, they’re less likely to agree with it. [38:10](https://youtube.com/watch?v=n6G5qtJHmgw&t=2290s)

> Why is more important than how. [38:32](https://youtu.be/n6G5qtJHmgw?t=2312)

Immer schön kritisch bleiben und stetig weiter verbessern:

> Developers should never take the components designed by architects as the last word; rather, it should be viewed as a first draft. [47:30](https://youtube.com/watch?v=n6G5qtJHmgw&t=2850s)

> Architectural thinking empowers development teams to be more aware of architecture. [50:03](https://youtu.be/n6G5qtJHmgw?t=2999)

Konkrete Beispiele und Metriken sind oft überzeugender als theoretische Diskussionen:

> Demonstration defeats discussion. [55:20](https://youtube.com/watch?v=n6G5qtJHmgw&t=3320s)

> The more significant a decision, the more I would try to demonstrate that value before approaching it. [57:30](https://youtube.com/watch?v=n6G5qtJHmgw&t=3450s)