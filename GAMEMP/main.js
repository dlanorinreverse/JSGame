		jQuery(document).ready(function(){

				var score = 0;

			function game_over(){
				jQuery('.mole1').animate({'top':'100%'},900);
				jQuery('.mole1').stop(false,true);
				jQuery('.mole2').animate({'top':'100%'},900);
				jQuery('.mole2').stop(false,true);
				jQuery('.mole3').animate({'top':'100%'},900);
				jQuery('.mole3').stop(false,true);
				jQuery('.mole4').animate({'top':'100%'},900);
				jQuery('.mole4').stop(false,true);
				jQuery('.mole5').animate({'top':'100%'},900);
				jQuery('.mole5').stop(false,true);
				jQuery('.score').html('GAME OVER');
			}

			function start (){
				score = 0;
				
				jQuery('.score').html('Score: ' + score);
				
				jQuery('.mole1').animate({'top':'0%'}, 8000, function(){
					game_over();
				});	
				jQuery('.mole2').animate({'top':'0%'}, 8000, function(){
					game_over();
				});
				jQuery('.mole3').animate({'top':'0%'}, 8000, function(){
					game_over();
				});
				jQuery('.mole4').animate({'top':'0%'}, 8000, function(){
					game_over();
				});
				jQuery('.mole5').animate({'top':'0%'}, 8000, function(){
					game_over();
				});
				
			}

			
			jQuery('.mole1').click(function(){
				jQuery(this).css('background-image', 'url(sad1.png)');
				jQuery(this).stop().animate({'top':'85%'},1000, function(){
					score = score + 1;
					jQuery('.score').html('Score: ' + score);
					jQuery(this).css('background-image', 'url(happy1.png)');
					jQuery(this).animate({'top':'0%'}, 6000);
				});
			});


			jQuery('.mole2').click(function(){
				jQuery(this).css('background-image', 'url(sad2.png)');
				jQuery(this).stop().animate({'top':'85%'},1000, function(){
					score = score + 1;
					jQuery('.score').html('Score: ' + score);					
					jQuery(this).css('background-image', 'url(happy2.png)');
					jQuery(this).animate({'top':'0%'}, 6000);
				});
			});
			
			jQuery('.mole3').click(function(){
				jQuery(this).css('background-image', 'url(sad3.png)');
				jQuery(this).stop().animate({'top':'85%'},1000, function(){
					score = score + 1;
					jQuery('.score').html('Score: ' + score);					
					jQuery(this).css('background-image', 'url(happy3.png)');
					jQuery(this).animate({'top':'0%'}, 6000);
				});
			});
			jQuery('.mole4').click(function(){
				jQuery(this).css('background-image', 'url(sad4.png)');
				jQuery(this).stop().animate({'top':'85%'},1000, function(){
					score = score + 1;
					jQuery('.score').html('Score: ' + score);					
					jQuery(this).css('background-image', 'url(happy4.png)');
					jQuery(this).animate({'top':'0%'}, 6000);
				});
			});
			jQuery('.mole5').click(function(){
				jQuery(this).css('background-image', 'url(sad5.png)');
				jQuery(this).stop().animate({'top':'85%'},1000, function(){
					score = score + 1;
					jQuery('.score').html('Score: ' + score);
					jQuery(this).css('background-image', 'url(happy5.png)');
					jQuery(this).animate({'top':'0%'}, 6000);
				});
			});
			start();
		});