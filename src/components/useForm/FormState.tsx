import Footer from "../Footer"
import api from "../../data/api"
import typographyStyles from "../../styles/typography.module.css"
import containerStyles from "../../styles/container.module.css"
import ApiFormState from "../ApiFormState"
import CodeArea from "../CodeArea"
import formState from "../codeExamples/formState"
import formStateTs from "../codeExamples/formStateTs"
import StarRepo from "../StarRepo"
import { Menu, apiLinks } from "../Menu"

const FormState = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        formState
      </h1>
      <p className={typographyStyles.subHeading}>폼의 상태</p>

      <div className={containerStyles.wrapper}>
        <Menu pages={apiLinks} />

        <main>
          <section>
            <ApiFormState api={api} />

            <h2 id="example" className={typographyStyles.subTitle}>
              Examples
            </h2>

            <CodeArea
              rawData={formState}
              url="https://codesandbox.io/s/react-hook-form-v6-formstate-forked-tyqlp"
              tsRawData={formStateTs}
              tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-formstate-forked-5sxs3"
            />

            <h2 className={typographyStyles.subTitle}>Video</h2>
            <p>다음 동영상은 다양한 폼 상태에 대해 자세히 설명합니다.</p>

            <iframe
              width="100%"
              height="528"
              title="react hook form formState"
              src="https://www.youtube.com/embed/4kzd572NbkM"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <StarRepo />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default FormState
