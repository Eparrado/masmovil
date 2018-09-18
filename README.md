# masmovil

Phone catalog with React, Redux, Express and Axios
 
## Use

Make sure that you have node installed 
      
    node --version 
 or 
 
    node --v
    
If not, please install it (https://nodejs.org/es/)

Install Docker (https://docs.docker.com/install/)

Clone the repository:

    git clone https://github.com/Eparrado/masmovil.git


Install the dependencies:

    npm install
    cd client
    npm install

To start the application:

    cd client
    npm start

To run the server:

    (go back to the root folder)
    docker run -it -p 9000:3001 express-dockerizacion
    [* in case you have a permission error just add 'sudo' at the beginning of the command above *]

## <font color=red>IMPORTANT!</font>
You need to run the server and the application AT THE SAME TIME, otherwise the data from the api won't be accessible.

If you want to see the spinner component in action I recommend you to stop the server (ctrl+c) and update the app.

### Authors
[Estela Parrado](https://github.com/Eparrado), Front-end developer


 
 
 
 
 
 
