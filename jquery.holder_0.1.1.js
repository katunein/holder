/* 
 * Holder plugin v0.1.1
 * Simulate html5 placeholder text
 * (c)2014 Marco Gallardo - mio@katunein.com
 * Released under the MIT license
 */
(function($){

	$.fn.holder = function(options){

		var fm = this.find('input');

		fm.each(function() {
				var $this = $(this);
				var typ = $this.prop("type");
				switch (typ) {
					case "submit":
						break
					case "password":
						$this.prop('type','text');
						var text_view = $this.prop('alt');
						$this.val(text_view);
						$this.focus(function(){	
						        $(this).prop('type','password');
						        var value = $(this).val(); 
						        if (value === text_view) {  
						        	$(this).val("");
						        	$this.css('color','inherit');  
						        }  
						});
						$this.blur(function(){
						        var value = $(this).val();  
						        if (value === "") {
						            $this.prop('type','text');
						            $this.val(text_view);  
						        }  
						});
						break;
					default:
						var text_view = $this.prop('alt');
						$this.val(text_view);
						$this.focus(function(){  
						        var value = $this.val(); 
						        if (value === text_view) {  
						        	$this.val("");
						        	$this.css('color','inherit'); 
						        }  
						});
						$this.blur(function(){  
						        var value = $(this).val();  
						        if (value === "") {  
						            $this.val(text_view);  
						        }  
						});
						break;
				}
				
			});

			//Validate form option
			if (options.validate == true) {
				this.submit(function( event ) {
					fm.each(function() {
						var $this = $(this);
						var text_view = $this.prop('alt');
						if ($this.val() != text_view) {
							return;
						}
						else {
							$this.css('color','red');
						};
					});
					event.preventDefault();
				});
			};

	};

})(jQuery);