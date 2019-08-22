import {compose} from 'redux';
import drawerHoc from '../HOC/drawerHoc';
import Home from '../components/Home/Home';
import requireAuth from '../HOC/requireAuth';
import {composeComponents} from '../utility/reducers';

export const HocDashboard = compose(requireAuth,drawerHoc)(Home);

// export const HocDashboard = composeComponents(Home, [
//   c => requireAuth(c),
//   c => drawerHoc(c),
// ]);



