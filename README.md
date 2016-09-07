# pleaseWait
This is an awesome please wait app that will make a loading icon appear and a message for the user while JavaScript is doing something else. It is built with reuse-ability as a key feature.  

#Instructions
1. Make sure jQuery is available to the page you will be using this app on.
2. When you want to the loading icon and message to appear use the funciton pleaseWait(pathToGif, infoAreaId, imageStyleString, messsageStyleString, message)

    *pleaseWiat param:*
    
    pathToGif: The path to the image or gif you will be using.
    
    infoAreaId: The id where you want the app to appear.
    
    imageStyleString: Add you styling in a string "" for the image/gif.
    
    messsageStyleString: Add you styling in a string "" for the message.
    
    message: The message you want to appear.

3. When you want the app to dissappear call the function: removePleaseWait(infoAreaId)

    *removePleaseWait param:*
    
    infoAreaId: The id of where the app is.
    

#Example
         $(document).ready(function(){
             $('#btn').click(function(){
         
                 pleaseWait('images/loader.gif', 'info', "height: 20px;width: 20px;display: inline-block;padding-left:5px;padding-right: 5px;", "font-size: 20px;color: red;display: inline-block;padding-left:5px;padding-right: 5px;", 'Please wait for something awesome..');
         
         
                 //wait for something.. setTimeout is just used for example purposes.. In reality you could be waiting for a response from the server.
                 setTimeout(function(){
                     removePleaseWait('info');
                 }, 5000);
             });
         });

#NB
Please feel free to suggest anything that would improve this app
