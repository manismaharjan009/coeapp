import React, { Component } from 'react';
import autoBind from 'auto-bind';
import { Table, Button } from 'antd';

import '../styles.scss';
import { setPageTitle } from "../../App/actions";

interface IPropsFromState {

}

interface IPropsFromDispatch {
  setPageTitle: typeof setPageTitle
}

interface IState {
  title: string;
}

type AllProps = IPropsFromState & IPropsFromDispatch;

const dataSource = [
  {
    key: '1',
    presentedDate: '2019-05-01',
    presenter: 'Krishna',
    topic: 'BEM',
    reference: ''
  },
  {
    key: '2',
    presentedDate: '2019-05-07',
    presenter: 'Nabin',
    topic: 'SCCS',
    reference: ''
  }
];

const columns = [
  {
    title: 'Presented Date',
    dataIndex: 'presentedDate',
    key: 'presentedDate'
  },
  {
    title: 'Presenter',
    dataIndex: 'presenter',
    key: 'presenter'
  },
  {
    title: 'Topic',
    dataIndex: 'topic',
    key: 'topic'
  },
  /* {
    title: 'Reference',
    dataIndex: 'reference',
    key: 'reference'
  }, */
  {
    render: () => (
      <Button type="primary">Details</Button>
    )
    
  }
];

class ActivityComponent extends Component<AllProps, IState> {
  constructor(props: AllProps) {
    super(props);
    this.state = {
      title: 'Activity'
    };
    autoBind.react(this);
  }

  componentDidMount() {
    this.props.setPageTitle(this.state.title);
  }

  render() {
    return (
      <>
        <Table 
          columns={columns}
          dataSource={dataSource}
          pagination={false}
        />
      </>
    );
  }
}

export default ActivityComponent;