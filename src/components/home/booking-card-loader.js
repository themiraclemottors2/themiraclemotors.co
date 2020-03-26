import React from "react"
import styles from "./home.module.scss"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

export default () => {
  return (
    <div className={styles.BookingCardLoader}>
      <SkeletonTheme color="#F1F2F6" highlightColor="#fff">
        <div className={styles.BookingCardLoader__skeleton}>
          <Skeleton width={401} height={52} />
        </div>
        <div className={styles.BookingCardLoader__skeleton}>
          <Skeleton width={401} height={52} />
        </div>
        <div className={styles.BookingCardLoader__skeleton}>
          <Skeleton width={401} height={52} />
        </div>
        <div className={styles.BookingCardLoader__skeleton}>
          <Skeleton width={401} height={52} />
        </div>
        <div className={styles.BookingCardLoader__skeleton}>
          <Skeleton width={401} height={52} />
        </div>
      </SkeletonTheme>
    </div>
  )
}
