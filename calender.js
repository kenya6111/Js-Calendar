main();

function main() {
	const now = new Date();
	const year = now.getFullYear();
	let month;
	let firstDay;
	let endDate;

	// -mオプションなし
	if (process.argv.length <= 2) {
		month = now.getMonth() + 1;
		// 該当月の最終日取得
		now.setMonth(now.getMonth() + 1, 0);
		endDate = now.getDate();

		// 該当月の初日取得
		now.setDate(1);
		firstDay = now.getDay();
	} else if (
		// -mオプションあり
		process.argv[2] == "-m" &&
		process.argv[3] >= 0 &&
		process.argv[3] <= 12
	) {
		month = process.argv[3];
		// 該当月の最終日取得
		now.setMonth(month, 0);
		endDate = now.getDate();

		// 該当月の初日取得
		now.setDate(1);
		firstDay = now.getDay();
	} else {
		console.log("引数が不正です");
		process.exit(0);
	}

	printTitle(month, year);
	printDays();
	printCalender(firstDay, endDate);
}

function printTitle(month, year) {
	console.log(`     ${month}月 ${year}`);
}

function printDays() {
	const days = ["日", "月", "火", "水", "木", "金", "土"];
	console.log(days.join(" "));
}

function printCalender(firstDay, endDate) {
	let dateCount = 1;
	process.stdout.write("   ".repeat(firstDay));
	for (let i = firstDay; i < 42; i++) {
		if (i !== 0 && i % 7 == 0) console.log();
		if (dateCount > endDate) break;
		process.stdout.write(dateCount.toString().padEnd(3, " "));
		dateCount++;
	}
}
