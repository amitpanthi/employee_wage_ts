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
}

