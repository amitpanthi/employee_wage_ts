var FULL_TIME = 8;
var PART_TIME = 4;
var WAGE_PER_HR = 20;
var DAYS_IN_MONTH = 20;
console.log("Welcome to Employee Wage.");
var EmployeeWage = /** @class */ (function () {
    function EmployeeWage(name) {
        this.name = name;
        this.latestAttendance = 0; // 0 - Part Time, 1 - Full Time, 2 - Absent
        this.dailyWageBreakdown = [];
    }
    EmployeeWage.prototype.greet = function () {
        console.log("Hi " + this.name + ", Welcome to Employee Wage!");
    };
    EmployeeWage.prototype.getAttendance = function () {
        var IS_ABSENT = 2;
        this.latestAttendance = Math.floor(Math.random() * 10) % 3; //0 or 1 or 2 
        var currEmpAttendance = this.latestAttendance;
        if (currEmpAttendance == IS_ABSENT) {
            console.log("Employee is Absent");
        }
        else if (currEmpAttendance == 1) {
            console.log("Employee is Present - Full Time");
        }
        else {
            console.log("Employee is Present - Part Time");
        }
        return currEmpAttendance;
    };
    EmployeeWage.prototype.calcFullTime = function () {
        return FULL_TIME * WAGE_PER_HR;
    };
    EmployeeWage.prototype.calcPartTime = function () {
        return PART_TIME * WAGE_PER_HR;
    };
    EmployeeWage.prototype.getDailyPay = function () {
        var wage;
        var workShift = this.latestAttendance;
        switch (workShift) {
            case 1: // Full Time
                wage = WAGE_PER_HR * FULL_TIME;
                console.log("Wage for full time: " + wage);
                break;
            case 0: // Part Time
                wage = WAGE_PER_HR * PART_TIME;
                console.log("Wage for part time: " + wage);
                break;
            default: // Absent
                wage = 0;
                console.log("Wage when absent: " + wage);
        }
        return wage;
    };
    EmployeeWage.prototype.getMonthlyPay = function () {
        var todayWage = 0;
        var totalWage = 0;
        var fullTimeCounter = 0;
        var partTimeCounter = 0;
        var absentCounter = 0;
        for (var day = 0; day < DAYS_IN_MONTH; day++) {
            var currWorkShift = Math.floor(Math.random() * 10) % 3;
            if (day == DAYS_IN_MONTH - 1) {
                currWorkShift = this.latestAttendance;
            }
            switch (currWorkShift) {
                case 1: // Full Time
                    todayWage = WAGE_PER_HR * FULL_TIME;
                    fullTimeCounter += 1;
                    break;
                case 0: // Part Time
                    todayWage = WAGE_PER_HR * PART_TIME;
                    partTimeCounter += 1;
                    break;
                default: // Absent
                    todayWage = 0;
                    absentCounter += 1;
                    break;
            }
            totalWage += todayWage;
        }
        console.log("----------MONTHLY PAY----------");
        console.log("Total Wage:" + totalWage);
        console.log("Days worked Full Time: " + fullTimeCounter);
        console.log("Days worked Part Time: " + partTimeCounter);
        console.log("Days absent: " + absentCounter);
    };
    EmployeeWage.prototype.maxWorkingHours = function () {
        var totalWage = 0;
        var totalHours = 0;
        var todayHours = 0;
        var fullTimeCounter = 0;
        var partTimeCounter = 0;
        var absentCounter = 0;
        for (var day = 1; day <= 20; day++) {
            if (totalHours >= 160) {
                break;
            }
            var currWorkShift = Math.floor(Math.random() * 10) % 3;
            if (day == DAYS_IN_MONTH - 1) {
                currWorkShift = this.latestAttendance;
            }
            switch (currWorkShift) {
                case 1: // Full Time
                    todayHours = FULL_TIME;
                    fullTimeCounter += 1;
                    break;
                case 0: // Part Time
                    todayHours = PART_TIME;
                    partTimeCounter += 1;
                    break;
                default: //Absent
                    todayHours = 0;
                    absentCounter += 1;
                    break;
            }
            totalHours += todayHours;
        }
        totalWage = totalHours * WAGE_PER_HR;
        console.log("----------CONDITION BASED MONTHLY PAY----------");
        console.log("Total Wage:" + totalWage);
        console.log("Hours worked:" + totalHours);
        console.log("Days passed: " + (day - 1));
        console.log("Days worked Full Time: " + fullTimeCounter);
        console.log("Days worked Part Time: " + partTimeCounter);
        console.log("Days absent: " + absentCounter);
    };
    EmployeeWage.prototype.monthlyPayBreakdown = function () {
        var totalWage = 0;
        var totalHours = 0;
        var todayHours = 0;
        var fullTimeCounter = 0;
        var partTimeCounter = 0;
        var absentCounter = 0;
        var wages = [];
        var workHours = [];
        for (var day = 1; day <= 20; day++) {
            if (totalHours >= 160) {
                break;
            }
            var currWorkShift = Math.floor(Math.random() * 10) % 3;
            if (day == DAYS_IN_MONTH - 1) {
                currWorkShift = this.latestAttendance;
            }
            switch (currWorkShift) {
                case 1: // Full Time
                    todayHours = FULL_TIME;
                    fullTimeCounter += 1;
                    break;
                case 0: // Part Time
                    todayHours = PART_TIME;
                    partTimeCounter += 1;
                    break;
                default: //Absent
                    todayHours = 0;
                    absentCounter += 1;
                    break;
            }
            workHours.push(todayHours);
            wages.push(todayHours * WAGE_PER_HR);
            totalHours += todayHours;
        }
        totalWage = totalHours * WAGE_PER_HR;
        console.log("----------PER DAY BREAKDOWN MONTHLY PAY----------");
        console.log("Per Day Hours worked: " + workHours.join(", "));
        console.log("Per Day Wage earned: " + wages.join(", "));
        console.log("Total Wage:" + totalWage);
        console.log("Hours worked:" + totalHours);
        console.log("Days passed: " + (day - 1));
        console.log("Days worked Full Time: " + fullTimeCounter);
        console.log("Days worked Part Time: " + partTimeCounter);
        console.log("Days absent: " + absentCounter);
        return [wages, workHours];
    };
    return EmployeeWage;
}());
var employeeOne = new EmployeeWage("John");
employeeOne.monthlyPayBreakdown();
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
