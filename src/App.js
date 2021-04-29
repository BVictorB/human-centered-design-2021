import { useState } from 'react'
import './App.css'
import { Article, Voice } from 'components'

const App = () => {
  const articles = [
    {
      title: 'Schipper denkt dat Pier in Scheveningen haven is en ramt palen',
      subtitle: 'Een flink zeiljacht is donderdagochtend vastgelopen tussen de palen van de Pier in Scheveningen. De schipper zag de verlichte Pier aan voor een haven en ramde het object.',
      text: 'De politie waarschuwde de Koninklijke Reddingsmaatschappij. Vrijwilligers van de KNRM haalden de schipper vervolgens van boord. De man liep geen verwondingen op. De schipper bleek een Duitse man te zijn die alleen aan het varen was. Het schip is flink beschadigd. Ook de Pier zelf raakte beschadigd, bevestigt de KNRM een bericht van Omroep West. Er is onder meer een stuk hek omgevallen. Het is niet duidelijk wie voor de kosten opdraait. De eigenaar moet er zelf voor zorgen dat zijn jacht, dat nog onder de Pier ligt, wordt geborgen.'
    },
    {
      title: 'Voorlopig geen fans welkom in Eredivisie, kampioensduel Ajax in lege ArenA',
      subtitle: 'Het demissionaire kabinet heeft donderdag besloten dat de Eredivisie-wedstrijden van komend weekend zonder publiek gespeeld moeten worden. De KNVB hoopte juist dat er net als vorige week weer supporters aanwezig konden zijn in de stadions, maar de landelijke pilot met toegangstests wordt niet verlengd.',
      text: 'Het besluit betekent onder meer dat Ajax zondag de kampioenwedstrijd tegen FC Emmen (aftrap 14.30 uur) zonder de aanwezigheid van supporters moet afwerken. De Amsterdammers hebben aan één punt genoeg om voor de 35e keer in de historie landskampioen te worden. In de vorige speelronde was (onder voorwaarden) voor het eerst sinds september 2020 publiek aanwezig bij de wedstrijden in de Eredivisie. De KNVB was enthousiast over het verloop en vroeg het kabinet toestemming om de pilotfase te verlengen, aangezien de benodigde wijziging van de Wet publieke gezondheid langer op zich zou laten wachten. Het kabinet besloot echter anders. In de Keuken Kampioen Divisie wordt alleen vrijdag 30 april in beperkte mate publiek ontvangen, maar dat stond al zo gepland. De andere wedstrijden van deze speelronde in de Eerste Divisie - twee van de tien - moeten achter gesloten deuren worden afgewerkt, omdat ze voor 2 en 3 mei op het programma staan. Aangezien het lang duurde voordat het kabinet met uitsluitsel kwam, besloten sommige clubs om deze week al tickets onder voorbehoud aan supporters te verkopen. Ajax meldde aan het einde van de ochtend nog hetzelfde te willen gaan doen. Ook de KNVB bleef de hele week hoop houden op een verlenging van de pilot. De voetbalbond besloot zelfs Heracles Almelo-VVV-Venlo van vrijdag naar zaterdag te verplaatsen zodat de Almeloërs eventueel supporters zouden kunnen verwelkomen, maar dat bleek tevergeefs. "Dit besluit is zeer teleurstellend. Alles is vorig weekend prima verlopen, net als in augustus en september. Maar omdat de wetswijziging langer duurt vanwege redenen waar wij geen invloed op hebben, is er geen vervolg of continuïteit", zeggen de KNVB, de Eredivisie CV en de Eerste Divisie in een gezamenlijke verklaring. In de Eredivisie en de Keuken Kampioen Divisie staan er dit seizoen nog vier reguliere speelrondes op het programma. Daarna worden de play-offs voor een plek in de voorronde van de Conference League en de wedstrijden om promotie/degradatie gespeeld. "Hopelijk komt het kabinet snel terug op dit besluit of wordt de wetswijziging alsnog met spoed doorgevoerd. We blijven in elk geval met het kabinet in gesprek om gezamenlijk naar een betere oplossing te zoeken", aldus de KNVB.'
    },
    {
      title: 'Duitsland moet van rechter klimaatwet aanscherpen voor volgende generaties',
      subtitle: 'De Duitse regering krijgt van de hoogste rechtbank in het land tot 31 december 2022 de tijd om de Duitse klimaatwet uit 2019 aan te scherpen. De periode na 2030 is volgens de rechters onvoldoende uitgewerkt. Vooral jonge mensen zouden daar de dupe van zijn. Er is niet bekend welke sanctie staat op het niet halen van de door de rechters gestelde deadline.',
      text: 'Van de rechtbank moet Duitsland preciezer uitleggen hoe het de klimaatdoelstellingen gaat halen, terwijl het ook rekening houdt met de periode na 2030. De regering lijkt de rechterlijke uitspraak in de eerste reacties te verwelkomen.In de Duitse klimaatwet is onder meer vastgelegd dat voor 2030 de uitstoot van broeikasgassen met zeker 55 procent moet zijn teruggedrongen ten opzichte van 1990. Volgens de federale rechtbank in Karlsruhe schendt de wet niet de rechten van toekomstige generaties, maar is wel duidelijk dat deze niet voldoende voorziet in een verdere vermindering van de uitstoot ná 2030.Volgens de rechtbank is de klimaatwet daarmee in strijd met artikel 20a van de Duitse grondwet. In dat artikel staat dat "de staat ook voor komende generaties de verantwoordelijkheid heeft het milieu en de dieren door middel van wetgeving en rechtspraak te beschermen".Duitsland streeft ernaar in 2050 vrijwel geen broeikasgassen meer uit te stoten. Om dit doel te behalen, moet de uitstoot van broeikasgassen na 2030 met "grote snelheid en urgentie" worden verminderd. De lasten moeten beter worden verspreid, omdat de huidige wet "de hoge last van emissiereductie onherroepelijk uitstelt tot na 2030".Volgens de rechtbank zijn vooral jonge mensen nu de dupe van de wetDoor de tekortkomingen van de wet worden de vrijheden geschonden van de veelal jonge mensen die de zaak voor de rechtbank hebben gebracht, stelt de rechtbank. Dat zijn onder meer milieuorganisatie BUND en de klimaatbeweging Fridays for Future. Zij vinden dat de federale regering niet genoeg doet om de uitstoot van broeikasgassen te verminderen en de opwarming van de aarde te beperken.De 22-jarige Sophie Backsen, een van de eisers, laat weten dolblij te zijn met het besluit van de rechtbank. Als dochter van een boerenfamilie op het Duitse Waddeneiland Pellworm vreest ze dat de stijgende zeespiegel het laaggelegen eiland opslokt en haar zonder erfenis achterlaat. "Effectieve klimaatbescherming moet nu worden geïmplementeerd en niet over tien jaar als het te laat is", zegt ze over het klimaatbeleid.De uitspraak wordt gezien als een tegenslag voor bondskanselier Angela Merkel. Haar partij de CDU staat in de peilingen voor de verkiezingen in september achter op de Duitse milieupartij de Groenen.'
    }
  ]
  const [formattedArticles, setFormattedArticles] = useState(articles)

  return (
    <div className="App">
      <Voice articles={articles} setFormattedArticles={setFormattedArticles} />
      <div className='articles'>
        {formattedArticles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </div>
  )
}

export default App
