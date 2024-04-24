import { Server } from "socket.io";

const io = new Server({
	cors: { origin: ["http://localhost:5000"] },
});

io.on("connection", (socket) => {
	console.log("Connected to server");
	socket.emit("connection");

	socket.on("hallo", () => {
		console.log("Hallo!");
	});
});

io.listen(3000);
