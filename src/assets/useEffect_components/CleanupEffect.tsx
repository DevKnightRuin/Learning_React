import React from "react";
import { useEffect } from "react";

const connect = () => console.log("connecting");
const disconnect = () => console.log("disconnecting");

const CleanupEffect = () => {
	useEffect(() => {
		//connect to chat page, or open modal
		connect();

		//the cleanup code part - should reverse whatever our effect was doing
		//abort fetching data, ignoring the result of the fetched data etc
		//disconnect from chat server, or hide modal
		return () => disconnect();
	});

	return <div>CleanupEffect</div>;
};

export default CleanupEffect;
