import { Box, Typography } from '@material-ui/core';
import { FaUser, FaBook } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

import { useStyles } from './Card.styles';

import { CardProps } from './types';

export const Card = ({ author, title, url }: CardProps) => {
  const styles = useStyles();

  return (
    <Box className={styles.card}>
      <Typography className={styles.line}>
        <FaUser className={styles.icon} />
        <span className={styles.text}>{author}</span>
      </Typography>
      <Typography className={styles.line}>
        <FaBook className={styles.icon} />
        <span className={styles.text}>{title}</span>
      </Typography>
      <Typography className={styles.line}>
        <FiLink className={styles.icon} />
        <span className={styles.text}>{url}</span>
      </Typography>
    </Box>
  );
}