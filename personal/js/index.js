var uname=$('#name');
var email=$('#email');
var btn=$('#submit');
var comments=$('#comments');
btn.click(function () {
    
})
$.ajax({
	type:"POST",
	url:"php/index.php",
	data:{
        name:"name",
        email:'email',
        tex:'comments'
    }

});