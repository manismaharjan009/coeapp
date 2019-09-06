import React, { Component } from "react";
import autoBind from 'auto-bind';
import { 
  Row, Col, Avatar, Card, Tooltip, DatePicker, Calendar, List, Button,
  Input
} from 'antd';
import moment from 'moment';

import '../style.scss';
import { ConnectedReduxProps } from "../../../reducers";
import { setPageTitle } from "../../App/actions";

interface IPropsFromState {

}

interface IPropsFromDispatch {
  setPageTitle: typeof setPageTitle
}

interface IState {
  title: string;
}

type AllProps = IPropsFromState & IPropsFromDispatch & ConnectedReduxProps;

const { Meta: MetaCard } = Card;
const { MonthPicker } = DatePicker;
const { Item: ListItem } = List;
const { Meta: ListItemMeta } = List.Item;
const { TextArea } = Input;

const data =[
  {
    userId: 1,
    avatarUrl: '',
    user: 'Jayraj Bhatta',
    comment: 'Comment here.'
  },
  {
    userId: 2,
    avatarUrl: '',
    user: 'Krishna Giri',
    comment: 'Comment here.'
  },
  {
    userId: 4,
    avatarUrl: '',
    user: 'Manish M',
    comment: 'Mine Comment here.'
  },
  {
    userId: 3,
    avatarUrl: '',
    user: 'Nischal Raj Budathoki',
    comment: 'Comment here.'
  },
]

class DashboardComponent extends Component<AllProps, IState> {
  constructor(props: AllProps) {
    super(props);
    this.state = {
      title: 'Dashboard'
    };
    autoBind.react(this);
  }

  componentDidMount() {
    this.props.setPageTitle(this.state.title);
  }

  render() {
    return(
      <Row gutter={24}>
        <Col xs={24} md={14} lg={16} xl={18}>
          <Card title="Current/Today/Last Perfomer" className="btm-spacing text-center">
            <div className="details">
              <p><Avatar size={80} icon="user" className="current" /></p>
              <p>Manish Maharjan</p>
              <p>Topic: <strong>TypeScript</strong></p>
              <p>Time Length: 30 mins</p>
              <p>Date: {moment().format('YYYY-MM-DD')}</p>
            </div>
            <div className="feedback text-left">
              <h3>Feedback/Comment</h3>
              <List
                dataSource={data}
                renderItem={item => (
                  item.userId !== 4 
                    ? (
                      <ListItem>
                        <ListItemMeta
                          avatar={<Avatar src={item.avatarUrl} icon="user" />}
                          title={item.user}
                          description={item.comment}
                        />
                      </ListItem>
                    )
                    : (
                      <ListItem actions={[<Button type="link" icon="edit" />]}>
                        <ListItemMeta
                          avatar={<Avatar src={item.avatarUrl} icon="user" />}
                          title={<span>{item.user} <strong>(You)</strong></span>}
                          description={<TextArea placeholder="Your Comment..." rows={2} defaultValue={item.comment} />}
                        />
                      </ListItem>
                    )                  
                )}
              />
            </div>
          </Card>
        </Col>
        <Col xs={24} md={10} lg={8} xl={6}>
          <Row gutter={24}>
            <Col xs={12} md={24}>
              <Card title="Upcoming" className="text-center btm-spacing">
                <ul className="list-inline">
                  <li><Tooltip title="Suyog Khanal"><Avatar className="upcoming">SK</Avatar></Tooltip></li>
                  <li><Tooltip title="Krishan Giri"><Avatar className="upcoming">KG</Avatar></Tooltip></li>
                </ul>
              </Card>
            </Col>
            <Col xs={12} md={24}>
              <Card title="Past/Previous" className="text-center btm-spacing">
                <ul className="list-inline">
                  <li><Tooltip title="Jayraj Bhatta"><Avatar className="previous">JB</Avatar></Tooltip></li>
                  <li><Tooltip title="Ved Chaudhary" ><Avatar className="previous">VC</Avatar></Tooltip></li>
                  <li><Tooltip title="Projesh Sindhukar" ><Avatar className="previous">PS</Avatar></Tooltip></li>
                  <li><Tooltip title="Nischal Raj Budhathoki" ><Avatar className="previous">NB</Avatar></Tooltip></li>
                </ul>
                <MonthPicker placeholder="Select Month"/>
              </Card>
            </Col>
            <Col xs={24} md={24}>
              <Card title="Schedule" className="calendar text-center">
                <Calendar fullscreen={false} />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      
    )
  }
}

export default DashboardComponent;