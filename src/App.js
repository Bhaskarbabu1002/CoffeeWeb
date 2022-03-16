import './App.scss';
import {Switch,Route } from "react-router-dom";
import Menubar from './Components/Menubar';
import CoffeQuotes from './Screens/CoffeeQuotes';
import CoffeNewsFeeds from './Screens/CoffeeNewsFeeds';
import GlobalRawCoffeePrices from './Screens/GlobalRawCoffeePrices';
import GlobalDifferentials from './Screens/GlobalDifferentials';
import Header from './Components/Header/Header';
import CoffeePriceEntry from './Screens/AdminScreens/CoffeeEntries/CoffeePriceEntry/CoffeePriceEntry';
import Footer from './Components/Footer/Footer';
import DifferentialsEntry from './Screens/AdminScreens/CoffeeEntries/DifferentialsEntry/DifferentialsEntry';
import FreightRateEntry from './Screens/AdminScreens/CoffeeEntries/FreightRateEntry/FreightRateEntry';
import CountrySelector from './Components/CountrySelector/';
import AddTradeBox from './Screens/AdminScreens/TradeBox/AddTradeBox';
import ListTraders from "./Screens/AdminScreens/TradeBox/ListTraders";
import EditTradeBox from './Screens/AdminScreens/TradeBox/EditTradeBox';
import ListNewsFeed from './Screens/AdminScreens/NewsFeed/ListNewsFeed';
import AddNewsFeed from './Screens/AdminScreens/NewsFeed/AddNewsFeed';
import UploadVideo from './Screens/AdminScreens/NewsFeed/UploadVideo';
import EditNewsFeed from './Screens/AdminScreens/NewsFeed/EditNewsFeed';
import ListUsers from './Screens/AdminScreens/Users/ListUsers';
import AddUser from './Screens/AdminScreens/Users/AddUser';
import CoffeeWeb from './Screens/CoffeeWeb';
import ProfileInformation from './Screens/AdminScreens/Users/AddUser/ProfileInformation';
import MyApproval from './Screens/AdminScreens/Users/MyApproval';
import EditUser from './Screens/AdminScreens/Users/EditUser';
function App() {
  return (
      <>
      <Header/>
        <Menubar/>
      <Switch>
          <Route exact path="/">
            {/* <div className='m-5 w-25'>
            <CountrySelector/>
            </div> */}
            <CoffeePriceEntry/>
            {/* <ListTraders/> */}
            </Route> 
            <Route exact path="/differentialsentry">
            <DifferentialsEntry/>
            </Route> 
            <Route exact path="/freightrateentry">
            <FreightRateEntry/>
            </Route> 
            <Route exact path="/addtradebox">
            <AddTradeBox/>
            </Route> 
            <Route exact path="/listtraders">
            <ListTraders/>
            </Route> 
            <Route exact path="/edittraders">
            <EditTradeBox/>
            </Route> 
            <Route exact path="/listnewsfeed">
            <ListNewsFeed/>
            </Route> 
            <Route exact path="/addnewsfeed">
            <AddNewsFeed/>
            </Route> 
            <Route exact path="/editnewsfeed">
            <EditNewsFeed/>
            </Route> 
            <Route exact path="/uploadvideo">
            <UploadVideo/>
            </Route> 
            <Route exact path="/listusers">
            <ListUsers/>
            </Route> 
            <Route path="/adduser">
            <AddUser/>
            </Route> 
            <Route path="/edituser">
            <EditUser/>
            </Route> 
            <Route exact path="/approvallist">
            <MyApproval/>
            </Route> 
            {/* <Route exact path="/profileinformation">
            <ProfileInformation/>
            </Route>  */}
            <Route exact path="/coffeeweb">
            <CoffeeWeb/>
            </Route> 
            <Route exact path="/coffequotes">
            <CoffeQuotes/>
            </Route> 
            <Route exact path="/coffenewsfeeds">
            <CoffeNewsFeeds/>
            </Route> 
            <Route exact path="/globalrawcoffeeprices">
            <GlobalRawCoffeePrices/>
            </Route> 
            <Route exact path="/globaldifferentials">
            <GlobalDifferentials/>
            </Route> 
         
      </Switch>
      <Footer/>
      </>
   
  );
}

export default App;
