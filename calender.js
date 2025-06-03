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

        const arrday = ["日","月","火","水","木","金","土"]
        const arr1 = []
        const arr2 = []
        const arr3 = []
        const arr4 = []
        const arr5 = []
        const arr6 = []

        let dateCount = 1
        for(let i=0;i<42;i++){
            // 第1週目を作成
            // --月の初日の曜日までは空白で埋める
            if(i < firstDay)
            {
                arr1.push("  ")
                continue
            }
            // --第１週目を作成
            if(i<7)
            {
                arr1.push(dateCount.toString().padEnd(2," "))
                dateCount++
                continue
            }
            // 第2週目を作成
            if(i<14)
            {
                arr2.push(dateCount.toString().padEnd(2," "))
                dateCount++
                continue
            }
            // 第3週目を作成
            if(i<21)
            {
                arr3.push(dateCount.toString().padEnd(2," "))
                dateCount++
                continue
            }
            // 第4週目を作成
            if(i<28)
            {
                arr4.push(dateCount.toString().padEnd(2," "))
                dateCount++
                continue
            }
            // 第5週目を作成
            if(i<35)
            {
                if( dateCount > endDate)break;
                arr5.push(dateCount.toString().padEnd(2," "))
                dateCount++
                continue
            }
            if(i<42)
            {
                if( dateCount > endDate)break;
                arr6.push(dateCount.toString().padEnd(2," "))
                dateCount++
                continue
            }
        }

        console.log(`     ${currentMonth+1}月 ${currentYear}`)
        console.log(arrday.join(" "))
        console.log(arr1.join(" "))
        console.log(arr2.join(" "))
        console.log(arr3.join(" "))
        console.log(arr4.join(" "))
        console.log(arr5.join(" "))
        console.log(arr6.join(" "))


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

        const arrday = ["日","月","火","水","木","金","土"]
        const arr1 = []
        const arr2 = []
        const arr3 = []
        const arr4 = []
        const arr5 = []
        const arr6 = []

        let dateCount = 1
        for(let i=0;i<42;i++){
            // 第1週目を作成
            // --月の初めの曜日までは空白で埋める
            if(i < firstDay)
            {
                arr1.push("  ")
                continue
            }
            // 第1週目を作成
            if(i<7)
            {
                arr1.push(dateCount.toString().padEnd(2," "))
                dateCount++
                continue
            }
            // 第2週目を作成
            if(i<14)
            {
                arr2.push(dateCount.toString().padEnd(2," "))
                dateCount++
                continue
            }
            // 第3週目を作成
            if(i<21)
            {
                arr3.push(dateCount.toString().padEnd(2," "))
                dateCount++
                continue
            }
            // 第4週目を作成
            if(i<28)
            {
                arr4.push(dateCount.toString().padEnd(2," "))
                dateCount++
                continue
            }
            // 第5週目を作成
            if(i<35)
            {
                if( dateCount > endDate ) break;
                arr5.push(dateCount.toString().padEnd(2," "))
                dateCount++
                continue
            }
            if(i<42)
            {
                if( dateCount > endDate) break;
                arr6.push(dateCount.toString().padEnd(2," "))
                dateCount++
                continue
            }
        }

        console.log(`     ${inputMonth}月 ${currentYear}`)
        console.log(arrday.join(" "))
        console.log(arr1.join(" "))
        console.log(arr2.join(" "))
        console.log(arr3.join(" "))
        console.log(arr4.join(" "))
        console.log(arr5.join(" "))
        console.log(arr6.join(" "))

}else{
    console.log("引数の値が不正です")
}