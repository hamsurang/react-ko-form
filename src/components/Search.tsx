import { useRef, useEffect } from "react"
import { useRouter } from "next/router"
import clsx from "clsx"
import searchStyles from "./Search.module.css"
import useWindowSize from "./utils/useWindowSize"
import { LARGE_SCREEN } from "../styles/breakpoints"

const ORIGINAL_SITE_URL = "https://react-hook-form.com"
const KO_SITE_URL = "https://react-ko-form.netlify.app"

const Search = ({
  focus,
  setFocus,
}: {
  focus: boolean
  setFocus: (value: boolean) => void
}) => {
  const router = useRouter()
  const { width } = useWindowSize()
  const searchRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    window.docsearch?.({
      appId: "Z2CKVVT2QA",
      apiKey: "c56a3f265ffbf85c2c654f865cb09164",
      indexName: "react-hook-form",
      inputSelector: "#algolia-doc-search",
      transformData(suggestions) {
        return suggestions.map((suggestion) => ({
          ...suggestion,
          url: suggestion.url.replace(ORIGINAL_SITE_URL, KO_SITE_URL),
        }))
      },
      handleSelected(_input, event, suggestion) {
        event.preventDefault()
        const url = new URL(suggestion.url)
        const path = url.pathname + url.hash
        router.push(path)
      },
    })

    return () => {
      setFocus(false)
    }
  }, [setFocus, router])

  useEffect(() => {
    if (LARGE_SCREEN <= width) {
      setFocus(true)
    } else {
      setFocus(false)
      searchRef.current?.blur()
    }
  }, [setFocus, width])

  return (
    <>
      <form className={searchStyles.searchForm}>
        <input
          className={clsx(searchStyles.searchBar, {
            [searchStyles.searchBarOpen]: focus,
          })}
          spellCheck="false"
          type="search"
          placeholder="Search..."
          aria-label="search input"
          id="algolia-doc-search"
          ref={searchRef}
          onFocus={() => {
            setFocus(true)
          }}
          onBlur={() => {
            if (LARGE_SCREEN > width) {
              setFocus(false)
            }
          }}
        />
        {!focus && <span className={`search icon ${searchStyles.icon}`} />}
      </form>
      <input type="hidden" id="fakeSearch" />
    </>
  )
}

export default Search
