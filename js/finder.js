/* Sym <-> CP Converter */

		function cp_to_sym ( )
		{
			txt				= document.getElementById	('input-cp-id').value;
			dst				= document.getElementById	('output-sym-id');

			num 			= parseInt					('0x' + txt, 16);

		//	if (txt.substring(0,2)=="0x")
		//			num 	= parseInt					(txt, 16);
		//	else	num 	= parseInt					(txt);

			dst.innerHTML	= String.fromCodePoint		(num);
		}
		function sym_to_cp ( )
		{
			txt				= document.getElementById	('input-sym-id').value;
			dst				= document.getElementById	('output-cp-id');
			out				= "";

			for (var i=0; i<txt.length; ++i)
			{
				cp			= txt.codePointAt			(i);
				if (cp != txt.charCodeAt (i))
					++i;
				if (i != 0)
					out		= out + " ";
				out			= out + "U+" + cp.toString(16);
			}
			dst.innerHTML	= out.toUpperCase ( );
		}
