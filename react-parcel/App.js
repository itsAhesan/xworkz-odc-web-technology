import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="header">
      <h2>Food App</h2>
    </div>
  );
};
let Body = () => {
  return (
    <div className="body">
     <h1>Pizza</h1>
      <h3>Cheesilicious pizzas to make every day extraordinary.</h3>
      <h5>Restaurants to explore</h5>

      <div className="food-items">
        {resobj.map((restaurant) => (
          <Card
            key={restaurant.card.card.info.id}
            resobj={restaurant}
          />
        ))}
      </div>
    </div>
  );
};


let Card = ({ resobj }) => {
  console.log(resobj);
  const info = resobj.card.card.info;
  return (
    <div className="card">
      <div className="card-img">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            info.cloudinaryImageId
          }
        />
      </div>
      <div className="card-details">
        <h2>{info.name}</h2>
        <h4>
          {info.avgRatingString}⭐ {info.sla.slaString}
        </h4>
        <p>{info.cuisines.join(", ")}</p>
        <p>{info.locality}</p>
      </div>
    </div>
  );
};

const resobj =[

    {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "971800",
              "name": "Easybites By Empire",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/11/6/cc315e68-f423-4745-8707-0695d4d25bf5_fe53fd0c-eb14-456b-8863-b340ba28a248.png",
              "locality": "Basavanagudi",
              "areaName": "Basavanagudi",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Burgers",
                "sandwich",
                "Fast Food",
                "Beverages",
                "Rolls & Wraps"
              ],
              "avgRating": 4.6,
              "parentId": "443171",
              "avgRatingString": "4.6",
              "totalRatingsString": "1.1K+",
              "promoted": true,
              "adTrackingId": "cid=00137fe5-f8a0-4ebe-b121-d60aec5c8643~p=1~adgrpid=00137fe5-f8a0-4ebe-b121-d60aec5c8643#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=971800~plpr=COLLECTION~eid=011dff96-a720-443c-a91b-29623aa9075b~srvts=1766518666156~collid=83631",
              "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 4.5,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "4.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-12-24 03:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {

                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "00137fe5-f8a0-4ebe-b121-d60aec5c8643"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=971800&source=collection&query=Pizza",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "755276",
              "name": "La Pino'z Pizza",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/8/1d2048dd-cded-4f9a-a3f6-9e9efc82a942_4ef3f79c-eafc-4247-bc37-3dc262e135ee.JPG",
              "locality": "Pulikeshi Nagar",
              "areaName": "Pulikeshi Nagar",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.3,
              "parentId": "4961",
              "avgRatingString": "4.3",
              "totalRatingsString": "3.5K+",
              "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 4.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-12-24 02:30:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹79",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.0",
                  "ratingCount": "188"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=755276&source=collection&query=Pizza",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "981134",
              "name": "Gochick By Imperio",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/25/e1d39ab3-de1c-444c-9aab-88926849ebf3_981134.jpg",
              "locality": "5th Block",
              "areaName": "Koramangala",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Burgers",
                "Fast Food",
                "Rolls & Wraps",
                "Salads",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.3,
              "parentId": "481855",
              "avgRatingString": "4.3",
              "totalRatingsString": "854",
              "promoted": true,
              "adTrackingId": "cid=2fe42503-236f-4eef-ba0f-4e813ed5e322~p=2~adgrpid=2fe42503-236f-4eef-ba0f-4e813ed5e322#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=981134~plpr=COLLECTION~eid=0a5ce8b0-edfc-4bc7-b378-9f8ff50deba4~srvts=1766518666156~collid=83631",
              "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 7,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "7.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-12-24 05:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹49",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "2fe42503-236f-4eef-ba0f-4e813ed5e322"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=981134&source=collection&query=Pizza",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "770772",
              "name": "Olio - The Wood Fired Pizzeria",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/19/00b17cb8-0b58-4ad5-b115-848bdd9eb1de_770772.JPG",
              "locality": "Ali Askar Road",
              "areaName": "Central Bangalore",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Fast Food",
                "Snacks",
                "Beverages",
                "Desserts"
              ],
              "avgRating": 4.3,
              "parentId": "11633",
              "avgRatingString": "4.3",
              "totalRatingsString": "1.1K+",
              "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-12-24 06:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Gourmet",
                          "imageId": "newg.png"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹119",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=770772&source=collection&query=Pizza",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },

       {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "336831",
              "name": "Onesta",
              "cloudinaryImageId": "512d59fd11380ed1b181c3c8b983e230",
              "locality": "Basaveshwara Nagar",
              "areaName": "Basaveshwara Nagar",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Italian",
                "Desserts",
                "Pizzas",
                "American",
                "Snacks"
              ],
              "avgRating": 3.4,
              "parentId": "11785",
              "avgRatingString": "3.4",
              "totalRatingsString": "6.7K+",
              "promoted": true,
              "adTrackingId": "cid=2a1d502a-3e51-4910-951e-62bf49db466a~p=4~adgrpid=2a1d502a-3e51-4910-951e-62bf49db466a#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=336831~plpr=COLLECTION~eid=db8a877c-f72d-4f3f-9c62-ea74f776f74e~srvts=1766518666156~collid=83631",
              "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 7.1,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "7.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-12-24 04:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹49",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.0",
                  "ratingCount": "1.3K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "2a1d502a-3e51-4910-951e-62bf49db466a"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=336831&source=collection&query=Pizza",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "10575",
              "name": "Pizza Hut",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/5d703bb8-2414-4ab1-bcae-59bba6a52598_10575.JPG",
              "locality": "Richmond Town",
              "areaName": "Central Bangalore",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "Pizzas"
              ],
              "avgRating": 4.3,
              "parentId": "721",
              "avgRatingString": "4.3",
              "totalRatingsString": "11K+",
              "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-12-24 05:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹49",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.2",
                  "ratingCount": "2.3K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=10575&source=collection&query=Pizza",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1009125",
              "name": "Caro Napoli Pizza",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/12/4/d10c55df-88dc-426e-99a3-aac0dd07ce8c_bd676cc7-90d1-4796-8358-a4bdc99dd7c8.jpg",
              "locality": "Hoysala Nagar",
              "areaName": "Indiranagar",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Fast Food",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.3,
              "parentId": "576432",
              "avgRatingString": "4.3",
              "totalRatingsString": "377",
              "promoted": true,
              "adTrackingId": "cid=ce12b77e-4ee6-444a-a63a-15c1cf517572~p=7~adgrpid=ce12b77e-4ee6-444a-a63a-15c1cf517572#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1009125~plpr=COLLECTION~eid=21381e2e-3740-40da-8372-8872cf975cdc~srvts=1766518666156~collid=83631",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 6.3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-12-24 04:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹270",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "ce12b77e-4ee6-444a-a63a-15c1cf517572"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1009125&source=collection&query=Pizza",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      }
    
  ];

 

const Footer = () => {
  return (
    <div className="footer">
      <h4>© 2025 Food App</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
