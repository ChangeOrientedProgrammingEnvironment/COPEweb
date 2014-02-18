var currentPage = '#home';
        
function loadContent(fileName) {
	$.ajax(fileName, {
		dataType: 'html',
		success: function(data) {
			$('#content').html(data);
			
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
			init();
		}
	});
	
}

function setPage(page) {
	
	if(typeof page != 'string') { // if link is clicked
		if(this.href) {
			page = '#' + this.href.split('#')[1]; 
		} else {
			page = '#' + this.id.split('#')[1]; 
		}
	} else {
		if (window.location.hash) {
			page = window.location.hash
		}
	}
	currentPage = page;
	
	if(page) {
		loadContent(page.substr(1) + '.html')
	} else {
		loadContent('home.html')
	}
	
	$('.header_button').each(function(i) {
		$(this.parentElement).removeClass('active');
	});
	
	$($('a[href=' + page + ']')[0].parentElement).addClass('active')
	
	init()
}

function init() {
	$('.header_button').each(function(item) {
		if(this.href == currentPage) {
			setPage(currentPage);
		}
		this.onclick = setPage;
	})
}

$(document).ready(function(){
	
	setPage(currentPage)
	
	init()
	
	//$('#footer').css('margin-top',$(document).height() - ($('#header').height() + $('#content').height()  ) - $('#footer').height());
	//$('#footer').width($('#content').width());
	
});