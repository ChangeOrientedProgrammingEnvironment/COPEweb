var assignOnClick = function( id ) {
    $( id + ' li input[type=button]' ).each( function(i, item) {
        $(item).click( {'id': id}, addInput )
    } )
}
var addInput = function(event) {
    var id = event.data.id
    $(id).append( '<li>' + $(id + ' li').last().html() + '</li>')
    var buttons = $(id + ' li input[type=button]')
    buttons.each( function(i, button) {
        if(i != buttons.length - 1) {
            $(button).remove();
        }
    })
    assignOnClick(id)
}

$('document').ready( function() {              
    assignOnClick('#steps_to_reproduce')
//    assignOnClick('#upload_images')

//    $('#upload_images li input[type=file]').each(function(i, fileInput) {
//        $(fileInput).change(validateImage);
//    } )
    
    $('#errorReportForm').submit(function() {
        // get all the inputs into an array.
        var $inputs = $('#errorReportForm :input');

        // not sure if you wanted this, but I thought I'd add it.
        // get an associative array of just the values.
        var values = {};
        var steps_to_reproduce = '<ol>'
        var error_description = '';
        var ide = '';
        var stack_trace = '';
        $inputs.each(function() {
            switch(this.name) {
                case 'step[]': 
                    steps_to_reproduce += '<li>' + $(this).val()+ '</li>';
                    break;
                case 'error_description': 
                    error_description = $(this).val()
                    break;
                case 'ide': 
                    ide = $(this).val()
                    break;
                case 'stack_trace': 
                    stack_trace = $(this).val()
                    break;
            } 
        });
        steps_to_reproduce += '</ol>'
        var callback = function() {
            $('#errorReportForm').trigger("reset");
        }
        sendErrorReportMail(ide, error_description, steps_to_reproduce, stack_trace, callback ) 
        
        return false;
    });
} )

function getExtension(filename) {
    var parts = filename.split('.');
    return parts[parts.length - 1];
}

function isImage(filename) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
    case 'jpg':
    case 'gif':
    case 'bmp':
    case 'png':
        return true;
    }
    return false;
}
var validateImage = function(event) { 
    if(!isImage($(this).val())) {
        alert('Image has unknown format. Allowed image formats: jpg,bmp,gif,png')
        $(this).val("");
    }
}
//var sendErrorReport = function(values) {
////    
////    
////    file = input.files[0];
////    fr = new FileReader();
////    fr.onload = receivedText;
////    //fr.readAsText(file);
////    fr.readAsDataURL(file);
////    console.log(values)
//}