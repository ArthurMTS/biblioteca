import { Box } from '@material-ui/core';

import { Card } from '../Card';

import { useStyles } from './CardList.styles';

import { CardListProps } from './types';

export const CardList = ({ elements }: CardListProps) => {
  const styles = useStyles();

  return (
    <Box className={styles.cardList}>
      {
        elements.map(element => 
          <Card 
            key={element.created_at}
            author={element.author}
            title={element.title}
            url={element.url}
          />
        )
      }
    </Box>
  );
}