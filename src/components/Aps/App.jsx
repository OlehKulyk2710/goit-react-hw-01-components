import { Profile } from 'components/Profile/Profile';
import { Statistic } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import css from './Aps.module.css';

import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>
      <p className={css.header}>1 - Профиль социальной сети</p>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <p className={css.header}>2- Секция статистики</p>
      <Statistic title="Upload stats" stats={data} />

      <p className={css.header}>3 - Список друзей</p>
      <FriendList friends={friends} />

      <p className={css.header}>4 - История транзакций</p>
      <TransactionHistory items={transactions} />
    </div>
  );
};
