'use strict';

(function () {

    var gsoc = {};
    gsoc.ime = {

        transliterate: function (input, context, altGr) {
                var patterns, regex, rule, replacement, i; //retval (if needed)

                if (altGr) {
                    patterns = this.inputmethod.patterns_x || [];
                } else {
                    patterns = this.inputmethod.patterns || [];
                }

                if (this.shifted) {
                    // if shift is pressed give priority for the patterns_shift
                    // if exists.
                    // Example: Shift+space where shift does not alter the keycode
                    patterns = (this.inputmethod.patterns_shift || [])
                        .concat(patterns);
                }

                // if ( $.isFunction( patterns ) ) {
                // 	// For backwards compatibility, allow the rule functions to return plain
                // 	// string. Determine noop by checking whether input is different from
                // 	// output. If the rule function returns object, just return it as-is.
                // 	retval = patterns.call( this, input, context );
                // 	if ( typeof retval === 'string' ) {
                // 		return { noop: input === retval, output: retval };
                // 	}

                // 	return retval;
                // }

                for (i = 0; i < patterns.length; i++) {
                    rule = patterns[i];
                    regex = new RegExp(rule[0] + '$');

                    // Last item in the rules.
                    // It can also be a function, because the replace
                    // method can have a function as the second argument.
                    replacement = rule.slice(-1)[0];

                    // Input string match test
                    if (regex.test(input)) {
                        // Context test required?
                        if (rule.length === 3) {
                            if (new RegExp(rule[1] + '$').test(context)) {
                                return {
                                    noop: false,
                                    output: input.replace(regex, replacement)
                                };
                            }
                        } else {
                            return {
                                noop: false,
                                output: input.replace(regex, replacement)
                            };
                        }
                    }
                }

                // No matches, return the input
                return {
                    noop: true,
                    output: input
                };
        }
	};

	gsoc.ime.inputmethod = { //This should be loaded from a seperate file, this is only for experimentation
                id: 'hi-transliteration',
                name: 'लिप्यंतरण',
                description: 'Transliteration keyboard for Devanagari script',
                date: '2011-11-20',
                author: 'Junaid P V',
                license: 'GPLv3',
                version: '1.0',
                contextLength: 1,
                maxKeyLength: 3,
                patterns: [
                    ['\\\\([A-Za-z\\>_~\\.0-9])', '\\\\', '$1'],

                    ['([क-ह]़?)्a', '$1'],

                    // Bug 35990 - Schwa syncope rule in Devanagari transliteration
                    ['([क-ह]़?)्\\~', '$1्'],

                    // Translate full stop (.) to danda
                    ['([क-ह]़?)्\\.', '\\~', '$1्।'],
                    ['([क-ह]़?)्\\.', '$1।'],

                    // Translate digits
                    ['([क-ह]़?)्0', '\\~', '$1्०'],
                    ['([क-ह]़?)्1', '\\~', '$1्१'],
                    ['([क-ह]़?)्2', '\\~', '$1्२'],
                    ['([क-ह]़?)्3', '\\~', '$1्३'],
                    ['([क-ह]़?)्4', '\\~', '$1्४'],
                    ['([क-ह]़?)्5', '\\~', '$1्५'],
                    ['([क-ह]़?)्6', '\\~', '$1्६'],
                    ['([क-ह]़?)्7', '\\~', '$1्७'],
                    ['([क-ह]़?)्8', '\\~', '$1्८'],
                    ['([क-ह]़?)्9', '\\~', '$1्९'],
                    ['([क-ह]़?)्\\r', '\\~', '$1्\r'],

                    ['([क-ह]़?)्0', '$1०'],
                    ['([क-ह]़?)्1', '$1१'],
                    ['([क-ह]़?)्2', '$1२'],
                    ['([क-ह]़?)्3', '$1३'],
                    ['([क-ह]़?)्4', '$1४'],
                    ['([क-ह]़?)्5', '$1५'],
                    ['([क-ह]़?)्6', '$1६'],
                    ['([क-ह]़?)्7', '$1७'],
                    ['([क-ह]़?)्8', '$1८'],
                    ['([क-ह]़?)्9', '$1९'],
                    ['([क-ह]़?)्\\r', '$1\r'],

                    ['([क-ह]़?)्A', '$1ा'],
                    ['([क-ह]़?)a', '$1ा'],
                    ['([क-ह]़?)्i', '$1ि'],
                    ['([क-ह]़?)(्I|िi|ेe)', '$1ी'],
                    ['([क-ह]़?)्u', '$1ु'],
                    ['([क-ह]़?)(ुu|्U|ोo)', '$1ू'],
                    ['([क-ह]़?)्R', '$1ृ'],
                    ['([क-ह]़?)ृR', '$1ॄ'],
                    ['([क-ह]़?)्ळ्l', '$1ॢ'],
                    ['([क-ह]़?)ॢl', '$1ॣ'],
                    ['([क-ह]़?)्e', '$1े'],
                    ['([क-ह]़?)्E', '$1ॅ'],
                    ['([क-ह]़?)i', '$1ै'],
                    ['([क-ह]़?)्o', '$1ो'],
                    ['([क-ह]़?)्O', '$1ॉ'],
                    ['([क-ह]़?)u', '$1ौ'],
                    ['([क-ह]़?)ृa', '$1्ऱ'],
                    ['([क-ह]़?)ृA', '$1्ऱा'],
                    ['([क-ह]़?)ृi', '$1्ऱि'],
                    ['([क-ह]़?)ृI', '$1्ऱी'],
                    ['([क-ह]़?)ृu', '$1्ऱु'],
                    ['([क-ह]़?)ृU', '$1्ऱू'],
                    ['([क-ह]़?)ृ\\^', '$1्ऱॅ'],
                    ['([क-ह]़?)ृe', '$1्ऱॆ'],
                    ['([क-ह]़?)ृE', '$1्ऱे'],
                    ['([क-ह]़?)ृo', '$1्ऱॊ'],
                    ['([क-ह]़?)ृO', '$1्ऱो'],
                    ['([क-ह]़?)ृ\\~', '$1्ऱ्'],
                    ['([अ-ह]़)(्?)\\`', '$1$2'],
                    ['([क-ह])(ा|ि|ी|ु|ू|े|ै|ॅ|ो|ौ|ॉ|ृ|्)\\`', '$1़$2'],

                    ['अa', 'आ'],
                    ['उu', 'ऊ'],
                    ['अi', 'ऐ'],
                    ['अ\\^', 'ॲ'],
                    ['इi', 'ई'],
                    ['अu', 'औ'],
                    ['ऋR', 'ॠ'],
                    ['ळ्l', 'ऌ'],
                    ['ऌl', 'ॡ'],
                    ['ं(m|M|\\^)', 'ँ'], // Candrabindu
                    ['आऊM', 'ॐ'], // AUM (OM)

                    ['क्h', 'ख्'],
                    ['ग्h', 'घ्'],
                    ['न्g', 'ङ्'],
                    ['च्h', 'छ्'],
                    ['ज्h', 'झ्'],
                    ['न्j', 'ञ्'],
                    ['ट्h', 'ठ्'],
                    ['ड्h', 'ढ्'],
                    ['त्h', 'थ्'],
                    ['द्h', 'ध्'],
                    ['प्h', 'फ्'],
                    ['ब्h', 'भ्'],
                    ['ऋa', 'ऱ'],
                    ['ऋA', 'ऱा'],
                    ['ऋi', 'ऱि'],
                    ['ऋI', 'ऱी'],
                    ['ऋu', 'ऱु'],
                    ['ऋU', 'ऱू'],
                    ['ऋ\\^', 'ऱॅ'],
                    ['ऋe', 'ऱे'],
                    ['ऋE', 'ऱे'],
                    ['ऋo', 'ऱो'],
                    ['ऋO', 'ऱो'],
                    ['ऋ\\~', 'ऱ्'],

                    ['स्h', 'श्'],
                    ['श्h', 'ष्'],
                    ['क़्h', 'ख़्'],
                    ['ज़्h', 'ऴ्'],
                    ['।\\.', '॥'], // Double danda
                    ['([ग्|ज्]़?)्Y', 'ज्ञ्'],

                    ['a', 'अ'],
                    ['b', 'ब्'],
                    ['c', 'च्'],
                    ['d', 'द्'],
                    ['e', 'ए'],
                    ['f', 'फ्'],
                    ['g', 'ग्'],
                    ['h', 'ह्'],
                    ['i', 'इ'],
                    ['j', 'ज्'],
                    ['k', 'क्'],
                    ['l', 'ल्'],
                    ['m', 'म्'],
                    ['n', 'न्'],
                    ['o', 'ओ'],
                    ['p', 'प्'],
                    ['q', 'क़्'],
                    ['r', 'र्'],
                    ['s', 'स्'],
                    ['t', 'त्'],
                    ['u', 'उ'],
                    ['(v|w)', 'व्'],
                    ['x', 'क्ष्'],
                    ['y', 'य्'],
                    ['z', 'ज़्'],
                    ['A', 'आ'],
                    ['B', 'ब्ब्'],
                    ['C', 'क्क्'],
                    ['D', 'ड्'],
                    ['E', 'ऍ'],
                    ['F', 'फ़्'],
                    ['G', 'ग्ग्'],
                    ['H', 'ः'], // Visarga
                    ['I', 'ई'],
                    ['J', 'ज्ज्'],
                    ['K', 'क्क्'],
                    ['L', 'ळ्'],
                    ['M', 'ं'],
                    ['N', 'ण्'],
                    ['O', 'ऑ'],
                    ['P', 'प्प्'],
                    ['R', 'ऋ'],
                    ['S', 'श्'],
                    ['T', 'ट्'],
                    ['U', 'ऊ'],
                    ['(V|W)', 'व्व्'],
                    ['X', 'क्ष्'],
                    ['Y', 'ञ्'],
                    ['Z', '.'],
                    ['0', '०'],
                    ['1', '१'],
                    ['2', '२'],
                    ['3', '३'],
                    ['4', '४'],
                    ['5', '५'],
                    ['6', '६'],
                    ['7', '७'],
                    ['8', '८'],
                    ['9', '९'],
                    ['~', '्'], // Virama
                    ['\\.', '।'], // Danda
                    ['//', 'ऽ'],
                    ['\\`', '़'], // Nukta

                    // The last rules in the Schwa syncope rule section:
                    // If virama not added explicitly, catch all other characters from the US keyboard,
                    // remove virama and send the character itself ($2).
                    ['([क-ह]़?)्(.)', '\\~', '$1्$2'],
                    ['([क-ह]़?)्(.)', '$1$2']
                ]
    };


    var keyboard, buffer = "", cursor=0;

    const SPACE = 32;
    const TAB = 9;
    const RETURN = 13;
    const BACKSPACE = 8;

    function isBufferEmpty() {
        return buffer == "";
    }

    function clearBuffer() {
        buffer = "";
    }

    function addToBuffer(keyCode) {
        if (keyCode == SPACE || keyCode == RETURN || keyCode == TAB) {
            if (!isBufferEmpty()) {
                buffer = buffer + String.fromCharCode(keyCode);
                inputDone();
            } else {
                keyboard.sendKey(keyCode);
            }
        } else if (keyCode == BACKSPACE) {
            backspace();
        } else {
            buffer = buffer + String.fromCharCode(keyCode);
        }
    }

    function backspace() {
        if (!isBufferEmpty()) {
            buffer = buffer.substring(0, buffer.length - 1);
            keyboard.setComposition(buffer);
        } else {
            keyboard.sendKey(KeyEvent.DOM_VK_BACK_SPACE);
        }
    }

    function inputDone() {
        var parsedText = buffer;
        keyboard.endComposition(parsedText);
        clearBuffer();
    }

    /**
     * Find the point at which a and b diverge, i.e. the first position
     * at which they don't have matching characters.
     *
     * @param a String
     * @param b String
     * @return Position at which a and b diverge, or -1 if a === b
     */
    function firstDivergence(a, b) {
        var minLength, i;

        minLength = a.length < b.length ? a.length : b.length;

        for (i = 0; i < minLength; i++) {
            if (a.charCodeAt(i) !== b.charCodeAt(i)) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Get the n characters in str that immediately precede pos
     * Example: lastNChars( 'foobarbaz', 5, 2 ) === 'ba'
     *
     * @param str String to search in
     * @param pos Position in str
     * @param n Number of characters to go back from pos
     * @return Substring of str, at most n characters long, immediately preceding pos
     */
    function lastNChars(str, pos, n) {
        if (n === 0) {
            return '';
        } else if (pos <= n) {
            return str.substr(0, pos);
        } else {
            return str.substr(pos - n, n);
        }
    }

    InputMethods.jqim = {
       init:init,
       activate:activate,
       click:click
    };

    InputMethods.jqim.input='';
    InputMethods.jqim.context='';

    function init(interfaceObject) {
            keyboard = interfaceObject;
        }
    function activate(lang, state, options) {
            buffer = state.value;
            cursor = state.selectionStart;
            // if (state.selectionEnd > state.selectionStart)
            //     selection = state.selectionEnd;
            // else
            //     selection = 0;
        }

        function click(keycode, x, y) {
        	if (!isBufferEmpty()) {
            	this.input = lastNChars(buffer, cursor, gsoc.ime.inputmethod.maxKeyLength);
            }
            addToBuffer(keycode);
            if (!isBufferEmpty()) {
                this.input += String.fromCharCode(keycode)
                keyboard.setComposition(gsoc.ime.transliterate(this.input, this.context, false).output);
            }
        }


})();