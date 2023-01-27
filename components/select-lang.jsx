import { assert } from '@sindresorhus/is'
import { useRouter } from 'next/router'

const SelectLang = ({ slug }) => {
  const router = useRouter()

  const splitSlug = (langCode, array) => {
    return array.find(language => language.startsWith(langCode)).slice(2)
  }

  console.log('test', splitSlug('en', slug))
  return (
    <>
      <label htmlFor='lang'>Select your language</label>
      <select
        id='lang'
        name='lang'
        value={router.locale}
        onChange={event => {
          assert.string(router.query.slug)
          router.push(router.query.slug, splitSlug(event.target.value, slug), {
            locale: event.target.value,
          })
        }}
      >
        <option value='en'>English</option>
        <option value='tr'>Türkçe</option>
      </select>
    </>
  )
}

export default SelectLang
