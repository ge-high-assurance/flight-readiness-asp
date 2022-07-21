# flight-readiness-asp

Contains compliance checking of rules fro  AMA Rules for UAVs:

The AMA Rules are found here:
https://www.modelaircraft.org/sites/default/files/documents/100.pdf

The old BMAC rules are found here:
https://sites.google.com/site/burlingtonmodelairplaneclub/Home/ama-safety-code

Setting up the app for use
--------------------------

1) Fetch the sources of this repository using git clone
2) Run docker image saratge/docker-faa in interactive mode, while sharing the app's source with the container
     docker run -it -p 4000:3030 -v <folder containing app-faa source>:/pengines/apps/faa saratge/docker-faa
  
    For example if the path of folder containing app source is: 
      /home/someuser/flight-readiness-asp/tools/app-faa
    Then, the docker command would be:
     docker run -it -p 4000:3030 -v /home/someuser/flight-readiness-asp/tools/app-faa:/pengines/apps/faa saratutd/docker-faa
3) The docker run command from step 2 will launch the Pengines prolog server, enter admin username and password
    The admin username is "admin" and the admin password is "admin" (without the double quotes)
4) Go to localhost:4000, Pengines server home page will open
5) Go to admin page --> enter username and password --> go to Applications --> Under swish application, configure the field 
   "Maximum number of local slave pengines a master pengine can create" to 1000  --> Click on Apply
6) The app itself can be launched on the browser using: localhost:4000/apps/faa/index.html
