let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const linkOverrides = {
  "https://www.facebook.com/metanoiatiernothilfe": `<img src="images/Facebook_Logo_Primary.png" alt="Facebook" style="width:24px; height:24px;">`,
  "https://www.instagram.com/metanoia_tiernothilfe?igsh=ZHptdTA5MnZ5NWJj": `<img src="images/Instagram_Glyph_Gradient.png" alt="Instagram" style="width:24px; height:24px;">`,
};

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add("active");
};

setInterval(showNextSlide, 5000);

function makeLinksClickable(text, overrides = {}) {
  return text.replace(/(\bhttps?:\/\/[^\s]+)/g, function (match) {
    const displayText = overrides[match] || match; // Verwende Override oder die URL selbst
    return `<a href="${match}" target="_blank">${displayText}</a>`; // Erzeuge den Link
  });
};

function makePassagesBold(text, boldPassages) {
  boldPassages.forEach((passage) => {
    const regex = new RegExp(`(${passage})`, "g");
    text = text.replace(regex, "<strong>$1</strong>");
  });
  return text;
};

function formatText(text, boldPassages = []) {
  if (boldPassages.length > 0) {
    text = makePassagesBold(text, boldPassages);
  }
  text = text
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br>");
  return "<p>" + text + "</p>";
};

function safeSetInnerHTML(elementId, content, boldPassages = []) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = formatText(content, boldPassages);
  }
};

document.querySelectorAll('.dropdown-content .dropdown').forEach((dropdown) => {
  dropdown.addEventListener('mouseenter', function () {
      const submenu = this.querySelector('.dropdown-content');
      const rect = submenu.getBoundingClientRect();
      if (rect.right > window.innerWidth) {
          submenu.style.left = 'auto';
          submenu.style.right = '100%'; // Menü wird links vom Eltern-Element angezeigt
      }
  });
});

let landingPage = `
Liebe Besucherin, lieber Besucher,

herzlichen Dank für dein Interesse an der Arbeit von Metanoia Tiernothilfe! Wir setzen uns mit Leidenschaft und Hingabe für die Straßenhunde Rumäniens sowie die Hunde im öffentlichen Shelter Ecosal Galati ein. Zudem betreiben wir ein kleines Tierheim, unser Casa Mica, und unterstützen zwei weitere Einrichtungen: das Shelter in Sendreni und das private Tierheim Help Labus.
Dank der Zusammenarbeit mit seriösen Partnervereinen haben viele unserer geretteten Hunde die Chance, ein liebevolles Zuhause zu finden. 


Unser Hauptaugenmerk liegt auf der Verbesserung der Lebensbedingungen der Tiere vor Ort. Mit baulichen Maßnahmen, Futterlieferungen und medizinischer Hilfe wollen wir den Hunden ein besseres Leben ermöglichen. Ein wichtiger Bestandteil unserer Arbeit ist die Durchführung von Kastrationen – ein nachhaltiger Ansatz, der das Problem der Straßentiere an der Wurzel packt und so das Leid zukünftiger Generationen verhindert.


Auf den folgenden Seiten kannst du mehr über unsere Arbeit erfahren. 
Solltest du noch Fragen haben oder mehr wissen wollen, zögere nicht, uns zu kontaktieren.


Vielen Dank, dass du uns auf unserem Weg begleitest, das Leben der Tiere zu verbessern!


Möchtest du immer auf dem Laufenden bleiben?
Dann folge uns auf Facebook oder Instagram für regelmäßige Updates zu unserer Tierschutzarbeit.


Find us on:  https://www.facebook.com/metanoiatiernothilfe https://www.instagram.com/metanoia_tiernothilfe?igsh=ZHptdTA5MnZ5NWJj


`
;

landingPage = makeLinksClickable(landingPage, linkOverrides);
safeSetInnerHTML("formatted-landingPage", landingPage);



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

safeSetInnerHTML("formatted-ecosal", ecosal);

let partnervereine = `

`
;

safeSetInnerHTML("formatted-partnervereine", partnervereine);

let kettenlos = `
Kettenlos e.V.
Website: http://www.kettenlos.org/
Facebook: Kettenlos e.V.
Instagram: e.v.kettenlos_2013
`
;

safeSetInnerHTML("formatted-kettenlos", kettenlos);

let villaHundebunt = `
Villa Hundebunt e.V. 
Website: https://www.villa-hundebunt.eu/
Facebook: Villa Hundebunt e.V. 
Instagram: villa.hundebunt
`
;

safeSetInnerHTML("formatted-villaHundebunt", villaHundebunt);

let tiereGebenLiebe = `
Tiere geben Liebe e.V.
Website: http://www.tieregebenliebe.de/
Facebook: Tiere geben Liebe e.V. 
Instagram: tieregebenliebe
`;

safeSetInnerHTML("formatted-tiereGebenLiebe", tiereGebenLiebe);

let tierheimSpaichingen = `
Tierheim Spaichingen
Website: https://www.menschen-fuer-tiere-spaichingen.de/
Facebook: Tierheim Spaichingen 
Instagram: tierheimspaichingen
`
;

safeSetInnerHTML("formatted-tierheimSpaichingen", tierheimSpaichingen);

let meli = `
Melanie Weinmann – Vermittlungshunde
Facebook: Melanie Weinmann - Vermittlungshunde
`
;

safeSetInnerHTML("formatted-meli", meli);

let sendreni = `
Im Zuge unserer Rumänienreisen lernten wir bei diversen Kastrationskampagnen in Sendreni engagierte Tierschützerinnen kennen. Daraus entwickelten sich eine enge Zusammenarbeit und Freundschaft. Eine von ihnen macht die ganze Organisation des Shelters in Sendreni und packt auch aktiv mit an.  
Wir wollten ihnen und den Hunden dort helfen. Seit Jahren unterstützen wir das Shelter bereits bei der Vermittlung der Hunde und seit 2024 auch finanziell.  
Als ehrenamtlicher Verein sind wir auch hierbei auf die finanzielle Unterstützung von Spendern und Paten angewiesen.  

Da hier keine Löhne oder Miete bezahlt werden müssen, beträgt die Patenschaft für Hunde in Sendreni 25 € pro Monat und gilt so lange, bis der Hund Rumänien verlassen darf. Der Pate darf „seinen“ Hund taufen und wir halten ihn immer wieder mittels Bilder und/oder einem Video auf dem Laufenden.  

In diesem Shelter befinden sich ca. 200 Hunde. Mit den Patengeldern und Spenden kaufen wir beispielsweise Welpenfutter für die Kleinsten, kümmern uns um Anti-Parasitika zur Vorbeugung diverser Krankheiten und um Medikamente zur Behandlung der Herzwurm-positiven Hunde.  
Herzwürmer können unbehandelt gefährlich werden, können jedoch (vor allem in den Anfangsstadien) gut behandelt werden. Deshalb ist uns das ein großes Anliegen, damit auch diese Hunde gesund alt werden können und eine bessere Chance auf eine Vermittlung haben.  

Außerdem planen wir aktuell den Bau von ein paar wenigen Zwingern, damit wir bessere Möglichkeiten haben, auch etwas größere Hunde aus dem städtischen Shelter Ecosal rauszuholen und für die Vermittlung vorzubereiten. Leider ist uns das aktuell kaum möglich, da das Shelter selbst immer voll besetzt ist.  

Es warten sooo viele tolle, freundliche Hunde auf ihre Chance und ein liebevolles Zuhause… Deshalb: adopt don't shop!!  
Falls auch du unser Tierheim und unsere Hunde finanziell unterstützen möchtest, dann melde dich bei uns! Wir sind immer froh um jeden Paten!
`
;

safeSetInnerHTML("formatted-sendreni", sendreni);

let casaMica = `
Bianca ist eine Volontärin und angehende Tierärztin, die wir von Anfang an kennen. Gemeinsam haben wir bereits viele erfolgreiche Projekte umgesetzt.


Ihr Onkel Sandu, ihre Tante Gabi und zwei ihrer Cousins wohnen in der Peripherie auf dem Land. Gabi und Bianca haben in der Vergangenheit immer wieder verwaiste Welpen und erwachsene, kleine Hunde für uns aufgenommen.


Mit der Zeit wurden es immer mehr Tiere. Doch die Familie meistert die Aufgaben mit viel Herzblut, Liebe zum Detail und großem Sachverstand. Und so fanden wir uns eines Tages vor einer Baustelle wieder: einem komplett gemauerten Gebäude, das in ihrem Garten errichtet wurde. So entstand unser Casa Mica.


Die Halle mit Innen - und Außenbereich wurde ursprünglich in vier großzügige Zwinger unterteilt, später kam ein fünfter dazu. Die Hunde haben täglich Freigang und dürfen sich im Freilauf samt Spielplatz auf rund 300 m² so richtig austoben. Das Casa Mica liegt idyllisch am Fuß einer Hügelkette.


Das Tierheim bietet Platz für etwa 15 kleine Hunde. Ursprünglich war es für 20 Hunde geplant, doch um den Tieren mehr Raum zu geben, haben wir die Zahl bewusst auf 15 reduziert.


Alle Familienmitglieder sind große Tierliebhaber und helfen gemeinsam bei den Arbeiten im Shelter. So lernen unsere Hunde den Umgang mit unterschiedlichen Menschen.


Wir lieben unser Casa Mica – es ist eine kleine Oase für Mensch und Tier!


Patenschaften:
Das Casa Mica wird durch Patenschaften finanziert. Eine Patenschaft beträgt 40 Euro monatlich und besteht, bis der Hund ausreisen darf. Als Pate kannst du „deinen“ Hund taufen und wirst regelmäßig mit Fotos und Videos auf dem Laufenden gehalten.


Wenn auch du unser Tierheim und unsere Hunde finanziell unterstützen möchtest, melde dich bei uns – wir freuen uns über jeden neuen Paten!
`
;

safeSetInnerHTML("formatted-casaMica", casaMica);

let ueberUns = `
Nach 9 Jahren Metanoia Schweiz, gibt es nun Metanoia Österreich. Sara, die im September ihr erstes Kind bekommen hat, hat sich schweren Herzens dazu entschieden, die Leitung und den Verein abzugeben. Die Leitung haben Laura, Meli und Anna übernommen, die auch den neuen Verein in Österreich gegründet haben.

Unsere Arbeit und Vision für die Tiere in Galati bleibt unverändert. Wir drei sind langjährige, engagierte Teammitglieder, die sich weiterhin für die Tiere in und um Galati einsetzen.
`

safeSetInnerHTML("formatted-ueberUns", ueberUns);

let laura = `
Tierschutz ist seit 2014 ein wesentlicher Bestandteil meines Lebens. Der Wendepunkt kam mit der Rettung der trächtigen Staffordshire Terrier-Hündin Stella aus einer spanischen Tötungsstation. Die Aufzucht ihrer neun Welpen war nicht nur eine herausfordernde, sondern auch eine zutiefst prägende Erfahrung, die meine Leidenschaft für den Tierschutz entfacht hat.

2016 gründete ich den Verein „Engel für Hunde“, den ich 2019 aufgrund neuer beruflicher Herausforderungen wieder auflöste. Ab diesem Zeitpunkt widmete ich meine Zeit größtenteils der Metanoia-Tiernothilfe. Dabei konnte ich wertvolle Erfahrungen sammeln – insbesondere durch zahlreiche Reisen nach Rumänien, wo ich direkt vor Ort das Leid der Tiere und die Notwendigkeit der Hilfe erkannte. Zusätzlich war ich für einen Partnerverein als Pflegestelle tätig.
2024 übernahm ich gemeinsam mit Anna und Meli die Leitung der Metanoia Tiernothilfe. Für mich ist Tierschutz mehr als nur eine Aufgabe – es ist meine wahre Berufung.
`
;

safeSetInnerHTML("formatted-laura", laura);


let melanie = `
Den Grundstein für meine Liebe zu den Streunern und den festen Willen mich fortan für sie einsetzen zu wollen legte 2013 mein erster eigener Hund Nismo, einem schwer misshandelten Straßenhund aus Rumänien. Trotz seiner schrecklichen Erfahrungen schenkte er mir bedingungslose Liebe und Vertrauen. 
2014, nach der Geburt meiner ersten Tochter, wurde ich auf das Elend der Hunde im Public Shelter Ecosal Galati aufmerksam und wollte helfen. Bereits seit 2015 engagiere ich mich bei der Metanoia Tiernothilfe, um den Hunden vor Ort das Leben zu erleichtern. 
Die vielen Eindrücke einer jeden Rumänienreise und die einzelnen Schicksale der Hunde motivieren mich, immer weiter zu kämpfen. 
2019 erlangte ich die Sachkunde nach §11 Tierschutzgesetz. 
So habe ich seither die Möglichkeit, zusätzlich zu unserer Arbeit vor Ort, Hunde zu mir holen und in liebevolle Hände zu vermitteln.
Es sind die kleinen Fortschritte, die mir immer wieder zeigen, wie wichtig unsere Arbeit ist und wie sehr sie sich lohnt.
`;

safeSetInnerHTML("formatted-melanie", melanie);

let anna = `
Seit 2021 setze ich mich aktiv im Tierschutz ein, indem ich einen großen Teil meiner Zeit und Energie in die Hilfe für Tiere investiere. Meine ersten Erfahrungen sammelte ich in einem Vermittlungsverein, bevor ich 2024 in den Vorstand der Metanoia Tiernothilfe eintrat, um mein Engagement für Tiere weiter zu intensivieren.
Eine Reise nach Rumänien im Jahr 2022 prägte mich tief. Ich konnte sowohl das Public Shelter Ecosal als auch unser Casa Mica und das Shelter in Sendreni besuchen. Dabei konnte ich unsere Hunde endlich einmal live erleben und auch bei einer Kastrationskampagne tatkräftig mithelfen. Diese Eindrücke stärkten meinen Wunsch, den Hunden vor Ort zu helfen. 
Denn jede Verbesserung, die wir für die Hunde erreichen und jedes liebevolle Zuhause, das wir für einen unserer Schützlinge finden, macht unsere und vor allem ihre Welt besser.
`;

safeSetInnerHTML("formatted-anna", anna);

let labus = `
In der rumänischen Stadt Galati befindet sich das Tierheim Help Labus. Corina G. gründete den Tierschutzverein und baute ein eigenes Shelter, um das Leben streunender Tiere zu retten und aktiv gegen das Leid tausender Hunde und Katzen zu kämpfen. Es landen täglich viele Tiere, die von der Straße und aus dem Public Shelter gerettet werden, im Tierheim.
Wir haben die Möglichkeit eine Handvoll großer Hunde aus dem Public Shelter Ecosal dort unterzubringen. Ana, eine sehr engagierte und motivierte Tierschützerin, betreut unsere Hunde liebevoll und gewissenhaft bis zur deren Ausreise.
Immer wenn wir einen Notfall beispielsweise im Public Shelter Ecosal entdecken, unterstützen und helfen sie bei der Unterbringung und Organisation rund um die Erstversorgung.

`

safeSetInnerHTML("formatted-labus", labus);

let privateSanctuaries = `
Dank unserer langjährigen Tierschutzarbeit vor Ort haben wir uns bereits ein Netzwerk aufgebaut und weitere tolle, tierliebende Menschen kennen gelernt, die uns als private Pflegestellen bis zur Ausreise der Hunde und bei diversen anfallenden Aufgaben unterstützen. 

`

safeSetInnerHTML("formatted-privateSanctuaries", privateSanctuaries);

let spayAndNeuter = `
Und weil wir Tiere lieben, müssen wir die Anzahl der Welpen vermindern! JETZT!
Viele tausend Hunde und Katzen werden jedes Jahr in Galati in eine Welt geboren, in welcher sie nicht erwünscht sind und sie kein würdiges Leben führen dürfen! Sie werden in ein leidvolles Leben als Straßentier hineingeboren. Jeden Tag ein Kampf ums Überleben, begleitet von ständiger Angst und dem Gefühl verfolgt zu werden, tägliches Herumlaufen mit knurrendem Magen, auf der Suche nach Futter, Wasser und einem sicheren Unterschlupf. Nur wenn wir das Problem an der Wurzel packen, können wir den Hunden auf den Straßen Galatis eine bessere Zukunft bieten und verhindern somit, dass sie eines Tages im Public Shelter Ecosal landen!


Wir kastrieren Tiere von mittellosen Besitzern, Straßentiere oder die sogenannten Industriehunde (Hunde, welche auf Industriegeländen leben und oft auch von den ansässigen Firmen versorgt werden). Der Durchschnittsbürger in Rumänien kann sich keine Kastration leisten – das Ergebnis sehen wir in hunderttausendfacher Ausführung auf den Straßen und in den Sheltern! Jedes Jahr werden tausende Jungtiere ausgesetzt, viele verlieren den harten Kampf bereits auf den Straßen und verenden verletzt oder krank qualvoll. Bleibt ihnen dieses Schicksal erspart, werden sie von den Hundefängern eingefangen und landen im Public Shelter der Stadt – ein lebensfeindlicher und unwürdiger Ort.


Unsere Kastrationskampagne findet fortlaufend statt. Das heißt, sobald wir über genügend finanzielle Mittel verfügen, werden Tiere (Hunde und Katzen) kastriert. Eine Kastration kostet für einen Hund im Durchschnitt 30 EUR und für eine Katze 20 EUR. Wir arbeiten mit zwei sehr engagierten, jungen Tierärzten zusammen. Bei den Kastrationen werden die Tiere zusätzlich gegen Parasiten behandelt, auch Notfälle werden medizinisch versorgt.


Wir sind um jede Unterstützung froh, sei sie noch so klein!


👉🏻 Kastrationen packen die Probleme an der Wurzel und verhindern tausendfaches Tierleid!  
👉🏻 Kastrationen retten Leben!  

Spenden sind möglich ⬇️  
PayPal: info@metanoia-tiernothilfe.com (Bitte als „Freunde" senden, um Gebühren zu sparen)  
Banküberweisung:  
Metanoia Tiernothilfe  
IBAN: AT25 2060 1034 0016 0283  
BIC: SPBRAT2BXXX  


WICHTIG! Bitte beim Verwendungszweck “Kastrationen“ angeben, damit wir deine Spende entsprechend zuordnen können.  
Ohne Angabe eines Verwendungszwecks verwenden wir die Spenden dort, wo sie gerade am dringendsten notwendig sind.


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
2024 – ca. 204 Hunde und 381 Katzen (Stand November)

Wir fangen klein an, aber wir träumen groß!
`
;


safeSetInnerHTML("formatted-spayAndNeuter", spayAndNeuter);

let whatCanYouDo = `
Möchtest du einen Unterschied machen? 
Mit deiner Unterstützung können wir gemeinsam das Leben von Tieren verbessern. Ob durch eine Patenschaft, eine Spende oder dein aktives Engagement – jede Hilfe zählt!

`
;

safeSetInnerHTML("formatted-whatCanYouDo", whatCanYouDo);

let sponsorships = `
Das städtische Shelter in Sendreni unterstützen wir bereits seit Jahren bei der Vermittlung von Hunden und seit 2024 auch finanziell. Da hier keine Löhne oder Miete bezahlt werden muss, beträgt die Patenschaft für Hunde in Sendreni 25 € pro Monat, ebenfalls bis zu ihrer Ausreise. Die Paten dürfen „ihren“ Hund taufen & wir halten sie natürlich up to date.

Die Patenschaft für Hunde, welche im Casa Mica leben, beträgt 40€, da wir hier auch für die Miete, Löhne, Wasser und Strom aufkommen müssen.

Falls auch du unser Tierheim und unsere Hunde finanziell unterstützen möchtest, dann melde dich bei uns! Wir sind immer froh um jeden Paten!

`
;

safeSetInnerHTML("formatted-sponsorships", sponsorships);

let donations = `
Leider ist nicht jeder in der Lage einen Hund zu adoptieren. Aber es gibt andere Wege etwas für die Vierbeiner zu tun:

`
;

safeSetInnerHTML("formatted-donations", donations);

let donations2 = `
Vermerke gerne, wofür du deine Spende einsetzen möchtest, z.B. „Futter Ecosal“, „Kastrationen“ usw.
Wenn kein Verwendungszweck vermerkt wurde, werden wir deine Spende dort einsetzen, wo wir gerade am meisten Bedarf haben. Du darfst dir auf jeden Fall sicher sein, dass dein Geld nur für die Hunde ausgegeben wird.


„Sei du selbst die Veränderung, die du dir wünschst für diese Welt.“
(Mahatma Gandhi)


Sende uns einen Betrag deiner Wahl via Paypal an:
info@metanoia-tiernothilfe.com
(bitte von Freund zu Freund senden, da sonst Gebühren anfallen)


oder via Überweisung auf unser Spendenkonto:
Metanoia Tiernothilfe
IBAN: AT25 2060 1034 0016 0283
BIC: SPBRAT2BXXX


lautend auf:
Metanoia Tiernothilfe
Achstraße 13a
6971 Hard

`
;

let boldPassages = [`Sei du selbst die Veränderung, die du dir wünschst für diese Welt.`, `(Mahatma Gandhi)`
];
let formattedDonations2 = formatText(donations2, boldPassages);

safeSetInnerHTML("formatted-donations2", formattedDonations2);

let tierschutzEuro = `
Vielleicht habt ihr bereits von ihm gehört: dem Tierschutz-Euro.


Was ist das und warum bedeutet er viel für uns?
Die Idee ist, 1 € pro Monat uns als Tierschutzverein zu spenden. 
Für jeden einzelnen ist das nicht viel und ein Euro weniger im Monat fällt in den allermeisten Fällen quasi gar nicht auf…
Wenn jedoch viele Menschen mitmachen, kommt in Summe einiges zusammen.


Diese regelmäßige Summe von vielen Menschen zusammen ermöglicht es uns, besser mit den Spenden kalkulieren und planen zu können.


Stellt euch vor, was wir erreichen könnten, wenn all unsere Follower mitmachen würden?
Dann gäbe es wirklich nichts mehr, das uns aufhalten könnte! Gemeinsam für die Straßentiere!


Wie könnt ihr mitmachen?
Richtet einfach selbst einen Dauerauftrag in der Höhe von 1 € pro Monat ein. 


Die Überweisung geht per PayPal an info@metanoia-tiernothilfe.com
(bitte von Freund zu Freund überweisen, da sonst Gebühren anfallen)


oder auf unser Spendenkonto:
Metanoia Tiernothilfe
IBAN: AT25 2060 1034 0016 0283
BIC: SPBRAT2BXXX


Wie könnt ihr zusätzlich helfen?
Teilt diesen Beitrag gerne, damit so viele Menschen wie möglich mitmachen. 
Gemeinsam können wir so vieles erreichen!
Bitte macht mit – den Tieren zuliebe!

`
;

safeSetInnerHTML("formatted-tierschutzEuro", tierschutzEuro);

let teaming = `
… ist eine weitere, sehr ähnliche Aktion wie der Tierschutz-Euro.
Nach der Anmeldung wird monatlich 1 € auf unser Teaming-Konto überwiesen.
Es ist wirklich nur 1 € pro Monat!


Aktuell dürfen wir 117 Teamer zählen – das sind 117 € pro Monat, die wir für die Tiere einsetzen können. Vielen Dank an dieser Stelle an alle, die bereits mitmachen!
https://www.teaming.net/metanoiatiernothilfe 


Wer sich aber beispielsweise nicht anmelden möchte, kann diesen Euro eben auch ganz unkompliziert selbst als Dauerauftrag einrichten.
Bitte hilf mit, die Welt der Tiere in Rumänien zu verbessern!


`
;

teaming = makeLinksClickable(teaming, linkOverrides);

safeSetInnerHTML("formatted-teaming", teaming);

let getActiveDACH = `
Hast du Lust, ehrenamtlich bei uns mitzuwirken? Wir sind laufend auf der Suche nach kreativen Köpfen, denn mit guten Ideen kann viel bewirkt werden.
`
;

safeSetInnerHTML("formatted-getActiveDACH", getActiveDACH);

let socialMediaSpecialist = ` 
Bist du Social Media Spezialist oder kennst dich sehr gut damit aus?
Hast du Lust und Zeit uns zu unterstützen?
Wir suchen noch jemanden der uns einen Tik-Tok Account erstellt und diesen auch betreut und uns bei den Beiträgen, Storys etc. auf Facebook und Instagramm unterstützt.
`
;

safeSetInnerHTML("formatted-socialMediaSpecialist", socialMediaSpecialist);

let creativeEloquent = `
Du bist kreativ und wortgewandt, dann bist du genau der oder die Richtige, um uns bei den Beschreibungen für die Hunde zu helfen. Infos zu den Hunden erhälts du von uns.
`
;

safeSetInnerHTML("formatted-creativeEloquent", creativeEloquent);

let ideasCharity = `
Hast du Ideen für eine Charity Veranstaltung oder anderweitige Werbeideen? Dann komme gerne auf uns zu! Wir sind um jede Unterstützung dankbar.
`
;

safeSetInnerHTML("formatted-ideasCharity", ideasCharity);

let selfEmployed = `
Hast du eine eigene Firma und die Möglichkeit eine Spenden-Kasse aufzustellen oder möchtest du mit deinem Arbeitgeber darüber sprechen? Dann nur zu, denn jeder noch so kleine Betrag kann Großes bewirken.
`;

safeSetInnerHTML("formatted-selfEmployed", selfEmployed);

let ideasIG = `
…deine Ideen sind sehr willkommen.
`
;

safeSetInnerHTML("formatted-ideasIG", ideasIG);

let getActiveRO = `
Du hast Lust, direkt vor Ort mit anzupacken und etwas für die Hunde zu tun? 
Du willst uns im Tierheim vor Ort tatkräftig unterstützen? 
Du möchtest dich durch deine Freiwilligenarbeit einbringen? 

Dann begleite uns bei einer unserer nächsten Rumänienreisen.
Wir selbst sind mehrmals pro Jahr vor Ort, um unsere Hunde zu besuchen und die Arbeiter vor Ort zu unterstützen. 
Du bist herzlich willkommen.
`
;

safeSetInnerHTML("formatted-getActiveRO", getActiveRO);

let casaMica2 = `
In unserem kleinen Casa Mica leben im Durchschnitt 16 eher kleinere Hunde. Das Tierheim wurde von uns, gemeinsam mit den dortigen Bewohnern und deren Verwandten erbaut. Es ist im hinteren Garten eines Wohnhauses. Auch dort kannst du aktiv mitwirken. Es ist uns immer wichtig, die Hunde, welche zur Vermittlung stehen genauestens zu beobachten, kennenzulernen und etwas einzuschätzen. Deshalb verbringen wir dort gerne Zeit mit den Hunden. Wir lassen sie im Garten frei laufen, spielen mit ihnen, machen Fotos und Videos, schneiden Krallen oder ähnliches und versuchen sie besser kennenzulernen. Je mehr Menschen die Hunde beobachten, umso reger ist der anschließende Austausch und umso genauer die Einschätzung.
`
;

safeSetInnerHTML("formatted-casaMica2", casaMica2);

let PSE = `
Das Public Shelter Ecosal ist ein staatliches Shelter, d.h. Besuche dort sind grundsätzlich nur zu den üblichen Besuchszeiten von Montag bis Freitag, von jeweils 10:00 bis 14:00 gestattet. „Staatlich“ heißt leider auch, dass man dort nicht viel Handlungsspielraum hat. Unser Ecosal-Helfer Cristi unterstützt uns bei verschiedenen Vorhaben und ist unser Kontaktmann zum Chef der Einrichtung. Wir können dir dort zeigen, was wir bereits alles geschaffen haben, und natürlich kannst du dort die Hunde sehen und teilweise auch zu ihnen hinein. Bitte beachte, dass es sich dabei um ein rumänisches Shelter handelt, d.h. du hörst und siehst dort viele Dinge, die ungewohnt, oft aber wirklich schrecklich sind. Schwere Bisswunden, abgemagerte, halbtote oder tote Tiere sind dort des Öfteren anzutreffen. Der Lärm ist schier unerträglich. Mache dich mit diesen Gedanken vertraut, bevor du dich entscheidest, dorthin zu gehen. Es ist nicht einfach und du siehst sicherlich Sachen, die dich lange Zeit verfolgen. Bist du im Stande das zu verkraften? Dann freuen wir uns dich ins Ecosal Shelter zu begleiten und dir vor Ort alles zu zeigen und zu erklären, was du wissen möchtest.
`
;

safeSetInnerHTML("formatted-PSE", PSE);

let helpLabusAndSendreni = `
Wenn du dir ein paar Tage Zeit nehmen kannst und dir richtig die Hände schmutzig machen willst, sind das private Tierheim Help Labus und das städtische Shelter in Sendreni die perfekten Anlaufstellen für dich. Hier gibt es immer viel zu tun! Du kannst z.B. beim Putzen helfen, Hunde striegeln, Katzen und Hunde bespaßen, Fotos und Videos der Hunde machen, die Hunde an der Leine testen und diverse tägliche Aufgaben, die dir zugewiesen werden, erledigen. Natürlich bekommst du auch die Möglichkeit, ausgiebig mit den Hunden zu schmusen und zu spielen. Auch hier gilt: Beides sind rumänische Tierheime. Erwarte nicht etwas zu sehen, das in irgendeiner Weise dem ähnelt, was du aus anderen Ländern kennst. Rumänische Tierheime sind in der Regel überfüllt, knapp an Mitteln und haben einen ganz anderen Standard als z.B. deutsche Tierheime. Mache dich mit dem Gedanken vertraut und versuche zu verstehen, dass dies zwar nicht alles nur schön ist, aber im Angesicht der Umstände das Beste, was die Tierschützer vor Ort bewerkstelligen können. Konstruktive Kritik ist willkommen – aber vergiss nicht, du bist in Rumänien, wo alles etwas anders ist. Das erfordert von dir sicherlich ein Umdenken und den Willen, offen mit dieser etwas anderen Welt umzugehen.
`

safeSetInnerHTML("formatted-helpLabusAndSendreni", helpLabusAndSendreni);