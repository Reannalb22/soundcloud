
// require("babel/polyfill")

// let fetch = require('./fetcher')

var $ = require('jquery'),
	React = require('react')

	console.log('all loaded up')





//---------------------------------------------------------------------

var MainView = React.createClass({
	render: function(){
		console.log(this)
		return(
			<div>
				<WelcomeTitle />
				<SearchBar />
				<AllzeData model = {this.props.model} />
			</div>
		)
	}
})

var WelcomeTitle = React.createClass({
	render: function(){
		return (
			<h1> Noise Moon </h1>
		)
	}
})

var SearchBar = React.createClass({
	render: function(){
		return(
			<input type = "text" placeholder = "Find your Favorite Track"/>
		)
	}
})

var AllzeData = React.createClass({
	
	// getInitialState: function(){
	// 	return {
	// 		focusId: null
	// 	}
	// },

	// _genPlayMusic = function(object){
	// 	return (<ToggleMusic focus = {this.state.focusId} parentCommunicator = {this._walkieTalkie} music = {object}>)
	// },

	// _walkieTalkie: function(musicId) {
	// 	this.setState({
	// 		focusId: musicId
	// 	})
	// },


	render: function(){
		var zeTitle = this.props.model.get('title')
		var playBackCount = this.props.model.get('playback_count')
		var favorites = this.props.model.get('favoritings_count')
		var stream = this.props.model.get('stream_url') + '?client_id=935d17e70d4cceb1377e8f7795d10c1d'
		var image
		if (this.props.model.get('artwork_url')){
			image = this.props.model.get('artwork_url')
		}
		else image = 'http://wallpaperswa.com/thumbnails/detail/20120708/headphones%20music%20black%20background%201366x768%20wallpaper_wallpaperswa.com_73.jpg'

		var albumImg = this.props.model.get('artwork_url')

	return (
		<div>
			<p id = "song_title"> {zeTitle} </p>
			<img src = {image}/> 
			<p> Plays: {playBackCount}</p>
			<p> Likes: {favorites} </p>
			
		</div>
		)
	}
})

// var Toggle Music = React.createClass({
// 	_handleClick: function(){

// 		SC.initialize({
// 	    client_id: '935d17e70d4cceb1377e8f7795d10c1d',
// 	    redirect_uri: 'callback.html'
// 	});

// 	var musicId = SC.stream('/tracks/13158665',{},function(player){
// 		player.play();

// 		})

// 	if (this.className === 'pause') this.props.parentCommunicator(null)
// 		else this.props.parentCommunicator(musicId)
// 	},

// 	render: function(){
// 		console.log(this.props.focusId)
// 		console.log('focus id above')



// 		return (
// 		<button type = "button" className = {this.className} onchange={this._handleClick}>Play/Pause</button>
// 			)
// 	}
// })

	



	


export default MainView



