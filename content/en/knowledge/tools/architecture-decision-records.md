---
title: "Architecture Decision Records (ADR)"
createdAt: 2024-10-11
image: "/assets/images/banner.png"
---
Architecture Decision Records (ADRs) sind Dokumente, die wichtige architektonische Entscheidungen festhalten. Sie ermöglichen eine transparente Kommunikation zwischen Architekten und Entwicklern. Durch ADRs wird nicht nur festgehalten, *was* entschieden wurde, sondern auch *warum* eine Entscheidung getroffen wurde. Dies fördert ein besseres Verständnis und erhöht die Wahrscheinlichkeit, dass alle Beteiligten an einem Strang ziehen und die Architekturziele im Blick behalten.

Mark Richards gibt in seinem [Vortrag "The Intersection of Architecture and Implementation"](/posts/ri24-the_intersection_of_arch_and_impl) eine [kurze Einführung in das Thema](https://youtube.com/watch?v=n6G5qtJHmgw&t=2420s).

## Der Zweck von ADRs

ADR sollten nicht nur als Dokumentation, sondern als ein **Werkzeug zur Zusammenarbeit** zwischen Architekten und Entwicklungsteams. Durch die Erklärung der Hintergründe einer Entscheidung wird sichergestellt, dass das "Warum" hinter der Entscheidung verstanden wird und die Architektur besser nachvollzogen werden kann.

> **"Why is more important than how."**, [Mark Richards](https://youtube.com/watch?v=n6G5qtJHmgw&t=2430s)

## Aufbau eines ADRs

Ein ADR ist typischerweise in folgende Abschnitte unterteilt:

- **Titel**: Ein prägnanter Titel der Entscheidung.
- **Status**: Aktueller Status der Entscheidung (z. B. „vorgeschlagen“, „akzeptiert“ oder „veraltet“).
- **Kontext**: Eine kurze Beschreibung des Kontexts und der Anforderungen, die zur Entscheidung geführt haben.
- **Entscheidung**: Die getroffene Entscheidung, oft mit einer kurzen Begründung.
- **Konsequenzen**: Die Konsequenzen und mögliche Auswirkungen dieser Entscheidung, einschließlich der Kompromisse und Alternativen.

### Beispiel für ein ADR

**ADR 001: Verwenden von Request-Reply-Messaging zwischen Diensten**

- **Status**: Akzeptiert
- **Kontext**: Das System muss eine hohe Skalierbarkeit und schnelle Antwortzeiten sicherstellen. Bisherige Versuche, RESTful-Schnittstellen zu verwenden, führten zu Performance-Einbußen bei hoher Last.
- **Entscheidung**: Es wird Request-Reply-Messaging verwendet, da es in unserer Produktionsumgebung schneller und skalierbarer ist als REST.
- **Konsequenzen**: Die Entscheidung bedeutet, dass die Implementierung komplexer wird und zusätzliche Messaging-Tools erfordert, bietet jedoch bessere Performance und Skalierbarkeit.

## Vorteile von ADRs

1. **Nachvollziehbarkeit**: Entscheidungen und deren Gründe sind dokumentiert, was den Lernprozess neuer Teammitglieder erleichtert.
2. **Kollaboration**: Sie bieten eine Diskussionsgrundlage und fördern die Zusammenarbeit.
3. **Kontinuität**: Selbst wenn Teammitglieder wechseln, bleiben ADRs als Wissensressource erhalten.

> **"If developers don't know why you made a decision, they're less likely to agree with it."**, [Mark Richards](https://youtube.com/watch?v=n6G5qtJHmgw&t=2290s)

## Einsatz von ADRs in der Praxis

ADRs sollten in einem leicht zugänglichen Repository gespeichert werden, etwa in einem Git-Repo oder einer Wiki-Seite, damit alle Teammitglieder jederzeit darauf zugreifen können. [Richards empfiehlt in seinem Vortrag](/posts/ri24-the_intersection_of_arch_and_impl), ADRs zunächst temporär einzuführen, um ihre Wirksamkeit als Kommunikationsmittel zu testen.

> **"Demonstration defeats discussion."**, [Mark Richards](https://youtube.com/watch?v=n6G5qtJHmgw&t=3320s)
