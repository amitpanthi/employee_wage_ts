const FULL_TIME = 8
const PART_TIME = 4
const WAGE_PER_HR = 20
const DAYS_IN_MONTH = 20

console.log("Welcome to Employee Wage.")

type dailyWage = {
    day: number;
    wage: number;
}

class EmployeeWage{
    name: string;
    latestAttendance: number;
    dailyWageBreakdown: Array<dailyWage>;

    constructor(name: string){
        this.name = name
        this.latestAttendance = 0 // 0 - Part Time, 1 - Full Time, 2 - Absent
        this.dailyWageBreakdown = []
    }

    greet(): void{
        console.log(`Hi ${this.name}, Welcome to Employee Wage!`)
    }

    //UC1
    getAttendance(): number{
        const IS_ABSENT = 2
        this.latestAttendance = Math.floor(Math.random() * 10) % 3 //0 or 1 or 2 
        let currEmpAttendance = this.latestAttendance
        if (currEmpAttendance == IS_ABSENT){
            console.log("Employee is Absent")
        } else if (currEmpAttendance == 1){
            console.log("Employee is Present - Full Time")
        } else {
            console.log("Employee is Present - Part Time")
        }

        return currEmpAttendance
    }

    //UC2
    calcFullTime(): number{
        return FULL_TIME * WAGE_PER_HR
    }

    //UC3
    calcPartTime(): number{
        return PART_TIME * WAGE_PER_HR
    }

    //UC4
    getDailyPay(): number{
        let wage
        let workShift = this.latestAttendance

        switch(workShift){
            case 1: // Full Time
                wage = WAGE_PER_HR * FULL_TIME
                console.log("Wage for full time: " + wage)
                break;
            
            case 0: // Part Time
                wage = WAGE_PER_HR * PART_TIME
                console.log("Wage for part time: " + wage)
                break;
            
            default: // Absent
                wage = 0
                console.log("Wage when absent: " + wage)
        }
    
        return wage
    }

    //UC5
    getMonthlyPay(): void{
        let todayWage = 0
        let totalWage = 0
        let fullTimeCounter = 0
        let partTimeCounter = 0
        let absentCounter = 0

        for(let day=0; day < DAYS_IN_MONTH; day++){
            let currWorkShift = Math.floor(Math.random() * 10) % 3
        
            if(day == DAYS_IN_MONTH - 1){
                currWorkShift = this.latestAttendance
            }

            switch(currWorkShift){
                case 1: // Full Time
                    todayWage = WAGE_PER_HR * FULL_TIME
                    fullTimeCounter += 1
                    break;
                
                case 0: // Part Time
                    todayWage = WAGE_PER_HR * PART_TIME
                    partTimeCounter += 1
                    break;
                
                default: // Absent
                    todayWage = 0
                    absentCounter += 1
                    break;
            }
        
            totalWage += todayWage
        }
        
        console.log("----------MONTHLY PAY----------")
        console.log("Total Wage:" + totalWage)
        console.log("Days worked Full Time: " + fullTimeCounter)
        console.log("Days worked Part Time: " + partTimeCounter)
        console.log("Days absent: " + absentCounter)
    }

    //UC6
    maxWorkingHours(): void{
        let totalWage = 0
        let totalHours = 0
        let todayHours = 0
        let fullTimeCounter = 0
        let partTimeCounter = 0
        let absentCounter = 0

        for(var day=1; day <= 20; day++){
            if(totalHours >= 160){
                break;
            }

            let currWorkShift = Math.floor(Math.random() * 10) % 3
            if(day == DAYS_IN_MONTH - 1){
                currWorkShift = this.latestAttendance
            }

            switch(currWorkShift){
                case 1: // Full Time
                    todayHours = FULL_TIME
                    fullTimeCounter += 1
                    break;
                
                case 0: // Part Time
                    todayHours = PART_TIME
                    partTimeCounter += 1
                    break;
                
                default: //Absent
                    todayHours = 0
                    absentCounter += 1
                    break;
            }

            totalHours += todayHours
        }

        totalWage = totalHours * WAGE_PER_HR

        console.log("----------CONDITION BASED MONTHLY PAY----------")
        console.log("Total Wage:" + totalWage)
        console.log("Hours worked:" + totalHours)
        console.log("Days passed: " + (day - 1))
        console.log("Days worked Full Time: " + fullTimeCounter)
        console.log("Days worked Part Time: " + partTimeCounter)
        console.log("Days absent: " + absentCounter)
    }

    monthlyPayBreakdown(): Array<Array<number>>{
        let totalWage = 0
        let totalHours = 0
        let todayHours = 0
        let fullTimeCounter = 0
        let partTimeCounter = 0
        let absentCounter = 0
        let wages = []
        let workHours = []

        for(var day=1; day <= 20; day++){
            if(totalHours >= 160){
                break;
            }

            let currWorkShift = Math.floor(Math.random() * 10) % 3
            if(day == DAYS_IN_MONTH - 1){
                currWorkShift = this.latestAttendance
            }

            switch(currWorkShift){
                case 1: // Full Time
                    todayHours = FULL_TIME
                    fullTimeCounter += 1
                    break;
                
                case 0: // Part Time
                    todayHours = PART_TIME
                    partTimeCounter += 1
                    break;
                
                default: //Absent
                    todayHours = 0
                    absentCounter += 1
                    break;
            }

            workHours.push(todayHours)
            wages.push(todayHours * WAGE_PER_HR)
            totalHours += todayHours
        }

        totalWage = totalHours * WAGE_PER_HR

        console.log("----------PER DAY BREAKDOWN OF MONTHLY PAY----------")
        console.log("Per Day Hours worked: " + workHours.join(", "))
        console.log("Per Day Wage earned: " + wages.join(", "))
        console.log("Total Wage:" + totalWage)
        console.log("Hours worked:" + totalHours)
        console.log("Days passed: " + (day - 1))
        console.log("Days worked Full Time: " + fullTimeCounter)
        console.log("Days worked Part Time: " + partTimeCounter)
        console.log("Days absent: " + absentCounter)

        return [wages, workHours]
    }

    calculateTotalWages(wages: Array<number>): number{
        let runningSum = 0

        wages.forEach(wage => runningSum += wage)
        console.log(runningSum)

        return runningSum
    }
    

    printDailyWage(wage_array: Array<number>): Array<dailyWage>{
        return wage_array.map((wage, currDay) => {
            console.log(`Day ${++currDay}: ${wage}`)
            return {
                day: currDay,
                wage: wage
            }
        })
    }


    printFullTimeWorked(): void{
        let ftWorkedd = this.dailyWageBreakdown.filter((day) => {
            return day.wage >= 160
         })

        console.log(ftWorkedd)
    }


    findFirstFullTime(wage_array: Array<number>): void{
        let idx = wage_array.findIndex(function(wage){
            return wage == 160
        })

        console.log("First full time wage was earned on Day " + (idx + 1))
    }


    checkPartTime(wage_array: Array<number>): void{
        if(wage_array.find(function(wage){
            return wage == 80
        })){
            console.log("Worker has worked part time")
        } else {
            console.log("Worker has not worked part time")
        }
    }


    checkDaysWorked(wage_array: Array<number>): void{
        let daysWorked = wage_array.filter(function(wage){
            return wage >= 80
        }).length

        console.log("Worker has worked for " + daysWorked + " days")
    }

    // UC 10
    generateEmployeeMap(wage_array: Array<number>): void{
        let employeeMap = new Map()
        let runningTotal = 0

        for(let day = 0; day < 20; day++){
            runningTotal += wage_array[day]
            employeeMap.set(day+1 , wage_array[day])
        }

        employeeMap.set("Total", runningTotal)

        console.log(employeeMap)
    }

    // UC 11
    generateEmployeeObject(wage_array: Array<number>, hours_array: Array<number>): void{
        let employeeObjects = []

        for(let day = 0; day < 20; day++){
            employeeObjects.push({
                'Day': day+1,
                'Wage': wage_array[day],
                'Hours Worked': hours_array[day]
            })
        }

        console.log(employeeObjects)
    }


    displayReport(): Array<Array<number>>{
        this.greet()
        this.getAttendance()
        this.getDailyPay()
        this.getMonthlyPay()
        this.maxWorkingHours()
        let employeeStats = this.monthlyPayBreakdown()

        return employeeStats
    }

    runHelperFunctions(wage_array: Array<number>, hours_array: Array<number>){
        this.calculateTotalWages(wage_array)
        this.dailyWageBreakdown = this.printDailyWage(wage_array)
        this.findFirstFullTime(wage_array)
        this.checkPartTime(wage_array)
        this.checkDaysWorked(wage_array)
        this.printFullTimeWorked()
        this.generateEmployeeMap(wage_array)
        this.generateEmployeeObject(wage_array, hours_array)
    }
}

let newEmployee = new EmployeeWage("John")
let employeeStats = newEmployee.displayReport()
newEmployee.runHelperFunctions(employeeStats[0], employeeStats[1])