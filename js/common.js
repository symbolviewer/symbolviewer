		function goback()
		{
			window.history.back();
		}
		function cpz(obj)
		{
			var	r									= document.createRange ( );
			r.selectNode							(obj);
			window.getSelection().addRange			(r);
			document.execCommand					('copy');
			window.getSelection().removeAllRanges	( );
		//	alert									('copied' + '  '+ obj.innerHTML);
			alert									('[ ' + obj.innerHTML + ' ]' + ' copied to clipboard.');
		}
