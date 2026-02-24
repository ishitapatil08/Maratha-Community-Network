import { createBrowserRouter } from 'react-router';
import { Welcome } from './pages/Welcome';
import { OTP } from './pages/OTP';
import { ProfileSetup } from './pages/ProfileSetup';
import { Home } from './pages/Home';
import { Marketplace } from './pages/Marketplace';
import { Subscription } from './pages/Subscription';
import { PaymentSuccess } from './pages/PaymentSuccess';
import { AddBusiness } from './pages/AddBusiness';
import { BusinessPending } from './pages/BusinessPending';
import { Matrimonial } from './pages/Matrimonial';
import { Chat } from './pages/Chat';
import { ChatDetail } from './pages/ChatDetail';
import { Profile } from './pages/Profile';
import { BusinessDetail } from './pages/BusinessDetail';
import { MatrimonialDetail } from './pages/MatrimonialDetail';
import { AdminPanel } from './pages/AdminPanel';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Welcome,
  },
  {
    path: '/otp',
    Component: OTP,
  },
  {
    path: '/profile-setup',
    Component: ProfileSetup,
  },
  {
    path: '/home',
    Component: Home,
  },
  {
    path: '/marketplace',
    Component: Marketplace,
  },
  {
    path: '/business/:id',
    Component: BusinessDetail,
  },
  {
    path: '/subscription',
    Component: Subscription,
  },
  {
    path: '/payment-success',
    Component: PaymentSuccess,
  },
  {
    path: '/add-business',
    Component: AddBusiness,
  },
  {
    path: '/business-pending',
    Component: BusinessPending,
  },
  {
    path: '/matrimonial',
    Component: Matrimonial,
  },
  {
    path: '/matrimonial/:id',
    Component: MatrimonialDetail,
  },
  {
    path: '/chat',
    Component: Chat,
  },
  {
    path: '/chat/:id',
    Component: ChatDetail,
  },
  {
    path: '/profile',
    Component: Profile,
  },
  {
    path: '/admin',
    Component: AdminPanel,
  },
]);