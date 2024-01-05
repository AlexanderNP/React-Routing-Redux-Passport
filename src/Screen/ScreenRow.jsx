import styles from './ScreenRow.module.css'

export function ScreenRow({ title, value }) {
  return (
    <div className={styles.row}>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  )
}