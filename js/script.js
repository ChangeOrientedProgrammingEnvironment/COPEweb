var currentPage = '#home';

function loadHeaderAndFooter() {
	
	$.ajax('head.html', {
		dataType: 'html',
		success: function(data) {
			$('#head').html(data);
			if(window.pageId) {
				setHeaderButton(window.pageId);
			}
		}
	});
	
	$.ajax('bottom.html', {
		dataType: 'html',
		success: function(data) {
			$('#bottom').html(data);
		}
	});
}

function loadContent(fileName) {
	$.ajax(fileName, {
		dataType: 'html',
		success: function(data) {
			$('#content').html(data);
			
			init();
		}
	});
	
}

function setHeaderButton(pageName) {
	$('.header_button').each(function(i, elem) {
		$(elem).parent().removeClass('active')
	})
	$(pageName).parent().addClass('active')
}

function init() {
	if( $('#installation_instructions') ) {
          $('#installation_instructions').hide();
      }
      if( $('#uninstallation_instructions') ) {
          $('#uninstallation_instructions').hide();
      }
      if($('#copy_button')) {
          ShowLMCButton("http://cope.eecs.oregonstate.edu/client-recorder/", "COPY", null,"js/lmcbutton.swf", 'copy_button')
          $('#copy_button').css({
              'padding-right' : '10px'
          })
          
          //var t = 300;
          //setInterval( function() {
          //	$('#copy_button').fadeOut( t, function(){ $(this).fadeIn( t ); } );
          //}, 2*t);
      }
}

$(document).ready(function(){
	
	
	init()
	
	loadHeaderAndFooter()
	
	//$('#footer').css('margin-top',$(document).height() - ($('#header').height() + $('#content').height()  ) - $('#footer').height());
	//$('#footer').width($('#content').width());
	
});