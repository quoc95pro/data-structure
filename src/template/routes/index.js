 import LinkedListPage from '../../pages/LinkedListPage';
 import SortPage from '../../pages/SortPage';

const routes = {
    LinkedListPage: {
        path: '/linkedlist',
        exact: true,
        component: LinkedListPage,
        private: false
    }
    , SortPage: {
        path: '/sort',
        exact: false,
        component: SortPage,
        private: false
    }
};

export default routes;