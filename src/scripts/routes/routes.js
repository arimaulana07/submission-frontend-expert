import Homepage from '../views/pages/homepage';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Homepage, // default page
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
