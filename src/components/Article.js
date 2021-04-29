const Article = ({ title, subtitle, text }) => {
  const createMarkup = (html) => ({ __html: html })
  
  return (
    <div className='article'>
      <h2 dangerouslySetInnerHTML={createMarkup(title)}></h2>
      <h3 dangerouslySetInnerHTML={createMarkup(subtitle)}></h3>
      <p dangerouslySetInnerHTML={createMarkup(text)}></p>
    </div>
  )
}

export default Article
