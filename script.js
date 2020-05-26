$(document).ready(()=>{
	$.ajax({url:'http://www.resturl-to-fetch-userstories',success:(result)=>{
		$('.usrStrArea').html(result);
	}});
});