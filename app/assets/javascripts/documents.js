$('.attachment_tile a').live("click",function(e){
	e.preventDefault();
	
	var download_link = this;

	if($('.player').length > 0 && $('.attachment_tile.selected').length==1){
		removePlayers();
		return;
	}
	if(this.type == "Audio"){
		removePlayers();
		$(this).parent().parent().addClass("selected");
		$('body').append("<audio class='player' autoplay='autoplay' id='audio_player' src='"+this+"' controls='controls'></audio>");
		$('body').append("<a href='"+download_link+"'><img id='downloadButton' src='assets/formats/default.png' /></a>");
		return;
	}
	if(this.type == "Video"){
		removePlayers();
		$(this).parent().parent().addClass("selected");
		var show = (this+"").split('/download')[0];
		show = show.replace("documents","videos");
		$('body').append("<video class='player' autoplay='autoplay' id='video_player' src='"+show+"?style=webm' controls='controls'></video>");		
		$('body').append("<a href='"+download_link+"'><img id='downloadButton' src='assets/formats/default.png' /></a>");
		return;
	}
	if(this.type == "Picture"){
		removePlayers();
		$(this).parent().parent().addClass("selected");
		$('body').append("<img class='player' id='picture_player' src='"+download_link+"' />");		
		$('body').append("<a href='"+download_link+"'><img id='downloadButton' src='assets/formats/default.png' /></a>");
	}
});

function removePlayers(){
	$('.attachment_tile').removeClass("selected");
	$('.player').remove();
	$('#downloadButton').remove();
}

$('#closeButton').live("click",function(){
	removePlayers();
});