import styles from './app.module.css';

import { SharedComponents } from '@cool/shared-components';
import { add } from 'utils/add';

export function App() {
  return (
    <div className={styles.app}>
      <SharedComponents />
      <h1>Welcome to admin! {add(1, 2, 3, 4)}</h1>
    </div>
  );
}

export default App;
