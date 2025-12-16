// 'use strict'

// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('vue-router/dist/vue-router.prod.cjs')
// } else {
//   module.exports = require('vue-router/dist/vue-router.cjs')
// }

import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
history: createWebHistory(),
routes:[
//* Routes pour la page "Cookies"
        {
            path: '/cookies',
            name: 'cookies',
            meta: {
                description: 'Politique de cookies'
            },
            component: () => import('../views/cookies.vue')
        },
        //* Routes pour la page "Privacy"
        {
            path: '/privacy',
            name: 'privacy',
            meta: {
                description: 'Politique de confidentialité'
            },
            component: () => import('../views/privacy.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            meta: {
                description: 'Page non trouvée'
            },
            component: () => import('../views/not-found.vue')
        },
          {
            path: '/lesson-props',
            name: 'lesson-props',
            meta: {
                description: 'lesson'
            },
            component: () => import('../components/lesson-props.vue')
        },
         {
            path: '',
            name: 'hello',
            meta: {
                description: 'hello'
            },
            component: () => import('../components/HelloWorld.vue')
        },
         
]
});

export default router;
