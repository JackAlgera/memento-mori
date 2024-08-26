import {useState} from 'react';
import styles from './modal.module.scss';

export const Modal = () => {
  const [activated, setActivated] = useState(false);

  return (
    <>
      <button onClick={() => setActivated(!activated)}>Test</button>
      {activated &&
          <div className={styles.modalContainer}>
            <div className='flex flex-col rounded-lg bg-[var(--color-5)] p-2 gap-1'>
              {/*<input/>*/}
              {/*<button>Submit</button>*/}
            </div>
          </div>
      }
    </>
  );
};
