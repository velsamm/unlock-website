import React, { type FC } from 'react'
import { Employee } from '$app/about/employee'
import { employeesList } from '$app/about/employeesList';

export const Employees: FC = () => {

  return (
    <article className='flex flex-col gap-20'>
      {employeesList.map((employee, index) => (
        <Employee key={`${employee.name}-${index}`} {...employee} />
      ))}
    </article>
  )
}