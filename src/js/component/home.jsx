import React from "react";

//include images into your bundle
import NavBar from "./Navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid px-0">
			<NavBar/>
		</div>
	);
};

export default Home;
