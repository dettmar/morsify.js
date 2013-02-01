(function morsify() {

	var	start = (new Date()).getTime();
		chars = {
		
		// alphanumerical
		"a": ".-",
		"b": "-...",
		"c": "-.-.",
		"d": "-..",
		"e": ".",
		"f": "..-.",
		"g": "--.",
		"h": "....",
		"i": "..",
		"j": ".---",
		"k": "-.-",
		"l": ".-..",
		"m": "--",
		"n": "-.",
		"o": "---",
		"p": ".--.",
		"q": "--.-",
		"r": ".-.",
		"s": "...",
		"t": "-",
		"u": "..-",
		"v": "...-",
		"w": ".--",
		"x": "-..-",
		"y": "-.--",
		"z": "--..",
		"0": "-----",
		"1": ".----",
		"2": "..---",
		"3": "...--",
		"4": "....-",
		"5": ".....",
		"6": "-....",
		"7": "--...",
		"8": "---..",
		"9": "----.",
		
		// non-english
		"ä": ".-.-",
		"æ": ".-.-",
		"ą": ".-.-",
		"à": ".--.-",
		"å": ".--.-",
		"ç": "-.-..",
		"ĉ": "-.-..",
		"ć": "-.-..",
		"è": ".-..-",
		"é": "..-..",
		"ñ": "--.--",
		"ń": "--.--",
		"ö": "---.",
		"ø": "---.",
		"ó": "---.",
		"ü": "..--",
		
		// special chars
		"?": "..--..",
		"¿": "..-.-",
		"!": "..--.",
		"¡": "--...-",
		",": "--..--",
		".": ".-.-.-",
		"=": "-...-",
		"-": "-....-",
		"+": ".-.-.",
		"(": "-.--.",
		")": "-.--.-",
		"@": ".--.-.",
		"/": "-..-.",
		"%": ".--..",
		"\"": ".-..-.",
		"'": ".----.",
		";": "-.-.-.",
		":": "---...",
		"&": ".-...",
		"#": ".-..-",
		"$": "...-..-",
		"§": "...-.",
		"~": "-.-.-"
	};
	
	function walkTheDOM() {
    
	    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false),
	    	node;
	
	    while(node = walker.nextNode()) node.nodeValue = getMorsifiedText(node.nodeValue);
	    
	    return ["Content morsified in", (new Date()).getTime() - start, "ms"].join(" ");
	}
	
	function getMorsifiedText(textString) {
		
		function replaceCharsWithMorse(match, p, offset){
				
			var lower = match.toLowerCase();
			
			return (chars[lower]) ? chars[lower] + " " : match;
		}
		
		return textString
			.replace(/\s/, "  &nbsp; ")
			//.replace(/[\?\¿\!\¡\,\.\=\-\+\(\)\@\/\%\"\'\;\:\&\#\$\§\~]/gi, replaceCharsWithMorse)
			.replace(/[äæąàåçĉćèéñńöøóü]/gi, replaceCharsWithMorse)
			.replace(/[a-z0-9]/gi, replaceCharsWithMorse);
	}
	
	return walkTheDOM();
})();