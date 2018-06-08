$(function() {
				var $oli = $(".xuan .small_pic ul li");
				var $uli = $(".xuan .xiaotu ol li");
				$oli.addClass("hide");
				$oli[0].className = "show";
				var $a = 0;
				
				$uli.mouseover(function() {
					var index = $(this).index();
					
					
					$oli.removeClass().addClass("hide");
					$oli.eq(index).removeClass().addClass("show");
					
				});
				
					
					$uli.mouseover(function(){
						
					$uli.css({'border':'none'})
					
						$(this).css({'border':'2px solid #ea6896',})
					
				})
				$('.ys').click(function(){
						
						if(($a -1) *365 > -parseInt($('.ul2').css('width'))){
						$('.ul2').css('margin-left',(--$a * 71) +'px')
							if($('.ul2').css('margin-left') != 0){
								$('.zs').css({'color':'#666','cursor':'pointer'})
								$('.ys').css({'color':'#ccc','cursor':'default'})
							}
						}else {
							
							return;
						}
					
//					console.log($('.ul2').css('width'))	
//						console.log($a)
				})
					$('.zs').click(function(){
						
						
						if($a < 0){
							var $aa =(++$a * 71) + 'px';
//							console.log($aa)
						$('.ul2').css('margin-left',$aa)												
						}
//						console.log($a)
						if($a == 0){
							$('.ys').css({'color':'#666','cursor':'pointer'})
							$('.zs').css({'color':'#ccc','cursor':'default'})
						}
					})
					
//				
//			{'color':'#CCCCCC','cursor':'default'}
				
})