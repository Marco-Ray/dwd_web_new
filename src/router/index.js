import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ShowcaseLayout from '@/views/ShowcaseLayout/index.vue';
import ShowcaseView from '@/views/ShowcaseLayout/ShowcaseView.vue';
import ShowcaseProject from '@/components/ShowcaseView/ShowcaseProject.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      transitionName: 'fade',
    },
  },
  {
    path: '/showcase',
    name: 'showcase',
    component: ShowcaseLayout,
    children: [
      {
        path: '/showcase/:track',
        name: 'track',
        component: ShowcaseView,
        meta: {
          transitionName: 'fade',
        },
      },
      {
        path: '/showcase/:track/project',
        name: 'project',
        component: ShowcaseProject,
        meta: {
          transitionName: 'fade',
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from) {
    if (to.hash) {
      if (to === from) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              el: to.hash,
              behavior: 'smooth',
            });
          }, 600);
        });
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
          });
        }, 600);
      });
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 600);
    });
  },
});

export default router;
