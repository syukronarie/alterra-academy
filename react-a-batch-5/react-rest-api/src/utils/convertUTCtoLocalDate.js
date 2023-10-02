export function convertUTCtoLocalDate(gmtDate) {
	if (gmtDate instanceof Date) {
		const options = {
			day: "numeric",
			month: "numeric",
			year: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
			timeZone: "Asia/Jakarta",
			timeZoneName: "short",
		};
		const formattedDate = new Intl.DateTimeFormat("eng-US", options).format(
			gmtDate
		);
		return formattedDate;
	}

	throw new Error("parameter gmtDate should be Date format");
}
