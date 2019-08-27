import {compose} from 'redux';
import Home from '../components/Home/Home';
import {requiresAuth} from '../HOC/requireAuth';
import {drawerHoc} from '../HOC/drawerHoc';
import Pool from '../components/Pool/Pool';
import Profile from '../components/Profile/Profile';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

export const HocDashboard = compose(requiresAuth,drawerHoc)(Home);

export const HocPool = compose(requiresAuth,drawerHoc)(Pool);

export const HocProfile = compose(requiresAuth,drawerHoc)(Profile);

export const HocAbout = drawerHoc(About);

export const HocContact = drawerHoc(Contact);