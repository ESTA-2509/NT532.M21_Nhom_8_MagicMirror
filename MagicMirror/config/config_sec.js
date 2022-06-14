
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
						url: "https://calendar.google.com/calendar/ical/nth221025%40gmail.com/private-0488ceaf4afecb0fbd9f75a7fc0d37ba/basic.ics"
					}
				]
			}
		},
		{
			module: "weather",
			position: "top_right",
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
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: 'MMM-SmartTouch',
			position: 'bottom_center',    // This can be any of the regions.(bottom-center Recommended)
			config: {
				// The config property is optional.
				}
		},		
		{
			module: "compliments",
			position: "lower_third",
			config: {
				compliments: {
					anytime: ["Hey there!"],
					morning: ["Good morning!","Have a lucky day!","Let’s make this day beautiful."],
					afternoon: ["Good afternoon!","Stay strong and positive.","Everything will be all well"],
					evening: ["Good evening!","Hi, sexy!","You look nice!"],
					"....-01-01": ["Happy new year!"],
					"....-10-22": ["Happy birthday!"],
					day_sunny:["Today is a sunny day", "It's a beautiful day"],
					rain:["Ít's raining","Don't forget take your umbrella!"]
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
            module: "MMM-GoogleAssistant",
            position: "fullscreen_above",
            config: {
              debug: false,
              assistantConfig: {
                  lang: "en-US",
                  latitude: 10.762622,
                  longitude: 106.660172,
              },
              responseConfig: {
                  useScreenOutput: true,
                  screenOutputCSS: "response_output.css",
                  sceenOutputTimer: 5000,
                  screenRotate: false,
                  activateDelay: 250,
                  useAudioOutput: true,
                  useChime: true,
                  newChime: false,
                  useNative: false,
                  playProgram: "mpg321"
              },
              micConfig:{
                  recorder: "arecord",
                  device:"plughw:2"
              },
              snowboy:{
                  useSnowboy: true,
                  usePMDL: false,
                  audioGain: 2.0,
                  Frontend: true,
                  Model: "jarvis",
                  Sensitivity: null
              },
              A2DServer:{
                  useA2D: true,
                  stopCommand:"stop",
                  useYouTube: true,
                  youtubeCommand: "youtube",
                  displayResponse: true
              },
              recipes: ["with-MMM-TelegramBot.js"],
              NPMCheck: {
                  useChecker: true,
                  delay: 10 * 60 * 1000,
                  useAlert: true
              }
            }
        },
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
