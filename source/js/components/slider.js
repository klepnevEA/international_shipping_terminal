$( document ).ready(function() { 
    $("#circle").circliful({
       animationStep: 10,
       foregroundBorderWidth: 9,
       backgroundBorderWidth: 9,
       fontColor: '#ed7506',
       percent: 55,
       percentageY: 115,
       percentageTextSize: 40,
       backgroundColor: '#f1f2f7',
       foregroundColor: '#73b548',
    });
     $("#circle-2").circliful({
     	animationStep: 10,
     	foregroundBorderWidth: 9,
     	backgroundBorderWidth: 9,
     	fontColor: '#ed7506',
     	percent: 45,
     	percentageY: 115,
     	percentageTextSize: 40,
     	backgroundColor: '#f1f2f7',
     	foregroundColor: '#73b548',
    }); 
    
});

//Слайдер

$(".news-block__slide").slick({
    dots: true,
    arrows: false
});
