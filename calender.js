if(process.argv.length <= 2)
    {//引数指定のない場合
        const now = new Date();
        const currentYear = now.getFullYear()
        const currentMonth = now.getMonth()

        // 該当月の最終日取得
        now.setMonth(now.getMonth()+1, 0);
        const endDate= now.getDate()

        // 該当月の初日取得
        now.setDate(1);
        const firstDay = now.getDay()

        printTitle(currentMonth+1, currentYear)
        printDays()

        let dateCount = 1
        for(let i=0;i<42;i++){
            // 月曜が来たら改行
            if (i!== 0 && i %7 ==0 ){
                console.log()
            }
            if(i < firstDay){
                // --月の初日の曜日までは空白で埋める
                process.stdout.write("   ")
                continue
            } else {
                if( dateCount > endDate)break;
                process.stdout.write(dateCount.toString().padEnd(3," "))
                dateCount++
            }
        }
}
else if(process.argv[2] == "-m"
    && process.argv[3] >=0
    && process.argv[3] <=12
){
    const now = new Date();
        const currentYear = now.getFullYear()
        const inputMonth = process.argv[3]

        // 該当月の最終日取得
        now.setMonth(inputMonth, 0);
        const endDate= now.getDate()

        // 該当月の初日取得
        now.setDate(1);
        const firstDay = now.getDay()

        printTitle(inputMonth, currentYear)
        printDays()

        let dateCount = 1
        for(let i=0;i<42;i++){
            // 月曜が来たら改行
            if (i!== 0 && i %7 ==0 ){
                console.log()
            }
            if(i < firstDay){
                // --月の初日の曜日までは空白で埋める
                process.stdout.write("   ")
                continue
            } else {
                if( dateCount > endDate)break;
                process.stdout.write(dateCount.toString().padEnd(3," "))
                dateCount++
            }
        }
}else{
    console.log("引数の値が不正です")
}

function printTitle(month, year){
    console.log(`     ${month}月 ${year}`)
}

function printDays(){
    const days = ["日","月","火","水","木","金","土"]
    console.log(days.join(" "))
}