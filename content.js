window.onload = () => {
  let replacedText

  let elements = document.getElementsByTagName('*');

  for (let i = 0; i < elements.length; i++) {
      let element = elements[i];

      for (let j = 0; j < element.childNodes.length; j++) {
          let node = element.childNodes[j];

          if (node.nodeType === 3) {
              let text = node.nodeValue;
              let replacedText1 = text.replace(/climate change/gi, function(match) {
                  return matchCase("climate crisis", match);
              });

              let replacedText2 = text.replace(/global warming/gi, function(match) {
                  return matchCase("global heating", match);
              });

              if (replacedText1 !== text) {
                  element.replaceChild(document.createTextNode(replacedText1), node);
              }
              if (replacedText2 !== text) {
                  element.replaceChild(document.createTextNode(replacedText2), node);
              }
          }
      }
  }
}

let matchCase = (text, pattern) => {
    let result = '';

    let startsWithUpperCase = false

    for(let i = 0; i < text.length; i++) {
        let c = text.charAt(i);
        let p = pattern.charCodeAt(i);

        if(p >= 65 && p < 65 + 26) {
            result += c.toUpperCase();
        } else {
            result += c.toLowerCase();
        }
    }

    if (result.includes("climate") || result.includes("Climate")) {
      console.log();
      return `${result} 🔥🌏⏳`
    } else {
      return `${result}`
    }

}
