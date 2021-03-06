export default {
	"creative": {
		"language": {
			"English": {
				"type": "image",
				"url": "./img/mc.jpg?city={{city}}"
			},
			"Japanese": {
				"type": "image",
        		"url": "./img/mc.jpg?city={{city}}"
			},
			"Other": {
				"type": "image",
       			"url": "./img/mc.jpg?city={{city}}"
			}
		}
	},
	"headline": {
		"language": {
			"English": {
				"city": {
					"Krakow": {
						"weather&&day": { // attention here!
							"Rainy|Cloudy&&Monday": "What a dull Monday",
							"Rainy|Cloudy&&Tuesday|Wednesday|Thursday": "What a bad rainy middle of week :(",
							"Sunny|Cloudy&&Friday": "Not rainy TGIF",
							"ANY&&Saturday": "weekend",
							"ANY&&Sunday": "weekend",
							"Other": "other"
						}
					},
					"Other": {
                        "style": "color: blue",
                        "text": ["Headline random1", "Headline random2", "Headline random3"]
                    }
				}
			},
			"Japanese": "マクドナルド",
			"Other": "McDonald"
		}
	},
	"description": {
		"timeOfDay": {
			"Morning": "good morning!!!",
			"Other": "It's {{day}} {{timeOfDay}} (everything except morning)"
		}
    },
	"cta": {
		"os": {
			"iOS": {
				"text": "20% discount for Apple lovers!",
				"url": "tel:00000"
			},
			"Other": {
				"device&&weather": {
					"Mobile&&Raining": {
						"text": "Call Us Now",
						"url": "tel:1300300300"
					},
					"Other": {
						"text": "Order Now",
						"url": "https://www.mcdonalds.com/us/en-us/mcdelivery.html"
					}
				}
			}
		}
	}
}