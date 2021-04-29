import { useEffect, useState } from 'react'
import useClippy from 'use-clippy'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Draggable from 'react-draggable'
import { Alert } from 'components'
import { handleCopy, handleDeselect, handlePaste, handleSelect } from 'utils'
import { Microphone, Close } from 'assets'

const Voice = ({ articles, setFormattedArticles }) => {
  const [command, setCommand] = useState()
  const [paste, setPaste] = useState()
  const [clipboard, setClipboard] = useClippy()
  const [selected, setSelected] = useState()
  const [showTranscript, setShowTranscript] = useState(false)
  const [showInstructions, setShowInstructions] = useState(false)
  const [alert, setAlert] = useState()

  const commands = [
    {
      command: 'kopieer',
      callback: () => {
        handleCopy(selected, setClipboard)
        setCommand('kopieer')
      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true
    },
    {
      command: 'deselecteer',
      callback: () => {
        handleDeselect(articles, setFormattedArticles)
        setCommand('deselecteer')
      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true
    },
    {
      command: 'plak',
      callback: () => {
        handlePaste(clipboard, setPaste)
        setCommand('plak')
      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true
    },
    {
      command: 'selecteer * tot *',
      callback: (first, second) => {
        handleSelect(first, second, articles, setSelected, setFormattedArticles)
        setCommand('selecteer')        
      },
    },
    {
      command: 'kopieer *',
      callback: (chosenSelected) => {
        handleCopy(selected, setClipboard, chosenSelected)
        setCommand('kopieer')
      }
    },
    {
      command: 'dungeons and dragons',
      callback: () => setCommand('dungeons and dragons')
    }
  ]

  const { transcript, listening } = useSpeechRecognition({ commands })

  useEffect(() => {
    setAlert()
    if (!command) return
    if (command === 'deselecteer') {
      setAlert('De tekst is gedeselecteerd!')
      return
    }
    if (command === 'kopieer') {
      setAlert('De tekst is gekopieerd naar het klembord!')
      return
    }
    if (command === 'plak') {
      setAlert('De tekst is geplakt in het tekstveld!')
      return
    }
    if (command === 'selecteer') {
      setAlert(selected.length ? 'De tekst is geselecteerd!' : 'Deze tekst kon ik niet vinden...')
      return
    }
    if (command === 'dungeons and dragons') {
      setAlert(Math.floor(Math.random() * 4) + 1)
      return
    }
  }, [command, selected])

  const handleMic = () => {
    if (listening) {
      SpeechRecognition.abortListening()
    } else {
      setCommand()
      SpeechRecognition.startListening({ language: 'nl-NL' })
    }
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) return null

  return (
    <div>
      {alert && <Alert message={alert} />}
      <div className='utils'>
        {showTranscript && <p>{transcript ? transcript : 'De transcriptie verschijnt hier zodra je begint te praten.'}</p>}
        <button onClick={() => setShowTranscript(prevState => !prevState)}>{showTranscript ? 'Verberg transcriptie' : 'Toon transcriptie'}</button>
        <button onClick={() => setShowInstructions(prevState => !prevState)}>{showInstructions ? 'Verberg instructies' : 'Toon instructies'}</button>
        {showInstructions && <div className='instructions'>
          <p><b>Selecteer:</b> zeg 'selecteer [gewenste begin woorden] tot [gewenste eind woorden]' om een stuk tekst te selecteren.</p>
          <p><b>Deselecteer:</b>  zeg 'deselecteer' om alles te deselecteren.</p>
          <p><b>Kopieer:</b> zeg 'kopieer' om het eerste (of enige) stuk tekst te kopieeren, zeg 'kopieer [getal]' om een specifieke selectie te seleceren als er meerdere geselecteerde stukken tekst zijn.</p>
          <p><b>Plak:</b>  zeg 'plak' om tekst te plakken vanaf het klembord.</p>
        </div>}
        <textarea disabled value={paste} placeholder='Plak hier teskst.'/>
      </div>
      <Draggable>
        <button className='voice-button' onClick={handleMic}>
          <img className='voice-icon' src={listening ? Close : Microphone} alt='microphone icon' />
        </button>
      </Draggable>
    </div>
  )
}
export default Voice
