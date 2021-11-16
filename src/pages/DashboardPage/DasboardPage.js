import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
// import Currency from '../../components/Sidebar/Currency';
import './DashboardPage.scss';
// import Transactions from '../../components/Transactions';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="container">
          <Sidebar />
          <main>
            <Switch>
              <Route />
              <Route />
              {/* <Route path="/currency" component={Currency} /> */}
            </Switch>
          </main>
        </div>
      </div>
    </>
  );
}
