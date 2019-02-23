const qExtractor = (contentInMultipleLanguages: string): object => {
  const reg1 = /\[:[\S]*\]/gm
  const reg2 = /\[:[\S]*\]/gm
  const content = contentInMultipleLanguages.split(reg1).filter(t => '' !== t)
  let langs = contentInMultipleLanguages.match(reg2)
  langs = langs && langs.slice(0, -1).map(l => l.replace(/\[|:|\]/g, ''))
  //   console.log({ langs, content })
  if (langs && langs.length === content.length) {
    const result: any = {}
    langs.forEach((lang, i) => {
      //   console.log(lang)
      result[lang] = content[i]
    })
    return result
  } else {
    return {}
  }
}
export default qExtractor
