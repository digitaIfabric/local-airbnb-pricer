# local-airbnb-pricer

## Inspiration
#### Finding how to profitably price an AirBnb listing was a huge hassle. One would have to find similar apartments and look at prices there. Why not have a deep learning algorithm do it for you. Geared to make your listing optimally priced!

## What it does
#### It takes data from historic AirBnB listings and data about the surrounding area from Local Logic's API. This factors in amenities near your listings like Resturants, Grocery Stores, Nightlife to give a data driven estimate for price. It trains a deep neural network regressor to determine the price. Saving the host all the hassle.

## How we built it
#### Using APIs, JS, Python, perserverance and a huge lack of sleep(that always ends well). :)

#### We engineered features, preprocessed them. applied MinMax Scaling and label encoding to process our data

#### We implemented a 4 layer deep neural network, with 512, 256, 128, 64 nodes, passing a total of 186k parameters. We added batch normalization, adamax optimization. Our activation functions utilised Squeaky ReLU activations.

#### We also added a dropout layer to prevent overfitting.

## Challenges we ran into
#### Making the Local Logic API work

## Accomplishments that we're proud of
#### We hacked the local logic API. The API wasnt working, but we were able to get results to display as an embeded widget. So we automated requests and then scraped the generated widget to get the required features.

#### Also built a neural network in Keras. :)

## What we learned
#### API Docs aren't all friendly. But Pandas are!!

## What's next for AirBnB Price Generator
#### Generalize for all cities that have AirBnb data. Make us rich in the process. Possibly get acquired by AirBnb.

## Built With
#### Python, keras, tensorflow, Node.js, google maps api, google geocoding API, Local Logic API

## Screenshots
![main](https://github.com/digitalfabric92/local-airbnb-pricer/blob/google-maps/images/screeshot1.png)
