import { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import AuthScreen from './screens/AuthScreen';
import NewHome from './screens/buyer/NewHome';
import ShopScreen from './screens/buyer/ShopScreen';
import ProductDetail from './screens/buyer/ProductDetail';
import ExperiencesHome from './screens/buyer/ExperiencesHome';
import ExperiencesList from './screens/buyer/ExperiencesList';
import ExperienceDetail from './screens/buyer/ExperienceDetail';
import CartScreen from './screens/buyer/CartScreen';
import CheckoutScreen from './screens/buyer/CheckoutScreen';
import ProfileScreen from './screens/buyer/ProfileScreen';
import OrdersScreen from './screens/buyer/OrdersScreen';
import BookingsScreen from './screens/buyer/BookingsScreen';
import NotificationsScreen from './screens/buyer/NotificationsScreen';
import AdminDashboard from './screens/admin/AdminDashboard';
import AdminProducts from './screens/admin/AdminProducts';
import AdminExperiences from './screens/admin/AdminExperiences';
import AdminOrders from './screens/admin/AdminOrders';
import AdminProfile from './screens/admin/AdminProfile';
import PWAInstaller from './components/PWAInstaller';

export type Screen =
  | 'splash'
  | 'onboarding'
  | 'auth'
  | 'buyer-home'
  | 'shop'
  | 'product-detail'
  | 'experiences-home'
  | 'experiences-list'
  | 'experience-detail'
  | 'experiences' // Alias for experiences-home
  | 'cart'
  | 'checkout'
  | 'profile'
  | 'orders'
  | 'bookings'
  | 'notifications'
  | 'admin-dashboard'
  | 'admin-products'
  | 'admin-experiences'
  | 'admin-orders'
  | 'admin-profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedExperience, setSelectedExperience] = useState<any>(null);
  const [searchDestination, setSearchDestination] = useState<string>('');

  const { user, loading } = useApp();

  // Configure meta tags for iOS fullscreen
  useEffect(() => {
    // Set viewport meta tag for iOS
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');

    // iOS standalone mode
    let appleWebAppCapable = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
    if (!appleWebAppCapable) {
      appleWebAppCapable = document.createElement('meta');
      appleWebAppCapable.setAttribute('name', 'apple-mobile-web-app-capable');
      document.head.appendChild(appleWebAppCapable);
    }
    appleWebAppCapable.setAttribute('content', 'yes');

    // iOS status bar style
    let appleStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (!appleStatusBar) {
      appleStatusBar = document.createElement('meta');
      appleStatusBar.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
      document.head.appendChild(appleStatusBar);
    }
    appleStatusBar.setAttribute('content', 'black-translucent');

    // Theme color
    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(themeColor);
    }
    themeColor.setAttribute('content', '#ffffff');

    // Mobile web app title
    let appleTitle = document.querySelector('meta[name="apple-mobile-web-app-title"]');
    if (!appleTitle) {
      appleTitle = document.createElement('meta');
      appleTitle.setAttribute('name', 'apple-mobile-web-app-title');
      document.head.appendChild(appleTitle);
    }
    appleTitle.setAttribute('content', 'Origen');
  }, []);


  useEffect(() => {
    console.log('App State:', { currentScreen, loading, userRole: user?.role });

    // Auto-navigate if user is logged in but stuck on splash or auth
    if (!loading && user) {
      const authScreens: string[] = ['splash', 'auth', 'onboarding'];
      if (authScreens.includes(currentScreen as string)) {
        const target: Screen = user.role === 'admin' ? 'admin-dashboard' : 'buyer-home';
        console.log('Auto-navigating to:', target);
        setCurrentScreen(target);
      }
    }

    // Simulate splash screen delay for unauthenticated users
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        if (!loading && !user) {
          setCurrentScreen('onboarding');
        }
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [user, loading, currentScreen]);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'onboarding':
        return <OnboardingScreen onComplete={() => setCurrentScreen('auth')} />;
      case 'auth':
        return <AuthScreen onAuthSuccess={(role) => {
          setCurrentScreen(role === 'buyer' ? 'buyer-home' : 'admin-dashboard');
        }} />;
      case 'buyer-home':
        return <NewHome
          onNavigate={(screen) => setCurrentScreen(screen as Screen)}
          onProductSelect={(product) => {
            setSelectedProduct(product);
            setCurrentScreen('product-detail');
          }}
        />;
      case 'shop':
        return <ShopScreen
          onNavigate={(screen) => setCurrentScreen(screen as Screen)}
          onProductSelect={(product) => {
            setSelectedProduct(product);
            setCurrentScreen('product-detail');
          }}
        />;
      case 'product-detail':
        return <ProductDetail
          product={selectedProduct}
          onNavigate={(screen) => setCurrentScreen(screen as Screen)}
        />;
      case 'experiences-home':
      case 'experiences':
        return <ExperiencesHome
          onNavigate={(screen) => setCurrentScreen(screen as Screen)}
          onSearch={(dest) => {
            setSearchDestination(dest);
            setCurrentScreen('experiences-list');
          }}
        />;
      case 'experiences-list':
        return <ExperiencesList
          destination={searchDestination}
          onNavigate={(screen) => setCurrentScreen(screen as Screen)}
          onExperienceSelect={(exp) => {
            setSelectedExperience(exp);
            setCurrentScreen('experience-detail');
          }}
        />;
      case 'experience-detail':
        return <ExperienceDetail
          experience={selectedExperience}
          onNavigate={(screen) => setCurrentScreen(screen as Screen)}
        />;
      case 'cart':
        return <CartScreen onNavigate={(screen) => setCurrentScreen(screen as Screen)} />;
      case 'checkout':
        return <CheckoutScreen onNavigate={(screen) => setCurrentScreen(screen as Screen)} />;
      case 'profile':
        return <ProfileScreen onNavigate={(screen) => setCurrentScreen(screen as Screen)} />;
      case 'orders':
        return <OrdersScreen onNavigate={(screen) => setCurrentScreen(screen as Screen)} />;
      case 'bookings':
        return <BookingsScreen onNavigate={(screen) => setCurrentScreen(screen as Screen)} />;
      case 'notifications':
        return <NotificationsScreen onNavigate={(screen) => setCurrentScreen(screen as Screen)} />;
      case 'admin-dashboard':
        return <AdminDashboard onNavigate={(screen) => setCurrentScreen(screen as Screen)} />;
      case 'admin-products':
        return <AdminProducts onNavigate={(screen) => setCurrentScreen(screen as Screen)} />;
      case 'admin-experiences':
        return <AdminExperiences onNavigate={(screen) => setCurrentScreen(screen as Screen)} />;
      case 'admin-orders':
        return <AdminOrders onNavigate={(screen) => setCurrentScreen(screen as Screen)} />;
      case 'admin-profile':
        return <AdminProfile onNavigate={(screen) => setCurrentScreen(screen as Screen)} />;
      default:
        return <SplashScreen />;
    }
  };

  return (
    <div className="relative w-full h-[100dvh] bg-white overflow-hidden max-w-[430px] mx-auto shadow-2xl border-x border-gray-100 flex flex-col">
      {renderScreen()}
      <PWAInstaller />
    </div>
  );
}
