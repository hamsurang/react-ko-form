import Head from "next/head"

const site = {
  siteMetadata: {
    title: `React Hook Form - 간단한 리액트 폼 유효성 검사`,
    description: `성능이 좋고, 유연하며 확장 가능한 폼에 사용하기 쉬운 유효성 검사 기능이 포함되어 있어요.`,
    author: `@bluebill1049`,
    siteUrl: "https://react-ko-form.netlify.app/",
    languages: {
      langs: ["en", "es", "jp", "zh", "kr", "pt", "ru"],
      defaultLangKey: "kr",
    },
  },
}

function SEO({ title, description }: { title: string; description?: string }) {
  const metaDescription = description || site.siteMetadata.description

  return (
    <Head>
      <title>{title || site.siteMetadata.title}</title>
      <meta
        property="description"
        content={metaDescription}
        key="description"
      />
      <meta
        name="twitter:description"
        content="성능이 좋고, 유연하며 확장 가능한 폼에 사용하기 쉬운 유효성 검사 기능이 포함되어 있어요."
      ></meta>
      <meta name="twitter:creator" content={site.siteMetadata.author}></meta>
      <meta
        property="twitter:image"
        content="https://raw.githubusercontent.com/react-hook-form/documentation/master/src/images/react-hook-form-og.png"
      ></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta property="og:type" content="website"></meta>
      <meta
        property="og:description"
        content="Performant, flexible and extensible forms with easy-to-use validation."
      ></meta>
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/react-hook-form/documentation/master/src/images/react-hook-form-og.png"
      ></meta>
    </Head>
  )
}

export default SEO
