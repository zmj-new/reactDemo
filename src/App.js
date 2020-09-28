import React, { Component } from 'react';
import { Button, Table } from 'antd';
// import music from './asset/music.json'
// import Item from 'antd/lib/list/Item';
// const { Step } = Steps;

// import Button from 'antd/es/button'; // 加载 JS
// import 'antd/es/button/style/css'; // 加载 CSS
// import Steps from "antd/es/steps"
// import 'antd/es/steps/style/css'
// const { Step } = Steps;
// const musicList = music.hotComments;

class App extends Component {
  state = {
    dataList: {
      song: [],
      songCount: 0
    }
  }
  musciColumns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    // {
    //   title: 'content',
    //   dataIndex: 'content',
    //   key: 'content',
    // },
    // {
    //   title: 'userName',
    //   dataIndex: 'user.nickname',
    //   key: 'userName',
    //   // render: item => item.user.nickname
    // },
    // {
    //   title: 'Name',
    //   dataIndex: 'name',
    //   key: 'name',
    // },
  ]
  componentDidMount() {
    let url = 'http://iwenwiki.com:3000/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA';
    fetch(url).then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          dataList: {
            songCount: data.result.songCount,
            song: data.result.songs
          }
        })
      })
    // console.log("music", music);
    // console.log("music", musicList);
  }
  render() {
    const { dataList } = this.state
    return (
      <div className="App">
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
        <Table
          bordered={true}
          rowKey={record => record.id}
          columns={this.musciColumns}
          dataSource={dataList.song}
        />
        {/* <Steps current={2}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps> */}
      </div>
    );
  }
}

export default App;
