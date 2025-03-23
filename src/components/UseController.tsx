import api from "../data/api"
import typographyStyles from "../styles/typography.module.css"
import Footer from "./Footer"
import containerStyles from "../styles/container.module.css"
import UseControllerContent from "./UseControllerContent"
import StarRepo from "./StarRepo"
import { Menu, apiLinks } from "./Menu"

export default function UseController() {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        useController
      </h1>
      <p className={typographyStyles.subHeading}>
        제어 컴포넌트를 위한 리액트 훅
      </p>

      <div className={containerStyles.wrapper}>
        <Menu pages={apiLinks} />

        <main>
          <section>
            <UseControllerContent api={api} />

            <StarRepo />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}
