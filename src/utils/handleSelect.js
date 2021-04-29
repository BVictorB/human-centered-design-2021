const matchText = (str, first, second, setSelected) => (
  str.replace(
    new RegExp(`${first}(.*)${second}`, 'i'),
    match => {
      setSelected(prevState => [...prevState, match])
      return `<mark>${match}</mark>`
    }
  )
)

const handleSelect = (first, second, articles, setSelected, setFormattedArticles) => {
  setSelected([])
  const replacedArticles = articles.map(item => (
    {
      title: matchText(item.title, first, second, setSelected),
      subtitle: matchText(item.subtitle, first, second, setSelected),
      text: matchText(item.text, first, second, setSelected)
    }
  ))

  setFormattedArticles(replacedArticles)
}

export default handleSelect
