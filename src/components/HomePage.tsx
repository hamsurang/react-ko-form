import { useState, useRef, useEffect, memo } from "react"
import Form from "./Form"
import Header from "./Header"
import Watcher from "./Watcher"
import CodeCompareSection from "./CodeCompareSection"
import CodePerfCompareSection from "./CodePerfCompareSection"
import IsolateRender from "./IsolateRender"
import FooterContent from "./Footer"
import Builder from "./BuilderPage"
import FeaturesList from "./FeaturesList"
import home from "../data/home"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import buttonStyles from "../styles/button.module.css"
import styles from "./HomePage.module.css"
import { SponsorsList } from "./sponsorsList"
import { useRouter } from "next/router"
import { GeneralObserver } from "./general-observer"
import Link from "next/link"
import { useForm } from "react-hook-form"

function HomePage() {
  const [submitData, updateSubmitData] = useState({})
  const [showBuilder, toggleBuilder] = useState(false)
  const HomeRef = useRef<HTMLDivElement>(null)

  const [featurePlay, setFeaturePlay] = useState(false)
  const [codeComparePlay, setCodeComparePlay] = useState(false)
  const [isolatePlay, setIsolatePlay] = useState(false)
  // const [isCardPlay, setCardPlay] = useState(false)
  const [renderPlay, setRenderPlay] = useState(false)
  const [formUpdated, setFormUpdated] = useState(false)
  const [watchPlay, setWatchPlay] = useState(false)
  const { query } = useRouter()
  const methods = useForm()
  const onSubmit = (data) => {
    updateSubmitData(data)
  }

  useEffect(() => {
    if (query["goToDemo"] === "") {
      setTimeout(() => {
        HomeRef.current?.scrollIntoView({ behavior: "smooth" })

        if (query["updated"]) {
          setFormUpdated(true)
        }
      }, 100)
    }
  }, [query])

  return (
    <div className={styles.root}>
      {showBuilder && (
        <Builder showBuilder toggleBuilder={toggleBuilder} HomeRef={HomeRef} />
      )}

      <Header
        // isCardPlay={isCardPlay}
        homeRef={HomeRef}
      />

      <GeneralObserver
        onEnter={() => {
          setFeaturePlay(true)
        }}
      >
        <FeaturesList isPlayFeature={featurePlay} />
      </GeneralObserver>
      <SponsorsList />

      <GeneralObserver
        onEnter={() => {
          setCodeComparePlay(true)
        }}
      >
        <CodeCompareSection isPlayCodeCompare={codeComparePlay} />
      </GeneralObserver>
      <GeneralObserver
        onEnter={() => {
          setIsolatePlay(true)
        }}
      >
        <IsolateRender isIsolatePlay={isolatePlay} />
      </GeneralObserver>
      <GeneralObserver
        onEnter={() => {
          setWatchPlay(true)
        }}
      >
        <Watcher isPlayWatch={watchPlay} />
      </GeneralObserver>

      <GeneralObserver
        onEnter={() => {
          setRenderPlay(true)
        }}
      >
        <CodePerfCompareSection isPlayRender={renderPlay} />
      </GeneralObserver>

      <div className={containerStyles.centerContent}>
        <h1 className={typographyStyles.h1}>하이라이트</h1>

        <p className={typographyStyles.homeParagraph}>
          React Hook Form은 커뮤니티와 업계에서 인정받고 있어요. RHF 덕분에
          개발자들이 React에서 폼을 만드는 데 더 많은 도움을 받고 있어요.
        </p>

        <section className={styles.feedback}>
          <div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
              />
            </svg>

            <h3>Javascript Rising Star</h3>
            <p>
              React Hook Form은 훅 생태계에서 성장하고 발전했어요. React 개발의
              일부분을 간단하게 만들어줘요.
            </p>
          </div>

          <div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
              />
            </svg>
            <h3>React Open Source 수상</h3>
            <p>
              2020년 GitNation React OS 상에서 생산성 향상 부문의 수상했어요.
            </p>
          </div>

          <div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
              />
            </svg>
            <h3>Technology Radar</h3>

            <p>
              이 프로젝트가 rador의 언어&프레임워크 부문에 속한다는 것은
              행운이에요.
            </p>
          </div>
        </section>
      </div>

      <div className={containerStyles.centerContent}>
        <h1 className={typographyStyles.h1}>커뮤니티</h1>

        <p className={typographyStyles.homeParagraph}>
          커뮤니티에 의해 구축되고 주도돼요. 모든 React 개발자가 폼을 더 쉽게
          만들 수 있도록 하는 것이 미션이에요.
        </p>

        <section className={styles.feedback}>
          <div>
            <svg viewBox="0 0 512 512">
              <path
                d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
              <path
                d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
            </svg>
            <p>
              바로 여기에 있어요. 잘 설계되어 있으면서도 필요할 때 유연하게
              사용할 수 있는 React 폼 라이브러리. 몇 년 동안 React 폼을
              사용하다가 react-hook-form으로 전환한 것은 마치 초능력처럼
              느껴져요. 모든 것이 더 빠르게 실행되고 코드가 더 깔끔해졌어요.
            </p>
          </div>

          <div>
            <svg viewBox="0 0 512 512">
              <path
                d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
              <path
                d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
            </svg>
            <p>
              react-hook-form의 도움으로 React 애플리케이션에서 폼을 만드는 것은
              이제 복잡하지 않아요. 유효성 검사가 매우 간단하기 때문에 대부분의
              경우 이 패키지를 사용하여 폼을 만들어요. Formik을 사용하는 것을
              멈추고 나서 이게 제게는 최고의 폼 만들기 도구에요. 사용자
              인터페이스와 성능이 매우 뛰어나요.
            </p>
          </div>

          <div>
            <svg viewBox="0 0 512 512">
              <path
                d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
              <path
                d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
            </svg>
            <p>
              제가 React 앱을 만들면서 사용해본 폼 라이브러리 중에서 이게
              최고에요. 유용하면서도 간단해서죠. 유용한 tool들이 많고,
              Formik이나 Redux Form과 비교하면 코드가 많이 필요하지 않아요.
              애플리케이션의 리렌더링 횟수가 적고, 마운트 시간이 짧아서 매우
              smooth해요.
            </p>
          </div>
        </section>
      </div>

      <div ref={HomeRef} />

      <Form
        {...{
          methods,
          onSubmit,
          submitData,
          toggleBuilder,
          formUpdated,
        }}
      />

      <section className={containerStyles.centerContent}>
        <h1 className={typographyStyles.h1}>{home.findInteresting.heading}</h1>
        {home.findInteresting.description}
        <div
          className={buttonStyles.buttonsGroup}
          style={{
            maxWidth: 500,
          }}
        >
          <Link href="/get-started" className={buttonStyles.primaryButton}>
            {home.getStarted}
          </Link>
          <Link href="/docs" className={buttonStyles.primaryButton}>
            API
          </Link>
        </div>
      </section>

      <FooterContent />
    </div>
  )
}

export default memo(HomePage)
