import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import HomeTab from '../../components/HomeTab';
// import Currency from '../../components/Sidebar/Currency';
import './DashboardPage.scss';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="container">
          <Sidebar />
          <main>
            <Switch>
              <Route path="/dashboard" component={HomeTab} />
              <Route />
              {/* <Route path="/currency" component={Currency} /> */}
            </Switch>
          </main>
        </div>
      </div>
    </>
  );
}
