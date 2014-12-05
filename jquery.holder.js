/* 
 * Holder plugin v0.1.0
 * Simulate html5 placeholder text
 * (c)2014 Marco Gallardo - mio@katunein.com
 * Released under the MIT license
 */
(function($) {
	$.fn.extend({
		holder: function() {
			this.each(function() {
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
		}
	});
})(jQuery)