import React, { Component  } from 'react';
import MenuUtama from './tugas1/page/MenuUtama';
import MenuProduct from './tugas1/page/MenuProduct'

const Header = () =>{
		return (
				<div>
						<h4>Halaman Header</h4>
				</div>
		)
}


const Footer = () => {
		return (
				<div>
						<h4>Halaman Footer</h4>
				</div>
		)
}

class App extends Component {
		render() {
				return (
						<div>
								<Header/>
								<MenuUtama/>
								<MenuProduct/>
								<Footer/>

						</div>
				);
		}
}

export default App;
