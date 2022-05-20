# flight-readiness-asp

Contains compliance checking of rules from BMAC AMA Rules for UAVs:

The BMAC rules are found here:
https://sites.google.com/site/burlingtonmodelairplaneclub/Home/ama-safety-code

Setting up the app for use
--------------------------

1) Fetch the sources of this repository using git clone
2) Run docker image saratge/docker-faa in interactive mode, while sharing the app's source with the container
     docker run -it -p 4000:4000 -v <folder containing app-faa source>:/pengines/apps/faa saratge/docker-faa
  
    For example if the path of folder containing app source is: 
      /home/someuser/flight-readiness-asp/tools/app-faa
    Then, the docker command would be:
     docker run -it -p 4000:4000 -v /home/someuser/flight-readiness-asp/tools/app-faa:/pengines/apps/faa saratge/docker-faa
3) The docker run command from step 2 will launch the Pengines prolog server, enter admin username and password
    The admin username is "admin" and the admin password is "admin" (without the double quotes)
4) The app itself can be launched on the browser using: localhost:4000/apps/faa/index.html
