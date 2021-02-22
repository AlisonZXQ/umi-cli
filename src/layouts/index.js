import React, { Component } from 'react';
import { ConfigProvider, Empty, Modal } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { withRouter } from 'react-router-dom';
import { Link } from 'umi';
import 'antd/dist/antd.less'; // 引入官方提供的 less 样式入口文件
import ErrorBoundary from '@components/ErrorBoundary';
// import 'gitalk/dist/gitalk.css'
// import Gitalk from 'gitalk'

// import Feedback from '@greatz/feedback';
import FeedbackComponent from "@greatz/feedback/dist/feedback";
import "@greatz/feedback/dist/feedback.css";

// import { } from '@music/ct-mobile-latticedraw';
// import { RedBtn } from '@music/mobile-button';

class Index extends Component {
  state = {
    visible: false
  }

  componentDidMount() {
  }

  handleClick = () => {
    this.setState({ visible: true }, () => {
      // var gitalk = new Gitalk({
      //   clientID: 'GitHub Application Client ID',
      //   clientSecret: 'GitHub Application Client Secret',
      //   repo: 'GitHub repo',
      //   owner: 'GitHub repo owner',
      //   admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
      //   id: location.pathname,      // Ensure uniqueness and length less than 50
      //   distractionFreeMode: false  // Facebook-like distraction free mode
      // })

      // gitalk.render('gitalk-container')

      var feedback = new FeedbackComponent({
        test: '12222',
      })
      feedback.render('gitalk-container')
    });
  }

  render() {
    const { visible } = this.state;

    return (
      <ErrorBoundary>
        <ConfigProvider
          locale={zhCN}
          renderEmpty={() => <Empty />}
        >
          {/* <RedBtn textDom={'test'} /> */}
          <a onClick={() => this.handleClick()}>点我反馈</a>
          {/* <div id="gitalk-container"></div> */}
          <Modal
            visible={visible}
          >
            <div id="gitalk-container"></div>
            hello
          </Modal>
          {/* <div className="u-mgt100 u-mgl100">
            {this.props.children}
          </div> */}
        </ConfigProvider>
      </ErrorBoundary >);
  }
}

export default Index;
