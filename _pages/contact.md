---
title: "Kontakt"
permalink: "/kontakt.html"
---

<form action="https://formspree.io/{{site.email}}" method="POST">    
<p>Sende deine Nachricht an {{site.name}}. Wir antworten schnellstmöglich!</p>
<div class="form-group row">
<div class="col-md-6">
<input class="form-control" type="text" name="name" placeholder="Name*" required>
</div>
<div class="col-md-6">
<input class="form-control" type="email" name="_replyto" placeholder="E-mail Address*" required>
</div>
</div>
<textarea rows="8" class="form-control mb-3" name="message" placeholder="Message*" required></textarea>    
<p><small>Datenschutzhinweis: Deine Anfrage wird von formspree.io verarbeitet und an uns weitergeleitet.</small></p>
<input class="btn btn-success" type="submit" value="Send">
</form>
