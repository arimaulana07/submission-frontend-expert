import Homepage from '../views/pages/homepage';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Homepage, // default page
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
