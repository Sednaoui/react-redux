import shortid from 'shortid';

export const initial_state = [
  {
    title: 'List Name 1',
    listID: shortid.generate(),
    cards: [
      {
        id: shortid.generate(),
        text: 'Task1'
      },
      {
        id: shortid.generate(),
        text: 'Task 2'
      }
    ]
  },
  {
    title: 'List Name 2',
    listID: shortid.generate(),
    cards: [
      {
        id: shortid.generate(),
        text: 'Task3'
      },
      {
        id: shortid.generate(),
        text: 'Task 4'
      }
    ]
  }
];

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newCard = {
        text: action.payload.text,
        id: shortid.generate()
      };
      const newState = state.map(list => {
        if (list.listID === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });
      return newState;

    case 'CLOSE_TASK':
      return state.map(list => {
        console.log(action.listId);
        if (list.listID === action.listId) {
          return {
            ...list,
            cards: list.cards.filter(card => card.id !== action.cardId)
          };
        } else {
          return list;
        }
      });

    case 'EDIT_LIST':
      return state.map(list => {
        console.log(action);
        if (list.listID === action.listId) {
          return {
            ...list,
            title: action.value
          };
        } else {
          return list;
        }
      });

    case 'EDIT_CARD':
      return state.map(list => {
        if (list.listID === action.listId) {
          return {
            ...list,
            cards: list.cards.map(card => {
              if (card.id === action.cardId) {
                return { ...card, text: action.value };
              } else {
                return card;
              }
            })
          };
        } else {
          return list;
        }
      });

    case 'ADD_LIST':
      const newList = {
        title: action.payload.title,
        cards: [],
        listID: shortid.generate()
      };
      return [...state, newList];
    default:
      return state;
  }
};

export default reducer;
