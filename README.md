# Orderly

## Concept

Orderly is a program to help users organize their contacts and any jobs they may be interested in. The idea is, the user would see a new job posting on a platform, add the information regarding the position into their "job" library and be able to track their progress through the application and interview process. The user is also able to do the same thing for any relevant contacts they meet along the way. The platform also allows them to add notes regarding each contact and job, making the experience more memorable and trackable. As the user grows their library, they will be able to easily search and access this database to find companies they've historically applied to and contacts they may have at particular companies.  

## Technologies used
1. Node.js
2. Express
3. Mongoose
4. JSX
5. Bootstrap
6. CSS

## Approach

### Step One - Setting up
I created a server, two models and two controllers (one for contacts and one for jobs. I had to use, express and mongoose. I also created a separate views folder the jobs and contacts, each with their own index, edit, new, and show route. I created a public css folder but mainly used Bootstrap for my framework.

### Step Two - Creating the 7 restful routes
I created 7 restful routes that allowed the user to create a new contact and job, see all the jobs and contacts they created, as well as edit and delete each item. 

I am also trying to successfully create a search route, that allows the users to search both the contacts and jobs database. The idea is to have user also be able to click on each found item in the search, and bring it back to the show page of that item.

### Step Three - Adding Bootstrap and CSS
I created Default.jsx, and two separate CSS files to add in all the design. 

### Step 4 - Uploading to Heroku 
Link: https://orderly-project.herokuapp.com/

## Challenges

### Listing jobs

I initially wanted the site to incorporate APIs from popular job search websites, such as linkedIn or Indeed. However, I was unable to get the actual API without authorization, and could not sign up for authorization without being a real company/having a real site. I then tried to look into web scraping to render the data in another format. However, this was very time consuming, and I came into many road blocks with site security. My last resort was trying to use and iFrame to show the websites directly on my site. However, the sites could not be rendered due to security problems. Ultimately, I left this portion out.

### Search Route
The search route is still not fully functioning and needs to be updated, so when the user searches any word, or even a partial word, they can return with anything in the database that remotely resembles the search. It currently only pulls from the contact name, or company name.


## Future Goals:

### Design 
There is still a lot of improvements to be had with the CSS/Boostrap design. Some items include fixing white spacing from bootstrap, adjusting the location of the footer so it actually shows up at the bottom of the page, adjusting the size of the contact photos to all be similar size, and making the form more visible on the front page. I would also like to I would also like to add more response design to make the site more mobile friendly


### API
Adding actual API data from outside sources

### Image options
I was not able to get my dummy image to show up if the user does not upload a photo of the contact

## App Demo 
Please take a look at my project 
[Orderly](https://github.com/zchen92/jobHunt/)

## Acknowledgements 
Big thanks to Madeline O'moore, Bruno DaSilva, Arthur Bernier Jr, and "Nando" Tavarez with helping me put this game together.
