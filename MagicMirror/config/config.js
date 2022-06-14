/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	electronOptions: {
		webPreferences: {
		  webviewTag: true
		}
	  },
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "vn",
	locale: "vn-VN",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				showSunTimes: true,
				showMoonTimes: true,
				lat: 10.762622,
				lon: 106.660172,
			}
		},
		{
			module: "calendar",
			header: "My Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-alt",
						url: "https://calendar.google.com/calendar/ical/vi.vietnamese%23holiday%40group.v.calendar.google.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "TP.HCM",
				locationID: "1566083", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "5126d9966f03b8d5e89d7de092ecd572",
				colored: true,
				fade: false,
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Current Weather",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "TP.HCM",
				locationID: "1566083", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "5126d9966f03b8d5e89d7de092ecd572",
				degreeLabel: true,
				showHumidity: true,
				useKmh: true,
				showWindDirectionAssArrow: true,
			}
		},
		{
            module: "MMM-LocalTemperature",
            position: "top_right", // Only add a position if you want this module to display the data
            header: "Room Temperature",
            config: {
				pinScheme: "WPI",
				sensorPin: 2, // For GPIO 22
				iconView: true,
				updateInterval: 5,
                units: "metric",
				showTemperature: true,
				showHumidity: true,
				temperatureText: "Temperature: {temperature}°C",
				humidityText: "Humidity: {humidity}%"
                // See below for more Configuration Options
            }
        },
		{
			module: "compliments",
			position: "bottom_center",
			config: {
				compliments: {
					anytime: ["Hey there!"],
					morning: ["Good morning!","Have a lucky day!","Let’s make this day beautiful."],
					afternoon: ["Good afternoon!","Stay strong and positive.","Everything will be all well"],
					evening: ["Good evening!","Hi, sexy!","You look nice!"],
					"....-01-01": ["Happy new year!"],
					"....-10-22": ["Happy birthday!"],
					day_sunny:["Today is a sunny day", "It's a beautiful day"],
					rain:["It's raining","Don't forget take your umbrella!"]
				},
				updateInterval: 20 * 1000,//20s
				fadeSpeed: 5 * 1000, //5s
				morningStartTime: 5,
				morningEndTime: 12,
				afternoonStartTime: 12,
				afternoonEndTime: 18,
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Tuoi Tre",
						url: "https://tuoitre.vn/rss/tin-moi-nhat.rss"
					},
					{
						title: "Thanh nien",
						url: "https://thanhnien.vn/rss/home.rss"
					},
					{
						title: "VnExpress",
						url: "https://vnexpress.vn/rss/tin-noi-bat.rss"
					},
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
		  module: "MMM-GoogleAssistant",
		  position: "top_left",
		  configDeepMerge: true,
		  config: {
			debug: false,
			assistantConfig: {
                  lang: "en-US",
                  latitude: 10.762622,
                  longitude: 106.660172,
				  deviceRegistred: true
             },
            responseConfig: {
			  useFullscreen: true,
			  useResponseOutput: true,
			  responseOutputCSS: "response_output.css",
			  screenOutputTimer: 5000,
			  activateDelay: 250,
			  useAudioOutput: true,
			  useChime: true,
			  confirmationChime: true,
			  useInformations: true
			},
			micConfig: {},
		    Extented: {
		      useEXT: true,
			  deviceName: "MagicMirror",
			  stopCommand: "stop",
				youtube: {
				  useYoutube: true,
				  youtubeCommand: "youtube",
				  displayResponse: true,
				  useVLC: true,
				  minVolume: 30,
				  maxVolume: 100
				},
				links: {
				  useLinks: true,
				  displayDelay: 60 * 1000,
				  scrollActivate: false,
				  scrollStep: 25,
				  scrollInterval: 1000,
				  scrollStart: 5000
				},
				welcome: {
					useWelcome: true,
					welcome: "brief today"
				},
				cast: {
				useCast: true,
				  port: 8569
				},
				spotify: {
				useSpotify: true,
					visual: {
						updateInterval: 1000,
						idleInterval: 10000,
						useBottomBar: true,
						CLIENT_ID: "7d9e9c1937284d8d93c60225e780244d",
						CLIENT_SECRET: "23126c6de06641658bacc5334087b6fa",
					},
					player: {
					type: "Librespot",
					  email: "nth221025@gmail.com",
					  password: "Hung_2754",
					  minVolume: 10,
					  maxVolume: 90,
					  usePause: true
					}
				 },
		    },
			
		    recipes: ["with-MMM-pages.js", "EXT-Spotify.js"],
		    NPMCheck: {}
		  }
		},
		{
		  module: 'Gateway'
		},
		{
		  module: "EXT-Detector",
		  position: "top_left",
		  configDeepMerge: true
		},
		{
		  module: 'EXT-Spotify',
		  position: 'top_center',
		  configDeepMerge: true,
		  config: {
			updateInterval: 1000,
			idleInterval: 10000,
			useBottomBar: false,
			CLIENT_ID: "7d9e9c1937284d8d93c60225e780244d",
			CLIENT_SECRET: "23126c6de06641658bacc5334087b6fa",
		  }
		},
		// {
			// module: 'MMM-DHT22',
			// position: 'top_right',
			// config: {
				// sensorPIN: 2, // For GPIO 27
				// updateInterval: 5, // Minutes    
			// },
		// },
		{
			module: "MMM-NotificationTrigger",
			config: {
				useWebhook:true,
				triggers:[
				{
					trigger: "IFTTT_TEST",
					fires: [
					{
						fire:"SHOW_ALERT",
						payload: (payload) => {return payload}
					},
					],
				},
			]}
		},
		// {
			// module: 'MMM-SmartTouch',
			// position: 'bottom_bar',    // This can be any of the regions.(bottom-center Recommended)
			// config: {
				// }
		// },
		// {
			// module: "MMM-Face-Recognition-SMAI",
			// position: "top_center",
			// config: {
			// }
		// }
		{
		  module: "EXT-YouTubeCast",
		  position: "top_center", // optional (can be deleted if using fullscreen)
		  config: {
			  
			debug: false,
			fullscreen: false,
			alwaysDisplayed: false,
			castName: "MagicMirror",
			port: 8569
		  }
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
