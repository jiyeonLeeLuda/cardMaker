import {
  getDatabase,
  onValue,
  ref,
  remove,
  set,
  off,
} from '@firebase/database';

class DataBase {
  constructor(firebaseApp) {
    this.db = getDatabase(firebaseApp);
  }
  saveCard(userId, card) {
    const saveTo = ref(this.db, `${userId}/cards/${card.id}`);
    set(saveTo, card);
  }
  deleteCard(userId, card) {
    const deleteTo = ref(this.db, `${userId}/cards/${card.id}`);
    remove(deleteTo);
  }
  syncCards(userId, setCards) {
    const readTo = ref(this.db, `${userId}/cards`);
    onValue(readTo, (snapshot) => {
      const data = snapshot.val();
      data && setCards(data);
    });
    return () => {
      off(readTo);
    };
  }
}

export default DataBase;
