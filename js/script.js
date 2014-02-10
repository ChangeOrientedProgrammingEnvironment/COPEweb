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
					
				//$('#copy_button').animate(
					//{opacity:0},200,"linear",function(){
						//$(this).animate({opacity:1},200);
						//$(this).fadeIn('slow', function() { } );
					// }
				// );
				
				var t = 300;
				setInterval( function() {
					$('#copy_button').fadeOut( t, function(){ $(this).fadeIn( t ); } );
				}, 2*t);
			}
		}
	});
	
}

function setPage(page) {
	
	if(typeof page != 'string') { // if link is clicked
		page = '#' + this.href.split('#')[1]; 
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
	
	//currentPage = path;
	
   
}

$(document).ready(function(){
	
	setPage(currentPage)
	
	$('.header_button').each(function(item) {
		if(this.href == currentPage) {
			setPage(currentPage);
		}
		this.onclick = setPage;
	})
	
});