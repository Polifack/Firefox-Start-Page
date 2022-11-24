const CONFIG = {
    // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
    // ├┴┐├─┤└─┐││  └─┐
    // └─┘┴ ┴└─┘┴└─┘└─┘
  
    // General
    name: 'Poli',
    imageBackground: false,
    openInNewTab: true,
    twelveHourFormat: false,
  
    // Greetings
    greetingMorning: 'Good morning!',
    greetingAfternoon: 'Good afternoon,',
    greetingEvening: 'Good evening,',
    greetingNight: 'Go to Sleep!',
  
    // Weather
    weatherKey: '4e178321f26fbd963a893751c286c4c3',
    weatherIcons: 'weather', // 'Nord', 'Dark', 'White'
    weatherUnit: 'C', // 'F', 'C'
    language: 'en', // More languages in https://openweathermap.org/current#multi
  
    trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
    defaultLatitude: '37.775',
    defaultLongitude: '-122.419',
    
    // Links
    lists: {
      firstList: [
        {
          name: 'Outlook',
          link: 'https://www.outlook.com/',
        },
        {
          name: 'Overleaf',
          link: 'https://www.overleaf.com/project',
        },
        {
          name: 'CampusVirtual',
          link: 'https://campusvirtual.udc.gal/',
        },
        {
          name: 'GitHub',
          link: 'https://github.com/polifack',
        },
      ],
      secondList: [
        {
          name: 'Twitter',
          link: 'https://twitter.tweetdeck.com/',
        },
        {
          name: 'Reddit',
          link: 'https://reddit.com/',
        },
        {
          name: 'WhatsApp',
          link: 'https://web.whatsapp.com',
        },
        {
          name: 'Telegram',
          link: 'https://web.telegram.org/',
        },
      ],
      thirdList: [
        {
          name: 'Youtube',
          link: 'https://youtube.com/',
        },
        {
          name: 'Twitch',
          link: 'https://twitch.tv/',
        },
        {
          name: 'Spotify',
          link: 'https://open.spotify.com/',
        },
        {
          name: 'Netflix',
          link: 'https://www.netflix.com/',
        },
      ],
      fourthList: [
        {
          name: 'PS4',
          link: 'dlpsgame.com/ps4',
        },
        {
          name: 'Movies',
          link: 'rarbg.prx.to',
        },
        {
          name: 'Roms',
          link: 'cdromance.com',
        },
        {
          name: 'Anime',
          link: 'nyaa.si',
        }
      ],
    },
  };