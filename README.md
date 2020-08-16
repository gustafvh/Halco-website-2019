# Halco Personal Website 2019


## Reason for project
As part of my now 4-year old **new year-new website tradtion** I wanted to build a website entirely from scratch with HTML/CSS with a focus on speed and simplicty. **I wanted to make the loading time as small as possible, almost instant.** No additional bootstraping tools were to be used. The website is responsive and adapted for smartphones as well. 

## Hosting/Network Routing
The most suprising challenge with this website was not to build it, but to actually host it in such a way that **1. its easy to deploy continuously** and **2. take advantage of its speed to achive the goal of nearly instant loading.** Problem #1 was solved by hosting it on Firebase since, thanks to their SDK CLI I could easily push any changed files, and only those, to the server serving static files. Firebases quick setup and additional features made it an easy choice for this use-case.

As for Problem #2 it wasnt as straight forward. I wanted to handle everything from AWS, but since no big cloud provider sells .se domain names (halco.se for ex.) I had to go via a web hotel, Loopia. However, their loading times were not acceptable to me and I had to look for a work-around. What I did was the following:
1. Bought the domain name halco.se from Loopia. 
2. Upload static files to a firebase hosting server which comes with a URL.
2. Transfered the domain names admin-rights to AWS Route 53.
3. Create a DNS A-record in AWS to point to Firebase server.


**This allowed me to serve the website in 600ms**

You can find the website (directly on the firebase server) here: 
https://halco-website.web.app 

This is currently not my newest website that is on the halco.se domain. The newest website you can find here: 
https://github.com/gustafvh/gatsbyjs-halco-website
