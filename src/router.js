import Router from "express";
import mainController from "./controller/mainController.js";
import upload from "./utils/multer.js";
import apiController from "./controller/apiController.js";


const router = Router();

router.get("/", mainController.home )
router.get("/play", mainController.play )

router.get("/create", mainController.createForm );
router.get("/create/success/:playerName", mainController.createSuccess );
router.post("/create", upload.single('uploadFile'), mainController.createPlayer );

router.get("/remote", mainController.remote );


router.get("/remote/kill/:id", mainController.killPlayer );
router.get("/remote/resurect/:id", mainController.resurectPlayer );
router.get("/remote/delete/:id", mainController.deletePlayer );

router.get("/remote/kill-all", mainController.killAll );
router.get("/remote/resurect-all", mainController.resurectAll );

router.get("/remote/day-night/toggle", mainController.toggleDayNight );
router.get("/remote/day-add", mainController.addDay );
router.get("/remote/day-remove", mainController.removeDay );
router.get("/remote/restart-game", mainController.restartGame );

router.get("/remote/start-game", mainController.startGame );
router.get("/remote/stop-game", mainController.stoptGame );

///----------- API --------------------//
router.get("/api/players", apiController.getPlayers );



export default router;