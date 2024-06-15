import db from "../utils/database.js";


const player = {

    async create( data ){
       await db.push("/players[]", data);
    },

    async findAll(){
        return await db.getData("/players");
    },

    async findById(id){
        return await db.getData(`/players[${id}]`);
    },

    async delete(id){
        await db.delete(`/players[${id}]`);
    },

    async save(){
        await db.save();
    }

}

export default player;