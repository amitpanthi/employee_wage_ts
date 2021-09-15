const FULL_TIME = 8
const PART_TIME = 4
const WAGE_PER_HR = 20
const DAYS_IN_MONTH = 20

console.log("Welcome to Employee Wage.")

class EmployeeWage{
    name: string;
    latestAttendance: number;
    dailyWageBreakdown: Array<number>;

    constructor(name: string){
        this.name = name
        this.latestAttendance = 0 // 0 - Part Time, 1 - Full Time, 2 - Absent
        this.dailyWageBreakdown = []
    }

    greet(): void{
        console.log(`Hi ${this.name}, Welcome to Employee Wage!`)
    }

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

    calcFullTime(): number{
        return FULL_TIME * WAGE_PER_HR
    }


    calcPartTime(): number{
        return PART_TIME * WAGE_PER_HR
    }

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

        console.log("----------PER DAY BREAKDOWN MONTHLY PAY----------")
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
}

const employeeOne = new EmployeeWage("John")
employeeOne.monthlyPayBreakdown()

// // UC1 - Attendance Check

// function attendanceCheck(): void {
//     const IS_ABSENT = 0
//     let currEmpAttendance = Math.floor(Math.random() * 10) % 2 //0 or 1 

//     if (currEmpAttendance == IS_ABSENT){
//         console.log("Employee is Absent")
//     } else {
//         console.log("Employee is Present")
//     }
// }

// // UC2 - Daily Wage
// function fullTimeWage(): number{
//     return FULL_TIME * WAGE_PER_HR
// }

// // UC3 - Part Time Wage
// function partTimeWage(): number{
//     return PART_TIME * WAGE_PER_HR
// }

// // UC4 - Switch Case
// let wage = 0
// let workShift = Math.floor(Math.random() * 10) % 3

// function getDailyPay(workShift: number): number{
//     switch(workShift){
//         case 1: // Full Time
//             wage = WAGE_PER_HR * FULL_TIME
//             console.log("Wage for full time: " + wage)
//             break;
        
//         case 0: // Part Time
//             wage = WAGE_PER_HR * PART_TIME
//             console.log("Wage for part time: " + wage)
//             break;
        
//         default: // Absent
//             wage = 0
//             console.log("Wage when absent: " + wage)
//     }

//     return wage
// }

// // UC5 - Monthly Wage
// function getMonthlyWage(): void{
//     let totalWage = 0
//     let fullTimeCounter = 0
//     let partTimeCounter = 0
//     let absentCounter = 0
//     const DAYS_IN_MONTH = 20
//     let todayWage

//     for(let day=0; day < DAYS_IN_MONTH; day++){
//         let currWorkShift = Math.floor(Math.random() * 10) % 3

//         switch(currWorkShift){
//             case 1: // Full Time
//                 todayWage = WAGE_PER_HR * FULL_TIME
//                 fullTimeCounter += 1
//                 break;
            
//             case 0: // Part Time
//                 todayWage = WAGE_PER_HR * PART_TIME
//                 partTimeCounter += 1
//                 break;
            
//             default:
//                 todayWage = 0
//                 absentCounter += 1
//                 break;
//         }

//         totalWage += todayWage
//     }

//     console.log("Total Wage:" + totalWage)
//     console.log("Days worked Full Time: " + fullTimeCounter)
//     console.log("Days worked Part Time: " + partTimeCounter)
//     console.log("Days absent: " + absentCounter)
// }

// // UC6 - Max Working Hours
// function maxWorkingHours(): void{
//     let totalHours = 0
//     let todayHours = 0
//     let fullTimeCounter = 0
//     let partTimeCounter = 0
//     let absentCounter = 0
//     let totalWage

//     for(var day=1; day < Number.MAX_VALUE; day++){
//         if(totalHours >= 160 || day >= 20){
//             break;
//         }

//         let currWorkShift = Math.floor(Math.random() * 10) % 3

//         switch(currWorkShift){
//             case 1: // Full Time
//                 todayHours = FULL_TIME
//                 fullTimeCounter += 1
//                 break;
            
//             case 0: // Part Time
//                 todayHours = PART_TIME
//                 partTimeCounter += 1
//                 break;
            
//             default:
//                 todayHours = 0
//                 absentCounter += 1
//                 break;
//         }

//         totalHours += todayHours
//     }

//     totalWage = totalHours * WAGE_PER_HR

//     console.log("--------------------------------")
//     console.log("Total Wage:" + totalWage)
//     console.log("Hours worked:" + totalHours)
//     console.log("Days passed: " + day)
//     console.log("Days worked Full Time: " + fullTimeCounter)
//     console.log("Days worked Part Time: " + partTimeCounter)
//     console.log("Days absent: " + absentCounter)
// }


// // attendanceCheck()
// // console.log(fullTimeWage())
// // console.log(getDailyPay(workShift))
// maxWorkingHours()