import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index').default,
    routes: [
      {
        path: '/project',
        component: require('../../layouts/level/index').default,
        routes: [
          {
            path: '/project/list',
            component: require('../project/project_list').default,
            exact: true,
          },
          {
            path: '/project/create_project',
            component: require('../project/create_project').default,
            exact: true,
          },
          {
            path: '/project/detail',
            component: require('../project/project_detail').default,
            exact: true,
          },
          {
            path: '/project/detail/:code',
            component: require('../project/project_detail').default,
            exact: true,
          },
          {
            path: '/project/audit_result/:type/:projectId/:workflowId',
            component: require('../project/audit_result_page').default,
            exact: true,
          },
          {
            path: '/project/timeline_detail',
            component: require('../project/timeline_detail').default,
            exact: true,
          },
          {
            path: '/project/edit_project',
            component: require('../project/edit_project').default,
            exact: true,
          },
          {
            path: '/project/manage_members',
            component: require('../project/manage_members').default,
            exact: true,
          },
          {
            path: '/project/project_attachment',
            component: require('../project/project_attachment').default,
            exact: true,
          },
          {
            path: '/project/project_begin_approval',
            component: require('../project/project_approval').default,
            exact: true,
          },
          {
            path: '/project/project_finish_approval',
            component: require('../project/project_finish').default,
            exact: true,
          },
          {
            path: '/project/project_risk_list',
            component: require('../project/project_risk').default,
            exact: true,
          },
          {
            path: '/project/project_week_report',
            component: require('../../layouts/level/index').default,
            routes: [
              {
                path: '/project/project_week_report/list',
                component: require('../project/week_report/week_report_list')
                  .default,
                exact: true,
              },
              {
                path: '/project/project_week_report/create',
                component: require('../project/week_report/diff_report')
                  .default,
                exact: true,
              },
              {
                path: '/project/project_week_report/edit',
                component: require('../project/week_report/diff_report')
                  .default,
                exact: true,
              },
              {
                path: '/project/project_week_report/view',
                component: require('../project/week_report/diff_report')
                  .default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/project/change_project',
            component: require('../project/edit_project').default,
            exact: true,
          },
          {
            path: '/project/change',
            component: require('../project/change_form_v2').default,
            exact: true,
          },
          {
            path: '/project/change_list',
            component: require('../project/change_list').default,
            exact: true,
          },
          {
            path: '/project/project_change_approval',
            component: require('../project/change_detail_v2').default,
            exact: true,
          },
          {
            path: '/project/project_change_version',
            component: require('../project/change_version_history_v2').default,
            exact: true,
          },
          {
            path: '/project/aim_accept',
            component: require('../project/aim_approval').default,
            exact: true,
          },
          {
            path: '/project/access_manage',
            component: require('../project/access_manage').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/report',
        component: require('../../layouts/level/index').default,
        routes: [
          {
            path: '/report/dashboard',
            component: require('../report/last_data').default,
            exact: true,
          },
          {
            path: '/report/dashboard/edit',
            component: require('../report/last_data/components/EditDashBoard')
              .default,
            exact: true,
          },
          {
            path: '/report/list',
            component: require('../report/report_list').default,
            exact: true,
          },
          {
            path: '/report/detail',
            component: require('../report/report_list/components/ReportDetail')
              .default,
            exact: true,
          },
          {
            path: '/report/access',
            component: require('../report/access_manage').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/message',
        component: require('../../layouts/level/index').default,
        routes: [
          {
            path: '/message/list',
            component: require('../message/message_list').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/manage',
        component: require('../../layouts/level/index').default,
        routes: [
          {
            path: '/manage/productrequirement/',
            component: require('../receipt/requirement/requirement_list')
              .default,
            exact: true,
          },
          {
            path: '/manage/productadvise/',
            component: require('../receipt/advise/advise_list').default,
            exact: true,
          },
          {
            path: '/manage/productticket/',
            component: require('../receipt/ticket/ticket_list').default,
            exact: true,
          },
          {
            path: '/manage/producttask/',
            component: require('../receipt/task/task_list').default,
            exact: true,
          },
          {
            path: '/manage/productbug/',
            component: require('../receipt/bug/bug_list').default,
            exact: true,
          },
          {
            path: '/manage/productobjective/',
            component: require('../receipt/objective/objective_list').default,
            exact: true,
          },
          {
            path: '/manage/receipt/import/',
            component: require('../../components/tool/components/import.js')
              .default,
            exact: true,
          },
          {
            path: '/manage/requirement_schedule/list/',
            component: require('../receipt/requirement_schedule').default,
            exact: true,
          },
          {
            path: '/manage/requirement_plan/list/',
            component: require('../receipt/requirement_plan').default,
            exact: true,
          },
          {
            path: '/manage/requirement_plan/date/',
            component: require('../receipt/requirement_plan').default,
            exact: true,
          },
          {
            path: '/manage/requirement_board/',
            component: require('../receipt/requirement_board').default,
            exact: true,
          },
          {
            path: '/manage/time_box/',
            component: require('../receipt/time_box').default,
            exact: true,
          },
          {
            path: '/manage/version/list',
            component: require('../receipt/version/index').default,
            exact: true,
          },
          {
            path: '/manage/version/detail',
            component: require('../receipt/version/version_detail').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/objective_manage',
        component: require('../../layouts/level/index').default,
        routes: [
          {
            path: '/objective_manage/organization',
            component: require('../objective_manage').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/product_setting',
        component: require('../../layouts/level/index').default,
        routes: [
          {
            path: '/product_setting/basic_info',
            component: require('../product_setting/basic_info').default,
            exact: true,
          },
          {
            path: '/product_setting/issue_setting',
            component: require('../product_setting/issue_setting').default,
            exact: true,
          },
          {
            path: '/product_setting/notice_setting',
            component: require('../product_setting/message_notice').default,
            exact: true,
          },
          {
            path: '/product_setting/cloudcc_setting',
            component: require('../product_setting/cloud_cc').default,
            exact: true,
          },
          {
            path: '/product_setting/template',
            component: require('../product_setting/project_template').default,
            exact: true,
          },
          {
            path: '/product_setting/user_manage',
            component: require('../product_setting/product_member').default,
            exact: true,
          },
          {
            path: '/product_setting/tag_manage',
            component: require('../product_setting/tag_manage').default,
            exact: true,
          },
          {
            path: '/product_setting/subProduct',
            component: require('../product_setting/sub_product_manage').default,
            exact: true,
          },
          {
            path: '/product_setting/subProduct/module',
            component: require('../product_setting/sub_product_manage/components/product_module')
              .default,
            exact: true,
          },
          {
            path: '/product_setting/subProduct/version',
            component: require('../product_setting/sub_product_manage/components/product_version')
              .default,
            exact: true,
          },
          {
            path: '/product_setting/subProduct/mergestatus',
            component: require('../product_setting/sub_product_manage/components/jira_and_ep_status')
              .default,
            exact: true,
          },
          {
            path: '/product_setting/product_role',
            component: require('../product_setting/product_role').default,
            exact: true,
          },
          {
            path: '/product_setting/user_group',
            component: require('../product_setting/user_group').default,
            exact: true,
          },
          {
            path: '/product_setting/user_group/detail',
            component: require('../product_setting/user_group/components/GroupDetail')
              .default,
            exact: true,
          },
          {
            path: '/product_setting/user_group/userlist',
            component: require('../product_setting/user_group/components/GroupListUser')
              .default,
            exact: true,
          },
          {
            path: '/product_setting/approval_flow',
            component: require('../product_setting/approval_flow/index')
              .default,
            exact: true,
          },
          {
            path: '/product_setting/approval_flow/af_create',
            component: require('../product_setting/approval_flow/af_create')
              .default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/system_manage',
        component: require('../../layouts/level/index').default,
        routes: [
          {
            path: '/system_manage/admin/',
            component: require('../system_manage/admin_manage').default,
            exact: true,
          },
          {
            path: '/system_manage/enterprise/',
            component: require('../system_manage/enterprise_manage').default,
            exact: true,
          },
          {
            path: '/system_manage/department/',
            component: require('../system_manage/department_manage').default,
            exact: true,
          },
          {
            path: '/system_manage/product/',
            component: require('../system_manage/product_manage').default,
            exact: true,
          },
          {
            path: '/system_manage/productuser/',
            component: require('../system_manage/productuser_manage').default,
            exact: true,
          },
          {
            path: '/system_manage/custom_manage/',
            component: require('../system_manage/custom_manage').default,
            exact: true,
          },
          {
            path: '/system_manage/tool_manage/',
            component: require('../system_manage/tool_manage').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/my_workbench',
        component: require('../../layouts/level/index').default,
        routes: [
          {
            path: '/my_workbench/issue',
            component: require('../my_workbench').default,
            exact: true,
          },
          {
            path: '/my_workbench/userPro',
            component: require('../my_workbench').default,
            exact: true,
          },
          {
            path: '/my_workbench/audit',
            component: require('../my_workbench').default,
            exact: true,
          },
          {
            path: '/my_workbench/advise',
            component: require('../my_workbench').default,
            exact: true,
          },
          {
            path: '/my_workbench/advisedetail/:id',
            component: require('../receipt/advise/advise_detail').default,
            exact: true,
          },
          {
            path: '/my_workbench/ticketdetail/:id',
            component: require('../receipt/ticket/ticket_detail').default,
            exact: true,
          },
          {
            path: '/my_workbench/bugdetail/:id',
            component: require('../receipt/bug/bug_detail').default,
            exact: true,
          },
          {
            path: '/my_workbench/taskdetail/:id',
            component: require('../receipt/task/task_detail').default,
            exact: true,
          },
          {
            path: '/my_workbench/objectivedetail/:id',
            component: require('../receipt/objective/objective_detail').default,
            exact: true,
          },
          {
            path: '/my_workbench/requirementdetail/:id',
            component: require('../receipt/requirement/requirement_detail')
              .default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/user_info',
        component: require('../../layouts/level/index').default,
        routes: [
          {
            path: '/user_info/basic_info',
            component: require('../user_info/basic_info').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/',
        component: require('../../layouts/level/index').default,
        routes: [
          {
            path: '/',
            component: require('../static_pages/login').default,
            exact: true,
          },
          {
            path: '/apply',
            component: require('../static_pages/apply').default,
            exact: true,
          },
          {
            path: '/entapply',
            component: require('../static_pages/ent_apply').default,
            exact: true,
          },
          {
            path: '/logout',
            component: require('../static_pages/logout').default,
            exact: true,
          },
          {
            path: '/error',
            component: require('../static_pages/error').default,
            exact: true,
          },
          {
            path: '/noPermission',
            component: require('../static_pages/no_permission').default,
            exact: true,
          },
          {
            path: '/needEmail',
            component: require('../static_pages/need_email').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/error',
        component: require('../../layouts/level/index').default,
        routes: [
          {
            path: '/error/noPermission',
            component: require('../../components/403').default,
            exact: true,
          },
          {
            path: '/error/notFound',
            component: require('../../components/404').default,
            exact: true,
          },
          {
            path: '/error/serverError',
            component: require('../../components/500').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: () =>
          React.createElement(
            require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
