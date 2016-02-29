import Router, {Route, RouteHandler, HistoryLocation, IndexRoute, NotFoundRoute}
    from 'react-router'
import React from 'react'
import {render} from 'react-dom'
import {DashboardPage, Layout, FullScreen, Payment, TermsAndConditionPage, AnalyticsPage}
    from './application/index'
import {LoginPage, RegisterPage, ResetPasswordPage, AccountsPage, ProfilePage, LoginFormPage,
    AfterRegisterPage, CustomerAgreementPage, CompleteRegistrationPage} from './user/index'
import CaseManagement from './issues/pages/CaseManagement'
import TeamManagement from './team_management/pages/TeamManagementPage'
import AccountManagement from './account_management/pages/AccountManagementPage'
import IssueView from './issues/pages/IssueView'
import IssuePrint from './issues/pages/IssuePrint'
import PickupManagement from './pickups/pages/PickupManagement'
import PickupView from './pickups/pages/PickupView'
import ActivateAccount from './user/pages/ActivateAccount'
import {replacePath, syncReduxAndRouter} from 'point-simple-router'
import UserStore from '../common/user/UserStore'
import ApplicationStore from '../common/application/ApplicationStore'
import RouterStore, {history, dispatch} from './../common/application/RouterStore'
import RouteNotFound from './application/pages/RouteNotFound'
import LabManagement from './lab/pages/LabManagementPage'
import AdvancedSearch  from './application/pages/AdvancedSearch'
import {register, DESKTOP_NOTIFICATIONS}
    from './../common/application/helpers/NotificationHelper'
import {setDefaultNotify} from '../base/resources/ApiRequest.jsx'
import {showSnack} from '../common/application/actions/application'
import CaseCreationPage from '../desktop/issues/components/CaseCreationPage'
setDefaultNotify(() => {ApplicationStore.dispatch(showSnack({show: true}))})

syncReduxAndRouter(history, RouterStore)
let {auth, user} = UserStore.getState();
register(DESKTOP_NOTIFICATIONS);
