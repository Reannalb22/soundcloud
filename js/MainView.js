
// require("babel/polyfill")

// let fetch = require('./fetcher')

var $ = require('jquery'),
	React = require('react')

	console.log('all loaded up')





//---------------------------------------------------------------------

var MainView = React.createClass({
	
	componentDidMount: function(){
		this.props.model.on("update sync", this.forceUpdate.bind(this))
	},


	render: function(){
		console.log(this)
		return(
			<div>
				<WelcomeTitle />
				<SearchBar />
				<AllzeData player = {this.props.player} model = {this.props.model} />
			</div>
		)
		//model and player being passed from the router
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
	
	_searchHandler: function(event){
		if (event.keyCode === 13){
			var inputEl = event.target,
				name = inputEl.value
			location.hash = `search/${name}`
		}
	},
	

	render: function(){
	
		return(
			<input type = "text" placeholder = "Find your Favorite Track" onKeyDown = {this._searchHandler}/>
		)
	}
})



var AllzeData = React.createClass({

	
	render: function(){
		console.log(this.props.model.attributes)
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
			<p id="likes"> Likes: {favorites} </p>
			<Playbox player = {this.props.player} id = {this.props.model.get('id')} />
		</div>
		)
	}
})

var Playbox = React.createClass({
	
	getInitialState: function(){
		return {
			trackPlayer: null
		}
	},

	componentDidMount: function(){
		if (this.state.trackPlayer) 
			this.state.trackPlayer.toggle()
	},

	
	play : function(){
		SC.stream(`/tracks/${this.props.id}`).then(function(player){
			player.toggle()
			this.setState({trackPlayer: player}).bind(Playbox)

		});
	},


	render: function(){
		console.log(this.props.model)
		// var focusId = this.props.model.id 

		// var id = this.props.id 
		
		return(
			<button onClick={this.play} id = "button">Play</button>
		)
	}
})


export default MainView










// var isPlaying = false

// var play = function(){
// 	isPlaying = true;
// 	something.play()
// }
// var pause =  function(){
// 	isPlaying = false;
// 	something.pause()
// }

// something.isPlaying








// if (oracle.isplaying) this.state.player.pause()


// TO ADDRESS: 

// primary: make sure you can access the player as a property on the
	// component, so that you can pause a playing track

// secondary: write in some logic (or just use toggle) so that
	// you pause if clicked while playing, and play if clicked
	// while paused.




















