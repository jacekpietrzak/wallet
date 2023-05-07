import Button from '@mui/material/Button';
import styles from './Buttons.module.scss';

const Buttons = props => {
  return (
    <div className={styles.Buttons}>
      <Button
        variant="contained"
        className={styles.Buttons__button}
        onClick={props.firstButtonHandler}
      >
        {props.firstButtonText.toString()}
      </Button>
      <Button
        variant="outlined"
        className={styles.Buttons__button}
        onClick={props.secondButtonHandler}
        color="secondary"
        sx={{
          color: 'secondary.main',
          backgroundColor: 'transparent',
        }}
      >
        {props.secondButtonText.toString()}
      </Button>
    </div>
  );
};

export default Buttons;
//onClick={props.firstButtonHandler}
