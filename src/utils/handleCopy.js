const handleCopy = (selected, setClipboard, chosenSelected) => {
  if (!selected) return

  if (!chosenSelected) {
    setClipboard(selected[0])
    return
  }

  setClipboard(selected[chosenSelected === 'een' ? 0 : Number(chosenSelected - 1)])
}

export default handleCopy
