import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index';
import NewsDetail from '../pages/NewsDetail';
import Comment from '../pages/Comment';
import WirteComment from '../pages/WriteComment';
import ThemeDetail from '../pages/ThemeDetail';
import EditorsList from '../pages/EditorsList';
import Editor from '../pages/Editor';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/newsDetail/:id',
      name: 'newsDetail',
      component: NewsDetail
    },
    {
      path: '/comment/:id',
      name: 'comment',
      component: Comment
    },
    {
      path: '/writeComment/:id',
      name: 'writeComment',
      component: WirteComment
    },
    {
      path: '/themeDetail/:id',
      name: 'themeDetail',
      component: ThemeDetail
    },
    {
      path: '/editorsList/:id',
      name: 'editorsList',
      component: EditorsList
    },
    {
      path: '/editor/:id',
      name: 'editor',
      component: Editor
    }
  ]
});
