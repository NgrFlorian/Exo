/*
    1. Créez une classe 'YoutubeChannel' en fonction des instructions suivantes.

    Cette classe permet de créer 3 propriétés lors de la création d'une instance :
    1. channelName (string)
    2. totalViews (number)
    3. channelType (array)

    Cette classe intègre également deux méthodes dans son prototype :
    1. 'deleteAcount', qui console.log("Channel deleted")
    2. 'renameChannel', qui peut changer le nom de la chaîne 

*/

class YoutubeChannel {
    constructor(channelName, totalViews, channelType) {
        this.channelName = channelName
        this.totalViews = totalViews
        this.channelType = channelType
    }
    deleteAccount(){
        console.log("Channel deleted")
      }

    renameChannel(value){
        this.channelName = value

    }
}



const ecoleduweb = new YoutubeChannel("bidule","moi","tv");
console.log(ecoleduweb);
console.log(ecoleduweb.deleteAccount());
ecoleduweb.renameChannel("machin")
console.log(ecoleduweb);
