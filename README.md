# js-assignment
````
instructions.txt has the instructions to run the service

````
### News Endpoints

#### Create Match News

endpoint - **http://localhost:3000/news/match/{matchId}**
requestBody :
{
    "title" : "News Title",
    "description" : "News Description"
}


#### Create Tour News

endpoint - **http://localhost:3000/news/tour/{tourId}**
requestBody :
{
    "title" : "News Title",
    "description" : "News Description"
}



#### Fetch News

**Fetch News by Match ID* : **http://localhost:3000/news/match/get/{matchId}**
**Fetch News by Tour ID* : **http://localhost:3000/news/tour/get/{tourId}**
**Fetch News by Sport ID* : **http://localhost:3000/news/sport/get/{sportId}**