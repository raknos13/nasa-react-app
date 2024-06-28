import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
	const [showModal, setShowModal] = useState(true);
	const [data, setData] = useState(false);
	const [loading, setLoading] = useState(false);

	function handleToggleModal() {
		setShowModal(!showModal);
	}

	useEffect(() => {
		async function fetchAPIData() {
			const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
			const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

			let today = new Date();
      console.log(today);
      today = today.toDateString();
      console.log(today);
			const localKey = `${today}`;
			if (localStorage.getItem(localKey)) {
				const apiData = JSON.parse(localStorage.getItem(localKey));
				setData(apiData);
				console.log(`fetched from cache`);
				return;
			}
			localStorage.clear();

			try {
				setLoading(true);
				const res = await fetch(url);
				const apiData = await res.json();
				localStorage.setItem(localKey, JSON.stringify(apiData));
				setData(apiData);
				console.log(`fetched from API`);
			} catch (e) {
				console.log(e.message);
			} finally {
				setLoading(false);
			}
		}
		fetchAPIData();
	}, []);

	return (
		<>
			{!loading ? (
				<Main data={data} />
			) : (
				<div className='loadingState'>
					<i className='fa-solid fa-gear'></i>
				</div>
			)}
			{showModal && (
				<Sidebar data={data} handleToggleModal={handleToggleModal} />
			)}
			{data && <Footer data={data} handleToggleModal={handleToggleModal} />}
		</>
	);
};

export default App;
