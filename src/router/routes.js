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

export const HocDashboard = compose(requiresAuth,drawerHoc)(Home);

export const HocPool = compose(requiresAuth,drawerHoc)(Pool);

export const HocProfile = compose(requiresAuth,drawerHoc)(Profile);

export const HocUSerDetail = compose(requiresAuth,drawerHoc)(UserDetail);

export const HocSubscription = compose(requiresAuth,drawerHoc)(Subscription);

export const HocAddPlan = compose(requiresAuth,drawerHoc)(AddPlan);

export const HocUpdatePlan = compose(requiresAuth,drawerHoc)(UpdatePlan);

export const HocAbout = drawerHoc(About);

export const HocContact = drawerHoc(Contact);