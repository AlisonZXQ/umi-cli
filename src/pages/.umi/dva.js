import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'layout', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/models/layout.js').default) });
app.model({ namespace: 'product', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/models/product.js').default) });
app.model({ namespace: 'user', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/models/user.js').default) });
app.model({ namespace: 'aimEP', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/project/models/aimEP.js').default) });
app.model({ namespace: 'approvalFlow', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/project/models/approvalFlow.js').default) });
app.model({ namespace: 'createProject', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/project/models/createProject.js').default) });
app.model({ namespace: 'project', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/project/models/project.js').default) });
app.model({ namespace: 'projectCascade', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/project/models/projectCascade.js').default) });
app.model({ namespace: 'risk', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/project/models/risk.js').default) });
app.model({ namespace: 'weekReport', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/project/models/weekReport.js').default) });
app.model({ namespace: 'report', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/report/models/report.js').default) });
app.model({ namespace: 'message', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/message/models/message.js').default) });
app.model({ namespace: 'design', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/receipt/requirement/models/design.js').default) });
app.model({ namespace: 'requirement', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/receipt/requirement/models/requirement.js').default) });
app.model({ namespace: 'receipt', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/receipt/models/receipt.js').default) });
app.model({ namespace: 'advise', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/receipt/advise/models/advise.js').default) });
app.model({ namespace: 'ticket', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/receipt/ticket/models/ticket.js').default) });
app.model({ namespace: 'task', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/receipt/task/models/task.js').default) });
app.model({ namespace: 'bug', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/receipt/bug/models/bug.js').default) });
app.model({ namespace: 'objective', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/receipt/objective/models/objective.js').default) });
app.model({ namespace: 'requirement_pool', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/receipt/requirement_schedule/models/requirement_pool.js').default) });
app.model({ namespace: 'requirementPlan', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/receipt/requirement_plan/models/requirementPlan.js').default) });
app.model({ namespace: 'model', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/receipt/requirement_board/model.js').default) });
app.model({ namespace: 'model', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/receipt/time_box/model.js').default) });
app.model({ namespace: 'version', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/receipt/version/models/version.js').default) });
app.model({ namespace: 'model', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/objective_manage/model.js').default) });
app.model({ namespace: 'product_setting', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/product_setting/models/product_setting.js').default) });
app.model({ namespace: 'approvalflow', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/product_setting/approval_flow/models/approvalflow.js').default) });
app.model({ namespace: 'system_manage', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/system_manage/models/system_manage.js').default) });
app.model({ namespace: 'my_workbrench', ...(require('/Users/zhangxueqing/Desktop/kk/kk-gitlab/src/pages/my_workbench/models/my_workbrench.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
