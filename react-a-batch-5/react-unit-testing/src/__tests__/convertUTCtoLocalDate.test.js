import { convertUTCtoLocalDate } from "../utils/convertUTCtoLocalDate";

describe("convertUTCtoLocalDate", () => {
	it("should be convert UTC to LocalDate correctly", () => {
		const gmtDate = new Date("2023-09-27T12:03:12Z");
		const convertedDate = convertUTCtoLocalDate(gmtDate);
		expect(convertedDate).toBe("9/27/2023, 7:03:12 PM GMT+7");
	});

	it("should return error if passing wrong parameter", () => {
		expect(() => {
			convertUTCtoLocalDate(90);
		}).toThrow("parameter gmtDate should be Date format");
	});
});
