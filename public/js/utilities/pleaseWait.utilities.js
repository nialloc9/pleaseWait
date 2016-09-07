
//PLEASE WAIT
function pleaseWait(pathToGiph, infoAreaId, imageStyleString, messsageStyleString, message){

    //param check

    if(pathToGiph.length > 0 && infoAreaId.length > 0){

        //assign variables
        var area = '#' + infoAreaId;
        var imageStyle = '';
        var messageStyle = '';

        //image class check
        if(imageStyleString.length > 0){
            imageStyle = imageStyleString;
        }

        //message class check
        if(messsageStyleString.length > 0){
            messageStyle = messsageStyleString;
        }

        //add please wait
        $(area).html(
            "<img src = '" + pathToGiph + "' style='"+ imageStyle +"'/>" +
            "<p style= '" + messageStyle + "'>" + message + "</p>"
        );
    }
}

//REMOVE PLEASE WAIT
function removePleaseWait(infoAreaId){

    //assign variables
    var area = '#' + infoAreaId;

    $(area).html('');
}
