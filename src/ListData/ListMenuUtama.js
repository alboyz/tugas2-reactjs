import React, { Component } from 'react'



class ListMenuUtama extends Component {

		render () {
			console.log(this.props.ab)
				return (
						<div>
								<h1>
										<center>Selamat Datang Di Warung Nusantara2</center>
										<img
												src={this.props.ab}
												alt="Masakan Nusantara"
												width="600"
										/>
								</h1>
						</div>
				)
		}
}


export default ListMenuUtama
