/**
 *
 * @param contentInMultipleLanguages string with qtranslate content
 * @returns {lang:"en", text:"only the english part"} : QTranslateLanguage[]
 *
 */

interface IQTranslateLanguage {
  lang: string
  text: string
}

const qExtractor = (contentInMultipleLanguages: string): IQTranslateLanguage[] => {
  const reg1 = /\[:[\S]*\]/gm
  const reg2 = /\[:[\S]*\]/gm
  const content = contentInMultipleLanguages.split(reg1).filter(t => '' !== t)
  let langs = contentInMultipleLanguages.match(reg2)
  langs = langs && langs.slice(0, -1).map(l => l.replace(/\[|:|\]/g, ''))
  //   console.log({ langs, content })
  if (langs && langs.length === content.length) {
    const result: IQTranslateLanguage[] = []
    langs.forEach((lang, i) => {
      //   console.log(lang)
      result.push({ lang, text: content[i] })
    })
    return result
  } else {
    return []
  }
}
export default qExtractor
