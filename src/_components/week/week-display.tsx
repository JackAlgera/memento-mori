import styles from './week-display.module.scss';

interface WeekContainerProps {
  color: string;
  onClick?: () => void;
}

export const WeekDisplay = (props: WeekContainerProps) => {
  const handleOnClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <svg onClick={handleOnClick} viewBox='0 0 100 100'>
      <rect className={styles.rect} rx='17' fill={props.color} width='100' height='100'/>
    </svg>
  );
};
