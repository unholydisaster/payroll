import Link from "next/link"
import React from "react"


const Payroll=({employees})=>{
    return(
      <>
       {employees.map(Data=> {

  const Basicpay=Data.Hoursworked*Data.Basicpay
  const Totalallowance= Data.Houseallowance + Data.Conveyanceallowance + Data.Childreneducationallowance

  const TotalReimbursement=Data.FuelReimbursements +Data.DriverReimbursements

  const Totaldeduction=Data.HealthInsurance +Data.Taxincome

  const Grosspay=Basicpay + Totalallowance + TotalReimbursement
  const Netpay=Grosspay-Totaldeduction
                 return(
                <>
                <div key={Data.Fullname}>
                <Link href={`/${Data._Fullname}`} passHref>
                <a>{Data.Fullname}</a>
                </Link>
                <h2>${Grosspay}</h2>
                <h2>${Netpay}</h2>
                </div>
                </>
                 )
              })}
        </>
    )
}
export async function getServerSideProps(){
    
    const data=await fetch(`http://localhost:3000/api/hello/`);
    const employed=await data.json()

    if(!employed){
        return {
            notFound:true
        }
    }
    return{
        props:{
            employees:employed
        }
    }
}

export default Payroll