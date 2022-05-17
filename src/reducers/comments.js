const initialState = {
  currentComments: [
    {
      id: 3,
      content: 'belle vue',
      pseudo: 'kiki',
      id_user: 3,
      id_spot: 1,
      created_at: '2022-05-11T08:06:22.000000Z',
      updated_at: '2022-05-11T08:06:22.000000Z',
    },
    {
      id: 2,
      content: 'superbe ambiance',
      pseudo: 'toto',
      id_user: 1,
      id_spot: 3,
      created_at: '2022-05-11T08:03:46.000000Z',
      updated_at: '2022-05-11T08:03:46.000000Z',
    },
  ],

  newMessageContent: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
