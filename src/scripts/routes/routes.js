import Homepage from '../views/pages/homepage';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';
import NotFound from '../views/pages/page-not-found';

const routes = {
  '/': Homepage,
  '/detail/:id': Detail,
  '/like': Like,
  NotFound,
};

export default routes;
