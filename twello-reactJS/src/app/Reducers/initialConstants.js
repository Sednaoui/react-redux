import shortid from 'shortid';

const listId1 = shortid.generate();
const listId2 = shortid.generate();
const cardId1 = shortid.generate();
const cardId2 = shortid.generate();
const activityId = shortid.generate();

// export const initialActivity = {
//     activityList: ['Welcome to new Twello Board'],
// };
export const initialActivity = {
    activities: {
        [activityId]: {
            activityName: 'Welcome to new Twello Board',
            activityID: activityId,
        },
    }
};

export const listInitialState = {
    lists: {
        [listId1]: {
            listID: listId1,
            title: 'List Name 1',
            cards: [cardId1],
        },
        [listId2]: {
            listID: listId2,
            title: 'List Name 2',
            cards: [cardId2],
        },
    },
};

export const cardInitialState = {
    cards: {
        [cardId1]: {
            cardID: cardId1,
            text: 'Task 3',
            listID: listId1,
        },
        [cardId2]: {
            cardID: cardId2,
            text: 'Task 4',
            listID: listId2,
        },
    },
};
