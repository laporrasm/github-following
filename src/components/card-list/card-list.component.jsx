import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ following }) => {
  return (
    <ul className='card-list'>
      {following.map((user) => (
        <Card key={user.id} userSnap={user} />
      ))}
    </ul>
  );
};

export default CardList;
