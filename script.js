let translateText = async (text, language) =>{
    let response = await fetch(`https://api.funtranslations.com/translate/${language}.json?text=${text}`)
    
    let data = await response.json()
    return data
}

let getData = async () =>{
    let language = document.querySelector('.language').value
    let inputText = document.querySelector('.input-text').value
    let outputText = document.querySelector('.output-text')

    if (!language) return alert('You have to chose language!')
    if (!inputText) return alert('You have to input text you would like to translate!')

    let data = await translateText(inputText, language)
    if (data.success){
        outputText.value = data.contents.translated
    } else {
        alert('Something does not work :(')
    }
}