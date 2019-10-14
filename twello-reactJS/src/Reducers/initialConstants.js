import shortid from 'shortid';

export const initialState = [
    {
        title: 'List Name 1',
        listID: shortid.generate(),
        cards: [
            {
                id: shortid.generate(),
                text: 'Task1',
            },
            {
                id: shortid.generate(),
                text: 'Task 2',
            },
        ],
    },
    {
        title: 'List Name 2',
        listID: shortid.generate(),
        cards: [
            {
                id: shortid.generate(),
                text: 'Task3',
            },
            {
                id: shortid.generate(),
                text: 'Task 4',
            },
        ],
    },
];

export const initialActivity = ['Welcome to new Twello Board'];

