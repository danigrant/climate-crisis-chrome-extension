let elements = document.getElementsByTagName('*');

for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    for (let j = 0; j < element.childNodes.length; j++) {
        let node = element.childNodes[j];

        if (node.nodeType === 3) {
            let text = node.nodeValue;
            let replacedText = text.replace(/climate change/gi, function(match) {
                return matchCase("climate crisis", match);
            });

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

function matchCase(text, pattern) {
    let result = '';

    let startsWithUpperCase = false

    for(let i = 0; i < text.length; i++) {
        let c = text.charAt(i);
        let p = pattern.charCodeAt(i);

        if(p >= 65 && p < 65 + 26) {
            result += c.toUpperCase();
            startsWithUpperCase = true
        } else {
            result += c.toLowerCase();
        }
    }

    if (startsWithUpperCase) {
      return `The ${result}`
    } else {
      return `the ${result}`
    }

    return result;
}
