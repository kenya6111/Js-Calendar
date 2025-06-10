main();

function main() {
	const [_, __, optionKey, optionValue] = process.argv;
	const now = new Date();
	const year = now.getFullYear();
	let month = now.getMonth() + 1;

	if (optionKey && optionKey !== "-m") {
		console.log("引数が不正です");
		process.exit(0);
	}

	if (optionKey === "-m") {
		if (parseInt(optionValue) < 0 || parseInt(optionValue) > 12) {
			console.log("引数が不正です");
			process.exit(0);
		}
		month = parseInt(optionValue);
	}

	calendar_display(year, month, now);
}

function calendar_display(year, month, now) {
	now.setMonth(month, 0);
	endDate = now.getDate();
	now.setDate(1);
	firstDay = now.getDay();

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
