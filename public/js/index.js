$(document).ready(function(){
    $('#btn').click(function(){

        pleaseWait('images/loader.gif', 'info', "height: 20px;width: 20px;display: inline-block;padding-left:5px;padding-right: 5px;", "font-size: 20px;color: red;display: inline-block;padding-left:5px;padding-right: 5px;", 'Please wait for something awesome..');


        //wait for something.. setTimeout is just used for example purposes.. In reality you could be waiting for a response from the server.
        setTimeout(function(){
            removePleaseWait('info');
        }, 5000);
    });
});