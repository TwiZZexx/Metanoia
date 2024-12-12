let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 5000);

function makeLinksClickable(text) {
  return text.replace(
    /(\bhttps?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank">$1</a>'
  );
}

function makePassagesBold(text, boldPassages) {
  boldPassages.forEach((passage) => {
    const regex = new RegExp(`(${passage})`, "g");
    text = text.replace(regex, "<strong>$1</strong>");
  });
  return text;
}

function formatText(text, boldPassages = []) {
  let formattedText = makeLinksClickable(text);
  if (boldPassages.length > 0) {
    formattedText = makePassagesBold(formattedText, boldPassages);
  }
  formattedText = formattedText
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br>");
  return "<p>" + formattedText + "</p>";
}

let aktuelles = `
KASTRATIONEN:


Und weil wir Tiere lieben, müssen wir die Anzahl der Welpen vermindern! JETZT!

Viele tausend Hunde und Katzen werden jedes Jahr in Galati in eine Welt geboren, in welcher sie nicht erwünscht sind und sie kein würdiges Leben führen dürfen! Sie werden in ein leidvolles Leben als Straßentier hineingeboren. Jeden Tag ein Kampf ums Überleben, begleitet von ständiger Angst und dem Gefühl verfolgt zu werden, tägliches herumlaufen mit knurrendem Magen, auf der Suche nach Futter, Wasser und einem sicheren Unterschlupf. Nur wenn wir das Problem an der Wurzel packen, können wir den Hunden auf den Straßen Galatis eine bessere Zukunft bieten und verhindern somit, dass sie eines Tages im Public Shelter Ecosal landen!

Wir kastrieren Tiere von mittellosen Besitzern, Straßentiere oder die sogenannten Industriehunde (Hunde, welche auf Industriegeländen leben und oft auch von den ansässigen Firmen versorgt werden). Der Durchschnittsbürger in Rumänien kann sich keine Kastration leisten – das Ergebnis sehen wir in hunderttausendfacher Ausführung auf den Straßen und in den Sheltern! Jedes Jahr werden tausende Jungtiere ausgesetzt, viele verlieren den harten Kampf bereits auf den Straßen und verenden verletzt oder krank qualvoll. Bleibt ihnen dieses Schicksal erspart, werden sie von den Hundefängern eingefangen und landen im Public Shelter der Stadt – ein lebensfeindlicher und unwürdiger Ort.


Unsere Kastrationskampagne findet fortlaufend statt. Das heißt, sobald wir über genügend finanzielle Mittel verfügen, werden Tiere (Hunde und Katzen) kastriert. Eine Kastration kostet für einen Hund im Durchschnitt 30 EUR und für eine Katze 20 EUR. Wir arbeiten mit zwei sehr engagierten, jungen Tierärzten zusammen. Bei den Kastrationen werden die Tiere zusätzlich gegen Parasiten behandelt, auch Notfälle werden medizinisch versorgt.


Wir sind um jede Unterstützung froh, sei sie noch so klein! 


Kastrationen packen die Probleme an der Wurzel und verhindern tausendfaches Tierleid!


Kastrationen verhindern Tierleid!


Kastrationen retten Leben!


Spenden sind möglich ⬇️


PayPal: info@metanoia-tiernothilfe.com (Bitte als „Freunde" senden, um Gebühren zu sparen)


Banküberweisung:
Metanoia Tiernothilfe
IBAN: AT25 2060 1034 0016 0283
BIC: SPBRAT2BXXX


WICHTIG! Damit wir deine Spende den Kastrationen zuordnen können, vermerke bitte “Kastrationen“ bei deiner Überweisung. Danke!


Bisher durchgeführte Kastrationen:
2015 – 203 Hunde
2016 – 100 Hunde
2017 – 235 Hunde und 103 Katzen
2018 – 267 Hunde
2019 – 229 Hunde und 134 Katzen
2020 – 259 Hunde und 147 Katzen
2021 – 338 Hunde und 260 Katzen
2022 – ca. 379 Tiere (Hunde und Katzen)
2023 – ca. 375 Tiere (Hunde und Katzen)
2024 – stand April 63 Hunde und 86 Katzen


Wir fangen klein an, aber wir träumen groß!
`;

let boldAktuelles = [`Kastrationen retten Leben!`];

document.getElementById("formatted-aktuelles").innerHTML = formatText(
  aktuelles,
  boldAktuelles
);

let ecosal = `
Das Public Shelter Ecosal in Galati


Ein ganz wichtiger Punkt, mit dem die Geschichte des Vereins beginnt!

Es ist das Bestreben und der große Herzenswunsch, die Lebensbedingungen der Hunde im städtischen Shelter Ecosal zu verbessern. Das staatliche Shelter verwahrt rund 1000 Hunde. Der Großteil dieser Hunde wird dieses Shelter niemals lebend verlassen.


Die vielen Hunde leben zusammengepfercht auf engem Raum, Tag ein, Tag aus dieselben Wände, Gerüche, Langeweile… Man kann und möchte sich so ein trostloses Leben gar nicht vorstellen.


Zu Beginn war das Shelter permanent überbelegt, trotzdem brachten die Hundefänger täglich neue Hunde. Die Innenzwinger hatten keinen Zugang ins Freie, sie saßen in der Mini-Zelle fest, eng gestapelt mit anderen Leidensgenossen und das ohne frische Luft und ohne Sonnenlicht. Das Futter für die Hunde bestand vor allem aus Knochen von Schlachtabfällen. Fielen die Lieferungen aus, gab es auch tagelang nichts zu fressen. Das hat natürlich zu Hunger und somit zu Streit und Beißvorfällen unter den Hunden geführt. Es gab keine Hütten und keine Dächer - die Tiere waren im Sommer der gnadenlosen Hitze und im Winter der bitteren Kälte ausgesetzt. Teilweise waren die Hunde am Boden festgefroren oder erlagen der Hitze.


Wir konnten das nicht länger mit ansehen. Seit 2014 organisieren wir unterschiedliche Projekte zur Verbesserung der Lebensbedingungen der Hunde im Shelter. Leider ist das Shelter für viele Endstation, deshalb wollen wir ihr Leben dort zumindest erträglicher machen. 

Seit längerem haben alle Innenzwinger zumindest einen kleinen Außenbereich und Kunststoffpaletten als Liegeplatz. Alle Außenzwinger verfügen über Dächer und stabile Hundehütten, die den Hunden im Sommer einen Schutz vor der Sonne und der enormen Hitze und im Winter gegen den hohen Schnee und die bittere Kälte bieten. Die Hundehütten werden jedes Jahr vor dem Wintereinbruch kontrolliert und bei Bedarf werden die kaputten Hütten ausgetauscht. Zusätzliche werden die Hütten mit Stroh gefüllt.


Manchmal stehen auch kleinere Projekte an, wie beispielsweise der Kauf von großen Wannen, damit sich die Hunde in der brütenden Hitze des Sommers etwas abkühlen können.


Zudem kümmern wir uns um Futterlieferungen. Dies soll helfen, die Mägen der Hunde zu füllen, vor allem auch den Älteren und Kleinsten unter ihnen. Eine Tonne Futter für ausgewachsene Hunde kostet ca. 700 €. Bei ca. 1000 Hunden und ca. 400 g Futter pro Tag reicht eine Tonne gerade mal für zwei bis drei Tage. Das Welpenfutter ist um einiges teurer, da kostet die Tonne das Doppelte, also sprich 1.400€. Die Schlachtabfälle, die gelegentlich geliefert werden, werden zusätzlich verfüttert. Außerdem unterstützt ein weiterer Verein bei den Futterlieferungen – allein könnte wir das gar nicht stemmen. 


Wir sind im Shelter nur als Besucher geduldet, dementsprechend können wir nur begrenzt handeln. Allerdings haben wir, zum Glück, einen Helfer vor Ort, der uns für einen kleinen Lohn beim Vorhaben im Shelter unterstützt. Er hilft bei der Fütterung, macht Fotos und Videos von den Hunden, hält Ausschau nach verletzten Hunden und organisiert alles, was wir benötigen, um ein Hund aus dem Shelter zu nehmen.


Auch wenn es schwer ist, dieses Elend täglich mitzuerleben, setzten wir uns weiterhin für eine bessere und lebenswertere Zukunft dieser Hunde ein!


Wenn es unsere Kapazitäten erlauben, holen wir immer wieder Hunde aus dem Shelter in unser kleines, privates Tierheim „Casa Mica“ oder in das städtische Tierheim in Sendreni raus. Dort haben die Hunde die Chance, gesehen und in ein liebevolles Zuhause vermittelt zu werden.
`;

document.getElementById("formatted-ecosal").innerHTML = formatText(ecosal);

let partnervereine = `
Partnervereine

Wir selbst als Verein vermitteln keine Hunde, sondern arbeiten mit wirklich vertrauensvolle und seriöse Partnervereinen zusammen, die für unsere Hunde, ein liebevolles zuhause suchen.

Wir erstellen Alben mit Bildern und Videos, die wir von den Tierpflegerinnen geschickt bekommen, sowie einer Beschreibung für jeden einzelnen Hund. Gerade unsere Rumänienreisen helfen uns sehr, die Hunde noch besser einzuschätzen und bei der Suche nach den passenden Menschen helfen zu können. Es ist außerdem jedes Mal eine große Freude, unsere ganzen Schützlinge persönlich zu treffen.


Ein riesengroßes und herzliches Dankeschön für die großartige Zusammenarbeit!
Nur dank euch haben die Hunde die Chance, gesehen zu werden und Rumänien für ein besseres und hundewürdiges Leben verlassen zu können.


Dieser Teil unserer Arbeit ist besonders wichtig für uns, denn es gibt uns immer wieder Energie und Motivation, um weiterzumachen. Uns geht das Herz auf, wenn wir Bilder, Videos und Nachrichten von unseren Partnervereinen bekommen, wie die Hunde jetzt leben dürfen.


Denn wir kennen ja zumindest einen Teil ihrer Geschichte. Sie kommen von der Straße und/oder wurden von Hundefängern in ein Tierheim gebracht. Doch das ist nicht das Leben, das sie verdienen…


Und auch wenn es ein Tropfen auf dem heißen Stein ist, und einen Hund zu retten vielleicht nicht die Welt verändert.  Aber für diesen einen Hund ändert sich die Welt!
`;

document.getElementById("formatted-partnervereine").innerHTML =
  formatText(partnervereine);

let kettenlos = `
Kettenlos e.V.
Website: http://www.kettenlos.org/
Facebook: Kettenlos e.V.
Instagram: e.v.kettenlos_2013
`;

document.getElementById("formatted-kettenlos").innerHTML =
  formatText(kettenlos);

let villaHundebunt = `
Villa Hundebunt e.V. 
Website: https://www.villa-hundebunt.eu/
Facebook: Villa Hundebunt e.V. 
Instagram: villa.hundebunt
`;

document.getElementById("formatted-villaHundebunt").innerHTML =
  formatText(villaHundebunt);

let tiereGebenLiebe = `
Tiere geben Liebe e.V.
Website: http://www.tieregebenliebe.de/
Facebook: Tiere geben Liebe e.V. 
Instagram: tieregebenliebe
`;

document.getElementById("formatted-tiereGebenLiebe").innerHTML =
  formatText(tiereGebenLiebe);

let tierheimSpaichingen = `
Tierheim Spaichingen
Website: https://www.menschen-fuer-tiere-spaichingen.de/
Facebook: Tierheim Spaichingen 
Instagram: tierheimspaichingen
`;

document.getElementById("formatted-tierheimSpaichingen").innerHTML =
  formatText(tierheimSpaichingen);

let meli = `
Melanie Weinmann – Vermittlungshunde
Facebook: Melanie Weinmann - Vermittlungshunde
`;

document.getElementById("formatted-meli").innerHTML = formatText(meli);

let sendreni = `
Das städtische Shelter in Sendreni


Im Zuge unserer Rumänienreisen lernten wir bei diversen Kastrationskampagnen in Sendreni engagierte Tierschützerinnen kennen. Daraus entwickelten sich eine enge Zusammenarbeit und Freundschaft. Eine von ihnen macht die ganze Organisation des Shelters in Sendreni und packt auch aktiv mit an. 

Wir wollten ihnen und den Hunden dort helfen. Seit Jahren unterstützen wir das Shelter bereits bei der Vermittlung der Hunde und seit 2024 auf finanziell.

Als ehrenamtlicher Verein sind wir auch hierbei auf die finanzielle Unterstützung von Spendern und Paten angewiesen.


Da hier keine Löhne oder Miete bezahlt werden müssen, beträgt die Patenschaft für Hunde in Sendreni 25 € pro Monat und gilt so lange, bis der Hund Rumänien verlassen darf. Der Pate darf „seinen“ Hund taufen und wir halten ihn immer wieder mittels Bilder und/oder einem Video auf dem Laufenden.


In diesem Shelter befinden sich ca. 200 Hunde. Mit den Patengeldern und Spenden kaufen wir beispielsweise Welpenfutter für die Kleinsten, kümmern uns um Anti-Parasitika zur Vorbeugung diverser Krankheiten und um Medikamente zur Behandlung der Herzwurm-positiven Hunde. 


Herzwürmer können unbehandelt gefährlich werden, können jedoch (vor allem in den Anfangsstadien) gut behandelt werden. Deshalb ist uns das ein großes Anliegen, damit auch diese Hunde gesund alt werden können und eine bessere Chance auf eine Vermittlung haben. 


Außerdem planen wir aktuell den Bau von ein paar wenigen Zwingern, damit wir bessere Möglichkeiten haben, auch etwas größere Hunde aus dem städtischen Shelter Ecosal rauszuholen und für die Vermittlung vorzubereiten. Leider ist uns das aktuell kaum möglich, da das Shelter selbst immer voll besetzt ist.


Es warten sooo viele tolle, freundliche Hunde auf ihre Chance und ein liebevolles Zuhause… Deshalb: adopt don’t shop!!


Falls auch du unser Tierheim und unsere Hunde finanziell unterstützen möchtest, dann melde dich bei uns! Wir sind immer froh um jeden Paten!

`;

document.getElementById("formatted-sendreni").innerHTML = formatText(sendreni);

let casaMica = `
Bianca ist eine Volontärin und angehende Tierärztin, die wir von Anfang an kennen. Gemeinsam haben wir bereits viele erfolgreiche Projekte umgesetzt.


Ihr Onkel Sandu, ihre Tante Gabi und zwei ihrer Cousins wohnen in der Peripherie auf dem Land. Gabi und Bianca haben in der Vergangenheit immer wieder verwaiste Welpen und erwachsene, kleine Hunde für uns aufgenommen.


Mit der Zeit wurden es immer mehr Tiere. Doch die Familie meistert die Aufgaben mit viel Herzblut, Liebe zum Detail und großem Sachverstand. Und so fanden wir uns eines Tages vor einer Baustelle wieder: einem komplett gemauerten Gebäude, das in ihrem Garten errichtet wurde. So entstand unser Casa Mica.


Die Halle mit Innen- und Außenbereich wurde ursprünglich in vier großzügige Zwinger unterteilt, später kam ein fünfter dazu. Die Hunde haben täglich Freigang und dürfen sich im Freilauf samt Spielplatz auf rund 300 m² so richtig austoben. Das Casa Mica liegt idyllisch am Fuß einer Hügelkette.


Das Tierheim bietet Platz für etwa 15 kleine Hunde. Ursprünglich war es für 20 Hunde geplant, doch um den Tieren mehr Raum zu geben, haben wir die Zahl bewusst auf 15 reduziert.


Alle Familienmitglieder sind große Tierliebhaber und helfen gemeinsam bei den Arbeiten im Shelter. So lernen unsere Hunde den Umgang mit unterschiedlichen Menschen.


Wir lieben unser Casa Mica – es ist eine kleine Oase für Mensch und Tier!


Patenschaften:
Das Casa Mica wird durch Patenschaften finanziert. Eine Patenschaft beträgt 40 Euro monatlich und besteht, bis der Hund ausreisen darf. Als Pate kannst du „deinen“ Hund taufen und wirst regelmäßig mit Fotos und Videos auf dem Laufenden gehalten.


Wenn auch du unser Tierheim und unsere Hunde finanziell unterstützen möchtest, melde dich bei uns – wir freuen uns über jeden neuen Paten!
`;

let boldCasaMica = [`Patenschaften:`]

document.getElementById("formatted-casaMica").innerHTML = formatText(
    casaMica,
    boldCasaMica
);