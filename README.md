## Ant Design of React
antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

1. 安装
    npm install antd --save
2. 使用示例
    1.在index.js引入CSS:import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
    2.引入：
        import { Button, Steps } from 'antd';
        <Button type="primary">Primary</Button>
3. 按需加载
    按照需要的组件去加载
    1.手动引入
        import DatePicker from 'antd/es/date-picker'; // 加载 JS
        import 'antd/es/date-picker/style/css'; // 加载 CSS
    2.使用 babel-plugin-import（推荐）
        1.安装依赖
            npm install babel-plugin-import --save-dev