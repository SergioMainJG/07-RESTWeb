import { envs } from "./config/envs";
import { Server } from "./presentation/server";

const main= () => {
    const server = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    });
    server.start();
}
( async () => {
    main();
})()

