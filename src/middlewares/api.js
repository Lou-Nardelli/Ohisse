// import axios from 'axios';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
  }
};

export default apiMiddleWare;
