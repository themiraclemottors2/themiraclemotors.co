import React from "react"
import styles from "./static.module.scss"
import AboveFold from "./above-fold"

const PageContainer = ({ title, header, text, children }) => {
  return (
    <div className={styles.PageContainer}>
      <AboveFold title={title} header={header} text={text} />
      <div className={styles.PageContainer__content}>{children}</div>
    </div>
  )
}

export default PageContainer
