const bttnScroll= document.querySelector("#bttnScroll")
	
	bttnScroll.addEventListener("click", function( ){

		window.scrollTo(0,0);
		window.scrollTo({

		top:50,
		left: 0,
		behavior: "smooth"
   
	});
		$("html,body").animate({scrollTop:0},"slow");
		
});


var panel = jsPanel.create({
    headerTitle: 'Welcome to my resume',
    theme:'crimson filled',
    position: 'center',
    panelSize: '800 400',
    callback: function() {
        this.content.innerHTML = ' <p class= "Sellam"> Welcome!</p> <p class="popup"> Thank you for chosing me for your next project. My resume will load in to let you know how I can help you.</p>'
    }
    ,animateIn: 'jsPanelFadeIn',
    animateOut: 'jsPanelFadeOut'
});

window.setTimeout(() => {panel.close(() => {});}, 10000);


const appearoptions = {

	threshold: 1,
	rootMargin: "0px 0px -150px 0 px "
};

const faders = document.querySelectorAll('.faders');
const appearOptions = {
};
const appearOnScroll = new IntersectionObserver
(function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})




	function myAge(){
		var output;
		var age = document.getElementById("input").value;


	switch (true) {
		case age <= 90 && age>=41:
			output = " You are at the right place";
			break;
		
		case age <= 40 && age >=26:
			output = "Oh well I guess I will help you ";
			break;
		
		case age <= 25 && age>=11:
			output= "You should probably learn this yourself ";
			break;
		
		case age<=10 && age >=1:
			output= "Im gonna call your mom , leave the computer ";
			break;
		
		default:
				output= " Do you even know how old you are ?";
	}
	document.getElementById("age").innerHTML = output;


}

const education  = ["OS” Fatima Gunić” Sarajevo, Bosnia and Herzegovina 2003-2010, 1st through 7th grade of elementary school",
				    "Carl von Weinberg Schule Frankfurt, Germany    2010-2013, 7th thought 10th grade of Elementary school",
					"5th Gymnasium of Sarajevo  March 2014,   Freshman Year of High School",
					"Lincoln Park High School   Chicago, Illinois       September 2014- June 2017, Sophomore year of High School until Graduation",
					"Des Moines Area Community College  Boone , Iowa   2017-2018, Freshman Year of College; Major: Computer Science and Engineering",
					"International University of Sarajevo, Bosnia and Herzegovina    2019-present,Senior Year of College; Major: CSE"];


let n = education.length;
/* after creating an array i have decided to make a for loop which will print the elements of the array as an unsorted list */
let text = "<ul>";
for (let i = 0; i < n; i++) {
  text += "<li>" + education[i] + "</li>";
}
text += "</ul>";

document.getElementById("arej").innerHTML = text;





