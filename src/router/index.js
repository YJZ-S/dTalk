import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import Login from '@/page/login';
import Home from '@/page/home';

// 项目
import projectList from '@/page/project-page/project-list';
import projectDetail from '@/page/project-page/project-detail';

import projectOverview from '@/page/project-page/project-details/project-overview';
import tradingPlan from '@/page/project-page/project-details/trading-plan';
import counterparty from '@/page/project-page/project-details/counterparty';
// import auditCenter from '@/page/project-page/project-details/audit-center';
import auditCenter from '@/page/audit-page/audit-center';

import auditDetail from '@/page/project-page/project-details/audit-detail/audit-detail';
import auditOpinion from '@/page/project-page/project-details/audit-detail/audit-opinion';

// 会议
import mettingList from '@/page/metting-page/metting-list'
import mettingDetail from '@/page/metting-page/metting-detail'


Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: '/',
        //     name: 'Login',
        //     component: Login
        // },
        {
            path: '/',
            name: 'home',
            redirect: '/project-list',
            component: Home,
            children: [{
                    path: '/project-list',
                    name: 'project-list',
                    component: projectList
                },
                {
                    path: '/metting-page',
                    name: 'metting-list',
                    component: mettingList
                },
                {
                    path: '/audit-center',
                    name: 'audit-center',
                    component: auditCenter
                },
            ]
        },
        {
            path: '/project-detail',
            name: 'project-detail',
            redirect: '/project-overview',
            component: projectDetail,
            children: [{
                    path: '/project-overview',
                    name: 'project-overview',
                    component: projectOverview
                },
                {
                    path: '/trading-plan',
                    name: 'trading-plan',
                    component: tradingPlan
                },
                {
                    path: '/counterparty',
                    name: 'counterparty',
                    component: counterparty
                },
                // {
                //     path: '/audit-center',
                //     name: 'audit-center',
                //     component: auditCenter
                // }
            ]
        },
        {
            path: '/audit-detail',
            name: 'audit-detail',
            component: auditDetail
        },
        {
            path: '/audit-opinion',
            name: 'audit-opinion',
            component: auditOpinion
        },
        {
            path: '/metting-detail',
            name: 'metting-detail',
            component: mettingDetail
        }
    ]
})
