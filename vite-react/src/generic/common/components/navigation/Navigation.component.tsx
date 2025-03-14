import { Link } from 'react-router-dom';
import styles from '@/src/generic/common/components/navigation/Navigation.module.scss';

export const NavigationComponent = () => {
  return (
    <nav
      className={styles.navigation}
      role="navigation"
    >
      <Link to={'/app'}>Home</Link>
      <br />
      <Link to={'/app/page'}>page</Link>
    </nav>
  );
};
