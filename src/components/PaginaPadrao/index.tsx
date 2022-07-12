import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
 
export default function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}></header>
      <div>
        <Outlet />
      </div>
    </>
  );
}