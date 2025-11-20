# Documentation
This file describes how to maintain and edit the Grussmayer website, including the github settings. 
Generally, I would recommend staying within the templates design and write your site in markdown according to the template under \_pages. 
If you wish to include more advanced visualisations etc, try your luck with an own html file and stylesheets. 
If I find time I will include a guide for this as well, but the LLM of your choice will probably be more suited for this by now. 


# Overall appearance
The site is based on the minimal-mistakes theme adapted by Ricardo Henriques lab for lab websites as opposed to the original personal portfolio. A lot of features have been stripped to make maintenance as low-effort as possible. 


## Structure
Main categories of the website are governed by following factor: 
- which items under collections in _config.ywl, to include in the website building
- the subfolder in the main folder (e.g. root/_hardware/...) to collect content for that catagory / collection. 
- the main page for that category / collection under root/_pages/, which can be markdown (recommended) or html. 
- appearance of the collection in the navigation bar at the top via root/_data/navigation.yml








Moritz Engelhardt, 14/11/25