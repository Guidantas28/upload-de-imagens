import { Box, Grid, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [urlImg, setUrlImg] = useState('');

  function handleViewImage(imageUrl: string): void {
    setUrlImg(imageUrl);
    onOpen();
  }

  return (
    <>
      <Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {cards.map(item => {
            return (
              <Card data={item} key={item.id} viewImage={handleViewImage} />
            );
          })}
        </Grid>
      </Box>
      <ModalViewImage onClose={onClose} isOpen={isOpen} imgUrl={urlImg} />
    </>
  );
}
