import { useState } from 'react';
import SideNavBar from './layout/SideNavBar';
import Banner from './components/banner/Banner';
import MainPage from './components/homePage/MainPage';
// import Footer from './components/footer/Footer';
import Header from './layout/Header';
import logo from './assets/Concrete-Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [showNav, setShowNav] = useState(false);
	const [showExitIcon, setShowExitIcon] = useState(false);

	return (
		<>
			<Header
				toggleNav={() => setShowNav(!showNav)}
				toggleIcon={() => setShowExitIcon(!showExitIcon)}
				logo={logo}
				display={showExitIcon}
			/>
			<SideNavBar show={showNav} logo={logo} />
			<Banner />
			<MainPage />
			{/* <Footer /> */}
		</>
	);
}

export default App;
