import player from "../model/player.js";
import {io} from "../../app.js";
import getRandomSpitch from "../utils/accroches.js";
import game, {createSession} from "../model/game.js";

const mainController = {

    async home(req, res){
        const players = await player.findAll();
        console.log(players)
        res.render('home', {
            players
        });
    },

    async play(req, res){
        const players = await player.findAll();
        const playersRemaining = players.filter( player => player.alive );
        res.render('play', { players, game, playersRemaining });
    },


    createForm(req, res){
        res.render('create_profile');
    },

    async createPlayer(req, res) {

        const { playerName } = req.body;
        await player.create({
            playerName,
            image: req.file.filename,
            alive: true
        });
        io.emit("update");
        io.emit('player-update');

        res.redirect("/create/success/"+playerName);

    },

    async createSuccess(req, res){

        const { playerName } = req.params;
        res.render("success_profile", {
            playerName,
            spitch: getRandomSpitch()
        });
    },

    async remote(req, res){

        const {manage} = req.query;
        const players = await player.findAll();

        console.log(manage);
        res.render("remote", {
            manage,
            players,
            game
        });
    },

    async killPlayer(req, res){
        const { id } = req.params;
        const foundPlayer = await player.findById(id);
        foundPlayer.alive=false;
        await player.save();
        io.emit("update");

        res.redirect("/remote?manage=players");
    },

    async resurectPlayer(req, res){
        const { id } = req.params;
        const foundPlayer = await player.findById(id);
        foundPlayer.alive=true;
        await player.save();
        io.emit("update");

        res.redirect("/remote?manage=players");
    },

    async deletePlayer(req, res){
        const { id } = req.params;
        await player.delete(id);
        await player.save();
        io.emit("update");
        io.emit('player-update');

        res.redirect("/remote?manage=admin");
    },


    async killAll(req, res){

        const players = await player.findAll();
        for( const player of players ){
            player.alive = false;
        }
        await player.save();
        io.emit("update");

        res.redirect("/remote?manage=players");

    },

    async resurectAll(req, res){
        const players = await player.findAll();
        for( const player of players ){
            player.alive = true;
        }
        await player.save();
        io.emit("update");

        res.redirect("/remote?manage=players");
    },


    async toggleDayNight (req, res){


        if( game.moment === "day" ){
            game.moment = "night";
        }else {
            game.moment = "day";
        }
        io.emit("update");

        res.redirect("/remote?manage=game");
    },

    async addDay(req, res){

        game.day++;
        io.emit("update");

        res.redirect("/remote?manage=game");
    },

    async removeDay(req, res){
        game.day--;
        io.emit("update");

        res.redirect("/remote?manage=game");
    },


    restartGame(req, res){
        req.session.game = createSession();
        io.emit("update");
        res.redirect("/remote?manage=game");
    },

    startGame(req, res){
        io.emit("start-game");
        res.redirect("/remote?manage=game");
    },

    stoptGame(req, res){
        io.emit("stop-game");
        res.redirect("/remote?manage=game");
    }



}

export default mainController;