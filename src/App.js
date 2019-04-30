import React, { Component  } from 'react';
/*Tugas2*/
import Header from './page/Header';
import Footer from './page/Footer';
import MenuUtama from './page/MenuUtama';
import MenuTentangKami from './page/MenuTentangKami';
import MenuKontak from './page/MenuKontak';
import MenuMakanan from './page/MenuMakanan';

class App extends Component {
		render() {
				return (
						<div>
								<Header/>
								<MenuUtama/>
								<MenuTentangKami/>
								<MenuKontak/>
								<MenuMakanan/>
								<Footer/>
						</div>
				);
		}
}
export default App;
