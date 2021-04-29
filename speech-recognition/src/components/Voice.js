import { useState } from 'react'
import useClippy from 'use-clippy'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Draggable from 'react-draggable'
import handleSelect from '../utils/handleSelect'
import handlePaste from '../utils/handlePaste'
import handleCopy from '../utils/handleCopy'
import handleDeselect from '../utils/handleDeselect'
import microphone from '../assets/microphone.png'
import close from '../assets/close.png'

const Voice = ({ articles, setFormattedArticles }) => {
  const [paste, setPaste] = useState()
  const [clipboard, setClipboard] = useClippy()
  const [selected, setSelected] = useState()
  const [showTranscript, setShowTranscript] = useState(false)

  const commands = [
    {
      command: 'kopieer',
      callback: () => handleCopy(selected, setClipboard),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true
    },
    {
      command: 'deselecteer',
      callback: () => handleDeselect(articles, setFormattedArticles),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true
    },
    {
      command: 'plak',
      callback: () => handlePaste(clipboard, setPaste),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true
    },
    {
      command: 'selecteer * tot *',
      callback: (first, second) => handleSelect(first, second, articles, setSelected, setFormattedArticles)
    },
    {
      command: 'kopieer *',
      callback: (chosenSelected) => handleCopy(selected, setClipboard, chosenSelected)
    }
  ]

  const { transcript, listening } = useSpeechRecognition({ commands })

  const handleMic = () => {
    if (listening) {
      SpeechRecognition.abortListening()
    } else {
      SpeechRecognition.startListening({ language: 'nl-NL' })
    }
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) return null

  return (
    <div>
      <div className='utils'>
        {showTranscript && <p>{transcript ? transcript : 'De transcriptie verschijnt hier zodra je begint te praten.'}</p>}
        <button onClick={() => setShowTranscript(prevState => !prevState)}>{showTranscript ? 'Verberg transcriptie' : 'Toon transcriptie'}</button>
        <textarea disabled value={paste} placeholder='Plak hier teskst.'/>
      </div>
      <Draggable>
        <button className='voice-button' onClick={handleMic}>
          <img className='voice-icon' src={listening ? close : microphone} alt='microphone icon' />
        </button>
      </Draggable>
    </div>
  )
}
export default Voice
