import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
	/* options */
	cors: { origin: ["http://localhost:5000"] },
});

io.on("connection", (socket) => {
	console.log("Connected to server");
	socket.emit("connection");

	socket.on("hallo", () => {
		console.log("Hallo!");
	});
});

httpServer.listen(3000);
