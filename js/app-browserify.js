// es5 and 6 polyfills, powered by babel
require("babel/polyfill")

let fetch = require('./fetcher')

var $ = require('jquery'),
	Backbone = require('backbone'),
	React = require('react')

console.log("js loaded")

import MainView from "./MainView.js"

//------------------Collection--------------------

var SoundCollection = Backbone.Collection.extend({
	url: 'https://api.soundcloud.com/tracks/',
	// tracks: '13158665',
	clientId: '935d17e70d4cceb1377e8f7795d10c1d'
})


//--------------------Model------------------------

var SoundModel = Backbone.Model.extend({
	url: 'https://api.soundcloud.com/tracks/13158665',
	clientId: '935d17e70d4cceb1377e8f7795d10c1d'
})

//----------------------------Router------------------------------

var SoundRouter = Backbone.Router.extend({


	routes: {
		'home': 'getHome'
	},


	getData: function(){
		var self = this
		var deferredObj = this.sm.fetch({
				// url: `${this.sm.url}/${id}.js`,
				data: {
					// tracks: self.sm.tracks,
					client_id: self.sm.clientId

				},
				processData: true,
				dataType: 'json'
			})
			return deferredObj
	},

	renderSoundCloud: function(){
		console.log('routing is happening')
		React.render(<MainView model = {this.sm} />, document.querySelector("#container"))
	},

	getHome: function(){
		var boundToRender = this.renderSoundCloud.bind(this)
		var deferredObj = this.getData()
		deferredObj.done(boundToRender)
	},


	initialize: function(){
		location.hash = 'home'
		this.sc = new SoundCollection()
		this.sm = new SoundModel()
		Backbone.history.start()
	}
})

var sound = new SoundRouter()



