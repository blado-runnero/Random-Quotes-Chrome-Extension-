
$(function(){

	var quotes = [
"Create the highest, grandest vision possible for your life, because you become what you believe",
 "When you cant find the sunshine, be the sunshine", 
 "The grass is greener where you water it",
 "Wherever life plants you, bloom with grace",
 "So, what if, instead of thinking about solving your whole life, you just think about adding additional good things. One at a time. Just let your pile of good things grow",
 "Little by little, day by day, what is mean for you WILL find its way",
 "Do not forget you are human. Its okay to have a meltdown. Just dont unpack and live there. Cry it out. Then refocus on where youre headed",
 "An arrow can only be shot by pulling it backward. When life is dragging your back with difficulties, it means its going to launch you into something great. So just focus, and keep aiming",
 "A great attitude makes a great day which becomes a great month which becomes a great year which becomes a great life",
 "I am in charge of how I feel and today I am choosing happiness",
 "Happiness is letting go of what you think your life is supposed to look like and celebrating it for everything that it is",
 "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely",
 "Learn from yesterday, live for today, hope for tomorrow",
 "Take time to do what makes your soul happy",
 "Be so happy that when others look at you, they become happy too",
 "The sun is a daily reminder that we too can rise again from the darkness, that we too can shine our own light",
 "Believe. Act as if. Live like you already have it. Its coming"
 ];


		var y = Math.floor(Math.random() * 16); ;
		$('#greet').text(quotes[y]);
})
