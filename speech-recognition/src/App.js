import { useState } from 'react'
import './App.css'
import Voice from './components/Voice'
import Article from './components/Article'

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
    }
  ]
  const [formattedArticles, setFormattedArticles] = useState(articles)

  return (
    <div className="App">
      <Voice articles={articles} setFormattedArticles={setFormattedArticles} />
      {formattedArticles.map((article, index) => (
        <Article key={index} {...article} />
      ))}  
    </div>
  )
}

export default App
