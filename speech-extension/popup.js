// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");
let color

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

function setPageBackgroundColor () {
  document.body.style.backgroundColor = color
}

const setBackgroundColor = async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // chrome.tabs.executeScript(tab.id, {
  //   code: `const color = ${color}`
  // }, function () {
  //   document.body.style.backgroundColor = color
  // })

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  })
}

const testBtn = document.querySelector('#testBtn')

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
const recognition = new SpeechRecognition()
recognition.continuous = false
recognition.lang = 'en-US'
recognition.interimResults = false
recognition.maxAlternatives = 1

const colors = ['red', 'green', 'blue', 'hotpink', 'yellow', 'orange']

testBtn.addEventListener('click', (e) => {
  console.log('Started listening')
  recognition.start()
})

recognition.addEventListener('result', e => {
  const words = e.results[0][0].transcript.split(' ')
  words.forEach(word => {
    if (colors.includes(word.toLowerCase())) {
      console.log(word.toLowerCase())
      color = word.toLowerCase()
      setBackgroundColor()
    }
  })
})

recognition.addEventListener('speechend', e => {
  console.log('Stopped listening')
  recognition.stop()
})


// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
// const commands = ['kopieer']
// const numbers = ['een', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen']
// const button = document.querySelector('#listen')
// const recognition = new SpeechRecognition()
// recognition.continuous = false
// recognition.lang = 'nl-NL'
// recognition.interimResults = false
// recognition.maxAlternatives = 1
// const articles = Array.from(document.querySelector('#articles').querySelectorAll('article'))

// button.addEventListener('click', () => {
//   recognition.start()
//   button.innerText = 'Listening...'
// })

// const getContent = (article, line) => {
//   if (article !== undefined && line !== undefined) {
//     return articles[article].querySelectorAll('p')[line].innerText
//   } else if (article !== undefined) {
//     const wholeArticle = Array.from(articles[article].querySelectorAll('p')).map(line => {
//       return line.innerText
//     })
//     return wholeArticle.join(' ')
//   }
// }

// const handleCommand = numbers => {
//   const content = getContent(numbers?.[0], numbers?.[1])
//   navigator.clipboard.writeText(content)
//     .then(_ => alert(`Copied ${content}`))
//     .catch(_ => console.log('Error, could not copy...'))
// }

// recognition.addEventListener('result', e => {
//   const words = e.results[0][0].transcript.split(' ')

//   const foundNumbers = words.map(word => {
//     if ((numbers.includes(word) || Number(word))) {
//       const number = Number(word) ? Number(word) - 1 : numbers.indexOf(word)
//       return number
//     }
//   })
//   const filteredNumbers = foundNumbers.filter(foundNumber => foundNumber !== undefined)
//   words.forEach(word => commands.includes(word.toLowerCase()) && handleCommand(filteredNumbers))
// })

// recognition.addEventListener('speechend', e => {
//     recognition.stop()
//     button.innerText = 'Start listening'
// })
