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
