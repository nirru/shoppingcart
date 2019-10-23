import {compose} from 'redux';
import Home from '../components/Home/Home';
import {requiresAuth} from '../HOC/requireAuth';
import {drawerHoc} from '../HOC/drawerHoc';
import Pool from '../components/Pool/Pool';
import Profile from '../components/Profile/Profile';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import UserDetail from '../components/Home/UserDetail/UserDetail';
import Subscription from '../components/subsription/Subscription';
import AddPlan from '../components/subsription/AddPlan';
import UpdatePlan from '../components/subsription/UpdatePlan';
import Transaction from '../components/transaction/Transaction';
import PoolDetail from '../components/Pool/PoolDetail';
import survey from '../components/survey/Survey';
import Statistics from '../components/statistics/Statistics';
import TipsList from '../components/tips/TipsList';
import AddTips from '../components/tips/AddTips';
import UserList from '../components/Home/UserList/UserList';
import UpdateTips from '../components/tips/UpdateTips';

export const HocDashboard = compose(requiresAuth,drawerHoc)(Home);

export const HocPool = compose(requiresAuth,drawerHoc)(Pool);

export const HocPoolDetail = compose(requiresAuth,drawerHoc)(PoolDetail);

export const HocProfile = compose(requiresAuth,drawerHoc)(Profile);

export const HocUSerList = compose(requiresAuth,drawerHoc)(UserList);

export const HocUSerDetail = compose(requiresAuth,drawerHoc)(UserDetail);

export const HocSubscription = compose(requiresAuth,drawerHoc)(Subscription);

export const HocAddPlan = compose(requiresAuth,drawerHoc)(AddPlan);

export const HocUpdatePlan = compose(requiresAuth,drawerHoc)(UpdatePlan);

export const HocTransaction = compose(requiresAuth,drawerHoc)(Transaction);

export const HocSurvey = compose(requiresAuth,drawerHoc)(survey);
export const HocStatistics = compose(requiresAuth,drawerHoc)(Statistics);

export const HocTipsList = compose(requiresAuth,drawerHoc)(TipsList);
export const HocAddTipsList = compose(requiresAuth,drawerHoc)(AddTips);
export const HocUpdateTip = compose(requiresAuth,drawerHoc)(UpdateTips);

export const HocAbout = drawerHoc(About);

export const HocContact = drawerHoc(Contact);