import { Icons } from '@inspectreplyai/themes/appImages';
import ROUTES from '../routes';
import Reports from '@inspectreplyai/modules/reports';
import Contractors from '@inspectreplyai/modules/Contractors';
import Notifications from '@inspectreplyai/modules/notifications';
import Profile from '@inspectreplyai/modules/profile';

export const bottomTabs = [
  {
    icon: Icons.reports,
    name: ROUTES.REPORTS,
    label: 'Reports',
    component: Reports,
  },
  {
    icon: Icons.contractors,
    name: ROUTES.CONTRACTORS,
    label: 'Contractors',
    component: Contractors,
  },
  {
    icon: Icons.notifications,

    name: ROUTES.NOTIFICATIONS,
    label: 'Notifications',
    component: Notifications,
  },
  {
    icon: Icons.profile,
    name: ROUTES.PROFILE,
    label: 'Profile',
    component: Profile,
  },
];