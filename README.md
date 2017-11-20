# local-airbnb-pricer

## Team Members
- [Daoud Piracha](https://github.com/daoudpiracha)
- [David Wawryko](https://github.com/digitalfabric92)
- [Zaid Yahya](https://github.com/zaidyahya)
- [Tanjiha Mahmoud](https://github.com/Tanjiha)

## Inspiration
##### Finding how to profitably price an Airbnb listing was a huge hassle. One would have to find similar apartments and look at prices there. Why not have a deep learning algorithm do it for you. Geared to make your listing optimally priced!

## What it does
##### It takes data from historic Airbnb listings and data about the surrounding area from Local Logic's API. This factors in amenities near your listings like Resturants, Grocery Stores, Nightlife to give a data driven estimate for price. It trains a deep neural network regressor to determine the price. Saving the host all the hassle.

## How we built it
##### Using Deep Learning, APIs, JS, Python, perserverance and a huge lack of sleep(that always ends well). :)
##### We used Local Logic API to generate additional datasets to increase the scope and vision of our features used to predict the price.
##### We engineered features, preprocessed them. applied MinMax Scaling and label encoding to process our data
##### We implemented a 4 layer deep neural network, with 512, 256, 128, 64 nodes, passing a total of 186k parameters. We added batch normalization, adamax optimization. Our activation functions utilised Squeaky ReLU activations.
##### We also added a dropout layer to prevent overfitting.
##### We also ran the model and compared performances to tune hyper parameters for a better prediction.


## Challenges
##### Building a deep learning model and Making the Local Logic API work

## Accomplishments
##### We hacked the local logic API. The API wasnt working, but we were able to get results to display as an embeded widget. So we automated requests and then scraped the generated widget to get the required features.

##### Also built a pretty cool neural network in Keras. :) No seriously, check it out!!

## What we learned
##### API Docs aren't all friendly. But Pandas are!! Keras ftw!!

## What's next?
##### Generalize for all cities that have Airbnb data.
## Built With
##### Python, keras, tensorflow, node.js, google maps api, google geocoder API, Local Logic API

## Screenshots
![1](https://github.com/digitalfabric92/local-airbnb-pricer/blob/google-maps/images/screenshot1.png)
![2](https://github.com/digitalfabric92/local-airbnb-pricer/blob/google-maps/images/screenshot2.png)
![3](https://github.com/digitalfabric92/local-airbnb-pricer/blob/google-maps/images/screenshot3.png)
