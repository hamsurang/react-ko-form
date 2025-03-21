import { useEffect } from "react"
import Link from "next/link"
import Footer from "./Footer"
import typographyStyles from "../styles/typography.module.css"
import styles from "./ApiGallery.module.css"
import containerStyles from "../styles/container.module.css"
import headerStyles from "./Header.module.css"
import { useRouter } from "next/router"

export default function ApiGallery() {
  const router = useRouter()

  const onChange = (e) => {
    const version = parseInt(e.target.value)

    if (version !== 7) {
      router.push(`https://legacy.react-hook-form.com/v${version}/api`)
    } else {
      router.push(`/v${version}/docs/`)
    }
  }

  useEffect(() => {
    const name = window.location.hash.toLowerCase().slice(1)

    if (name === "controller") {
      router.push(`/docs/usecontroller/${name}`)
    } else if (
      [
        "register",
        "unregister",
        "watch",
        "handlesubmit",
        "reset",
        "setError",
        "clearerrors",
        "setvalues",
        "getvalues",
        "trigger",
        "control",
        "formstate",
      ].includes(name)
    ) {
      router.push(`/docs/useform/${name}`)
    } else if (
      ["controller", "useformcontext", "usefieldarray"].includes(name)
    ) {
      router.push(`/docs/${name}`)
    }
  }, [router])

  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        API
      </h1>
      <p className={typographyStyles.subHeading}>
        React Hook Form의 API 전체 구조에 대한 개요
      </p>

      <main className={styles.root}>
        <ul className={styles.gallery}>
          <li>
            <div>
              <h3>
                <code>{`</>`}</code>useForm
              </h3>
              <p>
                최소한의 리렌더링으로 폼을 검증할 수 있는 강력한 커스텀
                훅입니다.
              </p>
              <Link href="/docs/useform" aria-label="read more about useForm">
                더 알아보기 ▸
              </Link>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <code>{`</>`}</code>useController
              </h3>
              <p>
                제어 컴포넌트(Controlled Components)를 위한 기능으로, useForm
                메서드와 연결되고 리렌더링을 독립적으로 분리합니다.
              </p>
              <Link
                href="/docs/usecontroller"
                aria-label="read more about useController"
              >
                더 알아보기 ▸
              </Link>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <code>{`</>`}</code>useFormContext
              </h3>
              <p>
                중첩된 컴포넌트에서 useForm의 메서드와 속성에 접근할 수
                있습니다. 큰 규모의 폼이나 공용 컴포넌트를 구축할 때 유용합니다.
              </p>
              <Link
                href="/docs/useformcontext"
                aria-label="read more about useformcontext"
              >
                더 알아보기 ▸
              </Link>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <code>{`</>`}</code>useWatch
              </h3>
              <p>
                루트 컴포넌트의 리렌더링 없이 개별 입력값 변경에만 구독할 수
                있습니다.
              </p>
              <Link href="/docs/usewatch" aria-label="read more about usewatch">
                더 알아보기 ▸
              </Link>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <code>{`</>`}</code>useFormState
              </h3>
              <p>
                개별 폼 상태 업데이트를 구독하고, 훅 수준에서 리렌더링을 분리할
                수 있습니다.
              </p>
              <Link
                href="/docs/useformstate"
                aria-label="read more about useformstate"
              >
                더 알아보기 ▸
              </Link>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <code>{`</>`}</code>useFieldArray
              </h3>
              <p>
                동적으로 생성된 필드를 실시간으로 관리할 수 있으며, 필드를
                섞거나 제거하고 추가할 수 있습니다. 복잡한 CRUD 데이터 입력
                시나리오에 적합합니다.
              </p>
              <Link
                href="/docs/usefieldarray"
                aria-label="read more about usefieldarray"
              >
                더 알아보기 ▸
              </Link>
            </div>
          </li>
        </ul>

        <div className={styles.versionControl}>
          <p>Switch Version: </p>
          <div
            className={`${headerStyles.toggleGroup} ${headerStyles.smallToggleGroup}`}
          >
            <button
              disabled
              role="tab"
              aria-label="show v7 doc"
              aria-selected="false"
              aria-controls="tabPanel-2"
            >
              V7
            </button>
            <button
              onClick={onChange}
              value="6"
              role="tab"
              aria-label="show v6 doc"
              aria-selected="false"
              aria-controls="tabPanel-2"
            >
              V6
            </button>
            <button
              onClick={onChange}
              value="5"
              aria-label="show v5 doc"
              aria-selected="true"
              aria-controls="tabPanel-1"
              role="tab"
            >
              V5
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
