import player from "../model/player.js";

const apiController = {
    
    async getPlayers(req, res){




        res.json( await player.findAll() );
    }
    
}

export default apiController;