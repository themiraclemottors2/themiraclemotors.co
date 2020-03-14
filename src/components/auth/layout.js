import React from "react"
import styles from "./auth.module.scss"
import AppStoreAction from "../common/app-store-action"

export default ({ children }) => {
  return (
    <div className={styles.AuthLayout}>
      {children}
      <AppStoreAction className={styles.AppStoreAction} />
    </div>
  )
}
