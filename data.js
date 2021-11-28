class Knowledge{
    constructor(){
        this.url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    }

    async getresponseData(word){
        const response = await fetch(this.url + word);
        console.log(response);
        const data = await response.json();
        console.log(data);
        
        return data

    }



}