import React, { Component } from 'react';
import '@vaadin/vaadin-board/vaadin-board.js';
import '@vaadin/vaadin-grid';

// Charts do not work yet.
import '@vaadin/vaadin-charts';

import './Dashboard.css';
import OrdersCounter from './OrdersCounter';
import ColumnChart from './ColumnChart';
import YearlySales from './YearlySales';
import ProductSplit from './ProductSplit';
import OrderList from './OrderList';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <vaadin-board>
          <vaadin-board-row>
            <OrdersCounter count="4" overall="8" countColor="#55BF3B" displayChart="true" title='Remaining Today' subtitle='Next Delivery 16:00' />
            <OrdersCounter count="1" title='Not Available' subtitle='Delivery tomorrow' countColor="#ff473a"/>
            <OrdersCounter count="159" title='New' subtitle='Last just added' countColor="#1877f3"/>
            <OrdersCounter count="2" title='Tomorrow' subtitle='First Delivery 08:00' countColor="rgba(45, 71, 105, 0.7)"/>
          </vaadin-board-row>
          <vaadin-board-row>
            <ColumnChart title="Deliveries in October" name="Deliveries" values='[6,4,7,4,5,7,8,8,5,3,{ "y": 10, "className": "latest"},0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]' categories='["1","2","3",4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]'></ColumnChart>
            <ColumnChart title="Deliveries in 2017" name="Deliveries" values='[160,143,174,142,58,94,183,182,153,132,{ "y": 89, "className": "latest"},0]' categories='["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]'></ColumnChart>
          </vaadin-board-row>
          <vaadin-board-row>
          <YearlySales />
          </vaadin-board-row>
          <vaadin-board-row class="lastRow">
            <ProductSplit />
            <OrderList />
          </vaadin-board-row>
        </vaadin-board>
      </div>
    );
  }
}

export default Dashboard;
